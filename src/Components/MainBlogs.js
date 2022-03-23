import React from "react";
import useStore from "../Store/useStore";
import { mainBlogsStyles } from "../Styles/Styles";

const MainBlogs = () => {
  const { mainBlogsData } = useStore();
  return (
    <div className={mainBlogsStyles.main}>
      {mainBlogsData.map((blog) => (
        <div key={blog.id}>
          <img className={mainBlogsStyles.img} src={blog.imageUrls[0]} alt="" />
          <h3 className={mainBlogsStyles.head}>{blog.title}</h3>
          <p className={mainBlogsStyles.details}>{blog.blogText}</p>
          <div className={mainBlogsStyles.bottomMain}>
            <p>{new Date(blog.time?.toDate()).toDateString()}</p>
            <p className={mainBlogsStyles.time}>3 min read</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainBlogs;
