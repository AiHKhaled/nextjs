import React from "react";
import styles from "../../styles/Lists.module.css";

export const getStaticPaths = async () => {
  const res = await fetch("https://dummyjson.com/posts/");
  const data = await res.json();
  const paths = data.posts.map((post) => {
    return {
      params: { id: post.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  const data = await res.json();
  return {
    props: { post: data },
  };
};

const Details = ({ post }) => {
  return (
    <div className={styles.details} key={post.id}>
      <h2 className={styles.title}>{post.title}</h2>
      <p className={styles.body}> {post.body} </p>
      <div className={styles.tags}>
        {post.tags.map((tag) => {
          if (tag === "french" || tag === "english") {
            return (
              <span
                style={{ backgroundColor: "aquamarine" }}
                key={tag.id}
                className={styles.tag}
              >
                {tag}
              </span>
            );
          } else
            return (
              <span key={tag.id} className={styles.tag}>
                {tag}
              </span>
            );
        })}
      </div>
    </div>
  );
};

export default Details;
