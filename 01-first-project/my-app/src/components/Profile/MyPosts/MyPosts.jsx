import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  //all objects from postData array here are converted to an array with jsx elements
  let postElements = props.postData.map((p) => (
    <Post message={p.message} likes={p.likes} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  };

  return (
    <div className={styles.postsBlock}>
      <h2>My posts</h2>
      <div>
        <div>
          <textarea ref={newPostElement} cols="30" rows="3"></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
