import { useEffect, useState } from "react";
import axios from "axios";
import HomeSkel from "../components/HomeSkel";
import PropertyCard from "../components/PropertyCard"; // Import the PropertyCard
import MapComponent from "../components/MapComponent"; // Import the MapComponent
import Footer from "../components/Footer";

const Home = () => {
  const [data, setData] = useState<any[]>([]);
  const [loader, setLoader] = useState(true);
  const [city, setCity] = useState("");
  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    bathrooms: "",
  });
  const [activeTypeTab, setActiveTypeTab] = useState<"rent" | "buy">("rent");

  // Extract unique values for filters
  const uniquePrices = [...new Set(data.map((item) => item.price))].sort(
    (a, b) => a - b
  );
  const uniqueBedrooms = [...new Set(data.map((item) => item.bedroom))].sort(
    (a, b) => a - b
  );
  const uniqueBathrooms = [...new Set(data.map((item) => item.bathroom))].sort(
    (a, b) => a - b
  );

  useEffect(() => {
    setLoader(true);
    const fetchData = async () => {
      try {
        const response = await axios.get<any[]>(
          `http://localhost:8800/api/posts?type=${activeTypeTab}&city=${city}&minPrice=${filters.minPrice}&maxPrice=${filters.maxPrice}&bedrooms=${filters.bedrooms}&bathrooms=${filters.bathrooms}`
        );
        setData(response.data);
        console.log("Fetched data:", response.data);
        setLoader(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [city, filters, activeTypeTab]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="dark:bg-[#1E1E1E] dark:text-white w-full overflow-x-hidden">
      <div className="dark:bg-[#1E1E1E] min-h-screen p-4 md:p-8 w-full overflow-x-hidden">
        <div className="w-full max-w-[100vw] mx-auto">
          {/* Tabs for Rent and Buy */}
          <div className="flex justify-center gap-4 md:justify-start mt-8 md:mt-12">
            <button
              onClick={() => setActiveTypeTab("rent")}
              className={`px-6 py-2 rounded-t-lg ${
                activeTypeTab === "rent"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              Rent
            </button>
            <button
              onClick={() => setActiveTypeTab("buy")}
              className={`px-6 py-2 rounded-t-lg ${
                activeTypeTab === "buy"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              Buy
            </button>
          </div>

          {/* Search Bar */}
          <div className="flex  mt-4 md:mt-8 relative">
            {/* Search Icon SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300 z-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>

            {/* Search Input */}
            <input
              type="text"
              className="rounded-lg h-12 w-full md:w-[400px] pl-10 pr-4 border border-[#646cffaa] dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:shadow-lg focus:shadow-indigo-500/50 transition-shadow duration-300 relative z-0"
              placeholder="Search by country..."
              onChange={(event) => setCity(event.target.value)}
            />
          </div>

          {/* Filter Dropdowns */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
            {/* Min Price Dropdown */}
            <div className="w-full md:w-auto">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Min Price
              </label>
              <select
                name="minPrice"
                value={filters.minPrice}
                onChange={handleFilterChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="">Select Min Price</option>
                {uniquePrices.map((price) => (
                  <option key={price} value={price}>
                    ${price}
                  </option>
                ))}
              </select>
            </div>

            {/* Max Price Dropdown */}
            <div className="w-full md:w-auto">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Max Price
              </label>
              <select
                name="maxPrice"
                value={filters.maxPrice}
                onChange={handleFilterChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="">Select Max Price</option>
                {uniquePrices.map((price) => (
                  <option key={price} value={price}>
                    ${price}
                  </option>
                ))}
              </select>
            </div>

            {/* Bedrooms Dropdown */}
            <div className="w-full md:w-auto">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Bedrooms
              </label>
              <select
                name="bedrooms"
                value={filters.bedrooms}
                onChange={handleFilterChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="">Select Bedrooms</option>
                {uniqueBedrooms.map((bedroom) => (
                  <option key={bedroom} value={bedroom}>
                    {bedroom} Bedroom(s)
                  </option>
                ))}
              </select>
            </div>

            {/* Bathrooms Dropdown */}
            <div className="w-full md:w-auto">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Bathrooms
              </label>
              <select
                name="bathrooms"
                value={filters.bathrooms}
                onChange={handleFilterChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="">Select Bathrooms</option>
                {uniqueBathrooms.map((bathroom) => (
                  <option key={bathroom} value={bathroom}>
                    {bathroom} Bathroom(s)
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Property List */}
          {loader ? (
            <HomeSkel />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 w-full">
              {data.map((item) => (
                <PropertyCard key={item.id} item={item} />
              ))}
            </div>
          )}

          {/* Map Component at the Bottom */}
          <div className="mt-8 mb-8 w-full">
            <MapComponent properties={data} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
