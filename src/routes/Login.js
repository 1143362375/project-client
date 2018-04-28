import React from 'react';
import { connect } from 'dva';
import LoginPage from '../components/login/login';
function Login() {
  const pageProps = {};
  return <LoginPage {...pageProps} />;
}
function mapStateToProps({ costsListModule }) {
  return { costsListModule };
}
Login.propTypes = {};

export default connect(mapStateToProps)(Login);
