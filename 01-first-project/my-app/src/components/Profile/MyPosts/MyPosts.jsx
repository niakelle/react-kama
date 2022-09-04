import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  //all objects from postData array here are converted to an array with jsx elements
  let postElements = props.postData.map((p) => (
    <Post message={p.message} likes={p.likes} />
  ));
  // !!! законспектировать
  let newPostElement = React.createRef();

  // called onClick button
  let onAddPost = () => {
    props.addPost();
  };
  // called onChange textarea.value
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={styles.postsBlock}>
      <h2>My posts</h2>
      <div>
        <div>
          <textarea
            ref={newPostElement}
            onChange={onPostChange}
            value={props.newPostText}
            placeholder="Type your thoughts here..."
            className={styles.textarea}
          />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
