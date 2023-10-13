import React from 'react';

function WelcomeBanner({userName}) {
  return (
    <div className="relative bg-indigo-200 dark:bg-indigo-500  -z-10 rounded-md overflow-hidden mb-8">
      {/* Background illustration */}
      {/* <div className="absolute right-0 top-0 -mt-4 mr-16 pointer-events-none hidden xl:block" aria-hidden="true">
      </div> */}
      
      {/* <img src="src/assets/headerBG.png" className='z-1  right-0 top-0  max-w-max' /> */}
      <div className="absolute inset-0 ">
        <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: 'url("src/assets/headerBG.png")' }}></div>
      </div>

      {/* Content */}
      <div className="relative p-4 sm:p-6 z-10">
        <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-1">Good afternoon, {userName}. 👋</h1>
        <p className="dark:text-indigo-200">Lets build your application from scratch at ease!</p>
      </div>
    </div>
  );
}

export default WelcomeBanner;
