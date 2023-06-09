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
import AddAClass from '../Pages/Dashboard/InstructorDashboard/AddClass';
import AllClasses from '../Pages/AllClasses/AllClasses';
import MySelectedClasses from '../Pages/Dashboard/StudentDashboard/MySelectedClasses';
import Feedback from '../Pages/Feedback/Feedback';
import Payment from '../Pages/Payment/Payment';
import MyEnrolledClasses from '../Pages/Dashboard/StudentDashboard/MyEnrolledClasses';
import TotalEnrolledStudents from '../Pages/Dashboard/AdminDashboard/PaymentHistory';
import PaymentHistory from '../Pages/Dashboard/AdminDashboard/PaymentHistory';
import MyClasses from '../Pages/Dashboard/InstructorDashboard/MyClasses';

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
            },
            {
                path: 'allClasses',
                element: <AllClasses></AllClasses>
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
            },
            {
                path: 'addAClass',
                element: <AddAClass></AddAClass>
            },
            {
                path: 'mySelectedClasses',
                element: <MySelectedClasses></MySelectedClasses>
            },
            {
                path: 'feedback',
                element: <Feedback></Feedback>
            },
            {
                path: 'payment/:id',
                element: <Payment></Payment>
            },
            {
                path: 'myEnrolledClasses',
                element: <MyEnrolledClasses></MyEnrolledClasses>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: 'myClasses',
                element: <MyClasses></MyClasses>
            }
        ]
    }
]);


export default router;