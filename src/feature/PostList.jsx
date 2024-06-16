import React, { useEffect, useState } from 'react';
import { getPostApi } from "../services/postApi";
import MyTable from "../components/MyTable";
import { useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "../config/api";

const PostList = () => {
    const [postList, setPostList] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    // Function to handle navigation to the PostForm component
    const handleNavigateForm = () => {
        navigate('/create');
    }
    const fetchPosts = async () => {
        const result = await getPostApi(`${BASE_URL}/posts`);
        setPostList(result);
    }

    // useEffect to fetch posts on component mount
    useEffect(() => {
        fetchPosts();
    }, []);

    // useEffect to re-fetch posts if a new post has been created
    useEffect(() => {
        if (location.state && location.state.newPostCreated) {
            fetchPosts();
        }
    }, [location.state]);

    return (
      <div>
          <button onClick={handleNavigateForm}>Create New</button>
          <MyTable dataTable={postList} />
      </div>
    );
};

export default PostList;
