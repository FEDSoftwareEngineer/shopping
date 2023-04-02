import React from "react";
import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="loadingBg">
      <FaSpinner className="loading" />
    </div>
  );
};

export default Loading;
