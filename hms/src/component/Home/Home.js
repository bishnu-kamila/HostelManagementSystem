import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: Arial, sans-serif;
`;

const NavbarContainer = styled.nav`
  background-color: #007BFF;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  z-index: 999;
  align-items: center;
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;
`;

const NavItem = styled.li`
  margin: 0 1rem;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  font-weight: bold;
  &:hover {
    color: #fff;
  }
`;

const SlidingImage = styled.div`
  width: 100%;
  overflow: hidden;
`;

const ImageSlider = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

const Image = styled.img`
  width: 100%;
  height: 100vh; /* Set to full viewport height */
  object-fit: cover; /* Maintain image aspect ratio */
`;

const HomePage = () => {
  const images = ['./Images/111111111111.jpg', './Images/A1111111.jpg', 'image3.jpg']; // Replace with your image URLs

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <Container>
      
      <SlidingImage>
        <ImageSlider style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {images.map((image, index) => (
            <Image key={index} src={image} alt={`slide-${index}`} />
          ))}
        </ImageSlider>
      </SlidingImage>
      {/* Add next and previous buttons */}
      <button onClick={prevSlide}>Previous</button>
      <button onClick={nextSlide}>Next</button>
    </Container>
  );
};

export default HomePage;