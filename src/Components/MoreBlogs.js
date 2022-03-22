import React from "react";

const MoreBlogs = () => {
  return (
    <div>
      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto w-[90vw] md:w-[65vw] lg:w-[55vw]">
        <div>
          <img
            className="h-64 md:h-72 lg:h-60 w-full rounded-3xl"
            src="https://firebasestorage.googleapis.com/v0/b/flytant-test.appspot.com/o/blogs%2FHow%20to%20go%20Viral%20on%20Instagram%3F%2Finfluencer-g00373218f_1280.jpg?alt=media&token=fda6cfeb-8b46-47f1-bc02-47292b67445c"
            alt=""
          />
          <h3 className="text-xl font-bold tracking-wider my-5">
            Top Indian Influencers
          </h3>
          <p className="text-lg tracking-wider mx-2 text-gray-600">
            As a marketer, you have a wide choice of influencers to pick from
            with over 200 million business profiles on the Instagram network.
            But, of course, you'll need to be a little more sophisticated - it's
            critical to identify influencers who ar
          </p>
          <div className="flex items-center justify-between mt-5 mx-2 font-bold text-gray-400 text-md">
            <p>Mar 14, 2022</p>
            <p className="text-gray-500">3 min read</p>
          </div>
        </div>
        <div>
          <img
            className="h-64 md:h-72 lg:h-60 w-full rounded-3xl"
            src="https://firebasestorage.googleapis.com/v0/b/flytant-test.appspot.com/o/blogs%2FHow%20to%20get%20Sponsorship%20from%20Brands%3F%2F1image.jpg?alt=media&token=5b70dc0a-71fc-4695-b6e7-1b682e2228ef"
            alt=""
          />
          <h3 className="text-xl font-bold tracking-wider my-5">
            Top Indian Influencers
          </h3>
          <p className="text-lg tracking-wider mx-2 text-gray-600">
            As a marketer, you have a wide choice of influencers to pick from
            with over 200 million business profiles on the Instagram network.
            But, of course, you'll need to be a little more sophisticated - it's
            critical to identify influencers who ar
          </p>
          <div className="flex items-center justify-between mt-5 mx-2 font-bold text-gray-400 text-md">
            <p>Mar 14, 2022</p>
            <p className="text-gray-500">3 min read</p>
          </div>
        </div>
        <div>
          <img
            className="h-64 md:h-72 lg:h-60 w-full rounded-3xl"
            src="https://firebasestorage.googleapis.com/v0/b/flytant-test.appspot.com/o/blogs%2FBrand%20Ambassadors%20vs%20Brand%20Influencers%2F1.jpg?alt=media&token=f83d0ceb-20f9-41c4-a47c-560de0e8b2f7"
            alt=""
          />
          <h3 className="text-xl font-bold tracking-wider my-5">
            Top Indian Influencers
          </h3>
          <p className="text-lg tracking-wider mx-2 text-gray-600">
            As a marketer, you have a wide choice of influencers to pick from
            with over 200 million business profiles on the Instagram network.
            But, of course, you'll need to be a little more sophisticated - it's
            critical to identify influencers who ar
          </p>
          <div className="flex items-center justify-between mt-5 mx-2 font-bold text-gray-400 text-md">
            <p>Mar 14, 2022</p>
            <p className="text-gray-500">3 min read</p>
          </div>
        </div>
      </div>
      <button className="bg-black text-white py-3 px-10 block mx-auto rounded-3xl my-20 text-lg">
        Load more topics
      </button>
    </div>
  );
};

export default MoreBlogs;
