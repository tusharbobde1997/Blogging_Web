import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";
import Container from 'react-bootstrap/Container';

export default function TopBar() {
	const { user, dispatch } = useContext(Context);
	const PF = "http://localhost:5000/images/"

	const handleLogout = () => {
		dispatch({ type: "LOGOUT" });
	};
  return (
	<div className="top">
		<Container className="d-flex">
			<div className="topCenter">
				<ul className="topList">
				<li className="topListItem">
					<Link className="link" to="/">
					home
					</Link>
				</li>
				<li className="topListItem">
					<Link className="link" to="/about">
					about
					</Link>
				</li>
				<li className="topListItem">
					<Link className="link" to="/contact">
					contact
					</Link>
				</li>
				<li className="topListItem">
					<Link className="link" to="/write">
					write
					</Link>
				</li>
				<li className="topListItem" onClick={handleLogout}>
					{user && "LOGOUT"}
				</li>
				</ul>
			</div>

			<div className="topRight">
				{user ? (
				<Link to="/settings">
					<img className="topImg" src={PF+user.profilePic} alt="" />
				</Link>
				) : (
				<ul className="topList">
					<li className="topListItem">
					<Link className="link" to="/login">
						LOGIN
					</Link>
					</li>
					<li className="topListItem">
					<Link className="link" to="/register">
						REGISTER
					</Link>
					</li>
				</ul>
				)}
				<i className="fas fa-user-cog" style={{marginLeft: "5px"}}></i>
			</div>
		</Container>

		<div className="fixLeft">
			<i className="topIcon fab fa-facebook-square"></i>
			<i className="topIcon fab fa-twitter-square"></i>
			<i className="topIcon fab fa-pinterest-square"></i>
			<i className="topIcon fab fa-instagram-square"></i>
		</div>

	</div>
  );
}
