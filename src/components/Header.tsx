import { MenuIcon } from "lucide-react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserAuthProvider";
import toast from "react-hot-toast";
import supabase from "../supabase/supabase";

let links = [
    {
        linkText: "Restaurants",
        path: "/",
    },
    {
        linkText: "Recipies",
        path: "/",
    },
    {
        linkText: "About",
        path: "/",
    },
    {
        linkText: "Contact",
        path: "/",
    },
];

const Header = () => {
    const navigate = useNavigate();
    const { user } = useUser();
    const logout = async () => {
        try {
            let { error } = await supabase.auth.signOut();

            if (error) {
                throw new Error(error.message);
            }
            toast.success("Logged out");
        } catch (error: any) {
            toast.error(error.message);
        }
    };

    return (
        <div className="py-4 px-4 md:px-[50px] lg:px-[80px]">
            <div className="flex justify-between  items-center">
                <div className="flex items-center gap-2">
                    <img className="h-[30px] w-[30px]" src={logo} alt="" />
                    <h2 className="text-[20px] font-[700] font-inter">
                        Delight <span className="text-[#FF5331]">Food.</span>
                    </h2>
                </div>
                <div className="hidden md:flex gap-4 lg:gap-6 xl:gap-8 ">
                    {links.map((link) => {
                        return (
                            <Link
                                className="transition-all font-normal duration-200 text-[14px] hover:text-[#FF5331]"
                                key={link.linkText}
                                to={link.path}
                            >
                                {link.linkText}
                            </Link>
                        );
                    })}
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-3">
                        {user ? (
                            <button
                                onClick={async () => {
                                    await logout();
                                }}
                                className="text-[14px] bg-[#FF5331] text-white px-4 py-2 rounded-[25px]"
                            >
                                Logout
                            </button>
                        ) : (
                            <>
                                <button
                                    onClick={() => {
                                        navigate("/login");
                                    }}
                                    className="text-[14px]"
                                >
                                    Login
                                </button>
                                <button
                                    onClick={() => {
                                        navigate("/register");
                                    }}
                                    className="text-[14px] bg-[#FF5331] text-white px-4 py-2 rounded-[25px]"
                                >
                                    Signup
                                </button>
                            </>
                        )}
                    </div>
                    <div className="cursor-pointer block md:hidden">
                        <MenuIcon className="stroke-[#FF5331] stroke-[3px] w-[25px] h-[25px] " />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
