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
