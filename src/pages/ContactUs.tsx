import Footer from "../components/Footer";
const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#1E1E1E] dark:text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <p className="text-lg text-center mb-8">
          We'd love to hear from you! Reach out to us for any questions,
          feedback, or inquiries.
        </p>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 dark:text-gray-300">
                Message
              </label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                rows="5"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Our Office</h2>
          <p className="text-gray-600 dark:text-gray-400">
            123 Main Street, City, Country
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Email: info@example.com
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Phone: +123 456 7890
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
