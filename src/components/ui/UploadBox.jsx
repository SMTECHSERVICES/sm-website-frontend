// src/components/UploadBox.jsx
import { useRef, useState } from "react";
import { FaFilePdf, FaImage, FaUpload } from "react-icons/fa";

const UploadBox = ({ label, accept, onFileSelect }) => {
  const inputRef = useRef();
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [dragOver, setDragOver] = useState(false);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;
    setFile(selected);
    simulateUpload(selected);
    onFileSelect(selected);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      simulateUpload(droppedFile);
      onFileSelect(droppedFile);
    }
  };

  const simulateUpload = (file) => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + 10;
      });
    }, 100);
  };

  return (
    <div
      onClick={() => inputRef.current.click()}
      onDragOver={(e) => {
        e.preventDefault();
        setDragOver(true);
      }}
      onDragLeave={() => setDragOver(false)}
      onDrop={handleDrop}
      className={`p-4 border-2 ${
        dragOver ? "border-blue-500 bg-blue-50" : "border-dashed border-gray-400"
      } rounded-lg text-center cursor-pointer transition`}
    >
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        onChange={handleFileChange}
        className="hidden"
      />
      <div className="flex flex-col items-center justify-center space-y-2">
        {file ? (
          <div className="text-sm text-gray-700">
            {accept.includes("image") ? <FaImage size={28} /> : <FaFilePdf size={28} />}
            <p>{file.name}</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        ) : (
          <>
            <FaUpload size={24} className="text-gray-500" />
            <p className="text-sm text-gray-600">{label}</p>
            <p className="text-xs text-gray-400">Click or drag & drop</p>
          </>
        )}
      </div>
    </div>
  );
};

export default UploadBox;
