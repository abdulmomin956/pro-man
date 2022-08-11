import React from "react";

import CoomingSoon from "../shared/CoomingSoon";

const ProfileCard = () => {
  return (
    <>
    <div className="flex justify-around">
      <div className="profile-card-wraper ">
        <div>
          <h2 className="font-bold">shorting by board</h2>
        </div>
      </div>
      <div className="profile-card-wraper">
        <div>
          <h2 className="font-bold">showing cards by from all boards </h2>
        </div>
      </div>
      <div className="profile-card-wraper">
        <div>
          <h2 className="font-bold">showing cards active in the last month </h2>
        </div>
      </div>
    </div>
    <div>
        <div className="profile-card-body">
            <div className="profile-card-body-banner ">
                <h2> back end is not added </h2>
            </div>
        </div>

    </div>
    </>
  );
};

export default ProfileCard;
