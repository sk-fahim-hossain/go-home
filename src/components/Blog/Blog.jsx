import React from 'react';
import { blogData } from '../../../Data';
import { Link } from 'react-router-dom';

const Blog = () => {
    const year = new Date()
    const currentYear = year.getFullYear()
    console.log(year.getFullYear())
    const blogs = blogData

    return (
        <div>
            <main>
                <div className="container py-4">
                    <header className="pb-3 mb-4 border-bottom">
                        <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
                            <span className="fs-4">Blogs</span>
                        </a>
                    </header>

                    <div className="p-5 mb-4 bg-light rounded-3">
                        <div className="container-fluid py-5">
                            <h1 className="display-5 fw-bold">Tricks for using the right way GoHome Application</h1>
                        </div>
                    </div>

                    <div style={{display:"grid", gap:"10px",gridTemplateColumns:"1fr 1fr"}} >
                        {
                            blogs.map((blog, index) => (
                                <div className="col-md-6" style={{width:"100%"}}>
                                    <div className="h-100 p-5 text-black bg-light rounded-3">
                                        <h2>{blog.title}</h2>
                                        <p>{blog.description}</p>
                                        <button className="btn btn-outline-dark" type="button"><Link to={`/blog/${blog.id}`} style={{textDecoration:'none'}}>Read More</Link></button>
                                    </div>
                                </div>
                            ))
                        }
                        

                    </div>
                   

                    <footer className="pt-3 mt-4 text-muted border-top">
                        © {currentYear}
                    </footer>
                </div>
            </main>
        </div>
    );
};

export default Blog;