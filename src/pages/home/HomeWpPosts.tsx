import React, { useState, useEffect } from "react";
import axios from "axios";

import CardWpPost from "../../components/cards/CardWp";
import SpinnerLoading from "../../components/spinner/SpinnerLoading";

import "./../../css/styles.css";

type Post = {
  id: number;
  featured_image_large: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  link: string;
};

type axiosError = {
  response: {
    data: object;
  };
};

const HomeWpPosts = () => {
  const [isLoading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const getWpPosts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_BLOG_ORIGIN}/wp-json/wp/v2/posts?per_page=3&lang=fr`
      );
      setPosts(response.data);
      setLoading(false);
    } catch (err) {
      // setErrorMessage(err.response.data.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getWpPosts();
  }, []);

  return (
    <div className="WpPosts container-fluid">
      {isLoading && <SpinnerLoading asOverlay />}
      <div className="WpPosts__intro container">
        <h1 className="">Nos derniers articles</h1>
        <p>
          Un aperçu de la vie de l’Association Franco-Vietnamienne de
          Pneumologie ! Retrouvez ici les derniers articles de notre blog, en
          français et en vietnamien. Sur le blog, vous pourrez parcourir les
          onglets pour découvrir nos différents domaines d’activité, notre
          histoire...
        </p>
      </div>
      <div className="WpPosts__posts container">
        {posts.length && (
          <div className="WpPosts__cards row">
            {posts.map((post: Post) => (
              <CardWpPost
                key={post.id}
                image={post.featured_image_large}
                title={post.title.rendered}
                excerpt={post.excerpt.rendered}
                link={post.link}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeWpPosts;
