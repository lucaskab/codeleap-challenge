import styled from 'styled-components';

export const HomeHeader = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 100px;
  background-color: #000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
  padding-left: 50px;
  padding-right: 50px;
  position: absolute;
`;

export const Title = styled.strong`
  font-size: 26px;
  color: #fff;
`;

export const LogoutButton = styled.button`
  height: 50%;
  background-color: white;
  border: 0;
  font-size: 18px;
  cursor: pointer;
`;