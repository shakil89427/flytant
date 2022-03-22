import React from "react";

const MainBlogs = () => {
  return (
    <div className="mt-14 md:mt-24 lg:mt-28 grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto w-[90vw] md:w-[65vw] lg:w-[55vw]">
      <div>
        <img
          className="h-72 md:h-96 lg:h-80 w-full rounded-3xl"
          src="https://firebasestorage.googleapis.com/v0/b/flytant-test.appspot.com/o/blogs%2FTop%20Indian%20Influencers%2Fdollar-gill-oH-PNVWykUo-unsplash.jpg?alt=media&token=dfc9a4b2-147a-4d6d-a913-6178973b39f0"
          alt=""
        />
        <h3 className="text-xl font-bold tracking-wider my-5 ml-5">
          Top Indian Influencers
        </h3>
        <p className="text-xl tracking-wider ml-5 mr-14 text-gray-600">
          As a marketer, you have a wide choice of influencers to pick from with
          over 200 million business profiles on the Instagram network. But, of
          course, you'll need to be a little more sophisticated - it's critical
          to identify influencers who ar
        </p>
        <div className="flex items-center justify-between mt-5 ml-5 mr-14 font-bold text-gray-400 text-md">
          <p>Mar 14, 2022</p>
          <p className="text-gray-500">3 min read</p>
        </div>
      </div>
      <div>
        <img
          className="h-72 md:h-96 lg:h-80 w-full rounded-3xl"
          src="https://firebasestorage.googleapis.com/v0/b/flytant-test.appspot.com/o/blogs%2FHow%20to%20Make%20Money%20on%20Instagram%3F%2Fmonetizing-content-g71e169f13_1280.jpg?alt=media&token=cce34b86-7565-42d3-81d1-673c421b0106"
          alt=""
        />
        <h3 className="text-xl font-bold tracking-wider my-5 ml-5">
          How to Make Money on Instagram?
        </h3>
        <p className="text-xl tracking-wider ml-5 mr-14 text-gray-600">
          Consider sharing more than just your photographs and videos if you're
          seeking methods to generate money on Instagram. Let your viewers know
          who you are.
        </p>
        <div className="flex items-center justify-between mt-5 ml-5 mr-14 font-bold text-gray-400 text-md">
          <p>Mar 1, 2022</p>
          <p className="text-gray-500">3 min read</p>
        </div>
      </div>
    </div>
  );
};

export default MainBlogs;
