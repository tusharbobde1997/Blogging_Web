import { useContext, useState } from "react";
import { useEffect } from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../../context/Context";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const [cats, setCats] = useState([]);
  useEffect(() => {
	const getCats = async () => {
		const res = await axios.get("/categories");
		setCats(res.data);
	};
	getCats();
  }, []);

  const handleSubmit = async (e) => {
	e.preventDefault();
	const newPost = {
		username: user.username,
		category: e.target.categorySelect.value,
		title,
		desc,
	};
	if (file) {
	  const data =new FormData();
	  const filename = Date.now() + file.name;
	  data.append("name", filename);
	  data.append("file", file);
	  newPost.photo = filename;
	  try {
		await axios.post("/upload", data);
	  } catch (err) {}
	}
	try {
	  const res = await axios.post("/posts", newPost);
	  window.location.replace("/post/" + res.data._id);
	} catch (err) {}
  };
  return (
	  <Container className="resp-mtb">
		<div className="write">
		{file && (
			<img className="writeImg" src={URL.createObjectURL(file)} alt="" />
		)}
			<form className="writeForm" onSubmit={handleSubmit}>
				<div className="writeFormGroup write-top-fields">

				<div>
					<h5 style={{display: "inline", marginRight: "10px"}}>Choose Category</h5>
					<select id="categorySelect" name="category">
						{cats.map((obj)=>{ return <option key={obj.name} value={obj.name}>{obj.name}</option>})}
					</select>
				</div>

				<div>
					<h5 style={{display: "inline", marginRight: "10px"}}>Upload Image</h5>
					<label htmlFor="fileInput">
						<i className="writeIcon fas fa-plus"></i>
					</label>
				</div>

				<input
					type="file"
					id="fileInput"
					style={{ display: "none" }}
					onChange={(e) => setFile(e.target.files[0])}
				/>
				<input
					type="text"
					placeholder="Title"
					className="writeInput"
					autoFocus={true}
					onChange={e=>setTitle(e.target.value)}
				/>
				</div>
				<div className="writeFormGroup">
				<textarea
					placeholder="Tell your story..."
					type="text"
					className="writeInput writeText"
					rows="6"
					onChange={e=>setDesc(e.target.value)}
				></textarea>
				</div>

				<Button variant="primary" className="writeSubmit" type="submit">Publish</Button>
			</form>
		</div>
	  </Container>
  );
}
