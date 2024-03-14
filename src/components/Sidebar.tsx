import React from 'react';
import { AiOutlineHome, AiOutlineShoppingCart, AiOutlineCalendar, AiOutlineCar, AiOutlineExclamationCircle, AiOutlineFileText } from 'react-icons/ai';
import { FaHeadphones, FaPlane } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="bg-white w-16 flex flex-col items-center py-4">
      <div className="bg-blue-500 p-2 rounded-full mb-4">
        <FaPlane className="text-white" />
      </div>
      <AiOutlineHome className="text-gray-600 mb-4" />
      <FaHeadphones className="text-gray-600 mb-4" />
      <AiOutlineShoppingCart className="text-gray-600 mb-4" />
      <AiOutlineCalendar className="text-gray-600 mb-4" />
      <AiOutlineCar className="text-gray-600 mb-4" />
      <AiOutlineCar className="text-gray-600 mb-4" />
      <AiOutlineExclamationCircle className="text-gray-600 mb-4" />
      <AiOutlineFileText className="text-gray-600 mb-4" />
    </div>
  );
};

export default Sidebar;
