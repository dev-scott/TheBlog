import { Search } from "lucide-react";

const Hero = () => {
  return (
    <div className=" pt-12">
      <div className="w-full h-[100px]"></div>
      <div className="container justify-center mx-auto flex flex-col gap-6  items-center flex-wrap px-3">
        <h1 className="font-bold text-6xl text-center tracking-widest">
          Here is our Blogs
        </h1>
        <div className="text-center ">
          <span className="text-center ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            esse maiores eaque officia voluptatem quisquam magni <br /> neque
            repudiandae veniam asperiores perferendis cupiditate sapiente,
            doloribus sit.
          </span>
        </div>
        <div className="px-3 py-3 w-full max-w-screen-sm bg-gray-50/20 rounded-md border border-black/25 flex justify-start items-center gap-4">
          <Search className="text-red-600" />
          <input
            type="text"
            className="w-full h-full"
            placeholder="Search a blog ..."
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
