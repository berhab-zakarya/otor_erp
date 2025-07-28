export const SkeletonCard: React.FC = () => {
  return (
    <div className="flex-grow h-[150px] w-full max-w-sm sm:w-auto bg-white rounded-2xl px-5 py-6 flex justify-between items-start animate-pulse">
      <div className="flex flex-col h-full justify-between w-full">
        <div>
          <div className="h-8 bg-gray-300 rounded w-24 mb-2"></div>
          <div className="h-5 bg-gray-300 rounded w-32"></div>
        </div>
        <div className="flex items-center gap-1">
          <div className="h-4 w-8 bg-gray-300 rounded"></div>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center p-2 rounded-full w-12 h-12 bg-gray-300"></div>
      </div>
    </div>
  );
};
