import logo from "../assets/logo.png";

const Header = () => {
    return (
        <div className="py-4 px-4">
            <div className="flex items-center gap-2">
                <img className="h-[30px] w-[30px]" src={logo} alt="" />
                <h2 className="text-[23px] font-[700] font-inter">Delight Food.</h2>
            </div>
        </div>
    );
};

export default Header;
