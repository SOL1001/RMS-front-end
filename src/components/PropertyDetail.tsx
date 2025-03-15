import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Footer from "../components/Footer";
import MapComponent from "../components/MapComponent"; // Import the MapComponent

// Define the Property type directly in the component
interface PostDetail {
  id: string;
  desc: string;
  utilities: string;
  pet: string;
  income: string;
  size: number;
  school: number;
  bus: number;
  restaurant: number;
  postId: string;
}

interface User {
  username: string;
  avatar: string | null;
}

interface Property {
  id: string;
  title: string;
  price: number;
  images: string[];
  address: string;
  city: string;
  bedroom: number;
  bathroom: number;
  latitude: string;
  longitude: string;
  type: "rent" | "buy";
  property: string;
  available: boolean;
  createdAt: string;
  userId: string;
  postDetail: PostDetail;
  user: User;
  isSaved: boolean;
}

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>(); // Get the property ID from the URL
  const [property, setProperty] = useState<Property | null>(null);
  const [loader, setLoader] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  ); // State for full-screen image index

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await axios.get<Property>(
          `http://localhost:8800/api/posts/${id}`
        );
        setProperty(response.data);
        setLoader(false);
      } catch (error) {
        console.error("Error fetching property details:", error);
        setLoader(false);
      }
    };

    fetchProperty();
  }, [id]);

  // Open image in full screen
  const openFullScreen = (index: number) => {
    setSelectedImageIndex(index);
  };

  // Close full-screen image
  const closeFullScreen = () => {
    setSelectedImageIndex(null);
  };

  // Navigate to the next image
  const nextImage = () => {
    if (selectedImageIndex !== null && property) {
      setSelectedImageIndex((prevIndex) =>
        prevIndex === property.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  // Navigate to the previous image
  const prevImage = () => {
    if (selectedImageIndex !== null && property) {
      setSelectedImageIndex((prevIndex) =>
        prevIndex === 0 ? property.images.length - 1 : prevIndex - 1
      );
    }
  };

  if (loader) {
    return <div>Loading...</div>;
  }

  if (!property) {
    return <div>Property not found.</div>;
  }

  return (
    <div className="dark:bg-[#1E1E1E] min-h-screen dark:text-white p-4">
      <div className="max-w-7xl mx-auto">
        {/* Property Title */}
        <h1 className="text-3xl font-bold mb-4">{property.title}</h1>

        {/* Property Images */}
        <div className="grid grid-cols-1 gap-4">
          {/* Large Image */}
          <div className="w-full h-96 overflow-hidden rounded-lg">
            <img
              src={property.images[0]}
              alt="Main Property Image"
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => openFullScreen(0)}
            />
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {property.images.slice(1).map((image, index) => (
              <div
                key={index}
                className="w-full h-24 overflow-hidden rounded-lg cursor-pointer"
                onClick={() => openFullScreen(index + 1)}
              >
                <img
                  src={image}
                  alt={`Property Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Property Details Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Price */}
          <div className="flex items-center space-x-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="1" x2="12" y2="23"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
            <div>
              <p className="text-gray-600 dark:text-gray-400">Price</p>
              <p className="font-bold">${property.price}</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <div>
              <p className="text-gray-600 dark:text-gray-400">Location</p>
              <p className="font-bold">
                {property.city}, {property.address}
              </p>
            </div>
          </div>

          {/* Bedrooms */}
          <div className="flex items-center space-x-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
            <div>
              <p className="text-gray-600 dark:text-gray-400">Bedrooms</p>
              <p className="font-bold">{property.bedroom}</p>
            </div>
          </div>

          {/* Bathrooms */}
          <div className="flex items-center space-x-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"></path>
              <path d="M4 10v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
              <path d="M10 6h4"></path>
              <path d="M12 4v4"></path>
            </svg>
            <div>
              <p className="text-gray-600 dark:text-gray-400">Bathrooms</p>
              <p className="font-bold">{property.bathroom}</p>
            </div>
          </div>

          {/* Type */}
          <div className="flex items-center space-x-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="3" x2="9" y2="21"></line>
            </svg>
            <div>
              <p className="text-gray-600 dark:text-gray-400">Type</p>
              <p className="font-bold">
                {property.type === "rent" ? "For Rent" : "For Sale"}
              </p>
            </div>
          </div>

          {/* Availability */}
          <div className="flex items-center space-x-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 6v6l4 2"></path>
            </svg>
            <div>
              <p className="text-gray-600 dark:text-gray-400">Availability</p>
              <p className="font-bold">
                {property.available ? "Available" : "Not Available"}
              </p>
            </div>
          </div>

          {/* Utilities */}
          <div className="flex items-center space-x-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <div>
              <p className="text-gray-600 dark:text-gray-400">Utilities</p>
              <p className="font-bold">{property.postDetail.utilities}</p>
            </div>
          </div>

          {/* Pet Policy */}
          <div className="flex items-center space-x-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <div>
              <p className="text-gray-600 dark:text-gray-400">Pet Policy</p>
              <p className="font-bold">{property.postDetail.pet}</p>
            </div>
          </div>

          {/* Income Requirement */}
          <div className="flex items-center space-x-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="1" x2="12" y2="23"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
            <div>
              <p className="text-gray-600 dark:text-gray-400">
                Income Requirement
              </p>
              <p className="font-bold">${property.postDetail.income}</p>
            </div>
          </div>

          {/* Size */}
          <div className="flex items-center space-x-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="3" x2="9" y2="21"></line>
              <line x1="3" y1="9" x2="21" y2="9"></line>
            </svg>
            <div>
              <p className="text-gray-600 dark:text-gray-400">Size</p>
              <p className="font-bold">{property.postDetail.size} sq. ft.</p>
            </div>
          </div>

          {/* School Distance */}
          <div className="flex items-center space-x-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 19l5-5m0 0l5-5m-5 5v10m0-10H1m18 0h3m-3 0l-5 5m5-5v10m0-10l-5 5"></path>
            </svg>
            <div>
              <p className="text-gray-600 dark:text-gray-400">
                School Distance
              </p>
              <p className="font-bold">{property.postDetail.school} meters</p>
            </div>
          </div>

          {/* Bus Stop Distance */}
          <div className="flex items-center space-x-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 6v6m0 0v6m0-6h8m-8 0H4m16 0h-4m4 0V6m0 6v6"></path>
            </svg>
            <div>
              <p className="text-gray-600 dark:text-gray-400">
                Bus Stop Distance
              </p>
              <p className="font-bold">{property.postDetail.bus} meters</p>
            </div>
          </div>

          {/* Restaurant Distance */}
          <div className="flex items-center space-x-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
              <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
              <line x1="6" y1="1" x2="6" y2="4"></line>
              <line x1="10" y1="1" x2="10" y2="4"></line>
              <line x1="14" y1="1" x2="14" y2="4"></line>
            </svg>
            <div>
              <p className="text-gray-600 dark:text-gray-400">
                Restaurant Distance
              </p>
              <p className="font-bold">
                {property.postDetail.restaurant} meters
              </p>
            </div>
          </div>
        </div>

        {/* Post Details */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Details</h2>
          <div
            className="text-gray-700 dark:text-gray-300"
            dangerouslySetInnerHTML={{ __html: property.postDetail.desc }}
          />
        </div>

        {/* User Details */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Posted By</h2>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
              {property.user.avatar ? (
                <img
                  src={property.user.avatar}
                  alt={property.user.username}
                  className="w-full h-full rounded-full"
                />
              ) : (
                <span className="text-lg font-bold">
                  {property.user.username.charAt(0).toUpperCase()}
                </span>
              )}
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-bold">Username:</span>{" "}
              {property.user.username}
            </p>
          </div>
        </div>

        {/* Map Integration */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Location</h2>
          <div className="w-full h-96 rounded-lg overflow-hidden">
            <MapComponent
              properties={[
                {
                  latitude: parseFloat(property.latitude),
                  longitude: parseFloat(property.longitude),
                  title: property.title,
                  price: property.price,
                  city: property.city,
                  address: property.address,
                },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Full-Screen Image Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          {/* Close Button */}
          <button
            onClick={closeFullScreen}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <X size={32} />
          </button>

          {/* Image */}
          <img
            src={property.images[selectedImageIndex]}
            alt="Full Screen Property Image"
            className="max-w-full max-h-full"
          />

          {/* Navigation Buttons */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default PropertyDetail;
