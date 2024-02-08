import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, Navigate } from "react-router-dom";
import supabase from "../../supabase/supabase";
import { useUser } from "../../context/UserAuthProvider";
import logo from "../../assets/logo.png"

const Register = () => {
    const { user } = useUser();
    const [loading, setLoading] = useState(false);
    const [registerData, setRegisterData] = useState({
        fullName: "",
        email: "",
        password: "",
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (
            !registerData.email ||
            !registerData.fullName ||
            !registerData.password
        ) {
            toast.error("Please fill in the complete registration form!");
            return;
        }
        try {
            let { data, error } = await supabase.auth.signUp({
                email: registerData.email,
                password: registerData.password,
                options: {
                    data: {
                        fullName: registerData.fullName,
                    },
                },
            });

            if (error) {
                console.log("Error while registering user", error.message);
                throw new Error(error.message || "Something went wrong");
            }

            if (data) {
                console.log(data); //
                toast.success(
                    "Registration Completed! Please check your email to confirm your registration."
                );
            }
        } catch (error: any) {
            toast.error(error.message || "Error while registering user");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value,
        });
    };

    console.log("User in register page", user);
    if (user) {
        return <Navigate to={"/"} />;
    }

    return (
        <div className="h-screen flex items-center justify-center px-[30px]">
            <div className="bg-white w-full sm:w-2/3 md:w-3/5 lg:w-2/5 mx-auto h-fit rounded-2xl shadow-2xl">
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-5 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="bg-[#F2EBDA] mx-auto h-[70px] w-[70px] rounded-full flex items-center justify-center">
                            <img
                                className="mx-auto h-[40px] w-auto my-4"
                                src={logo}
                                alt="Your Company"
                            />
                        </div>
                        <h2 className="mt-7 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Create your new account
                        </h2>
                    </div>

                    <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="w-full">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium leading-6 text-gray-900 m-0"
                                >
                                    Full Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="fullName"
                                        name="fullName"
                                        type="text"
                                        value={registerData.fullName}
                                        onChange={handleChange}
                                        className=" pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="w-full">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium leading-6 text-gray-900 m-0"
                                >
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={registerData.email}
                                        onChange={handleChange}
                                        className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="w-full">
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="password"
                                        className=" m-0 block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Password
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={registerData.password}
                                        onChange={handleChange}
                                        className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="w-full">
                                <button
                                    disabled={loading}
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    {loading ? "Registering..." : "Sign Up"}
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Already Have an Account?{" "}
                            <Link
                                to="/login"
                                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                            >
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
