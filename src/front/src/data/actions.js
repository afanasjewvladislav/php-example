import axios from "axios";

export const GET_USERS = 'GET_USERS';

export const getUsers = () => {
  const url = 'src/app/api/v1/index.php';

  return dispatch => {
    axios({
      url: `${url}`,
      method: 'post',
      data: {
        type: 'getUsers'
      },
    })
      .then(async response => {
        if(response.status === 200) {
          console.log('response', response);
          dispatch({
            type: GET_USERS,
            payload: response.data
          });
        }
      })
      .catch((er) => {
        console.log('Ошибка: ', er);
      });
    }
};

export const getUsersByDivision = (payload) => {
  const url = 'src/app/api/v1/index.php';

  return dispatch => {
    axios({
      url: `${url}`,
      method: 'post',
      data: {
        type: 'getUsersByDivision',
        payload
      },
    })
      .then(async response => {
        if(response.status === 200) {
          dispatch({
            type: GET_USERS,
            payload: response.data
          });
        }
      })
      .catch((er) => {
        console.log('Ошибка: ', er);
      });
  }
};

export const deleteUser = (payload) => {
  const url = 'src/app/api/v1/index.php';

  return dispatch => {
    axios({
      url: `${url}`,
      method: 'post',
      data: {
        type: 'deleteUser',
        payload
      },
    })
      .then(async response => {
        if(response.status === 200) {
          dispatch({
            type: GET_USERS,
            payload: response.data
          });
        }
      })
      .catch((er) => {
        console.log('Ошибка: ', er);
      });
  }
};

export const getUsersByPosition = (payload) => {
  const url = 'src/app/api/v1/index.php';

  return dispatch => {
    axios({
      url: `${url}`,
      method: 'post',
      data: {
        type: 'getUsersByPosition',
        payload
      },
    })
      .then(async response => {
        if(response.status === 200) {
          dispatch({
            type: GET_USERS,
            payload: response.data
          });
        }
      })
      .catch((er) => {
        console.log('Ошибка: ', er);
      });
  }
};

export const createUser = (payload) => {
  const url = 'src/app/api/v1/index.php';

  return dispatch => {
    axios({
      url: `${url}`,
      method: 'post',
      data: {
        type: 'createUser',
        payload
      },
    })
      .then(async response => {
        if(response.status === 200) {
          dispatch({
            type: GET_USERS,
            payload: response.data
          });
        }
      })
      .catch((er) => {
        console.log('Ошибка: ', er);
      });
  }
};
