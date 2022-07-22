import React from 'react';
import Container from '../container/container';
import Content from '../content/content';
import Header from '../header/header';
import Footer from '../footer/footer';

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
