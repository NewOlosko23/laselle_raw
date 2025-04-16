import { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const Articles = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    content: "",
    thumbnail: null,
    postedBy: "",
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "thumbnail") {
      const file = e.target.files[0];
      setForm({ ...form, thumbnail: file });

      // Generate preview URL
      if (file) {
        const previewURL = URL.createObjectURL(file);
        setImagePreview(previewURL);

        // Resize image before converting to base64
        const reader = new FileReader();
        reader.onloadend = () => {
          const img = new Image();
          img.src = reader.result;

          img.onload = () => {
            const canvas = document.createElement("canvas");
            const maxWidth = 500; // Resize width
            const maxHeight = 500; // Resize height
            let width = img.width;
            let height = img.height;

            // Calculate new dimensions
            if (width > height) {
              if (width > maxWidth) {
                height = (height * maxWidth) / width;
                width = maxWidth;
              }
            } else {
              if (height > maxHeight) {
                width = (width * maxHeight) / height;
                height = maxHeight;
              }
            }

            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, width, height);

            // Convert to base64 and store
            const resizedBase64 = canvas.toDataURL(file.type);
            setImageUrl(resizedBase64); // Store resized base64 string
          };
        };
        reader.readAsDataURL(file);
      } else {
        setImagePreview(null);
        setImageUrl(""); // Clear the base64 image
      }
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.description || !form.content || !form.thumbnail) {
      alert("Please fill in all required fields");
      return;
    }

    setUploading(true);

    // Check if the base64 image URL has been set
    if (!imageUrl) {
      alert("Image upload failed. Please try again.");
      setUploading(false);
      return;
    }

    // Upload data to Firebase Firestore
    await addDoc(collection(db, "articles"), {
      title: form.title,
      description: form.description,
      content: form.content,
      thumbnailUrl: imageUrl, // Store the base64 image here
      postedBy: form.postedBy || "Admin",
      datePosted: Timestamp.now(),
    });

    // Reset form and state
    setForm({
      title: "",
      description: "",
      content: "",
      thumbnail: null,
      postedBy: "",
    });
    setImagePreview(null);
    setUploading(false);
    alert("Article posted!");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">
        📝 Post a New Article
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            name="title"
            type="text"
            placeholder="Enter article title"
            value={form.title}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Short Description */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Short Description <span className="text-red-500">*</span>
          </label>
          <textarea
            name="description"
            placeholder="Briefly describe the article"
            value={form.description}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
          />
        </div>

        {/* Full Content */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Full Content <span className="text-red-500">*</span>
          </label>
          <textarea
            name="content"
            placeholder="Write the full article here"
            value={form.content}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={6}
          />
        </div>

        {/* Thumbnail Upload */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Thumbnail Image <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            name="thumbnail"
            onChange={handleChange}
            className="w-full text-gray-700 border border-gray-300 p-2 rounded-md bg-white"
          />
          {imagePreview && (
            <div className="mt-3">
              <p className="text-sm text-gray-600 font-medium mb-1">Preview:</p>
              <img
                src={imagePreview}
                alt="Thumbnail preview"
                className="w-48 h-32 object-cover rounded-md border"
              />
            </div>
          )}
        </div>

        {/* Posted By */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Posted By <span className="text-gray-400">(optional)</span>
          </label>
          <input
            name="postedBy"
            type="text"
            placeholder="e.g., Admin, George, Editor"
            value={form.postedBy}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={uploading}
          className={`w-full bg-blue-600 cursor-pointer text-white font-semibold py-3 px-6 rounded-md transition hover:bg-blue-700 focus:outline-none ${
            uploading ? "opacity-60 cursor-not-allowed" : ""
          }`}
        >
          {uploading ? "Posting..." : "Post Article"}
        </button>
      </form>
    </div>
  );
};

export default Articles;
