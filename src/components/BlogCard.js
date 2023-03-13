import React from "react";
import "./BlogCard.scss";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BlogCard = () => {
  let { loading, data, error } = useFetch(
    `${process.env.React_App_REACT_APP_URL_API}?populate=*`
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( </p>;

  return (
    <div className="bcard">
      <Helmet>
        <title>Tips for IELTS & TOEFL</title>
        <link rel="stylesheet" type="text/css" />
      </Helmet>
      <nav className="hea">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <h1 style={{ cursor: "pointer" }}>Coach Cordel</h1>
        </Link>
      </nav>
      <section id="blog" className="section-100">
        <div className="container">
          <p className="text-center primary-color">
            The latest tips for passing your exams are available at
          </p>
          <h1 className="text-center">
            <b>Coach Cordel's Blog</b>
          </h1>
          <br />
          <br />
          <div className="row">
            {data.map((blog) => (
              <div className="col-md-4" key={blog.id}>
                <div className="blog-card">
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={`/tips/${blog.id}`}
                  >
                    <img
                      src={`${blog.attributes.image.data.attributes.url}`}
                      alt=""
                      className="blog-thumbnail"
                    />
                  </Link>
                  <div className="blog-container">
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={`/tips/${blog.id}`}
                    >
                      {blog.attributes.categories.data.map((c) => (
                        <span className="badge badge-info" key={c.id}>
                          {c.attributes.name}
                        </span>
                      ))}
                      <h4>
                        <b>{blog.attributes.title}</b>
                      </h4>
                      <p className="text-muted">
                        {blog.attributes.desc.substring(0, 150)}...
                      </p>
                    </Link>
                    <hr />
                    <p>
                      By <a href="#!">{blog.attributes.author}</a>{" "}
                      {/* <span className="float-right">3 days ago</span> */}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <br />
          <br />
        </div>
      </section>
      <div className="footer">
        <p>
          {" "}
          <b>
            Phone: +234 806 506 8366, Suite A23 Garima Plaza Arab Road, Kubwa,
            FCT, Nigeria
          </b>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
