import React, { ReactNode } from 'react';

import { Wrapper, Content } from './styles';

interface Props {
  children: ReactNode;
}

const AuthLayout: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Wrapper>
    <Content>{children}</Content>
  </Wrapper>
  );
};

export default AuthLayout

