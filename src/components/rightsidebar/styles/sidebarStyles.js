import styled from 'styled-components';
import img from '../../../assets/images/rectangle_20.png';

import { BRAND_FONT } from '../../../styles/variables/fonts';

export const SidebarBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;
export const HamburgerButton = styled.button`
  display: none;
`;

export const Image = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 50%;
  margin-top: -10px;
`;

export const CardsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  background: white;
  width: 100%;
  justify-content: space-evently;
  margin-top: -40px;
  border-radius: 20px 20px 0 0;
  height: 100%;
`;

export const StyledStart = styled.div`
  font: ${BRAND_FONT};
  text-align: left;
  justify-content: center;
  margin: 10px 20px 10px 20px;
`;
