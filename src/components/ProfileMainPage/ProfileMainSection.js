import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

import './styles.css';

const moment = require('moment');

const ProfileMainSection = ({ profileData }) => {
  const { fullName, isConfirmed, email, createdon } = profileData;
  const registered = new Date(createdon);
  const timeSinceRegisteration = moment(registered).fromNow();

  return (
    <div className="profile-main-section">
      <div className="profile-info profile-card  col-2-3">
        <div className="">
          <div className="name">{fullName}</div>
          <div className="email">
            <span className="title">Email</span>
            <br />
            <span className="address">{email}</span>
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
        <div>Account Verified {isConfirmed ? <FaCheck /> : <FaTimes />}</div>
        <div>Member from {timeSinceRegisteration}</div>
      </div>
    </div>
  );
};

export default ProfileMainSection;
