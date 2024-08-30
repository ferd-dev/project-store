const Loading = () => {
  return (
    <div className="max-w-screen-xl px-4 2xl:px-0 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-pulse">
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <div className="h-40 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded mt-4"></div>
          <div className="h-4 bg-gray-300 rounded mt-2"></div>
          <div className="h-8 bg-gray-300 rounded mt-4"></div>
        </div>

        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <div className="h-40 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded mt-4"></div>
          <div className="h-4 bg-gray-300 rounded mt-2"></div>
          <div className="h-8 bg-gray-300 rounded mt-4"></div>
        </div>

        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <div className="h-40 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded mt-4"></div>
          <div className="h-4 bg-gray-300 rounded mt-2"></div>
          <div className="h-8 bg-gray-300 rounded mt-4"></div>
        </div>

        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <div className="h-40 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded mt-4"></div>
          <div className="h-4 bg-gray-300 rounded mt-2"></div>
          <div className="h-8 bg-gray-300 rounded mt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
