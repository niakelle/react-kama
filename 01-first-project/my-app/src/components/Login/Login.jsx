import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import style from "./../common/FormsControls/FormsControls.module.css";

const LoginForm = ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          placeholder={"Login"}
          name={"login"}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          name={"password"}
          type={"password"}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={Input} />
        remember me
      </div>
      {error && <div className={style.formSummaryError}>
        {error}
      </div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

// название этой конкретной формы "login"
const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.login, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Navigate to={"/profile"} />
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login} )(Login);
