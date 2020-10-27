const INITIAL_STATE = {
  posts: [],
}

export default (state = INITIAL_STATE, action) => {
  
  switch (action.type) {
    case 'create_post':
      return {...state, posts: [...state.posts, action.data]};
    
    case 'delete_post':
      return {...state, posts: state.posts.filter(post => action.data !== post)};
      
    case 'update_post':
    const response = state.posts.map((post)=> {
      if(post.id === action.data.post.id){
        return {
          ...post,
          title: action.data.title,
          content: action.data.content
        }
      }
      return post;
    });
    return {posts: response};
         
    default:
      return state
  }
}
