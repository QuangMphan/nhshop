import { useContext } from "react";
import { PostContext } from "../../contexts/PostContextProvider";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

type FormValue = {
  title: string;
  author: string;
  thumbnail: string;
  short_desc: string;
  content: string;
  createdAt: string;
};

const PostAdd = () => {
  const { dispatch } = useContext(PostContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    // formState: { error },
  } = useForm<FormValue>();

  const onSubmit: SubmitHandler<FormValue> = async (data) => {
    const currentDate = new Date().toLocaleDateString("en-GB"); // Get current date in DD-MM-YYYY format
    data.createdAt = currentDate;
    try {
      await axios.post("http://localhost:3000/posts", data);
      dispatch({ type: "ADD_POST", payload: data });
      // eslint-disable-next-line no-empty
    } catch (error) {}
    navigate("/admin", { replace: true });
  };

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Create a new Post</h1>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mb-0 mt-8 max-w-md space-y-4"
        >
          <div>
            <div className="relative">
              <label className="font-semibold text-indigo-500">Title</label>
              <input
                type="text"
                className="mt-2 w-full rounded-lg border-2  border-indigo-300 p-4 pe-12 text-sm hover:border-indigo-600"
                {...register("title", { required: true })}
                placeholder="Enter title"
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <label className="font-semibold text-indigo-500">Author</label>

              <input
                type="text"
                {...register("author", { required: true })}
                className="mt-2 w-full rounded-lg border-2 border-indigo-300 p-4 pe-12 text-sm shadow-sm hover:border-indigo-600"
                placeholder="Enter author"
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <label className="font-semibold text-indigo-500">
                Short description
              </label>

              <input
                type="text"
                {...register("short_desc", { required: true })}
                className="mt-2 w-full rounded-lg border-2 border-indigo-300 p-4 pe-12 text-sm shadow-sm hover:border-indigo-600"
                placeholder="Enter short description"
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <label className="font-semibold text-indigo-500">Content</label>

              <input
                type="text"
                {...register("content", { required: true })}
                className="mt-2 w-full rounded-lg border-2 border-indigo-300 p-4 pe-12 text-sm shadow-sm hover:border-indigo-600"
                placeholder="Enter content"
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <label className="font-semibold text-indigo-500">Thumbnail</label>

              <input
                type="text"
                {...register("thumbnail", { required: true })}
                className="mt-2 w-full rounded-lg border-2 border-indigo-300 p-4 pe-12 text-sm shadow-sm hover:border-indigo-600"
                placeholder="Enter thumbnail URL"
              />
            </div>
          </div>

          <div className="text-right">
            <button className="rounded-lg bg-blue-500 px-5 py-3  text-sm font-medium text-white">
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PostAdd;
