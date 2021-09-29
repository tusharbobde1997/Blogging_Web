import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Container from 'react-bootstrap/Container';
import Posts from "../../components/posts/Posts";
// import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [filterCategory, setfilterCategory] = useState("All");
  const [categories, setCategories] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
	const fetchPosts = async () => {
	  const res = await axios.get("/posts" + search);
	  setPosts(res.data);
	};
	fetchPosts();

	const getCats = async () => {
		const res = await axios.get("/categories");
		setCategories(res.data);
	};
	getCats();

  }, [search]);
  return (
	<>
		<Header />
		<div className="home">
			<Container>
				<select style={{marginLeft: '15px'}} id="categorySelect" name="category" onChange={(e) => setfilterCategory(e.target.value)}>
					<option key="All" value="All">Category</option>
					{categories.map((obj)=>{ return <option key={obj.name} value={obj.name}>{obj.name}</option>})}
				</select>

				{(filterCategory === "All") ? <Posts posts={posts}/> : <Posts posts={posts.filter( obj => {return obj.category===filterCategory})}/>}
			</Container>
			{/* <Sidebar /> */}
	  	</div>
	</>
  );
}
