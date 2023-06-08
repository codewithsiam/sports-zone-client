import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNav from '../Pages/Shared/Navbar/DashboardNav';

const Dashboard = () => {
   

    return (
        <div className="flex">
          <DashboardNav></DashboardNav>
            <div className="h-screen flex-1 p-7">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;


