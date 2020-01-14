import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import * as c from '../../../styles/variables/colours';

export const DashboardContainer = styled.div``;
export const MainContent = styled.div`
  height: 100%;
`;
export const SidebarBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  /* margin: 10px 0; */
`;
export const ProfileImageDiv = styled.div`
  margin-top: 35px;
  text-align: center;
`;
export const HamburgerButton = styled.button`
  display: ${props => (props.isDocked ? 'none' : 'inline')};
`;

export const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 1;
`;

export const Item = styled(NavLink)`
  display: flex;
  padding: 15px 40px;
  text-decoration: none;
  /* margin: 0 20px; */
  justify-content: start;
  // vertical-align: middle;
  align-items: center;

  &:nth-child(6) {
    margin-bottom: 20px;
  }

  p {
    margin-left: 14px;
    // margin-top: 3px;
    // vertical-align: middle;
    // border: 1px solid blue;
  }

  h3 {
    height: 24px;
    width: 24px;
  }
`;

export const sideBarStyle = {
  background: c.DARK_NEUTRAL_COLOR,
  width: '20%',
  minWidth: '240px',
};

export const sideBarRootStyle = { top: '46px' };
