import {Link} from 'react-router-dom'; 
import './blogitem.css';
const BlogItem=(props)=>{
    console.log("blog is r3ndering")
    const {blogItemDetails}=props
    const {id, imageUrl, topic, title, avatarUrl, author} = blogItemDetails
        return(
        <li className='blog-item'>
            <Link to={`/blogs/${id}`} className="blog-item-link">
                <div className='blog-item-container'>
                    <img className='blog-item-image' src={imageUrl} alt={`item${id}`}></img>
                    <div className='blog-item-info'>
                    <p className='blog-item-topic'>{topic}</p>
                    <h1 className='blog-item-title'>{title}</h1>
                    <div className='author-info'>
                    <img className='avatar' src={avatarUrl} alt={`avatar:${id}`}></img>
                    <p className='author-name'>{author}</p>
                </div>
                </div>
                </div>
            </Link>
            {console.log(topic)}
        </li>
    )
}
export default BlogItem