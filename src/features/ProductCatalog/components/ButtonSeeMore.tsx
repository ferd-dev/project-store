const ButtonSeeMore = () => {
  return (
    <div className="flex flex-col items-center mt-8 mb-8">
      <div className="relative w-full max-w-max">
        <button className="bg-blue-700 text-white py-2 px-6 rounded-full shadow-lg flex items-center hover:bg-blue-700 focus:outline-none">
          See more
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ButtonSeeMore;
