import { useEffect } from "react";
import {
  useGetAllQuery,
  useGetPostByIdQuery,
  useGetPostByLimitQuery,
  useDeletePostMutation,
  useCreatePostMutation,
  useUpdatePostMutation,
  useGetListPostsQuery,
} from "./services/post";

function App() {
  const responseInfo = useGetListPostsQuery();

  const newPost = {
    title: "This is New New Title",
    body: "This is New New Body",
    userId: 1,
  };
  const updatePostData = {
    id: 1,
    title: "This is Update Post Title",
    body: "This is Update Post Body",
    userId: 1,
  };


  if (responseInfo.isLoading) return <div>Loading....</div>;
  if (responseInfo.isError)
    return <h1>An error occurred {responseInfo.error.error}</h1>;

  return (
    <div className="App">
      {responseInfo.data.map((post, i) => (
        <div key={i}>
          <h2>
            {post.id} {post.title}
          </h2>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
