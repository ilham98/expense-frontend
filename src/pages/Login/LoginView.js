import React from "react";
import PropTypes from "prop-types";
import ButtonPrimary from "components/buttons/ButtonPrimary";

const LoginView = (props) => {
  const { credentials, handleSubmit, onSubmitClick, register, errors } = props;
  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-500">
      <div>
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit(onSubmitClick)}
        >
          <div>
            {credentials.username}
            <br />
            {credentials.password}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              {...register("username", {
                required: true,
              })}
            />
            {errors.username && (
              <p className="text-red-500 text-xs italic">
                Please fill your username.
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic">
                Please fill your password.
              </p>
            )}
          </div>
          <div className="flex items-center justify-center">
            <ButtonPrimary>Login</ButtonPrimary>
          </div>
        </form>
      </div>
    </div>
  );
};

LoginView.propTypes = {
  credentials: PropTypes.object,
  errors: PropTypes.object,
  handleSubmit: PropTypes.func,
  onSubmitClick: PropTypes.func,
  register: PropTypes.func,
};

export default LoginView;
