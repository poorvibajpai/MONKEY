import { useState } from "react";

interface SizeSelectorProps {
  sizes: string[];
}

const SizeSelector: React.FC<SizeSelectorProps> = ({ sizes }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <div className="flex space-x-2">
      {sizes.map((size) => (
        <button
          key={size}
          className={`border-2 border-grey-900 rounded-xl px-4 py-2 ${
            selectedSize === size ? 'bg-cyan-500 text-white' : 'bg-white text-black'
          }`}
          onClick={() => setSelectedSize(size)}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizeSelector;
