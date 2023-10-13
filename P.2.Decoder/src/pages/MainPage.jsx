import React, { useState } from 'react';
import {
    Routes,
    Route,
    useNavigate
} from 'react-router-dom';

// Import pages
import Home from './Home/HomePage';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import Banner from '../partials/Banner';
import SpeechToText from './Project/SpeechModule/Speech';
import Image from './Project/ImageModule/Image';
import Component from './Project/ComponentModule/Component';
import Profile from './Profile/profile';
import Setting from './Settings/Setting';


function MainPage() {
    const [userDetails, setUserDetails] = useState(JSON.parse(sessionStorage.getItem('userData')));
    // useEffect(() => {
    // Fetch user details using the token
    //     const fetchUserDetails = async () => {
    //         try {
    //             const token = sessionStorage.getItem('token');

    //             if (!token) {
    //                 // Redirect to login page if token is not present
    //                 const navigate = useNavigate();
    //                 navigate('/login');
    //                 return;
    //             }

    //             const response = await fetch('http://127.0.0.1:3000/user', {
    //                 headers: {
    //                   Authorization: `Bearer ${token}`,
    //                   'Content-Type': 'application/json',
    //                 },
    //               });
    //             // Assuming the API returns user details as `response.data`
    //             setUserDetails(response.data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     fetchUserDetails();
    // }, []);

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const handleOverlayClick = () => {
        if (sidebarOpen) {
            setSidebarOpen(false);
        }
    };

    return (
        <>

            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden" onClick={handleOverlayClick}>

                {/*  Site header */}
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} userDetail={userDetails} />
                <main >
                    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                        <Routes>
                            <Route exact path="/" element={<Home userDetail={userDetails} />} />
                            <Route exact path="/Home" element={<Home userDetail={userDetails} />} />
                            <Route exact path="/Speech" element={<SpeechToText />} />
                            <Route exact path="/Image" element={<Image />} />
                            <Route exact path="/Component" element={<Component />} />
                            <Route exact path="/Profile" element={<Profile />} />
                            <Route exact path="/Settings" element={<Setting />} />
                        </Routes>
                    </div>
                </main>
                <Banner />
            </div>
        </>
    )
}

export default MainPage