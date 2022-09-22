import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/auth-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .post(`https://dummyjson.com/auth/login`, {
        withCredentials: true,
        username: "kminchelle",
        password: "0lelplR",
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          let {email, id, username} = response.data;
          this.props.setAuthUserData(id, email, username);
          console.log(id, email, username);
        }
      });
  }

  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

export default connect(mapStateToProps, {
  setAuthUserData,
})(HeaderContainer);
