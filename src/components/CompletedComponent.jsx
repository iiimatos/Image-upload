import React from "react";
import { useFileContext } from "../context/fileContext";
import { CheckSvg } from "../icons";

const CompletedComponent = () => {
  const { urlFile } = useFileContext();
  return (
    <div className="h-[500px] w-[450px] second-container">
      <div className="flex itemx-center justify-center">
        <div className="bg-green-700 rounded-full w-12 flex items-center justify-center p-2 mb-2">
          <CheckSvg className="text-white w-8 h-8 stroke-current" />
        </div>
      </div>
      <h3 className="text-lg font-medium text-gray-700 mt-3">
        Uploaded Successfully!
      </h3>
      <img src={urlFile} className="rounded-lg my-6 h-60 w-full" alt="not found" />      <div className="flex items-center justify-center bg-gray-100 border border-gray-300 rounded-md px-1 py-1">
        <p className="truncate text-gray-800 text-sm mr-2">{urlFile}</p>
        <button
          onClick={() => navigator.clipboard.writeText(urlFile)}
          className="btn-primary flex-none"
        >
          Copy Link
        </button>
      </div>
    </div>
  );
};

export default CompletedComponent;
