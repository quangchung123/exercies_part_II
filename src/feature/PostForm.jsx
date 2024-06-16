import React, { useState } from 'react';
import {createPostApi} from "../services/postApi";
import {BASE_URL} from "../config/api";
import {useNavigate} from "react-router-dom";
import '../styles/form.css';

const initState = {
	userId: '',
	id: '',
	title: '',
	body: ''
}
const PostForm = ({ onSubmit }) => {
	const [formData, setFormData] = useState(initState);
	const navigate = useNavigate();
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await createPostApi(BASE_URL, formData);
		setFormData(initState);
		navigate("/", { state: { newPostCreated: true } });
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>User ID:</label>
				<input
					type="number"
					name="userId"
					required
					value={formData.userId}
					onChange={handleChange}
				/>
			</div>
			<div>
				<label>ID:</label>
				<input
					type="number"
					name="id"
					required
					value={formData.id}
					onChange={handleChange}
				/>
			</div>
			<div>
				<label>Title:</label>
				<input
					type="text"
					name="title"
					required
					value={formData.title}
					onChange={handleChange}
				/>
			</div>
			<div>
				<label>Body:</label>
				<textarea
					name="body"
					required
					value={formData.body}
					onChange={handleChange}
				/>
			</div>
			<button type="submit">Submit</button>
		</form>
	);
};

export default PostForm;
