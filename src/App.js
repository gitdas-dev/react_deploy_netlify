import React from "react";
import Layout from "./Layout";
import NewPost from "./NewPost";
import Home from "./Home";
import About from "./About";
import PostPage from "./PostPage";
import Missing from "./Missing";
import EditPost from "./EditPost";
import { Route, Routes } from "react-router-dom";
import useAxiosFetch from "./hooks/useAxiosFetch";
import { useEffect } from "react";
import { useStoreActions } from "easy-peasy";

function App() {
  const setPosts = useStoreActions((actions) => actions.setPosts)
  const { data, isLoading, fetchError } = useAxiosFetch('http://localhost:3500/posts')
    useEffect(()=>{
        setPosts(data);
      },[data, setPosts])
  // const [posts, setPosts] = useState([]);
  // const [search, setSearch] = useState("");
  // const [searchResults, setSearchResults] = useState([]);
  // const [postTitle, setPostTitle] = useState("");
  // const [postBody, setPostBody] = useState("");
  // const [editTitle, setEditTitle] = useState("");
  // const [editBody, setEditBody] = useState("");
  // const { width } = useWindowSize();
  // const { data, fetchError, isLoading } = useAxiosFetch(
  //   "http://localhost:3500/posts"
  // );
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await api.get("/posts");
  //       setPosts(response.data);
  //     } catch (err) {
  //       //not in 200 response range
  //       if (err.response) {
  //         console.log(err.response.data);
  //         console.log(err.response.status);
  //         console.log(err.response.headers);
  //       } else {
  //         console.log(`Error: ${err.message}`);
  //       }
  //     }
  //   };

  //   fetchPosts();
  // }, []);

  // useEffect(() => {
  //   setPosts(data);
  // }, [data]);

  // useEffect(() => {
  //   const filteredResults = posts.filter(
  //     (post) =>
  //       post.body.toLowerCase().includes(search.toLowerCase()) ||
  //       post.title.toLowerCase().includes(search.toLowerCase())
  //   );
  //   setSearchResults(filteredResults.reverse());
  // }, [posts, search]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
  //   const datetime = format(new Date(), "MMMM dd, yyyy pp");
  //   const newPost = { id, title: postTitle, datetime, body: postBody };
  //   try {
  //     const response = await api.post("/posts", newPost);
  //     const allPosts = [...posts, response.data];
  //     setPosts(allPosts);
  //     setPostTitle("");
  //     setPostBody("");
  //     navigate("/");
  //   } catch (err) {
  //     console.log(`Error : ${err.message}`);
  //   }
  // };

  // const handleEdit = async (id) => {
  //   const datetime = format(new Date(), "MMMM dd, yyyy pp");
  //   const updatedPost = { id, title: editTitle, datetime, body: editBody };
  //   try {
  //     const response = await api.put(`/posts/${id}`, updatedPost);
  //     setPosts(
  //       posts.map((post) => (post.id === id ? { ...response.data } : post))
  //     );
  //     setEditTitle("");
  //     setEditBody("");
  //     navigate("/");
  //   } catch (err) {
  //     console.log(`Error: ${err.message}`);
  //   }
  // };

  // const handleDelete = async (id) => {
  //   try {
  //     await api.delete(`/posts/${id}`);
  //     const postsList = posts.filter((post) => post.id !== id);
  //     setPosts(postsList);
  //     navigate("/");
  //   } catch (err) {
  //     console.log(`Error : ${err.message}`);
  //   }
  // };

  // const navigate = useNavigate();

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home isLoading={isLoading} fetchError={fetchError} />} />
            <Route path="post">
              <Route index element={<NewPost />} />
              <Route path=":id" element={<PostPage />} />
            </Route>
            <Route path="edit/:id">
              <Route index element={<EditPost />} />
            </Route>

            <Route path="about" element={<About />} />
            <Route path="*" element={<Missing />} />
          </Route>
        </Routes>     
    </div>
  );
}

export default App;
