import React from "react";
import data from "./data.json";
const Arabic = () => {
  return (
    <div>
      <div id="arabic" className="bg-red-300 container py-12">
        <div className="text-3xl text-center font-bold p-8 text-gray-900 md:text-5xl">
          <span className="border-b-4 font-os border-black">Arabic Style</span>
        </div>

        <div className="grid gap-6 grid-cols-1 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3 ">
          {data &&
            data.length > 0 &&
            data.map((post) => (
              <div
                //   data-aos="zoom-in-down"
                key={post.name}
                className="border-2 border-black rounded-xl"
              >
                <img
                  src={post.src}
                  //   width={300}
                  //   height={100}
                  className=" object-cover aspect-square rounded-md"
                  alt=""
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Arabic;
