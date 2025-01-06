import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailerror, setEmailerror] = useState("");
 
  const navigate = useNavigate();

  const handelsubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Please fill all the details");
      return;
    } else if (!/.*?@?[^@]*\.+.*?/.test(email)) {
      setEmailerror("email is not valid");
    } else {
      alert("Form submitted successfully");
    }
    console.log(name, email);
    navigate("/admin");
  };

  return (
    <>
      <form onSubmit={handelsubmit}>
        <label>Name:</label>
        <input
          type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-sm ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <lable>Email:</lable>
        <input
          type="Email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-sm ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your password"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </>
  );
};
export default Login;
