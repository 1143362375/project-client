import React from 'react';
import { Input, Icon } from 'antd';
const Login = ({}) => {
  return (
    <div>
      登录
      <Input
        placeholder="物品编码"
        addonAfter={<Icon type="search" title="点击选择物品编码" />}
      />
    </div>
  );
};

Login.propTypes = {};

export default Login;
