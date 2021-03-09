import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setPost(data))
    },[]);

    useEffect(() => {
        const url =`https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setComments(data))
    },[])

    const {title, body } = post;
    return (
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
            <h4>Number of comment: {comments.length}</h4>
            {
                comments.map(comment => <Comment comment={comment}></Comment>)
            }
        </div>
    );
};

export default PostDetail;