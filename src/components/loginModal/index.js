import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import {useState} from 'react';
import { connect } from 'react-redux';
import { handleUsername } from '../../actions/login';
import { Container, CloseButton, ButtonContainer,Title,Subtitle,Username } from './styles';

function LoginModal({dispatchHandleUserName ,username, isShowing, click}) {
  const [modalState, setModalState] = useState(true);
  const [user,setUser] = useState(!username);
  function closeModal(){
    setModalState(false);
  }

  return (
    
      <Modal open={isShowing} onClose={closeModal} closeOnOverlayClick={false} closeOnEsc={false} center>
        <Container>
        <Title>Welcome to CodeLeap network!</Title>
        <Subtitle>Please enter your username</Subtitle>
        <Username 
          value={username} 
          onChange={(e) => {dispatchHandleUserName(e.target.value); setUser(!e.target.value)}} 
          placeholder={"John Doe"}>
        </Username>
        <ButtonContainer>
        <CloseButton isEmpty={user} disabled={user} onClick={click}>Enter</CloseButton>
        </ButtonContainer>
        </Container>
      </Modal>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchHandleUserName: (value) => dispatch(handleUsername(value))
  }
}


const mapStateToProps = state => (
  {
    username: state.Login.username,
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);

