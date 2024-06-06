import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-2 border border-box shadow-lg relative z-50">
      <div className="flex items-center space-x-6">
        <div className="text-2xl font-bold flex flex-row">
          <img src='https://download.logo.wine/logo/Google_Chrome/Google_Chrome-Logo.wine.png' className='w-24 h-18 mx-auto' alt='logo' />
          <ul>
            <li className='py-6 text-gray-500 space-x-0'>chrome</li>
          </ul>
        </div>
        <ul className="flex space-x-2">
          <li className="flex items-center"><a href="#" className="text-gray-700 rounded-lg p-4 px-6 hover:bg-gray-100">Home</a></li>
          <li className="flex items-center"><a href="#" className="text-gray-700 rounded-lg p-4 hover:bg-gray-100">The Browser by Google</a></li>
          <li className="relative group flex items-center">
            <a href="#" className="text-gray-700 rounded-lg p-4 hover:bg-gray-100 flex items-center">
              Features
              <svg className="w-4 h-4 ml-1 fill-current text-gray-500 group-hover:text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5.5 7.5l4.5 4.5 4.5-4.5" />
              </svg>
            </a>
            <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-lg mt-2">
              <li><a href="#" className="block px-8 py-2 text-gray-700 hover:bg-gray-100">Overview</a></li>
              <li><a href="#" className="block px-8 py-2 text-gray-700 hover:bg-gray-100">Google address bar</a></li>
              <li><a href="#" className="block px-8 py-2 text-gray-700 hover:bg-gray-100">Password check</a></li>
            </ul>
          </li>
          <li className="relative group flex items-center">
            <a href="#" className="text-gray-700 rounded-lg p-4 hover:bg-gray-100 flex items-center">
              Support
              <svg className="w-4 h-4 ml-1 fill-current text-gray-500 group-hover:text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5.5 7.5l4.5 4.5 4.5-4.5" />
              </svg>
            </a>
            <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-lg mt-2">
              <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Helpful tips for chrome</a></li>
              <li><a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Support</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;






