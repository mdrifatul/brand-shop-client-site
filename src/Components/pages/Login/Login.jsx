import { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';


const Login = () => {
  const {login, signInWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate(); 
    const [loginError, setLoginError] = useState("");
    const location = useLocation();

  const handleLogin = e =>{
    e.preventDefault();
    const form = new FormData(e.currentTarget)
    const email = form.get('email');
    const password = form.get('password');
    setLoginError('')

    login(email, password)
    .then(result =>{
        console.log(result.user);
        e.target.reset();
        navigate(location?.state ? location.state : '/')
    })
    .catch(error =>{
        console.error(error);
        setLoginError('The email address and password is wrong.')
    })   
}

const handleGoogleSignin = () =>{
  signInWithGoogle()
  .then(result =>{
    console.log(result.user);
    console.log(location);
    navigate(location?.state ? location.state : '/')
  })
  .catch(error =>{
    console.error(error);
  })
}

  return (
    <>
      <div data-aos='zoom-in' >
        <h2 className="text-3xl my-3 text-center">Login</h2>
        <form onSubmit={handleLogin} className="w-4/5 md:w-2/4 lg:w-1/3  mx-auto">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" required name="password" placeholder="Password" className="input input-bordered" />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-success text-white">Login</button>
            </div>
        </form>
        {loginError && <p className="text-red-600 text-center text-red mt-2">{loginError}</p>}
        <p className="text-center mt-4">Do not have an account? <Link className="text-red-500 font-bold" to="/register">Register</Link></p>
        <hr className="w-3/5 mx-auto my-3 "/>
        <div className="flex justify-center items-center ">
        <button onClick={handleGoogleSignin} className="mx-auto btn border-blue  w-fit ">
            <FcGoogle className="text-blue text-2xl"></FcGoogle>
            Login with Google
        </button>
        </div>
    </div>
    </>
  );
};

export default Login;