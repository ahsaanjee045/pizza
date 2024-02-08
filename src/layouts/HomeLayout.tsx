
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const HomeLayout = () => {
    return (
        <div className="">
            <Header/>
            <Outlet />
            {/* Footer */}
        </div>
    );
};

export default HomeLayout;
