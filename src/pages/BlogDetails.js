import React from "react";
import useFetch from "../hooks/useFetch";
import J from './ielts.png'
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Socials from "../components/Socials";
import './BlogDetails.scss'


const BlogDetails = () => {
  const { id } = useParams();
  let { loading, data, error } = useFetch(
    `${process.env.React_App_REACT_APP_URL_API}/${id}?populate=*`
  );

  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( </p>;
  
  return (
    <div>
      <Helmet>
        <link rel="icon" href={J} />
        <title>{data?.attributes?.title}</title>
        <meta name="description" content={data?.attributes?.title} />

        {/* Facebook tags */}
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={data?.attributes?.title} />
        <meta property="og:description" content={data?.attributes?.title} />
        <meta
          property="og:image"
          content={`${data?.attributes.image.data.attributes.url}`}
        />
        {/* End Facebook tags */}

        {/* Twitter tags */}
        <meta name="twitter:url" content={window.location.href} />
        <meta name="twitter:creator" content={data?.attributes?.author} />
        <meta name="twitter:card" content="article" />
        <meta name="twitter:title" content={data?.attributes?.title} />
        <meta
          name="twitter:description"
          content={data?.attributes?.title}
        />
        <meta
          name="twitter:image"
          content={`${data.attributes.image.data.attributes.url}`}
        />
        {/* End Twitter tags */}
      </Helmet>
      <article className="article">
        <section className="post-header">
          <div className="header-content post-container">
            <Link to={"/tips"} className="back-home">
              Previous page
            </Link>

            <h1 className="header-title">{data?.attributes?.title}</h1>

            <img
              style={{ objectFit: "cover" }}
              src={`${data.attributes.image.data.attributes.url}`}
              alt=""
              className="header-img"
            />
          </div>
        </section>

        <section className="post-content post-container">
          
            <ReactMarkdown>{data.attributes.content}</ReactMarkdown>
          
        </section>

        {/* Share */}
        <footer className="footerf">
          <div className="social-links2">
            <Socials />
          </div>
          <span>Share this article</span>
        </footer>
      </article>
    </div>
  );
};

export default BlogDetails;
