import styled, { css } from 'styled-components';

export const Container= styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 330px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid black;
  padding: 20px 40px;
  margin-bottom: 30px;
  margin-top: 30px;
`;

export const ContainerTitle = styled.strong`
  font-size: 26px;
  color: #000;
`;

export const PostTitle = styled.p`
  font-size: 18px;
  color: #000;
`;

export const PostTitleTextInput = styled.input`
  padding-left: 10px;
  color: grey;
  height: 40px;
`;

export const PostContent = styled.p`
  font-size: 18px;
  color: #000;
`;

export const PostContentInput = styled.textarea`
  height: 80px;
  padding: 10px;
  color: grey;
  display: flex;
  justify-content: start;
  align-items: flex-start;
`;

export const ButtonContainer= styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 30px;
`;

export const CreatePostButton= styled.button`
  width: 130px;
  height: 30px;
  background-color: #000;
  color: #fff;
  text-transform: uppercase;
  font-size: 16px;
  border: 0;
  cursor: pointer;

  ${(props) => 
    props.isEmpty &&
    css`
      background-color: grey;
    ` 
  }
`;