import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then(response => response.json())
        .then(data => setPost(data))
    },[])
    return (
        <div>
            {
                post.map(post => <Post post = {post} key={post.id}></Post>)
            }
        </div>
    );
};

export default Home;