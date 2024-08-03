import React, { useEffect, useState } from 'react';
import { useNavigate,  useParams } from 'react-router-dom';
import { blogData } from '../../../../Data';




const SingleBlog = () => {
    const [blog, setBlog] = useState({});
    const { id } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        const findBlog = () => {
            const foundBlog = blogData.find(blog => blog.id === parseInt(id));
            setBlog(foundBlog);
        };

        findBlog();
    }, [id, blogData]);
    
    return (
        <div className='container p-4'>
            <p ><span className='p-1 px-4 border rounded cursor-pointer' style={{cursor:'pointer'}} onClick={()=> navigate(-1)}>{'<' +" " +'Back'} </span></p>
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">{blog.title}</h1>
                    <p ><span className='border rounded p-1 mt-2'>{blog.author}</span></p>
                    <h3 className='mt-5'>{blog.description}</h3>
                </div>
            </div>


        </div>
    );
};

export default SingleBlog;