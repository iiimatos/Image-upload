import React from "react";

const LoadingComponent = () => {
  return (
    <div className="h-[120px] w-[400px] second-container">
      <h3 className="font-medium text-gray-700 mb-5">Loading...</h3>
      <div className="relative bg-gray-200 h-2 rounded-md overflow-hidden">
        <div className="absolute bg-blue-600 h-full w-[90px] rounded-md animate-loading" />
      </div>
    </div>
  );
};

export default LoadingComponent;
