import { useEffect, useState } from "react"
// import { TailSpin } from 'react-loader-spinner' // Import TailSpin here
import BlogItem from "./blogitem"
const BlogData=()=>{
    const [isLoading,setLoading]=useState(true)
    const [blogData,setBlogData]=useState([])
    useEffect(()=>{
        getBlogsData();
    },[])
    const getBlogsData=async()=>{
        try{
            const response = await fetch('https://apis.ccbp.in/blogs');
            const data= await response.json();
            const formattedData=data.map((each)=>({
                id:each.id,
                title:each.title,
                imageUrl:each.image_url,
                avatarUrl:each.avatar_url,
                author:each.author,
                topic:each.topic
            }))
            // console.log(formattedData)
            setBlogData(formattedData);
            setLoading(false);
        }
        catch(error){
            console.log('Error Fetching Data:',error);
            setLoading(false)
        }

    }
    return (
        <div>
          <ul>
          { !isLoading&& blogData.map(eachItem => (
              <BlogItem key={eachItem.id} blogItemDetails={eachItem} />
            ))}
          </ul>
        </div>
      );
    };
export default BlogData