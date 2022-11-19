import PostItem from "../../components/PostItem/PostItem";
import { postsData } from "../../helpers/postsData";
import "./PostsPage.css";

const PostsPage = ({ visiable }) => {
  return (
    <div
      className="postsPageContainer"
      style={{ filter: visiable && "blur(8px)" }}
    >
      <div className="postsPageItems">
        {postsData.map((post) => (
          <PostItem post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
