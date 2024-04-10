import { createContext, useReducer } from "react";
import { IPost } from "../interfaces/Post";

type State = {
  value: IPost[];
  isLoading?: boolean;
  error?: string;
};

type Action =
  | { type: "GET_POSTS"; payload: IPost[] }
  | { type: "GET_POST"; payload: IPost }
  | { type: "ADD_POST"; payload: IPost }
  | { type: "DELETE_POST"; payload: number }
  | { type: "EDIT_POST"; payload: IPost };

const INITIAL_STATE = {
  value: [],
  isLoading: true,
  error: "",
} as State;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const PostContext = createContext({} as any);

const postReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "GET_POSTS":
      return {
        ...state,
        value: action.payload,
      };
    case "GET_POST":
      return {
        value: [
          {
            // id: action.payload.id,
            title: action.payload.title,
            author: action.payload.author,
            content: action.payload.content,
            createdAt: action.payload.createdAt,
          },
        ],
      };
    case "ADD_POST":
      return {
        ...state,
        value: [...state.value, action.payload],
      };
    case "DELETE_POST":
      return {
        ...state,
        value: state.value.filter((item) => item.id !== action.payload),
      };
    case "EDIT_POST":
      return {
        ...state,
        value: state.value.map((item) =>
          item.id === action.payload.id ? action.payload : item,
        ),
      };
    default:
      return state;
  }
};

const PostContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, dispatch] = useReducer(postReducer, INITIAL_STATE);

  //   const [posts, setPosts] = useState<IPost[]>([]);
  //   const [post, setPost] = useState<IPost>({
  //     title: "",
  //     author: "",
  //     short_desc: "",
  //     content: "",
  //     createdAt: "",
  //   });

  //   const onHandleRemove = async (id: number) => {
  //     try {
  //       await axios.delete(`http://localhost:3000/posts/${id}`);
  //       setPosts(posts.filter((item) => item.id !== id));
  //       // eslint-disable-next-line no-empty
  //     } catch (error) {}
  //   };

  //   const onHandleAdd = async (post: IPost) => {
  //     try {
  //       const { data } = await axios.post("http://localhost:3000/posts", post);
  //       setPosts([...posts, data]);
  //       // eslint-disable-next-line no-empty
  //     } catch (error) {}
  //   };

  //   const onHandleEdit = async (post: IPost) => {
  //     try {
  //       await axios.put(`http://localhost:3000/posts/${post.id}`, post);
  //       setPosts(posts.map((item) => (item.id === post.id ? post : item)));
  //       // eslint-disable-next-line no-empty
  //     } catch (error) {}
  //   };

  return (
    <>
      <PostContext.Provider value={{ posts, dispatch }}>
        {children}
      </PostContext.Provider>
    </>
  );
};

export default PostContextProvider;
