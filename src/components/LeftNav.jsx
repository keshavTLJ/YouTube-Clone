import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../utils/constants";
import { Context } from "../context/contextApi";

const LeftNav = () => {
    const { selectedCategory, setSelectedCategory, mobileMenu, setMobileMenu } = useContext(Context);

    const navigate = useNavigate();

    const clickHandler = (name, type) => {
        switch (type) {
            case "category":
                return setSelectedCategory(name);
            case "home":
                return setSelectedCategory(name);
            case "menu":
                return false;
            default:
                break;
        }
    };

    return (
        <div className={`${mobileMenu ? "visible fixed" : "hidden"} md:block z-10`} >
            <div className="flex flex-col px-5 bg-black h-screen md:fixed">
                {categories.map((item) => {
                    return (
                        <React.Fragment key={item.name}>
                            <LeftNavMenuItem
                                text={item.type === "home" ? "Home" : item.name}
                                icon={item.icon}
                                action={() => {
                                    clickHandler(item.name, item.type);
                                    setMobileMenu(false);
                                    navigate("/");
                                }}
                                className={`${selectedCategory === item.name && "bg-white/[0.15]"}`}
                            />
                            {item.divider && (<hr className="my-2 border-white/[0.2]" />)}
                        </React.Fragment>
                    );
                })}
                <hr className="my-3 border-white/[0.2]" />
                <div className="text-white/[0.5] text-[13px] ml-3">
                    Clone by: KT
                </div>
            </div>
          </div>
    );
};

export default LeftNav;