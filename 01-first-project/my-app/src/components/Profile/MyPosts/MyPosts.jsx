import React from "react";
import { Field, reduxForm } from "redux-form";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElements = props.postData.map((p) => (
    <Post message={p.message} key={p.id} likes={p.likes} />
  ));

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  return (
    <div className={styles.postsBlock}>
      <h2>My posts</h2>
      <AddNewPostFormRedux  onSubmit={onAddPost}/>
      <div className={styles.posts}>{postElements}</div>
    </div>
  );
};

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
      <Field
        component="textarea"
        name="newPostText"
        placeholder="Type your thoughts here..."
        className={styles.textarea}
      />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

export default MyPosts;
