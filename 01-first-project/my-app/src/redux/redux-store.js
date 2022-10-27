import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import profileReducer from "./profile-reducer";
import usersReduser from "./users-reducer";
import checklistReducer from "./checklist-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer} from "redux-form";
import appReducer from "./app-reducer";

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	navbar: navbarReducer,
	usersPage: usersReduser,
	auth: authReducer,
	checklistPage: checklistReducer,
	form: formReducer,
	app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;