import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Container, Title, TitleText, TitleInput, ContentText, ContentInput,
          ButtonContainer, SaveButton, CancelButton } from './styles';
import { connect } from 'react-redux';
import { handleUpdatePost } from '../../actions/createPost';
import { handleTitle, handleContent } from '../../actions/postInfos';
import React, { useState, useEffect } from 'react';

function EditModal(props) {
  function editPost(){
    props.dispatchUpdatePost({post:props.post, title: props.title, content: props.content});
    props.dispatchHandleTitle('');
    props.dispatchHandleContent('');
  }

  return (
    
      <Modal open={props.isShowing} closeOnOverlayClick={false} closeOnEsc={false} center>
        <Container>
        <Title>Edit item</Title>

        <TitleText>Title</TitleText>
        <TitleInput 
        placeholder={"Hello world"}
        value={props.title} 
        onChange={(e) => props.dispatchHandleTitle(e.target.value)}  
        >
        </TitleInput>

        <ContentText>Content</ContentText>
        <ContentInput 
        placeholder={"Content here"}
        value={props.content} 
        onChange={(e) => props.dispatchHandleContent(e.target.value)} 
        >
        </ContentInput>

        <ButtonContainer>
        <SaveButton onClick={editPost}>save</SaveButton>
        <CancelButton onClick={()=>props.click()}>Cancel</CancelButton>
        </ButtonContainer>
        </Container>
      </Modal>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchHandleTitle: (value) => dispatch(handleTitle(value)),
    dispatchHandleContent: (value) => dispatch(handleContent(value)),
    dispatchUpdatePost: (value) => dispatch(handleUpdatePost(value))
  }
}


const mapStateToProps = state => (
  {
    title: state.PostInfos.title,
    content: state.PostInfos.content,
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(EditModal);