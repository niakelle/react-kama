import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import ChecklistContainer from "./components/Checklist/ChecklistContainer";
import Login from "./components/Login/Login";
import { connect, Provider } from "react-redux";
import withRouter from "./components/common/WithRouter/withRouter";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render () {
    if(!this.props.initialized) {
      return <Preloader />
    }

    return (

        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar navbarData={store.getState().navbar}/>
          <div className="app-wrapper-content">
            <Routes>
              <Route path="/profile" element={<ProfileContainer />}> 
                <Route path=":userId" element={<ProfileContainer />}/>
              </Route>
              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/checklist" element={<ChecklistContainer />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>

    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = withRouter(connect(mapStateToProps, {initializeApp})(App));

let WithBrowserRouterApp = (props) => {
  return (<BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>)
}
export default WithBrowserRouterApp;