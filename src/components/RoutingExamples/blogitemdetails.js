import React, { useEffect, useState } from 'react';
// import Loader from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './blogitemdetails1.css';
import { useParams } from 'react-router-dom';

// import './index.css';

const BlogItemDetails = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getBlogItemData();
  }, []);

  const getBlogItemData = async () => {
    try {
      const response = await fetch(`https://apis.ccbp.in/blogs/${id}`);
      const data = await response.json();
      const updatedData = {
        title: data.title,
        imageUrl: data.image_url,
        content: data.content,
        avatarUrl: data.avatar_url,
        author: data.author,
      };
      console.log(updatedData)
      setBlogData(updatedData);
      setLoading(false);
    } catch (error) {
      console.log('Error Fetching Data:', error);
      setLoading(false);
    }
  };

  const renderBlogItemDetails = () => {
    const { title, imageUrl, content, avatarUrl, author } = blogData;

    return (
      <div className="blog-info">
        <h1 className="blog-details-title">{title}</h1>

        <div className="author-details">
          <img className="author-pic" src={avatarUrl} alt={author} />
          <p className="details-author-name">{author}</p>
        </div>

        <img className="blog-image" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    );
  };

  return (
    <div className="blog-container">
      {
        !isLoading && renderBlogItemDetails()
      }
    </div>
  );
};

export default BlogItemDetails;
