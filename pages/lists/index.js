import React from "react";
import styles from "../../styles/Lists.module.css";
import Link from "next/link";
export const getStaticProps = async () => {
  const res = await fetch("https://dummyjson.com/posts/");
  const data = await res.json();

  return {
    props: { posts: data },
  };
};

const Lists = ({ posts }) => {
  return (
    <div>
      {posts.posts.map((post) => (
        <Link href={"/lists/" + post.id} key={post.id}>
          <a className={styles.single}>
            <h2> {post.title} </h2>
            <p className="body"> {post.body} </p>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Lists;
