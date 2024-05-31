// ImageUpload.tsx
import React, { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import toast from "react-hot-toast";

const ImageUpload: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {

    if (!image) return;
    toast.success("Image Upload");
    const storageRef = ref(storage, `images/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      error => {
        setError(error.message);
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log("File available at", downloadURL);
          setPreview(null);
          setImage(null);
          setProgress(0);
          setError(null);
        } catch (error) {
          setError("Failed to get download URL");
        }
      }
    );
  };

  return (
    <div className='w-[97vw] h-[70vh] bg-white'>
    <div className="flex items-center justify-center">
    <input
      type="file"
      name="image"
      accept="image/*"
      onChange={handleFileChange}
      className="hidden"
      id="fileInput"
    />
    <label htmlFor="fileInput" className="cursor-pointer">
    {preview  ?( <img src={preview} alt="Image preview" style={{ width: "300px", height: "200px" }} />) : (
        <div className="w-[70vw] h-64 border-dashed border-2 border-black flex justify-center items-center">
          <span className="text-gray-400">Choose Your Image</span>
        </div>
      )}
    </label>
    </div>
    <br></br>
   <div className="flex justify-center items-center">
   <button onClick={handleUpload} disabled={!image} className="cursor-pointer bg-gradient-to-r from-pink-600 to-pink-700 hover:scale-105 duration-700 hover:duration-1000 font-semibold transition-all text-white px-10 py-4 rounded-e relative after:[clip-path:polygon(50%_0%,_100%_0,_100%_34%,_100%_100%,_77%_87%,_88%_62%,_64%_75%,_67%_50%,_48%_32%,_82%_18%)] after:hover:duration-700 after:duration-500 after:absolute after:inset-0 after:z-20 after:bg-pink-600 after:translate-x-0 after:hover:-translate-x-1 after:hover:rotate-[100deg] after:origin-bottom-right after:transition-all after:hover:transition-all after:rounded-e after:hover:skew-y-6 after:content-['Hover_ME'] after:hover:content-['SMOOKY_DEV'] after:flex after:items-center after:justify-center after:bg-gradient-to-r after:from-rose-700 after:to-pink-600 after:hover:scale-x-50 before:[clip-path:polygon(26%_0,_38%_17%,_25%_32%,_41%_66%,_27%_81%,_50%_100%,_0_100%,_0%_70%,_0%_35%,_0_0)] before:hover:duration-700 before:duration-500 before:absolute before:inset-0 before:z-20 before:bg-pink-600 before:translate-x-0 before:hover:translate-x-0 before:hover:-rotate-[45deg] before:origin-bottom-left before:transition-all before:hover:transition-all before:rounded-e before:hover:skew-y-6 before:content-['Hover_ME'] before:hover:content-['SMOOKY'] before:flex before:items-center before:justify-center before:bg-gradient-to-l before:from-rose-700 before:to-pink-600">
        Upload</button>
        <br></br>
    <div className="flex justify-center items-center">
      <br></br>
    {progress > 0 && <progress value={progress} max="100">{progress}%</progress>}
      {error && <div style={{ color: "yellow" }}>{error}</div>}
    </div>
   </div>
    </div>
  );
};

export default ImageUpload;
