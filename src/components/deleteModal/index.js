import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { handleDeletePost } from '../../actions/createPost';
import { connect } from 'react-redux';
import { Container, CancelButton, ButtonContainer,Subtitle, ConfirmButton } from './styles';

function DeleteModal(props) {
  function deletePost(){
    props.dispatchDeletePost(props.post)
    return;
  }

  return (
    
      <Modal open={props.isShowing} center>
        <Container>
        <Subtitle>Are you sure you want to delete this item?</Subtitle>
        <ButtonContainer>
        <ConfirmButton onClick={deletePost}>OK</ConfirmButton>
        <CancelButton onClick={()=>props.click()}>Cancel</CancelButton>
        </ButtonContainer>
        </Container>
      </Modal>
  );
}


const mapDispatchToProps = (dispatch) => {
  return {
    dispatchDeletePost: (value) => dispatch(handleDeletePost(value))
  }
}


const mapStateToProps = state => (
  {
    username: state.Login.username,
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(DeleteModal);