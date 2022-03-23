import React from "react";
import useStore from "../Store/useStore";
import { moreBlogsStyles } from "../Styles/Styles";

const MoreBlogs = () => {
  const { moreBlogsData } = useStore();
  return (
    <div>
      <div className={moreBlogsStyles.main}>
        {moreBlogsData.map((blog) => (
          <div key={blog.id}>
            <img
              className={moreBlogsStyles.img}
              src={blog.imageUrls[0]}
              alt=""
            />
            <h3 className={moreBlogsStyles.head}>{blog.title}</h3>
            <p className={moreBlogsStyles.details}>{blog.blogText}</p>
            <div className={moreBlogsStyles.bottomMain}>
              <p>{new Date(blog.time?.toDate()).toDateString()}</p>
              <p className={moreBlogsStyles.time}>3 min read</p>
            </div>
          </div>
        ))}
      </div>
      <button className={moreBlogsStyles.button}>Load more topics</button>
    </div>
  );
};

export default MoreBlogs;
