import React from "react";
import Preloader from "../common/Preloader/Preloader";
import Checklist from "./Checklist";
import { connect } from "react-redux";
import {
  getTodos,
  onTodosChange,
  toggleCompleted,
} from "../../redux/checklist-reducer";

class ChecklistContainer extends React.Component {
  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Checklist
            todos={this.props.todos}
            toggleCompleted={this.props.toggleCompleted}
            onTodosChange={this.props.onTodosChange}
          />
        )}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    todos: state.checklistPage.todos,
    isFetching: state.checklistPage.isFetching,
    onTodosChange: onTodosChange
  };
};


export default connect(mapStateToProps, {
  toggleCompleted,
  getTodos,
  onTodosChange
})(ChecklistContainer);
