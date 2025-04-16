import { useState } from "react";

const Admissions = () => {
  const [formData, setFormData] = useState({
    formDate: "",
    surname: "",
    otherNames: "",
    dob: "",
    gender: "",
    formerSchool: "",
    classPlacement: "",
    fatherName: "",
    motherName: "",
    guardianName: "",
    postalAddress: "",
    postalCode: "",
    town: "",
    mobile: "",
    altMobile: "",
    email: "",
    interviewFeePaid: "",
    interviewDate: "",
    registeredBy: "",
    signature: "",
    officialDate: "",
  });

  const [formType, setFormType] = useState("online");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormTypeChange = (e) => {
    setFormType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate JSON from form data and send it to the school HR or API
    console.log("Submitted Data:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="pt-20 my-4 px-4 max-w-5xl mx-auto mb-10">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Admissions</h1>
        <p className="text-lg font-medium text-gray-700 mb-4">
          Are you ready to take the next step in your education? We invite you
          to apply and join our vibrant community of learners. Become part of a
          place where your future is our priority!
        </p>
        <p className="text-sm text-gray-500">
          Fill out the application form below or download it and submit your
          details. We can’t wait to welcome you to our institution!
        </p>
      </div>

      {/* Form Type Selection */}
      <div className="mb-6">
        <p className="mb-3">Choose how you would like to apply:</p>
        <label className="inline-flex items-center mr-6">
          <input
            type="radio"
            name="formType"
            value="download"
            checked={formType === "download"}
            onChange={handleFormTypeChange}
            className="mr-2"
          />
          Download and fill manually
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="formType"
            value="online"
            checked={formType === "online"}
            onChange={handleFormTypeChange}
            className="mr-2"
          />
          Fill the form online
        </label>
      </div>

      {/* If the user opts for download */}
      {formType === "download" ? (
        <div className="text-center mb-6">
          <p>Please download the application form and fill it out manually.</p>
          <a
            href="../assets/pupil.pdf"
            download
            className="text-blue-600 underline"
          >
            Download Application Form
          </a>
        </div>
      ) : (
        // Form for filling out online
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* SECTION A – Pupil’s Details */}
          <fieldset className="border p-6 rounded">
            <legend className="text-xl font-bold mb-2">
              Section A – Pupil’s Details
            </legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Surname & Other Names */}
              <div>
                <label className="block text-sm font-bold mb-1">Surname:</label>
                <input
                  type="text"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  placeholder="Enter surname"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">
                  Other Names:
                </label>
                <input
                  type="text"
                  name="otherNames"
                  value={formData.otherNames}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  placeholder="Enter other names"
                  required
                />
              </div>
              {/* Date of Birth */}
              <div>
                <label className="block text-sm font-bold mb-1">
                  Date of Birth:
                </label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  required
                />
              </div>
              {/* Gender */}
              <div>
                <label className="block text-sm font-bold mb-1">Gender:</label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={formData.gender === "Male"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Male
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={formData.gender === "Female"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Female
                  </label>
                </div>
              </div>
              {/* Former School */}
              <div>
                <label className="block text-sm font-bold mb-1">
                  Former School:
                </label>
                <input
                  type="text"
                  name="formerSchool"
                  value={formData.formerSchool}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  placeholder="Enter former school name"
                />
              </div>
              {/* Class of Placement */}
              <div>
                <label className="block text-sm font-bold mb-1">
                  Class of Placement:
                </label>
                <input
                  type="text"
                  name="classPlacement"
                  value={formData.classPlacement}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  placeholder="Enter class for placement"
                />
              </div>
            </div>
          </fieldset>

          {/* SECTION B – Parent’s/Guardian’s Details */}
          <fieldset className="border p-6 rounded">
            <legend className="text-xl font-bold mb-2">
              Section B – Parent’s/Guardian’s Details
            </legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Father, Mother, Guardian */}
              <div>
                <label className="block text-sm font-bold mb-1">Father:</label>
                <input
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  placeholder="Father's name"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">Mother:</label>
                <input
                  type="text"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  placeholder="Mother's name"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold mb-1">
                  Guardian:
                </label>
                <input
                  type="text"
                  name="guardianName"
                  value={formData.guardianName}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  placeholder="Guardian's name (if applicable)"
                />
              </div>
              {/* Postal Address */}
              <div className="md:col-span-2">
                <label className="block text-sm font-bold mb-1">
                  Postal Address:
                </label>
                <input
                  type="text"
                  name="postalAddress"
                  value={formData.postalAddress}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  placeholder="Enter postal address"
                />
              </div>
              {/* Postal Code */}
              <div>
                <label className="block text-sm font-bold mb-1">
                  Postal Code:
                </label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  placeholder="Postal code"
                />
              </div>
              {/* Town */}
              <div>
                <label className="block text-sm font-bold mb-1">Town:</label>
                <input
                  type="text"
                  name="town"
                  value={formData.town}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  placeholder="Town"
                />
              </div>
              {/* Mobile & Alt Mobile */}
              <div>
                <label className="block text-sm font-bold mb-1">
                  Mobile No.:
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  placeholder="Enter mobile number"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">
                  Alternative Mobile No.:
                </label>
                <input
                  type="tel"
                  name="altMobile"
                  value={formData.altMobile}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  placeholder="Alternative mobile number"
                />
              </div>
              {/* Email Address */}
              <div className="md:col-span-2">
                <label className="block text-sm font-bold mb-1">
                  Email Address:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  placeholder="Enter email address"
                />
              </div>
            </div>
          </fieldset>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded cursor-pointer hover:bg-blue-800"
            >
              Submit Application
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Admissions;
