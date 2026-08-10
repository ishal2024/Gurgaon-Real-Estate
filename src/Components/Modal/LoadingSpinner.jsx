import React from "react";

const LoadingSpinner = ({ size = 50 }) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="animate-spin rounded-full border-4 border-white/20 border-t-white"
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      />
    </div>
  );
};

export default LoadingSpinner;