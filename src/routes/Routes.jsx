import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import DashboardLayout from '../Layout/DashboardLayout';
import AdminDashboard from '../Pages/Dashboard/AdminDashboard/AdminDashboard';
import InstructorDashboard from '../Pages/Dashboard/InstructorDashboard/InstructorDashboard';
import StudentDashboard from '../Pages/Dashboard/StudentDashboard/StudentDashboard';
import ManageUsers from '../Pages/Dashboard/AdminDashboard/ManageUsers';
import ManageClasses from '../Pages/Dashboard/AdminDashboard/ManageClasses';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }

        ]
    },
    {
        path: 'dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: 'adminDashboard',
                element: <AdminDashboard></AdminDashboard>
            },
            {
                path: 'instructorDashboard',
                element: <InstructorDashboard></InstructorDashboard>
            },
            {
                path: 'studentDashboard',
                element: <StudentDashboard></StudentDashboard>
            },
            {
                path: 'manageUsers',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: 'manageClasses',
                element: <ManageClasses></ManageClasses>
            }
        ]
    }
]);


export default router;