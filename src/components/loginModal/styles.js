import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 450px;
  height: 150px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

export const Title = styled.strong`
  font-size: 16px;
`;

export const Subtitle = styled.p`
  font-size: 14px;
`;

export const Username = styled.input`
  height: 20px;
  padding-left: 10px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items:center;
`;

export const CloseButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: #000;
  margin-top: 20px;
  color: #fff;
  border: 0px;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;


  ${(props) => 
    props.isEmpty &&
    css`
      background-color: grey;
    ` 
  }
`;
