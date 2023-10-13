import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import SidebarLinkGroup from './SidebarLinkGroup';

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true');

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector('body').classList.add('sidebar-expanded');
    } else {
      document.querySelector('body').classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`absolute inset-0 bg-slate-900 bg-opacity-30 z-1 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'
          }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 sm:px-2">
          {/* Logo */}
          <NavLink end to="/" className="block">
            <div className="flex flex-row justify-between items-center gap-3">
              <img src={logo} className='w-10 h-10' />
              <span className="text-lg text-white font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                Decoder
              </span>
            </div>
          </NavLink>
        </div>

        {/* Links */}
        <div className="space-y-8">
          {/* Home */}
          <div>
            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
              <span className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">Start to develop</span>
            </h3>
            <ul className="mt-1">
              {/* Dashboard */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('Home') && 'bg-slate-900'}`}>
                <NavLink
                  end
                  to="/Home"
                  className={`block text-slate-200 truncate transition duration-150 ${pathname.includes('Home') ? 'hover:text-slate-200' : 'hover:text-white'
                    }`}
                >
                  <div className="flex items-center">
                    <svg className="shrink-0 h-7 w-7" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap='round' strokeLinejoin='round' ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path d="M5 14.0585C5 13.0494 5 12.5448 5.22166 12.1141C5.44333 11.6833 5.8539 11.3901 6.67505 10.8035L10.8375 7.83034C11.3989 7.42938 11.6795 7.2289 12 7.2289C12.3205 7.2289 12.6011 7.42938 13.1625 7.83034L17.325 10.8035C18.1461 11.3901 18.5567 11.6833 18.7783 12.1141C19 12.5448 19 13.0494 19 14.0585V19C19 19.9428 19 20.4142 18.7071 20.7071C18.4142 21 17.9428 21 17 21H7C6.05719 21 5.58579 21 5.29289 20.7071C5 20.4142 5 19.9428 5 19V14.0585Z"
                          className={`fill-current ${(pathname === '/' || pathname.includes('Home')) ? 'text-indigo-300' : 'text-slate-400'}`} ></path>
                        <path d="M3 12.3866C3 12.6535 3 12.7869 3.0841 12.8281C3.16819 12.8692 3.27352 12.7873 3.48418 12.6234L10.7721 6.95502C11.362 6.49625 11.6569 6.26686 12 6.26686C12.3431 6.26686 12.638 6.49625 13.2279 6.95502L20.5158 12.6234C20.7265 12.7873 20.8318 12.8692 20.9159 12.8281C21 12.7869 21 12.6535 21 12.3866V11.9782C21 11.4978 21 11.2576 20.8983 11.0497C20.7966 10.8418 20.607 10.6944 20.2279 10.3995L13.2279 4.95502C12.638 4.49625 12.3431 4.26686 12 4.26686C11.6569 4.26686 11.362 4.49625 10.7721 4.95502L3.77212 10.3995C3.39295 10.6944 3.20337 10.8418 3.10168 11.0497C3 11.2576 3 11.4978 3 11.9782V12.3866Z"
                          className={`fill-current ${(pathname === '/' || pathname.includes('Home')) ? 'text-indigo-600' : 'text-slate-500'}`} ></path>
                        <path d="M12.5 15H11.5C10.3954 15 9.5 15.8954 9.5 17V20.85C9.5 20.9328 9.56716 21 9.65 21H14.35C14.4328 21 14.5 20.9328 14.5 20.85V17C14.5 15.8954 13.6046 15 12.5 15Z"
                          className={`fill-current ${(pathname === '/' || pathname.includes('Home')) ? 'text-indigo-600' : 'text-slate-600'}`} ></path>
                        <rect x="16" y="5" width="2" height="4" rx="0.5" className={`fill-current ${(pathname === '/' || pathname.includes('Home')) ? 'text-indigo-300' : 'text-slate-400'}`}></rect>
                      </g></svg>
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Home
                    </span>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
              <span className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">Build by</span>
            </h3>
            <ul className="mt-1">
              {/* Component */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('Component') && 'bg-slate-900'}`}>
                <NavLink
                  end
                  to="/Component"
                  className={`block text-slate-200 truncate transition duration-150 ${pathname.includes('Component') ? 'hover:text-slate-200' : 'hover:text-white'
                    }`}
                >
                  <div className="flex items-center">
                    <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path
                        className={`fill-current ${pathname.includes('Component') ? 'text-indigo-300' : 'text-slate-400'}`}
                        d="M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z"
                      />
                      <path
                        className={`fill-current ${pathname.includes('Component') ? 'text-indigo-600' : 'text-slate-700'}`}
                        d="M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z"
                      />
                      <path
                        className={`fill-current ${pathname.includes('Component') ? 'text-indigo-500' : 'text-slate-600'}`}
                        d="M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z"
                      />
                    </svg>
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Component
                    </span>
                  </div>
                </NavLink>
              </li>

              {/* Speach */}

              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('Speach') && 'bg-slate-900'}`}>
                <NavLink
                  end
                  to="/Speech"
                  className={`block text-slate-200 truncate transition duration-150 ${pathname.includes('Speach') ? 'hover:text-slate-200' : 'hover:text-white'
                    }`}
                >
                  <div className="flex items-center">
                    <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path
                        className={`fill-current ${pathname.includes('Speach') ? 'text-indigo-600' : 'text-slate-700'}`}
                        d="M4.418 19.612A9.092 9.092 0 0 1 2.59 17.03L.475 19.14c-.848.85-.536 2.395.743 3.673a4.413 4.413 0 0 0 1.677 1.082c.253.086.519.131.787.135.45.011.886-.16 1.208-.474L7 21.44a8.962 8.962 0 0 1-2.582-1.828Z"
                      />
                      <path
                        className={`fill-current ${pathname.includes('Speach') ? 'text-indigo-500' : 'text-slate-600'}`}
                        d="M10.034 13.997a11.011 11.011 0 0 1-2.551-3.862L4.595 13.02a2.513 2.513 0 0 0-.4 2.645 6.668 6.668 0 0 0 1.64 2.532 5.525 5.525 0 0 0 3.643 1.824 2.1 2.1 0 0 0 1.534-.587l2.883-2.882a11.156 11.156 0 0 1-3.861-2.556Z"
                      />
                      <path
                        className={`fill-current ${pathname.includes('Speach') ? 'text-indigo-300' : 'text-slate-400'}`}
                        d="M21.554 2.471A8.958 8.958 0 0 0 18.167.276a3.105 3.105 0 0 0-3.295.467L9.715 5.888c-1.41 1.408-.665 4.275 1.733 6.668a8.958 8.958 0 0 0 3.387 2.196c.459.157.94.24 1.425.246a2.559 2.559 0 0 0 1.87-.715l5.156-5.146c1.415-1.406.666-4.273-1.732-6.666Zm.318 5.257c-.148.147-.594.2-1.256-.018A7.037 7.037 0 0 1 18.016 6c-1.73-1.728-2.104-3.475-1.73-3.845a.671.671 0 0 1 .465-.129c.27.008.536.057.79.146a7.07 7.07 0 0 1 2.6 1.711c1.73 1.73 2.105 3.472 1.73 3.846Z"
                      />
                    </svg>
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Speech
                    </span>
                  </div>
                </NavLink>
              </li>

              {/* Image */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('Image') && 'bg-slate-900'}`}>
                <NavLink
                  end
                  to="/Image"
                  className={`block text-slate-200 truncate transition duration-150 ${pathname.includes('Image') ? 'hover:text-slate-200' : 'hover:text-white'
                    }`}
                >
                  <div className="flex items-center">
                    <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path
                        className={`fill-current ${pathname.includes('Image') ? 'text-indigo-500' : 'text-slate-600'}`}
                        d="M20 7a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 0120 7zM4 23a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 014 23z"
                      />
                      <path
                        className={`fill-current ${pathname.includes('Image') ? 'text-indigo-300' : 'text-slate-400'}`}
                        d="M17 23a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 010-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1zM7 13a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 112 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z"
                      />
                    </svg>
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Image
                    </span>
                  </div>
                </NavLink>
              </li>


              {/* Template */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('Template') && 'bg-slate-900'}`}>
                <NavLink
                  end
                  to="/Template"
                  className={`block text-slate-200 truncate transition duration-150 ${pathname.includes('Template') ? 'hover:text-slate-200' : 'hover:text-white'
                    }`}
                >
                  <div className="flex items-center">
                    <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <circle
                        className={`fill-current ${pathname.includes('Template') ? 'text-indigo-300' : 'text-slate-400'}`}
                        cx="18.5"
                        cy="5.5"
                        r="4.5"
                      />
                      <circle
                        className={`fill-current ${pathname.includes('Template') ? 'text-indigo-500' : 'text-slate-600'}`}
                        cx="5.5"
                        cy="5.5"
                        r="4.5"
                      />
                      <circle
                        className={`fill-current ${pathname.includes('Template') ? 'text-indigo-500' : 'text-slate-600'}`}
                        cx="18.5"
                        cy="18.5"
                        r="4.5"
                      />
                      <circle
                        className={`fill-current ${pathname.includes('Template') ? 'text-indigo-300' : 'text-slate-400'}`}
                        cx="5.5"
                        cy="18.5"
                        r="4.5"
                      />
                    </svg>
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Template
                    </span>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>



          <div>
            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
              <span className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">More</span>
            </h3>
            <ul className="mt-1">
              {/* collab */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('Collab') && 'bg-slate-900'}`}>
                <NavLink
                  end
                  to="/Collab"
                  className={`block text-slate-200 truncate transition duration-150 ${pathname.includes('Collab') ? 'hover:text-slate-200' : 'hover:text-white'
                    }`}
                >
                  <div className="flex items-center">
                    <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path
                        className={`fill-current ${pathname.includes('Collab') ? 'text-indigo-500' : 'text-slate-600'}`}
                        d="M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z"
                      />
                      <path
                        className={`fill-current ${pathname.includes('Collab') ? 'text-indigo-300' : 'text-slate-400'}`}
                        d="M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z"
                      />
                    </svg>
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Collab
                    </span>
                  </div>
                </NavLink>
              </li>
              {/* Management */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('Management') && 'bg-slate-900'}`}>
                <NavLink
                  end
                  to="/Management"
                  className={`block text-slate-200 truncate transition duration-150 ${pathname.includes('Management') ? 'hover:text-slate-200' : 'hover:text-white'
                    }`}
                >
                  <div className="flex items-center">
                    <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path
                        className={`fill-current ${pathname.includes('Management') ? 'text-indigo-300' : 'text-slate-400'}`}
                        d="M13 6.068a6.035 6.035 0 0 1 4.932 4.933H24c-.486-5.846-5.154-10.515-11-11v6.067Z"
                      />
                      <path
                        className={`fill-current ${pathname.includes('Management') ? 'text-indigo-500' : 'text-slate-700'}`}
                        d="M18.007 13c-.474 2.833-2.919 5-5.864 5a5.888 5.888 0 0 1-3.694-1.304L4 20.731C6.131 22.752 8.992 24 12.143 24c6.232 0 11.35-4.851 11.857-11h-5.993Z"
                      />
                      <path
                        className={`fill-current ${pathname.includes('Management') ? 'text-indigo-600' : 'text-slate-600'}`}
                        d="M6.939 15.007A5.861 5.861 0 0 1 6 11.829c0-2.937 2.167-5.376 5-5.85V0C4.85.507 0 5.614 0 11.83c0 2.695.922 5.174 2.456 7.17l4.483-3.993Z"
                      />
                    </svg>
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Management
                    </span>
                  </div>
                </NavLink>
              </li>
              {/* Track */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('Track') && 'bg-slate-900'}`}>
                <NavLink
                  end
                  to="/Track"
                  className={`block text-slate-200 truncate transition duration-150 ${pathname.includes('Track') ? 'hover:text-slate-200' : 'hover:text-white'
                    }`}
                >
                  <div className="flex items-center">
                    <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path
                        className={`fill-current ${pathname.includes('Track') ? 'text-indigo-500' : 'text-slate-600'}`}
                        d="M8 1v2H3v19h18V3h-5V1h7v23H1V1z"
                      />
                      <path
                        className={`fill-current ${pathname.includes('Track') ? 'text-indigo-500' : 'text-slate-600'}`}
                        d="M1 1h22v23H1z"
                      />
                      <path
                        className={`fill-current ${pathname.includes('Track') ? 'text-indigo-300' : 'text-slate-400'}`}
                        d="M15 10.586L16.414 12 11 17.414 7.586 14 9 12.586l2 2zM5 0h14v4H5z"
                      />
                    </svg>
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Track
                    </span>
                  </div>
                </NavLink>
              </li>




              {/* Group Chat */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('GroupChat') && 'bg-slate-900'}`}>
                <NavLink
                  end
                  to="/GroupChat"
                  className={`block text-slate-200 truncate transition duration-150 ${pathname.includes('GroupChat') ? 'hover:text-slate-200' : 'hover:text-white'
                    }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="grow flex items-center">
                      <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                        <path
                          className={`fill-current ${pathname.includes('GroupChat') ? 'text-indigo-500' : 'text-slate-600'}`}
                          d="M14.5 7c4.695 0 8.5 3.184 8.5 7.111 0 1.597-.638 3.067-1.7 4.253V23l-4.108-2.148a10 10 0 01-2.692.37c-4.695 0-8.5-3.184-8.5-7.11C6 10.183 9.805 7 14.5 7z"
                        />
                        <path
                          className={`fill-current ${pathname.includes('GroupChat') ? 'text-indigo-300' : 'text-slate-400'}`}
                          d="M11 1C5.477 1 1 4.582 1 9c0 1.797.75 3.45 2 4.785V19l4.833-2.416C8.829 16.85 9.892 17 11 17c5.523 0 10-3.582 10-8s-4.477-8-10-8z"
                        />
                      </svg>
                      <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                        Group Chat
                      </span>
                    </div>
                    {/* Badge */}
                    <div className="flex flex-shrink-0 ml-2">
                      <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-white bg-indigo-500 px-2 rounded">4</span>
                    </div>
                  </div>
                </NavLink>
              </li>

            </ul>
          </div>
          {/* More group */}
          <div>
            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
              <span className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">Settings</span>
            </h3>
            <ul className="mt-3">
              {/* Settings */}
              <SidebarLinkGroup activecondition={pathname.includes('settings')}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-slate-200 truncate transition duration-150 ${pathname.includes('Settings') ? 'hover:text-slate-200' : 'hover:text-white'
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M14.1361 3.36144C14.0928 2.92777 14.0711 2.71093 13.9838 2.54161C13.8728 2.32656 13.6877 2.15902 13.4627 2.07005C13.2855 2 13.0676 2 12.6318 2H11.3681C10.9324 2 10.7145 2 10.5374 2.07001C10.3123 2.15898 10.1271 2.32658 10.0162 2.5417C9.9289 2.71098 9.90722 2.92776 9.86387 3.36131C9.78181 4.18195 9.74077 4.59227 9.56907 4.81742C9.35113 5.10319 8.99661 5.25003 8.64044 5.20207C8.35982 5.16427 8.04061 4.9031 7.4022 4.38076C7.06481 4.10472 6.89612 3.9667 6.71463 3.90872C6.48414 3.8351 6.23478 3.84753 6.01277 3.94373C5.83795 4.01947 5.68385 4.17357 5.37565 4.48177L4.48233 5.37509C4.17403 5.68339 4.01988 5.83754 3.94413 6.01243C3.848 6.23438 3.83557 6.48364 3.90914 6.71405C3.96711 6.89561 4.10516 7.06435 4.38128 7.40182C4.90385 8.04052 5.16514 8.35987 5.20287 8.64066C5.2507 8.99664 5.10395 9.35092 4.81842 9.56881C4.59319 9.74068 4.18264 9.78173 3.36155 9.86384C2.92777 9.90722 2.71088 9.92891 2.54152 10.0163C2.32654 10.1272 2.15905 10.3123 2.07008 10.5372C2 10.7144 2 10.9324 2 11.3683V12.6318C2 13.0676 2 13.2855 2.07005 13.4627C2.15902 13.6877 2.32656 13.8728 2.54161 13.9838C2.71093 14.0711 2.92776 14.0928 3.36143 14.1361C4.1823 14.2182 4.59273 14.2593 4.81792 14.4311C5.10357 14.649 5.25037 15.0034 5.20247 15.3594C5.16471 15.6402 4.90351 15.9594 4.3811 16.5979C4.10511 16.9352 3.96711 17.1039 3.90913 17.2854C3.8355 17.5159 3.84794 17.7652 3.94414 17.9873C4.01988 18.1621 4.17398 18.3162 4.48217 18.6243L5.37561 19.5178C5.6838 19.826 5.8379 19.9801 6.01272 20.0558C6.23474 20.152 6.4841 20.1645 6.71458 20.0908C6.89607 20.0329 7.06474 19.8949 7.40208 19.6189C8.04059 19.0964 8.35985 18.8352 8.64057 18.7975C8.99663 18.7496 9.35101 18.8964 9.56892 19.182C9.74072 19.4072 9.78176 19.8176 9.86385 20.6385C9.90722 21.0722 9.92891 21.2891 10.0162 21.4584C10.1272 21.6734 10.3123 21.841 10.5373 21.9299C10.7145 22 10.9324 22 11.3682 22H12.6316C13.0676 22 13.2856 22 13.4628 21.9299C13.6877 21.8409 13.8728 21.6735 13.9837 21.4585C14.0711 21.2891 14.0928 21.0722 14.1362 20.6383C14.2183 19.8173 14.2593 19.4068 14.4311 19.1816C14.649 18.896 15.0034 18.7492 15.3595 18.7971C15.6402 18.8348 15.9594 19.096 16.5979 19.6184C16.9352 19.8944 17.1039 20.0324 17.2854 20.0904C17.5159 20.164 17.7652 20.1516 17.9873 20.0554C18.1621 19.9796 18.3162 19.8255 18.6243 19.5174L19.5179 18.6238C19.826 18.3157 19.98 18.1617 20.0558 17.9869C20.152 17.7648 20.1645 17.5154 20.0908 17.2848C20.0328 17.1034 19.8949 16.9348 19.619 16.5976C19.0968 15.9593 18.8357 15.6402 18.7979 15.3596C18.7499 15.0034 18.8967 14.6489 19.1825 14.4309C19.4077 14.2592 19.818 14.2182 20.6386 14.1361C21.0722 14.0928 21.289 14.0711 21.4583 13.9838C21.6734 13.8729 21.841 13.6877 21.93 13.4626C22 13.2855 22 13.0676 22 12.6319V11.3682C22 10.9324 22 10.7145 21.9299 10.5373C21.841 10.3123 21.6734 10.1272 21.4584 10.0162C21.2891 9.92891 21.0722 9.90722 20.6385 9.86385C19.8176 9.78176 19.4072 9.74072 19.182 9.56893C18.8964 9.35102 18.7496 8.99662 18.7975 8.64056C18.8352 8.35984 19.0964 8.0406 19.6188 7.4021C19.8948 7.06478 20.0328 6.89612 20.0908 6.71464C20.1644 6.48415 20.152 6.23478 20.0558 6.01275C19.98 5.83794 19.8259 5.68385 19.5178 5.37567L18.6243 4.4822C18.3161 4.17402 18.162 4.01994 17.9872 3.94419C17.7652 3.84798 17.5158 3.83555 17.2853 3.90918C17.1038 3.96716 16.9352 4.10515 16.5979 4.38113C15.9594 4.90352 15.6402 5.16472 15.3595 5.20248C15.0034 5.25038 14.649 5.10358 14.4311 4.81793C14.2593 4.59274 14.2182 4.1823 14.1361 3.36144Z"
                                className={`fill-current ${pathname.includes('Settings') ? 'text-indigo-300' : 'text-slate-500'}`} />
                              <circle cx="12" cy="12" r="3"
                                className={`fill-current ${pathname.includes('Settings') ? 'text-indigo-600' : 'text-slate-700'}`} />
                            </svg>
                            <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Settings
                            </span>
                          </div>
                          {/* Icon */}
                          <div className="flex shrink-0 ml-2">
                            <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && 'rotate-180'}`} viewBox="0 0 12 12">
                              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                        <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/Settings/Profile"
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200')
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Profile
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/Settings/ServingPorts"
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200')
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Serving ports
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/Settings/ConnectedDevices"
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200')
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Connected Devices
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/Settings/Preferences"
                              className={({ isActive }) =>
                                'block transition duration-150 truncate ' + (isActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200')
                              }
                            >
                              <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                Prefernces
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg className="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
                <path className="text-slate-400" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z" />
                <path className="text-slate-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
