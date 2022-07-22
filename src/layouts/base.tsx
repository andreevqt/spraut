import React from 'react';
import Container from '../components/container/container';
import Content from '../components/content/content';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

type TBaseProps = {
  children?: React.ReactNode;
};

const Base = ({
  children
}: TBaseProps) => {
  return (
    <>
      <Header />
      <Content>
        <Container>
          {children}
        </Container>
      </Content>
      <Footer />
    </>
  );
};

export default Base;
