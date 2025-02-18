import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form submitted", email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="outline-none text-xl bg-transparent border-2 border-emerald-600 py-3 px-5 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter your Email"
          />
          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="outline-none text-xl bg-transparent border-2 border-emerald-600 py-3 px-5 mt-3 rounded-full placeholder:text-gray-400"
            type="password"
            placeholder="Enter your Password"
          />
          <button
            className="mt-5 outline-none text-xl border-none bg-emerald-600 py-3 px-5 rounded-full cursor-pointer placeholder:text-white"
            type="submit"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
