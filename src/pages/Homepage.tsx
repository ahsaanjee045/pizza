import toast from "react-hot-toast";
import supabase from "../supabase/supabase";

const Homepage = () => {
    const logout = async () => {
        try {
            let { error } = await supabase.auth.signOut();

            if (error) {
                throw new Error(error.message);
            }
            toast.success("logged out");
        } catch (error: any) {
            toast.error(error.message);
        }
    };

    return (
        <div className="bg-black text-white">
            Hello
        </div>
    );
};

export default Homepage;
