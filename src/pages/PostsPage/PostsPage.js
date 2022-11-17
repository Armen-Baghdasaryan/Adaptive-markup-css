import { postsData } from "../../helpers/postsData";
import "./PostsPage.css";

const PostsPage = () => {
  return (
    <div className="postsPageContainer">
      <div className="postsPageItems">
        {postsData.map(
          ({ id, img, type, title, subTitle, date, views, content }) => (
            <div key={id} className="cardContainer">
              <picture>
                {/* <source srcSet={img2} media="(max-width: 575px)" /> */}
                <img className="imgPosts" alt="img" src={img} />
              </picture>
              <p className="typeText">{type}</p>
              <p className="titleText">{title}</p>
              <div className="subTitleContainer">
                <span className="subtitleText">{subTitle}</span>
                <span className="ovalPosts"></span>
                <span className="textInfo">{date}</span>
                <span className="ovalPosts"></span>
                <span className="textInfo">{views}</span>
              </div>
              <p className="contentText">{content}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default PostsPage;
