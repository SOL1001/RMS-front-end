import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { useState } from "react";

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

interface PropertyCardProps {
  item: Property;
}

const PropertyCard = ({ item }: PropertyCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const totalImages = item.images.length;
  const navigate = useNavigate(); // Hook for navigation

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + totalImages) % totalImages
    );
  };

  // Navigate to the detail page when the card is clicked
  const handleCardClick = () => {
    navigate(`/property/${item.id}`);
  };

  return (
    <div
      className="max-w-sm rounded-lg overflow-hidden shadow-lg m-2 bg-white dark:bg-gray-900 relative transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
      onClick={handleCardClick} // Add click handler
    >
      {/* Favorite Icon */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent card click when clicking the favorite icon
          toggleFavorite();
        }}
        className="absolute top-3 right-3 z-10 text-gray-600 dark:text-gray-300 hover:text-red-500 transition-colors duration-300"
      >
        <Heart
          size={28}
          className={isFavorite ? "fill-red-500 stroke-none" : "stroke-red-500"}
        />
      </button>

      {/* Property Image Container */}
      <div className="relative w-full h-64 overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          src={item.images[currentImageIndex]}
          alt={item.title}
        />
        {totalImages > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent card click when clicking the navigation buttons
                prevImage();
              }}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800 transition-colors duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent card click when clicking the navigation buttons
                nextImage();
              }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800 transition-colors duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {/* Property Details */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{item.title}</div>

        {/* Price with SVG Icon */}
        <div className="flex items-center mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-gray-700 text-base dark:text-gray-300">
            ${item.price}
          </p>
        </div>

        {/* Location with SVG Icon */}
        <div className="flex items-center mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p className="text-gray-700 text-base dark:text-gray-300">
            {item.city}, {item.address}
          </p>
        </div>

        {/* Bedrooms with SVG Icon */}
        <div className="flex items-center mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <p className="text-gray-700 text-base dark:text-gray-300">
            {item.bedroom} Bedrooms
          </p>
        </div>

        {/* Bathrooms with SVG Icon */}
        <div className="flex items-center mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
          <p className="text-gray-700 text-base dark:text-gray-300">
            {item.bathroom} Bathrooms
          </p>
        </div>
      </div>

      {/* Availability Badge */}
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:bg-gray-700 dark:text-gray-300">
          {item.type === "rent" ? "For Rent" : "For Sale"}
        </span>
      </div>
    </div>
  );
};

export default PropertyCard;
