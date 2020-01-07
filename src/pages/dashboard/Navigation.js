// Import

// Libraries
import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Sidebar from 'react-sidebar';
import RoundedImage from 'react-rounded-image';

// Styled
import * as c from '../../styles/variables/colours';
import { H3 } from '../../styles/typography';

export default function SideNav({ mainContent }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <NavSection>
      <Sidebar
        sidebar={<SideContent />}
        open={sidebarOpen}
        onSetOpen={setSidebarOpen}
        docked
        styles={{
          sidebar: { background: c.DARK_NEUTRAL_COLOR, width: '20%' },
          root: { top: '46px' },
        }}
      >
        <div>
          <HamburgerButton onClick={() => setSidebarOpen(!sidebarOpen)}>
            Open sidebar
          </HamburgerButton>

          {mainContent}
        </div>
      </Sidebar>
    </NavSection>
  );
}

const SideContent = () => {
  return (
    <SidebarBody>
      <div>
        <RoundedImage
          // eslint-disable-next-line max-len
          image="https://www.ibts.org/wp-content/uploads/2017/08/iStock-476085198-300x300.jpg"
          alt="User's profile"
        />
      </div>

      <MenuBox>
        <MenuItem img={null} text="Profile" />
      </MenuBox>
    </SidebarBody>
  );
};

const NavSection = styled.nav``;
const SidebarBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const HamburgerButton = styled.button`
  /* display: none; */
`;

const MenuBox = styled.div`
  width: 100%;
`;

const MenuItem = ({ img, text }) => {
  return (
    <Item to="/">
      <img src={img} alt="" />
      <H3 color={c.WHITE}>{text}</H3>
    </Item>
  );
};

const Item = styled(NavLink)`
  display: flex;
  padding: 15px 60px;
  margin: 0 20px;
  justify-content: start;
  border: 1px solid white;

  h4 {
    margin-left: 14px;
  }
`;
