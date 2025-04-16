import { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Articles = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    content: "",
    thumbnail: null,
    postedBy: "",
  });

  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "thumbnail") {
      setForm({ ...form, thumbnail: e.target.files[0] });
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

    const storage = getStorage();
    const thumbnailRef = ref(
      storage,
      `thumbnails/${Date.now()}-${form.thumbnail.name}`
    );
    await uploadBytes(thumbnailRef, form.thumbnail);
    const imageUrl = await getDownloadURL(thumbnailRef);

    await addDoc(collection(db, "articles"), {
      title: form.title,
      description: form.description,
      content: form.content,
      thumbnailUrl: imageUrl,
      postedBy: form.postedBy || "Admin",
      datePosted: Timestamp.now(),
    });

    setForm({
      title: "",
      description: "",
      content: "",
      thumbnail: null,
      postedBy: "",
    });
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
            name="thumbnail"
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="w-full text-gray-700 border border-gray-300 p-2 rounded-md bg-white file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
          />
          <p className="text-sm text-gray-500 mt-1">
            Accepted formats: JPG, PNG. Max size ~5MB
          </p>
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
          className={`w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-md transition hover:bg-blue-700 focus:outline-none ${
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
