import React, { useState, ChangeEvent } from 'react';

const FileUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewURL(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
  <div className='w-[97vw] h-[70vh] bg-white'>
      <div className="flex items-center justify-center">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        id="fileInput"
      />
      <label htmlFor="fileInput" className="cursor-pointer">
        {selectedFile ? (
          <img src={previewURL as string} alt="Preview" className="w-70 h-40 object-cover" />
        ) : (
          <div className="w-[70vw] h-64 border-dashed border-2 border-black flex justify-center items-center">
            <span className="text-gray-400">Choose Your Image</span>
          </div>
        )}
      </label>
    </div>
    <div className='flex items-center justify-center py-5'>
    <button
  className="cursor-pointer bg-gradient-to-r from-red-500 to-red-500 hover:scale-105 duration-700 hover:duration-1000 font-semibold transition-all text-white px-10 py-4 rounded-e relative after:[clip-path:polygon(50%_0%,_100%_0,_100%_34%,_100%_100%,_77%_87%,_88%_62%,_64%_75%,_67%_50%,_48%_32%,_82%_18%)] after:hover:duration-700 after:duration-500 after:absolute after:inset-0 after:z-20 after:bg-red-500 after:translate-x-0 after:hover:-translate-x-1 after:hover:rotate-[100deg] after:origin-bottom-right after:transition-all after:hover:transition-all after:rounded-e after:hover:skew-y-6 after:content-['Hover_ME'] after:hover:content-['SMOOKY_DEV'] after:flex after:items-center after:justify-center after:bg-gradient-to-r after:from-red-500 after:to-red-500 after:hover:scale-x-50 before:[clip-path:polygon(26%_0,_38%_17%,_25%_32%,_41%_66%,_27%_81%,_50%_100%,_0_100%,_0%_70%,_0%_35%,_0_0)] before:hover:duration-700 before:duration-500 before:absolute before:inset-0 before:z-20 before:bg-red-500 before:translate-x-0 before:hover:translate-x-0 before:hover:-rotate-[45deg] before:origin-bottom-left before:transition-all before:hover:transition-all before:rounded-e before:hover:skew-y-6 before:content-['Hover_ME'] before:hover:content-['SMOOKY'] before:flex before:items-center before:justify-center before:bg-gradient-to-l before:from-red-500 before:to-red-500"
>
  Upload Iamge
</button>

    </div>
  </div>
  );
};

export default FileUpload;
