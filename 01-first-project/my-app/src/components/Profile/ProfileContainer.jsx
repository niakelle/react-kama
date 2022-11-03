import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  getStatus,
  getUserProfile,
  updateStatus,
} from "../../redux/profile-reducer";
import withRouter from "../common/WithRouter/withRouter";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
    }
    if (userId) {
      this.props.getUserProfile(userId);
      this.props.getStatus(userId);
    }
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.router.params.userId !== prevProps.router.params.userId )
    {this.refreshProfile();}
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.router.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
});

// compose связывает функции по цепочке
export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter
  // withAuthRedirect
)(ProfileContainer);

// коннект работает с store, а в классе компонента контейнера происходит запрос на сервер
