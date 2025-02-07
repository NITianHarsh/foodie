import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

const images = [
  "../images/pizza1.jpg",
  "../images/sandwitch1.jpg",
  "../images/sushi1.jpg",
  "../images/burger1.jpg",
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [itemSearch, setItemSearch] = useState("");

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setItemSearch("");
    console.log("Search Done", itemSearch);
  };

  return (
    <div className="relative w-full h-[600px] pt-20 z-30 overflow-hidden">
      {/* Search Bar */}
      <form
        className="absolute top-[80%] left-1/2 transform -translate-x-1/2 z-10 w-full md:max-w-md flex items-center gap-3"
        onSubmit={handleSearch}
      >
        <div className="relative w-full">
          <Search className="text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search..."
            value={itemSearch}
            onChange={(e) => setItemSearch(e.target.value)}
            className="w-full p-2 pl-10 bg-white text-black rounded-lg border border-gray-300 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 flex gap-2 text-teal-800 rounded-md font-medium bg-white active:scale-95"
        >
          <Search />
          Search
        </button>
      </form>

      {/* Dark Overlay and Carousel */}
      <div className="relative w-full h-full">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Image */}
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full md:p-3"
        >
          <ChevronLeft size={30} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full md:p-3"
        >
          <ChevronRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
