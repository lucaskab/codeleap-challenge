import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 450px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

export const Title = styled.strong`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const TitleText = styled.p`
  font-size: 15px;
`;

export const TitleInput = styled.input`
  height: 20px;
  padding-left: 10px;
`;

export const ContentText = styled.p`
  font-size: 15px;
`;

export const ContentInput = styled.textarea`
  height: 80px;
  padding: 10px;
  color: grey;
  display: flex;
  justify-content: start;
  align-items: flex-start;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items:center;
`;

export const SaveButton = styled.button`
  width: 100px;
  height: 30px;
  margin-top: 20px;
  background-color: #000;
  color: #fff;
  border: 1px solid #000;
  font-size: 16px;
  text-transform: uppercase;
  margin-right: 10px;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  width: 100px;
  height: 30px;
  margin-top: 20px;
  background-color: #000;
  color: #fff;
  border: 1px solid #000;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
`;