import React from "react";
import { moreBlogsStyles } from "../Styles/Styles";

const MoreBlogs = () => {
  return (
    <div>
      <div className={moreBlogsStyles.main}>
        <div>
          <img
            className={moreBlogsStyles.img}
            src="https://firebasestorage.googleapis.com/v0/b/flytant-test.appspot.com/o/blogs%2FHow%20to%20go%20Viral%20on%20Instagram%3F%2Finfluencer-g00373218f_1280.jpg?alt=media&token=fda6cfeb-8b46-47f1-bc02-47292b67445c"
            alt=""
          />
          <h3 className={moreBlogsStyles.head}>
            How to go Viral on Instagram?
          </h3>
          <p className={moreBlogsStyles.details}>
            Going viral on Instagram means creating content that swiftly travels
            over the site and is shared by thousands of people. While that is
            relatively simp
          </p>
          <div className={moreBlogsStyles.bottomMain}>
            <p>Mar 14, 2022</p>
            <p className={moreBlogsStyles.time}>3 min read</p>
          </div>
        </div>
        <div>
          <img
            className={moreBlogsStyles.img}
            src="https://firebasestorage.googleapis.com/v0/b/flytant-test.appspot.com/o/blogs%2FHow%20to%20get%20Sponsorship%20from%20Brands%3F%2F1image.jpg?alt=media&token=5b70dc0a-71fc-4695-b6e7-1b682e2228ef"
            alt=""
          />
          <h3 className={moreBlogsStyles.head}>
            How to get Sponsorship from Brands?
          </h3>
          <p className={moreBlogsStyles.details}>
            Instagram has grown in popularity as a platform for marketers to
            market their goods. Because of its popularity, you might believe
            that Instagram is al
          </p>
          <div className={moreBlogsStyles.bottomMain}>
            <p>Mar 14, 2022</p>
            <p className={moreBlogsStyles.time}>3 min read</p>
          </div>
        </div>
        <div>
          <img
            className={moreBlogsStyles.img}
            src="https://firebasestorage.googleapis.com/v0/b/flytant-test.appspot.com/o/blogs%2FBrand%20Ambassadors%20vs%20Brand%20Influencers%2F1.jpg?alt=media&token=f83d0ceb-20f9-41c4-a47c-560de0e8b2f7"
            alt=""
          />
          <h3 className={moreBlogsStyles.head}>
            Brand Ambassadors vs Brand Influencers
          </h3>
          <p className={moreBlogsStyles.details}>
            In the world of brands and business, promotions is one of the most
            important marketing tools. Promotions of products can do wonder that
            even severe bi
          </p>
          <div className={moreBlogsStyles.bottomMain}>
            <p>Mar 14, 2022</p>
            <p className={moreBlogsStyles.time}>3 min read</p>
          </div>
        </div>
      </div>
      <button className={moreBlogsStyles.button}>Load more topics</button>
    </div>
  );
};

export default MoreBlogs;
