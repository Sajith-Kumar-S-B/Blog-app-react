import React from 'react'
import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';

function Pagination({currentPage,pageLimit,getAllUploadedBlogs,allBlogs,totalBlog}) {

  const renderPagination = ()=>{

    if((currentPage===0 && allBlogs.length<5)|| (totalBlog===pageLimit && currentPage===0)){
      return null;
    }

    if(currentPage===0){

      return (
        <MDBPagination center className='mb-0'>
          <MDBPaginationItem>
            <MDBPaginationLink>
              1
            </MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
           
              <Button className='btn' rounded onClick={()=>getAllUploadedBlogs(5,10,1)}>Next</Button>
           
          </MDBPaginationItem>


        </MDBPagination>
      )

    }else if(currentPage<pageLimit-1 && allBlogs.length===pageLimit && totalBlog - allBlogs.length != pageLimit){
     return(
      <MDBPagination center className='mb-0'>
     
      <MDBPaginationItem>
        
          <Button className='btn' rounded onClick={()=>getAllUploadedBlogs((currentPage-1)*5,currentPage * 5,-1)}>Prev</Button>
        
      </MDBPaginationItem>
      <MDBPaginationItem>
        <MDBPaginationLink>
          {currentPage + 1}
        </MDBPaginationLink>
      </MDBPaginationItem>
      <MDBPaginationItem>
        
        <Button className='btn' rounded onClick={()=>getAllUploadedBlogs((currentPage+1)*5,(currentPage + 2) * 5,1)}>Next</Button>
      
    </MDBPaginationItem>


    </MDBPagination>
     )

    }else{
      return(
        <MDBPagination center className='mb-0'>
     
        <MDBPaginationItem>
          
            <Button className='btn' rounded  onClick={()=>getAllUploadedBlogs((currentPage-1)*5,currentPage * 5,-1)}>Prev</Button>
          
        </MDBPaginationItem>
        <MDBPaginationItem>
        <MDBPaginationLink>
          {currentPage + 1}
        </MDBPaginationLink>
      </MDBPaginationItem>
        </MDBPagination>

      )
    }
  }
  return (
    <div className='mb-3'>{renderPagination()}</div>
  )
}

export default Pagination