/** @jsx jsx */
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { jsx, useTheme } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { Transition, CSSTransition } from 'react-transition-group';
import { mainRouter } from '@/router';
import useScrollToTop from '@/hook/useScrollToTop';
import { getUserInfo } from '@/store/slice/Account';
import { useAppDispatch } from '@/store';
import useAuthVerification from '@/hook/useAuthVerification';

const App = () => {
  const dispatch = useAppDispatch();
  const userInfo = useSelector(state => state.account.userInfo);
  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(getUserInfo())
    }
  }, []);
  return (
    <BrowserRouter>
      <PageView/>
    </BrowserRouter>
  );
};

const PageView = () => {
  useScrollToTop()
  return(
    <Switch>
      {mainRouter.map(router => (
        <Route exact={true} path={router.path} key={router.path} component={router.component} />
      ))}
    </Switch>
  )
}

export default App;
