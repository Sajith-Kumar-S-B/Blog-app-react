import { commonApi } from "./commonApi"
import { serverURL } from "./serverURL"



// uploading a video
export const uploadBlog = async (body)=>{
//    call post http request to http://localhost:4000 to add blog in json server return response to Add  blog  component 
  return await commonApi('POST',`${serverURL}/blogs`,body)

}

// getting all videos

export const getAllBlogs = async ()=>{
  //    call get http request to http://localhost:4000/blogs to get blogs from json server return response to blog component 
    return await commonApi('GET',`${serverURL}/blogs`,"")
  
  }


  // delete a single  video

export const deleteABlog = async (id)=>{
  //    call delete http request to http://localhost:4000/blogs/id to delete a blog from json server return response to Blog component 
    return await commonApi('DELETE',`${serverURL}/blogs/${id}`,{})
  
  }



  // get a single  blog

export const getABlog = async (id)=>{
  //    call get http request to http://localhost:4000/blogs/id to get a video from json server return response to addblog component 
    return await commonApi('GET',`${serverURL}/blogs/${id}`,'')
  
  }


  // update blog

  export const updateBlog = async (id,body)=>{
    //    call put http request to http://localhost:4000/blogs/id to update a blog from json server return response to blog component 
      return await commonApi('PUT',`${serverURL}/blogs/${id}`,body)
    
    }
