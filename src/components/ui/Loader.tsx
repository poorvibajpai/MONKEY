const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <div className="flex flex-row gap-2">
        <div className="w-7 h-7 rounded-full bg-red-500 animate-bounce"></div>
        <div className="w-7 h-7 rounded-full bg-red-500 animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-7 h-7 rounded-full bg-red-500 animate-bounce [animation-delay:-.5s]"></div>
      </div>
    </div>
  );
};

export default Loader;
