import React from 'react';
import { useSelector } from 'react-redux';
import { useCookies } from 'react-cookies';

export default function withAuthCheck(SpecificComponent, option) {
  function AuthenticationCheck(props) {
    let user = useSelector((state) => state.user);
    const [cookies] = useCookies(['accessToken']);
    const token = cookies.token;
    console.log(token);

    // Not Logged in Status
    if (!token) {
      if (option) {
        props.history.push('/');
      }
    } else {
      // Logged in Status
      if (!option) {
        props.history.push('/main');
      }
    }

    return <SpecificComponent {...props} user={user} />;
  }
  return AuthenticationCheck;
}
