import React, {useState, useCallback} from 'react';
import { Container, PostHeader, PostTitle, DeleteIcon, EditIcon, PostIcons, PostInfo,
   PostContent, PostCreatorName, PostContentContainer, PostContainer } from './styles';
import { connect } from 'react-redux';
import TrashImage from '../../assets/icons/delete.png';
import EditImage from '../../assets/icons/edit.png';
import DeleteModal from '../deleteModal/index';
import EditModal from '../editModal/index';
import TimeAgo from 'timeago-react';
import { handleTitle, handleContent } from '../../actions/postInfos';   

function Posts(props) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false)
  const handleDeletePost = useCallback(() => {
    setShowDeleteModal(!showDeleteModal);
  });

  const handleEditPost = useCallback(() => {
    setShowEditModal(!showEditModal);
    props.dispatchHandleTitle('');
    props.dispatchHandleContent('');
  });


  return (
    <>
    <DeleteModal isShowing={showDeleteModal} click={handleDeletePost} post={props.data}/>
    <EditModal isShowing={showEditModal} click={handleEditPost} post={props.data}/>
    <PostContainer>
    <PostHeader>
    <PostTitle>{props.data.title}</PostTitle>
    {props.data.username === props.username ? 
      <PostIcons>
      <DeleteIcon onClick={()=>handleDeletePost()} src={TrashImage}></DeleteIcon>
      <EditIcon onClick={handleEditPost} src={EditImage}></EditIcon>
    </PostIcons> :
    null 
    }
    
    </PostHeader>

      <Container>

        <PostInfo>
          <PostCreatorName>@{props.data.username}</PostCreatorName>
          <TimeAgo
            datetime={props.data.date}
            locale='pt_BR'
            />
        </PostInfo>

        <PostContentContainer>
        <PostContent>{props.data.content}</PostContent>
        </PostContentContainer>

      </Container>
      </PostContainer>
      </>
  );
}

const mapStateToProps = state => (
  {
    username: state.Login.username,
    title: state.PostInfos.title,
    content: state.PostInfos.content
  }
);

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchHandleTitle: (value) => dispatch(handleTitle(value)),
    dispatchHandleContent: (value) => dispatch(handleContent(value)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Posts);