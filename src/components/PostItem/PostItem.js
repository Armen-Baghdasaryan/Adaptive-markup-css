import "./PostItem.css";

const PostItem = ({ post }) => {
  const {
    id,
    smallImg,
    largeImg,
    type,
    title,
    subTitle,
    date,
    views,
    content,
  } = post;

  return (
    <div key={id} className="cardContainer">
      <picture>
        <img
          className="imgPosts"
          alt="img"
          src={largeImg}
          srcset={`${smallImg} 580w, ${largeImg} 1200w`}
        />
        {/* альтернативный вариант
        <source media="(max-width: 579px)" srcset={smallImg} />
        <source media="(min-width: 580px)" srcset={largeImg} /> */}
      </picture>
      <p className="typeText">{type}</p>
      <p className="titleText">{title}</p>
      <div className="subTitleContainer">
        <div className="subtitleText ovalPosts">{subTitle}</div>
        <div className="textInfo ovalPosts">{date}</div>
        <div className="textInfo">{views}</div>
      </div>
      <p className="contentText">{content}</p>
    </div>
  );
};

export default PostItem;
