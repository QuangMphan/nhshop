import { useContext, useEffect } from "react";
import { PostContext } from "../../contexts/PostContextProvider";
import { IPost } from "../../interfaces/Post";
import { Link } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const { posts, dispatch } = useContext(PostContext);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("http://localhost:3000/posts");
      dispatch({ type: "GET_POSTS", payload: data });
    })();
  }, [dispatch]);

  const onHandleRemove = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/posts/${id}`);
      dispatch({ type: "DELETE_POST", payload: id });
      // eslint-disable-next-line no-empty
    } catch (error) {}
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="w-[5%] px-4 py-2 font-medium text-gray-900">Id</th>
              <th className="w-[10%] px-4 py-2 font-medium text-gray-900">
                Title
              </th>
              <th className="w-[10%] px-4 py-2 font-medium text-gray-900">
                Author
              </th>
              <th className="w-[10%]  px-4 py-2 font-medium text-gray-900">
                Thumbnail
              </th>
              <th className="w-[15%] px-4 py-2 font-medium text-gray-900">
                Short Desc
              </th>
              <th className="w-[20%] px-4 py-2 font-medium text-gray-900">
                Content
              </th>
              <th className="w-[15] px-4 py-2 font-medium text-gray-900">
                Date Created
              </th>
              <th className="w-[15%] px-4 py-2 font-medium">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {posts.value.map((post: IPost, index: number) => {
              return (
                <tr key={index}>
                  <td className="px-4 py-2 text-center font-bold text-indigo-800">
                    {post.id}
                  </td>
                  <td className="px-4 py-2 text-gray-700">{post.title}</td>
                  <td className="px-4 py-2 text-gray-700">{post.author}</td>
                  <td className="px-4 py-2 text-gray-700">
                    <img src={post.thumbnail} className="w-full" alt="" />
                  </td>
                  <td className="px-4 py-2 font-medium text-gray-900">
                    {post.short_desc}
                  </td>
                  <td className="px-4 py-2 font-medium text-gray-900">
                    {post.content}
                  </td>
                  <td className="px-4 py-2 text-center font-medium text-gray-900">
                    {post.createdAt}
                  </td>
                  <td className="text-center">
                    <button
                      onClick={() => onHandleRemove(post.id!)}
                      className="mr-3 h-[32px] rounded bg-red-400 px-4 py-2 text-xs font-medium text-white hover:bg-red-600"
                    >
                      Delete
                    </button>

                    <button className="h-[32px] rounded bg-indigo-400 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-600">
                      <Link to={`post/edit/${post.id}`}>Edit</Link>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="py-3 text-right">
        <Link
          to={`post/add`}
          className="rounded bg-indigo-700 px-4 py-2 text-lg font-medium text-white"
        >
          Add Post
        </Link>
      </div>
    </>
  );
};

export default Dashboard;
