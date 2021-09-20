import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100vh;
  padding: 28px 0 40px 0;
  border: 1px solid red;
`;

export const LogoWrapper = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
  margin-bottom: 64px;
  padding: 0 24px;
`;

LogoWrapper.Img = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-right: 20px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

Text.Title = styled.div`
  font-weight: 900;
  font-size: 18px;
  line-height: 19px;
  font-family: SFProDisplay bold;
  color: #2d3a45;
`;

Text.Desc = styled.div`
  font-size: 14px;
  line-height: 14px;
  color: #2d3a45;
  mix-blend-mode: normal;
  opacity: 0.5;
`;

// export const Text = styled.div``

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  margin: 0 24px 20px 0;
  height: 48px;
  padding-left: 40px;
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  font-family: SFProDisplay;
  font-size: 15px;
  line-height: 18px;
  color: #2d3a45;
  text-decoration: none;
  .icon {
    margin-right: 10px;
    width: 34px;
    height: 34px;
    padding: 10px;
    background: #f6f6f6;
    border-radius: 6px;
  }
`;

export const IconWrapper = styled.img`
  width: 16px;
  height: 16px;
  padding: 10px;
  background: #f6f6f6;
`;
