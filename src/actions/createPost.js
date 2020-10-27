  export const handleCreatePost = (data) => {
    return {
        type: 'create_post',
        data,
    }
  }  

  export const handleDeletePost = (data) => {
    return {
        type: 'delete_post',
        data,
    }
  }
  
  export const handleUpdatePost = (data) => {
    return {
        type: 'update_post',
        data,
    }
  }  
  