import React, { useRef } from "react";
import { useNavigate } from "react-router";
import useLogin from "../../hooks/useLogin";

const LogIn = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const {
    data: authenticated_user,
    mutate: login,
    isSuccess,
  } = useLogin(() => {
    console.log(
      "Navigate to dashboard in hook although I think it goes somewhere else"
    );
  });

  return (
    <>
      <h2>Login</h2>
      <br />
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (
            emailRef.current &&
            emailRef.current.value &&
            passwordRef.current &&
            passwordRef.current.value
          ) {
            login({
              email: emailRef.current.value,
              password: passwordRef.current.value,
            });
          }
          if (isSuccess) {
            console.log(authenticated_user);
          }
        }}
      >
        <input placeholder="Email" ref={emailRef} type="email" />
        <input
          placeholder="Password"
          ref={passwordRef}
          type="password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LogIn;
