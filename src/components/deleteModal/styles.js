import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 450px;
  height: 100px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items:center;
`;

export const CancelButton = styled.button`
  width: 100px;
  height: 30px;
  margin-top: 20px;
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
`;

export const ConfirmButton = styled.button`
  width: 100px;
  height: 30px;
  margin-top: 20px;
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
  font-size: 16px;
  text-transform: uppercase;
  margin-right: 10px;
  cursor: pointer;
`;