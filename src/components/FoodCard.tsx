import React from "react";
import { FoodItem } from "../pages/Homepage";
import { Plus } from "lucide-react";

const FoodCard = ({ foodItem }: { foodItem: FoodItem }) => {
    return (
        <div className="px-4 py-4 flex gap-2  shadow-lg rounded-lg group ">
            <div className="flex flex-col gap-1 w-2/3">
                <h2 className="font-semibold text-[18px] leading-6 pr-5">
                    {foodItem?.foodName}
                </h2>
                <p className="text-[13px] font-normal mt-2 leading-[18px] ">
                    {foodItem?.description}
                </p>
                <p className="font-bold text-[16px] mt-2 ">
                    ₹ {foodItem?.price}
                </p>
            </div>
            <div className="relative w-1/3 flex items-center justify-end">
                <img
                    src={foodItem?.image}
                    className="w-full h-full max-h-[150px] max-w-[150px]"
                    alt={foodItem?.foodName}
                />
                <span className="cursor-pointer absolute group-hover:scale-100 origin-bottom-right transition-all duration-200 scale-0 bottom-0 right-0 bg-slate-200 p-[10px] rounded-tl-3xl opacity-70">
                    <Plus className="stroke-[3px]" />
                </span>
            </div>
        </div>
    );
};

export default FoodCard;
