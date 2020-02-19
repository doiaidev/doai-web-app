import React, { ReactNode } from 'react';

import Header from '../../../components/Header';

import { Wrapper } from './styles';

interface Props {
  children: ReactNode;
}

const DefaultLayout: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};

export default DefaultLayout
