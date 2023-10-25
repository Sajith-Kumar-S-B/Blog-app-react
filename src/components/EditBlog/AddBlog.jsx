import React, { useEffect, useState } from 'react'
import './AddBlog.css'
import { Button} from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { MDBInput } from 'mdb-react-ui-kit';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { getABlog, updateBlog, uploadBlog } from '../../services/allAPI';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';


const options = ["Travel","Fashion","Tech","Fitness","Sports","Food","Movies"]

const initialState = {title:'',description:'',image:'',category:''}
   
function AddBlog() {
      
    const [blog,setBlog]= useState({title:'',description:'',image:'',category:''})
    const [editBlog,setEditBlog] = useState(false)
    const{title,description,category,image} = blog
   const navigate = useNavigate()

  const {id} = useParams();



  useEffect(()=>{
    if(id){
      getEditBlog(id)
    }else{
      setEditBlog(false);
      setBlog({...initialState})
    }

  },[id])

  const getEditBlog = async (id)=>{

    const singleBlog = await getABlog(id)
  
    if(singleBlog.status>=200 && singleBlog.status<300){
      // set server response

      setBlog({...singleBlog.data});
      setEditBlog(true)

    
    }else{
      toast.error('Something went wrong')
    }



  }

    const getDate=()=>{
      let today = new Date()

      const timeStamp = new Intl.DateTimeFormat('en-US',{year:'numeric', month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit', second:'2-digit'}).format(today)
      return timeStamp;   
    }
   
    const handleUpload = async (e)=>{
         e.preventDefault()

         const imageValidation = !editBlog?image:true;

      if(title && description && image && category){
        const currentDate = getDate()


        // make api call
       if(!editBlog){

        const updatedBlogData = {...blog,date:currentDate}

        const response = await uploadBlog(updatedBlogData)
        // console.log(response);

        if(response.status>=200 && response.status<300){
          // set server response
          toast.success(`"${response.data.title}" Blog created successfully`)

         
        
        }else{
          toast.error('Uploading error.. Perform the action afer sometime.')
        }
      }else{

        const response = await updateBlog(id,blog)
        // console.log(response);

        if(response.status>=200 && response.status<300){
          // set server response
          toast.success(`"${response.data.title}" Blog updated successfully`)

         
        
        }else{
          toast.error('Uploading error.. Perform the action afer sometime.')
        }

      }

        setBlog({title:'',description:'',image:'' ,category:''});

        
        navigate('/blogs')
       
       
       
      }else{

        toast.warning("Please fill  the  details completely")

      }


    }

   


    const extractImg = (file)=>{
        
  console.log("files",file);
      const formData = new FormData()
      formData.append("file",file)
      formData.append("upload_preset","yk8wyexe");
       axios.post("http://api.cloudinary.com/v1_1/duigzjl5o/image/upload",formData).then((resp)=>{
        toast.info("Image Uploaded")
        setBlog({...blog,image:resp.data.url})
      
       }).catch((err)=>{
        toast.error('Something went wrong..')

       });
         
    }
    


    

    
  return (
    <div className='addblog '>
     <div className='addblog-content'>
       
              <h1 className='text-center'>{editBlog?"Update Blog" :"Add Blog"}</h1>
           <Form className='contact-form ' onSubmit={handleUpload}>
         
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control className='mb-3' onChange={(e)=>setBlog({...blog,title:e.target.value})} type="text" value={title || ""} placeholder="Enter Video Caption" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Description</Form.Label>
          <Form.Control
          className='contact__form-area'
          onChange={(e)=>setBlog({...blog,description:e.target.value})}
            as="textarea"
            value={description || ""}
            
            style={{ height: '11rem' }}
          />
        </Form.Group>
      
        {!editBlog && <Form.Group className="position-relative mb-3">
            <Form.Label>Image</Form.Label>
            <MDBInput
              type="file"
              validation='Please enter title'
              onChange={(e)=>extractImg(e.target.files[0])}
              invalid
              
            />
            
          </Form.Group>}
          <select className='category-dropdown w-100' onChange={(e)=>setBlog({...blog,category:e.target.value})} value={category} >
           <option>
            Select Category
           </option>
           {options.map((option,index)=>(
            <option key={index} value={option || ""}>
              {option}
            </option>
           ))}
          </select>

          <div className='buttons d-flex justify-content-between mt-3'>
             <Button type='submit'  >{editBlog?"Update" :"Upload"}</Button>
             <Button  onClick={()=>navigate("/")}>Back to Home</Button>
  
           </div>
      
           </Form>
          
           <ToastContainer position='top-center'
        theme='colored' autoClose={2000} />
     </div>
    </div>
  )
}

export default AddBlog