import google from "../assets/google.png";
import appstore from "../assets/appstore.png";
import FoodCard from "../components/FoodCard";
import mcd from "../assets/mcd.png";

export interface FoodItem {
    foodName: string;
    price: number;
    description: string;
    restraurant: string;
    image: string;
}

const Homepage = () => {
    return (
        <div>
            <main className="px-[30px] py-[40px] md:py-[70px] md:px-[50px] lg:px-[80px] ">
                <div className=" w-full max-w-[1050px] mx-auto">
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex flex-col gap-3">
                            <h1 className="text-[#191720] mt-3 text-4xl md:text-[50px] md:leading-[58px] leading-[44px] font-bold font-inter text-center md:text-left">
                                Your Favorite Food Delivery Partner
                            </h1>
                            <p className="text-[15px] mt-3 text-center md:text-left font-normal text-[#191720] font-inter tracking-tight">
                                The food at your doorstep. Why starve when you
                                have us. You hunger partner. Straight out of the
                                oven to your doorstep.
                            </p>
                            <div className="mx-auto w-full my-2 flex justify-center items-center bg-slate-100 py-1 px-3 rounded-[40px] gap-2">
                                <input
                                    className="w-full bg-transparent outline-none border-none pl-3 placeholder:text-[14px] placeholder:text-slate-400 "
                                    type="text"
                                    placeholder="Enter your delivery location"
                                />
                                <button className="bg-[#FF5331] text-nowrap text-white py-3 px-3 rounded-full text-[14px]">
                                    Order Now
                                </button>
                            </div>
                            <div className="flex pl-1 mt-2 items-center gap-6 justify-center md:justify-start">
                                <img
                                    className="h-[50px]"
                                    src={appstore}
                                    alt=""
                                />
                                <img className="h-[50px]" src={google} alt="" />
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="w-full h-full bg-heroImage min-h-[400px] bg-contain bg-no-repeat bg-center"></div>
                        </div>
                    </div>
                </div>
            </main>

            <section className="px-[30px] py-[40px] md:py-[70px] md:px-[50px] lg:px-[80px] ">
                <div className="w-full max-w-[1050px] mx-auto">
                    <h1 className="text-[30px] font-inter font-bold ">
                        Burgers
                    </h1>

                    {/* Product Card */}
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 ">
                        <FoodCard
                            foodItem={{
                                foodName:
                                    "Royal Cheese Burger with extra Fries",
                                description:
                                    "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
                                price: 123,
                                image: mcd,
                                restraurant: "McDonalds",
                            }}
                        />
                        <FoodCard
                            foodItem={{
                                foodName:
                                    "Royal Cheese Burger with extra Fries",
                                description:
                                    "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
                                price: 123,
                                image: mcd,
                                restraurant: "McDonalds",
                            }}
                        />
                        <FoodCard
                            foodItem={{
                                foodName:
                                    "Royal Cheese Burger with extra Fries",
                                description:
                                    "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
                                price: 123,
                                image: mcd,
                                restraurant: "McDonalds",
                            }}
                        />
                        <FoodCard
                            foodItem={{
                                foodName:
                                    "Royal Cheese Burger with extra Fries",
                                description:
                                    "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium",
                                price: 123,
                                image: mcd,
                                restraurant: "McDonalds",
                            }}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Homepage;
