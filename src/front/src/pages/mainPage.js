import React, { useEffect } from 'react';
import Table from "../components/Table";
import { useDispatch, useSelector } from 'react-redux';

import {
  getUsers,
} from '../data/actions';

const MainPage = () => {
  const dispatch = useDispatch();

  const usersList = useSelector(
    (state) => state.Request.users
  );

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div>
        <Table data={usersList} />
    </div>
  );
};

export default MainPage;
