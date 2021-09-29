import styled from 'styled-components';
import { ReactComponent as plus } from '../../../assets/icons/plus.svg';
import { ReactComponent as menuV } from '../../../assets/icons/menuV.svg';
import { ReactComponent as menuH } from '../../../assets/icons/menuH.svg';

const getOrder = ({ order }) => {
  switch (order) {
    case 'first':
      return 1;
    case 'second':
      return 3;
    case 'third':
      return 2;
    default:
      return 1;
  }
};

export const Container = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 999;
  @media (max-width: 1900px) {
    flex-direction: column;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  height: 80px;
  padding: 22px 40px;
  align-items: center;
  background: white;
  width: ${({ align }) => (align ? '300px' : '100%')};
  border: 1px solid #e5e5e5;
  @media (max-width: 1900px) {
    order: ${getOrder};
    flex: 1;
    width: 100%;
    display: ${({ order }) => order === 'third' && 'none'};
  }
`;

export const Plus = styled(plus)`
  padding: 11px;
  background: #20d472;
  width: 36px;
  height: 36px;
  min-width: 36px;
  min-height: 36px;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 14px;
`;

export const Tilte = styled.div`
  font-family: SFProDisplay bold;
  font-size: 12px;
  line-height: 16px;
  color: #2d3a45;
`;

export const Tab = styled.div`
  display: flex;
  padding: 6px;
  width: 100%;
  height: 50px;
  background: #edeff3;
  border-radius: 24px;
  align-items: center;
  justify-content: space-around;

  opacity: ${({ active }) => !active && 0.4};
  cursor: ${({ active }) => !active && 'not-allowed'};
`;

Tab.Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: SFProDisplay;
  font-size: 14px;
  line-height: 16px;
  width: 170px;
  color: #9c9fa2;
  mix-blend-mode: normal;
  cursor: pointer;
  transition: all 0.3s;
  background: ${({ active }) => active && 'white'};
  box-shadow: ${({ active }) =>
    active && '0px 2px 2px rgba(174, 176, 181, 0.314986)'};
  border-radius: 18px;
  height: 36px;
`;

export const Toggle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
  height: 50px;
  padding: 6px;
  background: #edeff3;
  border-radius: 24px;
`;

export const ToggleClone = styled(Toggle)`
  display: none;
  @media (max-width: 1900px) {
    display: flex;
    margin-left: auto;
  }
`;

export const MenuV = styled(menuV)`
  width: 14px;
  height: 14px;
  fill: ${({ active }) => (active ? '#8d9ba8' : 'transparent')};
`;
export const MenuH = styled(menuH)`
  width: 14px;
  height: 14px;
  fill: ${({ active }) => (active ? '#8d9ba8' : 'transparent')};
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ active }) => (active ? 'white' : 'transparent')};
  width: 36px;
  height: 36px;
  min-width: 36px;
  min-height: 36px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s;
`;
