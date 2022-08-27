import React from "react";

const ProfileSetting = () => {
  return (
    <div className="">
      <div className="profoleSettingItem">
        <div className="settingHeader">
          <h2 className="settingHeaderItem">Account details</h2>
        </div>
        <a href="#home">this is profole Setting Item </a>
      </div>
      <div className="profoleSettingItem">
        <div className="settingHeader">
          <h2 className="settingHeaderItem">Notifications</h2>
        </div>
        <a href='#Home'>this is profole Setting Item </a>
      </div>
      <div className="profoleSettingItem">
        <div className="settingHeader">
          <h2 className="settingHeaderItem">Suggestions</h2>
        </div>
        <a href='#Home'>this is profole Setting Item </a>
      </div>
      <div className="profoleSettingItem">
        <div className="settingHeader">
          <h2 className="settingHeaderItem">Marketing emails</h2>
        </div>
        <a href='#Home'>this is profole Setting Item </a>
      </div>
    </div>
  );
};

export default ProfileSetting;
