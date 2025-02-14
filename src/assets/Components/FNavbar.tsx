import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './App.css';

interface FNavbarProps {
  title: string;
}

const FNavbar: React.FC<FNavbarProps> = ({ title }) => {
  return (
    <Navbar className="bg-dark-green" fixed="top">
      <Container className="justify-content-center">
        <Navbar.Brand href="#home">{title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default FNavbar;