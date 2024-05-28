const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <div className="flex flex-row gap-2">
        <div className="w-7 h-7 rounded-full bg-yellow-700 animate-bounce"></div>
        <div className="w-7 h-7 rounded-full bg-yellow-700 animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-7 h-7 rounded-full bg-yellow-700 animate-bounce [animation-delay:-.5s]"></div>
      </div>
    </div>
  );
};

export default Loader;
