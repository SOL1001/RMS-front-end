import HomeSkel from "../components/HomeSkel";

const Home = () => {
  return (
    <div className="dark:bg-[#1E1E1E] md:ml-12 dark:text-white">
      <div className="dark:bg-[#1E1E1E] min-h-screen ">
        <div className="md:mt-[100px] flex flex-col gap-3 w-full">
          <div className="flex justify-center md:justify-end mx-4 md:mx-[50px] dark:bg-[#1E1E1E]">
            <input
              type="text"
              className="mt-8 md:mt-20  md:mr-12 rounded-lg md:h-12 md:w-[400px] w-full px-9 border border-[#646cffaa] dark:bg-gray-800"
              placeholder="Search by country.."
            />
          </div>

          <div className="  flex items-center justify-center dark:bg-[#1E1E1E] ml-20">
            <HomeSkel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
