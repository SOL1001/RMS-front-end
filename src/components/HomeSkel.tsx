const HomeSkel = () => {
  return (
    <div className="dark:bg-[#1E1E1E] ">
      <div className="flex flex-wrap gap-3 dark:bg-[#1E1E1E]">
        {Array.from({ length: 50 }, (_, i) => (
          <div key={i} className=" rounded-md mb-3">
            <div className="flex flex-col animate-pulse gap-2">
              <div className="w-[250px] h-[230px] rounded bg-gray-200"></div>

              <div className="w-[230px]  h-2 rounded bg-gray-200"></div>
              <div className="w-[230px]  h-2 rounded bg-gray-200"></div>
              <div className="flex gap-5">
                <div className="w-20 h-2 rounded bg-gray-200"></div>
                <div className="w-20 h-2 rounded bg-gray-200"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSkel;
