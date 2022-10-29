import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
  postData: [
    { id: 1, message: "Hi, how are you?", likes: 15 },
    { id: 2, message: "It's my first post", likes: 20 },
  ],
}

it('length of postData [] should be incremented', () => {
  // 1. test data
  let action = addPostActionCreator("new post test creation")

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.postData.length).toBe(3);
});

it('message should be correct', () => {
  // 1. test data
  let action = addPostActionCreator("new post test creation")

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.postData[2].message).toBe("new post test creation");
});

it('after deleting length should be decremented', () => {
  // 1. test data
  let action = deletePost(1);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.postData.length).toBe(1);
});

it("after deleting length shouldn't be decremented if id is incorrect", () => {
  // 1. test data
  let action = deletePost(1000);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.postData.length).toBe(2);
});