import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
	const PF = "http://localhost:5000/images/";
	return (
		<div className="post">
			<div className="post-inner" data-aos="slide-up" data-aos-duration="1500" data-aos-offset="80">
					<Link to={`/post/${post._id}`} className="link">
				{post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
				<div className="postInfo">
					<div className="postCats">
						<span className="postCat">{post.category}</span>
					</div>
					<span className="postTitle">{post.title}</span>
					<hr />
					<span className="postDate">
					{new Date(post.createdAt).toDateString()}
					</span>
				</div>
				<p className="postDesc">{post.desc}</p>
					</Link>
			</div>
		</div>
	);
}