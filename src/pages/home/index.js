import LoginModal from '../../components/loginModal';
import {useState} from 'react';
import Header from '../../components/header';
import PostCreator from '../../components/postCreator';
import Posts from '../../components/posts';
import { connect } from 'react-redux';
import { PostsContainer, Container } from './styles';
import { handleUsername } from '../../actions/login';

function Home(props) {
  const [showModal, setShowModal] = useState(true);
  function PostList() {
    const posts = props.posts;
    const listPosts = posts.map((post) => {
      return <Posts key={post.id} data={post} />
    })
    return listPosts;
  }

  function closeModal() {
    setShowModal(!showModal);
  }

  return (
      <Container>
      <LoginModal isShowing={showModal} click={closeModal}/>
      <Header click={closeModal}/>
      <PostsContainer>
        <PostCreator />
        <PostList />
      </PostsContainer>
      </Container>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchHandleUserName: (value) => dispatch(handleUsername(value))
  }
}

const mapStateToProps = state => (
  {
    posts: state.CreatePost.posts,
    username: state.Login.username,
  }
);

export default connect(mapStateToProps,mapDispatchToProps)(Home);