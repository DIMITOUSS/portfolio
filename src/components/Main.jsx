import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { styled } from '@mui/system';
import AnimatedLoadingBar from './AnimatedLoadingBar'; 
import Mai from './Mai'

const Main = () => {
  const CustomCard = styled(Card)({
    backgroundColor: '#AEB6BF',
    color: 'blue',
    boxShadow: "0px 10px 20px -5px rgba(39,49,78,.1)",
    borderRadius: "10px",
    display:"flex",
    flexDirection:"column",
    justifyContent: "center",
    alignItems: "center",

  });

  
  const typingAnimation = {
    '40%, 60%': {
      left: 'calc(100% + 30px)',
    },
    '100%': {
      left: 0,
    },
  };

  const TextStyle = styled(Typography)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: 'rebeccapurple',
    fontFamily:'Roboto',
    fontSize:'large'
 
  });
  
  const Banner = styled(Card)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url("./assets/5unsplash.jpg")`,
    height:"30vh",
    animation: `${typingAnimation} 3s infinite`,
    backgroundSize:'inherit'

  });

  const cardsData = [
    { title: 'React', description: 'Promises', imageUrl: './logo512.png', percentage: 80 },
    { title: 'JavaScript', description: 'Promises', imageUrl: './assets/js.png', percentage: 60 },
    { title: 'Sass', description: 'Description 2', imageUrl: './assets/sass.png', percentage: 90 },
    { title: 'Css', description: 'Description 3', imageUrl: './assets/css.png', percentage: 90 },
    { title: 'HTML5', description: 'Description 3', imageUrl: './assets/html.png', percentage: 1000 },
  ];

  // Settings for React Slick slider
  const sliderSettings = {
    dots: true,
    focusOnSelect: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1500,
    centerMode: true,
    className: "center",
    centerPadding: "60px",
    cssEase: 'linear',
    
    
  };

  // State to control the animation of typing effect
  const [typedText, setTypedText] = useState('');
  const fullText = "Hello, I'm Oussama, a passionate and skilled Front-End Developer based in France. I specialize in building responsive websites using modern technologies like ReactJS, Redux, Node. Feel free to explore my projects or contact me if you need any help! Welcome to my portfolio where I showcase my projects, skills, and experiences.";
  const typingSpeed = 50; 

  // Function to simulate typing effect
  const typeText = () => {
    let i = 0;
    const intervalId = setInterval(() => {
      setTypedText(prevText => prevText + fullText[i]);
      i++;
      if (i === fullText.length) clearInterval(intervalId);
    }, typingSpeed);
  };

  useEffect(() => {
    typeText();
  }, []); // Run the typing effect on component mount

  return (
    <div>
      <Slider {...sliderSettings}>
        {cardsData.map((card, index) => (
          <div key={index}>
            <Card style={{ display:'flex',flexDirection:'column ',gap:'2rem', objectFit: 'cover' }}>
              <CustomCard>
                <CardMedia>
                  <img src={card.imageUrl} alt={card.title} style={{ height: 100, objectFit: 'cover' }} />
                </CardMedia>
              </CustomCard>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {card.title}
                </Typography>
                <AnimatedLoadingBar percentage={card.percentage} />
              </CardContent>
            </Card>
          </div>
        ))}
      </Slider>
      <Banner>
        <TextStyle variant="body1">
          {typedText}
        </TextStyle>
      </Banner>
    
      <Mai/>
     

    </div>
  );
};

export default Main;
