import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./singlePost.css";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [inputcomment, setComment] = useState("");
  const [outputcomment, setOutputComment] = useState([]);
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
	const getPost = async () => {
	  const res = await axios.get("/posts/" + path);
		setPost(res.data);
		setTitle(res.data.title);
		setDesc(res.data.desc);
		const commentres = await axios.get(`/Comments?postId=${res.data._id}`);
		setOutputComment(commentres.data);
	};
	getPost();
  }, [path]);

  const handleDelete = async () => {
	try {
	  await axios.delete(`/posts/${post._id}`, {
		data: { username: user.username },
	  });
	  window.location.replace("/");
	} catch (err) {}
  };

  const handleUpdate = async () => {
	try {
	  await axios.put(`/posts/${post._id}`, {
		username: user.username,
		title,
		desc,
	  });
	  setUpdateMode(false)
	} catch (err) {}
  };

  const handleComment = async () => {
	try {
		if(user){
		await axios.post("/comments", {
		postId: post._id,
		date: "27 sep 2021",
		comments: inputcomment,
	  });
	  const res = await axios.get(`/Comments?postId=${post._id}`);
	  setOutputComment(res.data);
	}} catch (err) {}
  };

  return (
	<Container className="resp-mtb" style={{marginTop: "80px", marginBottom: "80px"}}>
		<div className="singlePost">
		<div className="singlePostWrapper">
			{post.photo && (
			<img src={PF + post.photo} alt="" className="singlePostImg" />
			)}
			{updateMode ? (
			<input
				type="text"
				value={title}
				className="singlePostTitleInput"
				autoFocus
				onChange={(e) => setTitle(e.target.value)}
			/>
			) : (
			<h1 className="singlePostTitle">
				{title}
				{post.username === user?.username && (
				<div className="singlePostEdit">
					<i
					className="singlePostIcon far fa-edit"
					onClick={() => setUpdateMode(true)}
					></i>
					<i
					className="singlePostIcon far fa-trash-alt"
					onClick={handleDelete}
					></i>
				</div>
				)}
			</h1>
			)}
			<div className="singlePostInfo">
				<span className="singlePostAuthor">
					Author:
					<Link to={`/?user=${post.username}`} className="link">
					<b> {post.username}</b>
					</Link>
				</span>
				<span className="singlePostDate">
					{new Date(post.createdAt).toDateString()}
				</span>
			</div>
			{updateMode ? (
				<textarea
				className="singlePostDescInput"
				value={desc}
				onChange={(e) => setDesc(e.target.value)}
				rows="6"
				/>
				) : (
			<>
				<p className="singlePostDesc">{desc}</p>
				{
				user? (<>
					<Row className="py-2 text-center align-items-center">
						<Col md="2" className="d-flex justify-content-center">
							<i class="fas fa-user" style={{fontSize: "60px"}}></i>
							<i class="far fa-comments" style={{fontSize: "25px"}}></i>
						</Col>
						<Col md="10">
							<textarea
								className="textarea"
								value={inputcomment}
								style={{ width: "100%" }}
								onChange={(e) => setComment(e.target.value)} name="qwert" id="postedcomment" rows="4">
							</textarea>
							<Button variant="primary" onClick={handleComment} style={{ width: "100%", marginTop: "15px" }}>Post</Button>
						</Col>
					</Row>
				</>): null
				}

				<div id="" className="usercomment-box">
					{outputcomment.map((obj)=>{ return <p key={obj._id} id={obj._id}> {obj.comments} </p> })}
				</div>
			</>
			)}
			{updateMode && (
			<Button className="singlePostButton" variant="primary" onClick={handleUpdate}>
				Update
			</Button>
			)}
		</div>
		</div>
	</Container>
  );
}
