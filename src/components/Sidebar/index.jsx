import React from 'react';
import {
  Container,
  IconWrapper,
  Item,
  Link,
  LogoWrapper,
  Text,
  Wrapper,
} from './style';
import logo from '../../assets/imgs/logo.png';
import { sidebar } from '../../utils/sidebar';

export const Sidebar = () => {
  return (
    <Container>
      <LogoWrapper>
        <LogoWrapper.Img src={logo} alt='logo' />
        <Text>
          <Text.Title>Fast Food</Text.Title>
          <Text.Desc>Online Maxsulot sotuvi</Text.Desc>
        </Text>
      </LogoWrapper>
      <Wrapper>
        {sidebar.map(({ id, title, path, hidden, Icon }) => {
          return (
            <Item>
              <Link key={id} to={path}>
                <Icon className='icon' />
                {title}
              </Link>
            </Item>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
