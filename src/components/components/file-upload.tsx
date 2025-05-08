'use client';
import React, { useRef } from 'react';
import { UploadCloud } from 'lucide-react';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFileSelect(e.target.files[0]);
    }
  };

  const handleBoxClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="mb-4">
      <div
        className="border-2 h-40 border-dashed border-gray-400 rounded p-6 flex items-center justify-center text-gray-500 cursor-pointer hover:bg-gray-50 transition"
        onClick={handleBoxClick}
      >
        <UploadCloud className="mr-2" />
        <span>Upload Additional file</span>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        onChange={handleFileChange}
        className="hidden"
      />
      <p className="text-sm text-gray-400 mt-1">
        Attach file. File size of your documents should not exceed 10MB
      </p>
    </div>
  );
};

export default FileUpload;
