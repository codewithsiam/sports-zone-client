import React from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Dashboard", src: "adminDashboard" },
        { title: "Dashboard", src: "instructorDashboard" },
        { title: "Dashboard", src: "userDashboard" },
        { title: "Add A New Class", src: "Chat" },
        { title: "Users", src: "User", gap: true },
        { title: "My Classes ", src: "Calendar" },
        { title: "All Classes", src: "Search" },
        { title: "My Enrolled Classes Classes", src: "Chart" },
        { title: "Files", src: "Folder", gap: true },
        { title: "Setting", src: "Setting" },
    ];

    return (
        <div className="flex">
            <div
                className={` ${open ? "w-72" : "w-20 "
                    } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
            >
                <img
                    src="./src/assets/control.png"
                    className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
             border-2 rounded-full  ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                />
                <div className="flex gap-x-4 items-center">
                    <img
                        src="./src/assets/logo.png"
                        className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
                            }`}
                    />
                    <h1
                        className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                            }`}
                    >
                        Designer
                    </h1>
                </div>
                <ul className="pt-6">
                    {
                        Menus.map((Menu, index) => (
                            <Link to={`/${Menu?.src}`}>
                                <li
                                    key={index}
                                    className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"
                                        } `}
                                >
                                    <img src={`./src/assets/${Menu.src}.png`} />
                                    <span className={`${!open && "hidden"} origin-left duration-200`}>
                                        {Menu.title}
                                    </span>
                                </li>
                            </Link>
                        ))
                    }
                </ul>
            </div>
            <div className="h-screen flex-1 p-7">
                <h1 className="text-2xl font-semibold ">Home Page</h1>
            </div>
        </div>
    );
};

export default Dashboard;


