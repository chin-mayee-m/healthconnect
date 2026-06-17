import { useState } from "react";

function App() {

  const [symptoms, setSymptoms] = useState("");
  const [summary, setSummary] = useState("");
  const [message, setMessage] = useState("");
  const [showBloodForm, setShowBloodForm] = useState(false);
  const [bloodMessage, setBloodMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {

    let text = symptoms.toLowerCase();

let priority = "Low";

// Medium priority symptoms
if (
  text.includes("fever") ||
  text.includes("headache") ||
  text.includes("stomach") ||
  text.includes("pain") ||
  text.includes("vomiting") ||
  text.includes("cough")
) {
  priority = "Medium";
}

// High priority symptoms
if (
  text.includes("chest pain") ||
  text.includes("breathing") ||
  text.includes("heart attack") ||
  text.includes("unconscious") ||
  text.includes("bleeding")
) {
  priority = "High";
}

// Duration check
if (
  text.includes("3 days") ||
  text.includes("2 days") ||
  text.includes("1 day") 
) {
  if (priority === "Low") {
    priority = "Medium";
  }
}

// Severe + long duration
if (
  text.includes("4 days") ||
  text.includes("5 days") ||
  text.includes("6 days") ||
  text.includes("7 days") ||
  text.includes("week") ||
  text.includes("1 week")
) {
  priority = "High";
}

let suggestion = "";

if (priority === "Low") {
  suggestion = "Please consult a doctor if symptoms persist.";
}

if (priority === "Medium") {
  suggestion = "Please consult a doctor if symptoms persist.";
}

if (priority === "High") {
  suggestion = "Seek immediate medical attention.";
}
   setSummary(
`Summary: Patient reports ${symptoms}

Priority: ${priority}

Suggestion: ${suggestion}`
);

    setMessage(
      "✅ Request submitted successfully. Our healthcare volunteers will contact you shortly."
    );
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-[500px]">

        <h1 className="text-4xl font-bold text-center text-blue-700">
          HealthConnect
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Patient Support Form
        </p>

        <div className="mt-6 space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="number"
            placeholder="Age"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            placeholder="Describe your symptoms"
            className="w-full border p-3 rounded-lg"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          ></textarea>

          <select className="w-full border p-3 rounded-lg">
            <option>Medical Help</option>
            <option>Blood Donation</option>
            <option>Medicine Support</option>
          </select>

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
          >
             Submit
          </button>

          {summary && (
            <div className="bg-blue-100 p-4 rounded-lg mt-4">
              <h2 className="text-xl font-bold text-blue-700">
                AI Summary
              </h2>

              <p className="whitespace-pre-line mt-2">
                {summary}
              </p>
            </div>
          )}
          {
  message && (
    <div className="bg-green-100 text-green-700 p-4 rounded-lg mt-4">
      {message}
    </div>
  )
}
<div className="mt-8">
  <h2 className="text-2xl font-bold text-blue-700 mb-4">
    FAQ Chatbot
  </h2>

  <div className="space-y-3">

    <div className="bg-gray-100 p-3 rounded-lg">
  <b>Emergency Number?</b>
  <p>Dial 108 immediately.</p>
</div>

<div className="bg-gray-100 p-3 rounded-lg">
  <b>Want to donate Blood?</b>
  <p>Click below to request blood donation support.</p>

  <button
    onClick={() => setShowBloodForm(true)}
    className="mt-3 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
  >
    Apply for Blood Donation
  </button>
</div>

{showBloodForm && (
  <div className="bg-red-50 p-5 rounded-lg mt-6">
    <h2 className="text-xl font-bold text-red-600 mb-4">
      Blood Donation Request
    </h2>

    <div className="space-y-3">
      <input
        type="text"
        placeholder="Full Name"
        className="w-full border p-3 rounded-lg"
      />

      <input
        type="text"
        placeholder="Blood Group"
        className="w-full border p-3 rounded-lg"
      />

      <input
        type="text"
        placeholder="City"
        className="w-full border p-3 rounded-lg"
      />

      <input
        type="text"
        placeholder="Phone Number"
        className="w-full border p-3 rounded-lg"
      />

      <button
        onClick={() =>
          setBloodMessage(
            "✅ Blood donation request submitted successfully."
          )
        }
        className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
      >
        Submit Request
      </button>

      {bloodMessage && (
        <div className="bg-green-100 text-green-700 p-3 rounded-lg">
          {bloodMessage}
        </div>
      )}
    </div>
  </div>
)}

<div className="bg-gray-100 p-3 rounded-lg">
  <b>Working Hours?</b>
  <p>9 AM - 6 PM</p>
</div>

  </div>
</div>
        </div>

      </div>
    </div>
  );
}

export default App;