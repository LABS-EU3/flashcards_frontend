import React from 'react';
import { FaCheck } from 'react-icons/fa';

import './styles.css';

const ProfileMainSection = () => {
  return (
    <div className="profile-main-section">
      <div className="profile-info profile-card  col-2-3">
        <div className="">
          <div className="name">Mark Zucker</div>
          <div className="email">
            <span className="title">Email</span>
            <br />
            <span className="address">zuckerr@gmail.com</span>
          </div>
        </div>

        <div className="password">
          <span>Password</span>
          <br />
          <span>●●●●●●●</span>
          <span className="change-btn">
            <button type="button">Change</button>
          </span>
        </div>
      </div>

      <div className="profile-card account-info col-1-3">
        <div>
          Account Verified <FaCheck />
        </div>
        <div>Member since 2 months ago</div>
      </div>
    </div>
  );
};

export default ProfileMainSection;
