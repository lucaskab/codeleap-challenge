import styled from 'styled-components';

export const PostContainer= styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid black;
  margin-bottom: 50px;
  position: relative;
`;

export const Container= styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
`;

export const PostHeader = styled.div`
  box-sizing: border-box;
  width: 100%;
  background-color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 62px;
  border: 1px solid black;
`;

export const PostTitle = styled.strong`
  font-size: 26px;
  color: #fff;
  margin-left: -20px;
`;

export const PostIcons = styled.div`
  display: flex;
  width: 55px;
`;

export const DeleteIcon = styled.img`
  width: 50%;
  height: auto;
  cursor: pointer;
`;

export const EditIcon = styled.img`
  width: 50%;
  height: auto;
  margin-left: 20px;
  cursor: pointer;
`;

export const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  width: 95%;
`;

export const PostCreatorName= styled.h3`
  font-size: 16px;
  color: grey;
`;

export const PostTimeAgo= styled.h3`
  font-size: 16px;
  color: grey;
`;

export const PostContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin-top: 5px;
`;

export const PostContent= styled.p`
  font-size: 16px;
  color: #000;
  display: flex;
  align-self: flex-start;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
`;