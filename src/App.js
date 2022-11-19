import { useState } from "react";
import Header from "./components/Header/Header";
import PostsPage from "./pages/PostsPage/PostsPage";

const App = () => {
  const [visiable, setVisiable] = useState(false);

  return (
    <div>
      <Header visiable={visiable} setVisiable={setVisiable} />
      <PostsPage visiable={visiable} />
    </div>
  );
};

export default App;
