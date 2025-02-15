import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ orderPopup, setOrderPopup }) => {
  if (!orderPopup) return null; // Prevents unnecessary rendering

  return (
    <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm flex items-center justify-center">
      <div className="p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-lg font-semibold dark:text-white">Order Now</h1>
          <button
            onClick={() => setOrderPopup(false)}
            aria-label="Close Popup"
            className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            <IoCloseOutline className="text-2xl" />
          </button>
        </div>

        {/* Form Section */}
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Name"
            autoFocus
            className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-2"
          />
          <input
            type="text"
            placeholder="Address"
            className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-2"
          />
          <div className="flex justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 duration-200 text-white py-2 px-6 rounded-full">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
