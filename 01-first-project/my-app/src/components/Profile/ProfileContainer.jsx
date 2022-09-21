import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile } from "../../redux/profile-reducer";
import withRouter from "../../assets/withRouter";
import { useParams } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 2;
    }
    axios.get(`https://dummyjson.com/users/${userId}`).then((response) => {
      this.props.setUserProfile(response.data);
    });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

// коннект работает с store, а в классе компоненты контейнера происходит запрос на сервер
export default connect(mapStateToProps, { setUserProfile })(
  WithUrlDataContainerComponent
);
