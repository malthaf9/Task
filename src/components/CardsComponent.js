import React from 'react';

const MacOSLoginCard = () => {
  return (
    <div className="w-[20rem] h-[30rem] flex flex-col items-center justify-center p-4 bg-gray-300 border-black rounded-lg shadow-lg relative transition-transform duration-500 ease-in-out transform hover:scale-105">
      <div className="absolute top-2 w-full px-4">
        <input
          type="text"
          placeholder="login.store.com"
          className="w-full px-4 py-2 rounded-full text-center text-black border border-box shadow-lg bg-white"
        />
      </div>
      <div className="flex flex-col items-center mt-16">
        <h1 className='text-5xl'>Sign In</h1>
        <div className="w-full mt-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 mt-1 rounded bg-gray-700 text-white focus:outline-none"
          />
        </div>
        <button className="mt-4 px-20 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition">
          Sign In
        </button>
      </div>
    </div>
  );
};

const GoogleCard = () => {
  return (
    <div className="w-[20rem] h-[30rem] bg-white flex flex-col items-center p-4 rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105">
      <img
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        alt="Google Logo"
        className="w-36 mb-4"
      />
      <div className="w-full flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search Google"
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="w-full flex justify-around mt-6">
        <div className="flex flex-col items-center text-gray-700 hover:text-gray-900">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
            alt="Gmail"
            className="w-10 h-10 mb-1"
          />
          <span className="text-sm">Gmail</span>
        </div>
        <div className="flex flex-col items-center text-gray-700 hover:text-gray-900">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png"
            alt="Google Drive"
            className="w-10 h-10 mb-1"
          />
          <span className="text-sm">Drive</span>
        </div>
        <div className="flex flex-col items-center text-gray-700 hover:text-gray-900">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/1024px-Google_Calendar_icon_%282020%29.svg.png"
            alt="Google Calendar"
            className="w-10 h-10 mb-1"
          />
          <span className="text-sm">Calendar</span>
        </div>
        <div className="flex flex-col items-center text-gray-700 hover:text-gray-900">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Google_Contacts_icon_%282022%29.svg"
            alt="Google Contacts"
            className="w-10 h-10 mb-1"
          />
          <span className="text-sm">Contacts</span>
        </div>
      </div>
      <div className="w-full flex justify-around mt-6">
        <div className="flex flex-col items-center text-gray-700 hover:text-gray-900">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
            alt="YouTube"
            className="w-10 h-10 mb-1"
          />
          <span className="text-sm">YouTube</span>
        </div>
        {/* Add more icons here */}
      </div>
    </div>
  );
};

const WideCard = () => {
  return (
    <div className="w-[30rem] h-[30rem] flex flex-col items-center justify-center p-4 bg-cover bg-center border-black rounded-lg shadow-lg relative transition-transform duration-500 ease-in-out transform hover:scale-105" style={{ backgroundImage: 'url(https://www.example.com/your-background-image.jpg)' }}>
      <div className="absolute top-2 w-full flex justify-between items-center px-4 z-10">
        <div className="flex items-center gap-2">
          <button className="w-3 h-3 bg-red-500 rounded-full"></button>
          <button className="w-3 h-3 bg-yellow-500 rounded-full"></button>
          <button className="w-3 h-3 bg-green-500 rounded-full"></button>
        </div>
        <div className="flex gap-0">
          <span className="text-black bg-gray-200 p-2 rounded">New Tab</span>
        </div>
      </div>
      <div className="flex flex-col items-center mt-16 z-0">
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="Google Logo"
          className="w-36 mb-4"
        />
        <div className="w-full flex justify-center mb-4">
          <input
            type="text"
            placeholder="Search Google"
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

const CardsComponent = ({ isScrolled }) => {
  return (
    <div className={`relative z-0`}>
      <div className="flex justify-between items-center h-screen p-4 rounded-lg">
        <div className={`relative transition-transform duration-500 ${isScrolled ? 'translate-y-0' : '-translate-y-20'}`}>
          <MacOSLoginCard />
        </div>
        <div className="flex-grow mx-4 h-[30rem] bg-green-500 flex items-center justify-center rounded-lg">
          <WideCard />
        </div>
        <div className={`relative transition-transform duration-500 ${isScrolled ? 'translate-y-0' : '-translate-y-20'}`}>
          <GoogleCard />
        </div>
      </div>
    </div>
  );
};

export default CardsComponent;







