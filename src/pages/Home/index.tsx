import React, { useEffect } from 'react';
// import CustomLayout from '@/layout/customLayout/index';
import CustomLayout from '../../layout/customLayout/index';
import { useDispatch, useSelector } from 'react-redux';
import { Counter } from '../../store/modules/counter/counter';

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(setTaskList(res))
  }, [])

  return (
    <CustomLayout>
      <h1>Welcome to the Home Page!</h1>
      <Counter />
    </CustomLayout>
  );
};

export default Home;