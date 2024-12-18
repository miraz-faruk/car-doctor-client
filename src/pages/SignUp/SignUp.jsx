import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import login from "../../assets/images/login/login.svg"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {

    const { createUser } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.log(error))
    };

    return (
        <div className="h-[782px] w-full mx-auto mb-10">
            <div className="flex flex-row mx-12 items-center justify-center">
                <div className="w-1/2">
                    <img src={login} alt="" />
                </div>
                <div className="w-1/2 px-16 py-8 border rounded-lg">
                    <h1 className="text-4xl font-semibold text-center text-[#444444] mb-8">Sign Up</h1>
                    <form onSubmit={handleSignUp}>
                        <div className="form-control mb-3">
                            <label className="label">
                                <span className="label-text text-lg font-semibold text-[#444444]">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your name" className="input input-bordered rounded-[10px]" required />
                        </div>
                        <div className="form-control mb-3">
                            <label className="label">
                                <span className="label-text text-lg font-semibold text-[#444444]">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Your email" className="input input-bordered rounded-[10px]" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-semibold text-[#444444]">Confirm Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF3811] text-white text-xl font-semibold">Sign Up</button>
                        </div>
                        <p className="font-medium text-lg text-[#444444] text-center my-5">or Sign In with</p>
                        <div className="flex justify-center gap-4">
                            <button className="bg-[#F5F5F8] rounded-full p-5 text-[#3B5998] text-lg"><FaFacebookF /></button>
                            <button className="bg-[#F5F5F8] rounded-full p-5 text-[#0A66C2] text-lg"><FaLinkedinIn /></button>
                            <button className="bg-[#F5F5F8] rounded-full p-5 text-lg"><FcGoogle /></button>
                        </div>
                    </form>
                    <p className="text-lg font-lg text-[#737373] text-center mt-6">Have an account? <Link className="text-[#FF3811]" to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;