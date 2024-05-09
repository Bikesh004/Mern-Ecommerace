import React, { useState } from "react";
import loginIcon from "../assest/signin.gif";
// import Image from "../assest/loginimage.jpg";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section id="login">
      <div className="mx-auto conatainer p-4">
        <div className="bg-white p-2 py-6 w-full rounded mx-auto max-w-md">
          <div className="w-20 h-20 mx-auto">
            <img src={loginIcon} alt="login icons" />
          </div>

          <form>
            <div className="">
              <label> Email :</label>
              <div className="bg-slate-100 p-2">
                <input
                  type="text"
                  placeholder="Enter Mail Id...."
                  className="w-full h-full bg-transparent outline-none"
                />
              </div>
            </div>
            <div className="">
              <label> Password :</label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type={showPassword ? "" : "password"}
                  placeholder="Enter password..."
                  className="w-full h-full bg-transparent outline-none"
                />
                <div className="cursor-pointer text-xl" onClick={()=>setShowPassword((preve)=>!preve)}>
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
              <Link to={'forgetpassword'} className="block w-fit ml-auto hover:underline hover:text-red-600">Forget Password</Link>

            </div>
            <button className="bg-red-600 text-white px-6 py-2 w-full rounded mt-4 mx-auto block cursor-pointer hover:bg-red-900 ">Login</button>
          </form>

          {/* <div>
            <img src={Image} alt="#" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Login;
