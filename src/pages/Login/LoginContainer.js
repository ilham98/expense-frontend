import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAuth, authAct } from "../../redux/reducers/authReducer";
import LoginView from "./LoginView";
import { useForm } from "react-hook-form";
import "../../App.scss";

function LoginContainer() {
  const credentials = useSelector(selectAuth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: credentials,
  });

  const onSubmitClick = (values) => {
    dispatch(authAct(values));
  };

  return (
    <LoginView
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
      credentials={credentials}
      onSubmitClick={onSubmitClick}
    />
  );
}

export default LoginContainer;
