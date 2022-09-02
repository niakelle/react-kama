import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
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
  let addPost = () => {
    //props.addPost();
    props.dispatch(addPostActionCreator());
  };
  // called onChange textarea.value
  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
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
            cols="30"
            rows="3"
          />
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
