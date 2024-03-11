import React from 'react';
import SignInUpForm from '../components/signInUp/SignInUpForm';
import withAuth from '../hoc/withAuth';

const Home = () => {
  return <SignInUpForm isLogedIn />;
};

export default withAuth(Home, false);
