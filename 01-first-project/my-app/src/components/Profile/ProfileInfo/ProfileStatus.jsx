import React from "react";
import styles from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  }
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    // хардкодим айди чтобы позже полностью убрать параметр айди из функции
    this.props.updateStatus(2, this.state.status);
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    }); 
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      });
    }
  }

  render() {
    return (
      <div className={styles.status}>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status || "-----"}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
            onChange={this.onStatusChange}
              type="text"
              value={this.state.status}
              onBlur={this.deactivateEditMode}
							autoFocus={true}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
