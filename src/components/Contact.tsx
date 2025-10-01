"use client";
import { useState, useEffect } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();

    if (data.success) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }

    setLoading(false);
  };

  // Auto-hide notification after 4 seconds
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Get in <span className="text-blue-600">Touch</span>
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Have a project in mind or just want to say hi? Fill out the form below.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto space-y-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg transition-transform hover:shadow-xl"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Name
          </label>
          <input
            name="name"
            required
            className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Message
          </label>
          <textarea
            name="message"
            rows={5}
            required
            className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Write your message..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-[1.02] disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* Floating Notification */}
      {status && (
        <div className="fixed bottom-6 right-6">
          <div
            className={`px-4 py-3 rounded-lg shadow-lg text-white text-sm font-medium transition-transform ${
              status === "success"
                ? "bg-green-600"
                : "bg-red-600"
            }`}
          >
            {status === "success"
              ? "✅ Message sent successfully!"
              : "❌ Something went wrong. Please try again."}
          </div>
        </div>
      )}
    </section>
  );
}
