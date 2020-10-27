import React, {useState, useEffect} from 'react';
import { Container, ContainerTitle, PostTitle, PostTitleTextInput, PostContent,
   PostContentInput, ButtonContainer, CreatePostButton } from './styles';
import { connect } from 'react-redux';
import { handleTitle, handleContent, handleId } from '../../actions/postInfos';
import { handleCreatePost } from '../../actions/createPost';


function PostCreator(props) {
  const [title,setTitle] = useState(!!props.title);
  const [content,setContent] = useState(!!props.content);
  const [statusButton, setStatusButton] = useState(true);

  useEffect(() => {
    if(title && content){
      setStatusButton(false);
      return;
    }
    setStatusButton(true);
  },[title,content]);
  
  function createPost() {
    if(title && content){
      
      const newDate = new Date();
      const year = newDate.getUTCFullYear();
      const month = newDate.getMonth() +1;
      const day = newDate.getDate();
      const hour = newDate.getHours();
      const minute = newDate.getUTCMinutes();
      const second = newDate.getUTCSeconds();

      const date = `${year}-${month}-${day} ${hour}:${minute}:${second}`;

      props.dispatchHandleId();
      props.dispatchCreatePost({
        id: props.id,
        username: props.username,
        title: props.title,
        content: props.content,
        date,
      });

      props.dispatchHandleTitle('');
      props.dispatchHandleContent('');

      setStatusButton(true);
      setTitle("");
      setContent("");
    }
    return;
  }

  return (
    
      <Container>
        
        <ContainerTitle>What's on your mind?</ContainerTitle>

        <PostTitle>Title</PostTitle>
        <PostTitleTextInput 
          value={props.title} 
          onChange={(e) => {props.dispatchHandleTitle(e.target.value); setTitle(!!e.target.value);}}  
          placeholder={"Hello World"}>
        </PostTitleTextInput>

        <PostContent>Content</PostContent>
        <PostContentInput 
          placeholder={"Content here"}
          value={props.content} 
          onChange={(e) => {props.dispatchHandleContent(e.target.value); setContent(!!e.target.value);}}>  
        </PostContentInput>

        <ButtonContainer>
          <CreatePostButton isEmpty={statusButton} disabled={statusButton} onClick={createPost}>create</CreatePostButton>
        </ButtonContainer>

      </Container>
  );

}



const mapDispatchToProps = (dispatch) => {
  return {
    dispatchHandleTitle: (value) => dispatch(handleTitle(value)),
    dispatchHandleContent: (value) => dispatch(handleContent(value)),
    dispatchHandleId: (value) => dispatch(handleId(value)),
    dispatchCreatePost: (value) => dispatch(handleCreatePost(value))
  }
}


const mapStateToProps = state => (
  {
    id: state.PostInfos.id,
    username: state.Login.username,
    title: state.PostInfos.title,
    content: state.PostInfos.content,
    posts: state.CreatePost.posts,
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(PostCreator);