import React from 'react';

import WelcomeBanner from '../../partials/dashboard/WelcomeBanner';


function Home({ userDetail }) {

  return (
    <>
      {/* Welcome banner */}
      <WelcomeBanner userName={userDetail.firstName + " " + userDetail.lastName} />

      {/* Dashboard actions */}
      {/* <div className="sm:flex sm:justify-between sm:items-center mb-8">
      </div> */}

      {/* Cards */}
      <div className="grid grid-cols-12 gap-6">
      </div>
    </>
  );
}

export default Home;