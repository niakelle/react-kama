import axios from "axios";
import React from "react";
import Preloader from "../common/Preloader/Preloader";
import Checklist from "./Checklist";
import { connect } from "react-redux";
import { setTodosData, toggleIsFetching } from "../../redux/checklist-reducer";

class ChecklistContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get("https://dummyjson.com/todos?limit=5", {}).then((response) => {
      this.props.toggleIsFetching(false);
      this.props.setTodosData(response.data.todos);
      console.log(response.data.todos);
    });
  }

	onCheck = (checkboxId) => {
		
	}

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Checklist todos={this.props.todos} />
        )}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    todos: state.checklistPage.todos,
    isFetching: state.checklistPage.isFetching,
  };
};

export default connect(mapStateToProps, {
  setTodosData,
  toggleIsFetching,
})(ChecklistContainer);