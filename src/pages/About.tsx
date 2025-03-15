import Footer from "../components/Footer";
const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#1E1E1E] dark:text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <p className="text-lg text-center mb-8">
          We are a team of passionate individuals dedicated to providing the
          best solutions for our customers.
        </p>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Our mission is to make life easier for everyone by offering
            innovative and reliable services. We strive to create a seamless
            experience for our users, ensuring their satisfaction and trust.
          </p>

          <h2 className="text-2xl font-bold mb-4">Our Team</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Our team consists of experienced professionals who are experts in
            their respective fields. We work together to deliver high-quality
            solutions tailored to your needs.
          </p>

          <h2 className="text-2xl font-bold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>Customer First</li>
            <li>Innovation</li>
            <li>Integrity</li>
            <li>Collaboration</li>
          </ul>
        </div>

        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-gray-600 dark:text-gray-400">
            We are committed to excellence and continuously strive to improve
            our services. Our focus is on delivering value and building
            long-term relationships with our customers.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
