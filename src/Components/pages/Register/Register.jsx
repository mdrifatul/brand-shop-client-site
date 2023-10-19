import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../AuthProvider/AuthProvider";


const Register = () => {

  const { createUser,signInWithGoogle } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    setRegisterError("");


    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/.test(password)) {
      setRegisterError(
        "password should be at least 6 characters, a capital letter and a special character"
      );
    } else {
      createUser(email, password)
        .then((result) => {
          console.log(result.user);
          toast("Successfully Register");
          console.log(location);
          navigate(location?.state ? location.state : '/')
          e.target.reset();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleGoogleSignin = () =>{
    signInWithGoogle()
    .then(result =>{
      console.log(result.user);
      toast("Successfully Register");
      console.log(location);
      navigate(location?.state ? location.state : '/')
    })
    .catch(error =>{
      console.error(error);
    })
  }




  return (
    <div>
      <div data-aos='zoom-in' className="mb-10">
        <h2 className="text-3xl my-3 text-center">Register</h2>
        <form
          onSubmit={handleRegister}
          className="w-4/5 md:w-2/4 lg:w-1/3 mx-auto"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              required
              name="email"
              placeholder="Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              required
              name="password"
              placeholder="Password"
              className="input input-bordered"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-success text-white ">
              Register
            </button>
          </div>
        </form>

        {registerError && (
            <p className="text-red-600  text-center text-red mt-2">{registerError}</p>
          )}
          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link className="text-red-500 font-bold" to="/login">
              Login
            </Link>
          </p>
          <ToastContainer/>
          <hr className="w-3/5 mx-auto my-3 " />
          <div className="flex justify-center items-center ">
            <button onClick={handleGoogleSignin} className="mx-auto btn border-blue  w-fit ">
              <FcGoogle className=" text-2xl"></FcGoogle>
              Login with Google
            </button>
          </div>
          
      </div>
    </div>
  );
};

export default Register;