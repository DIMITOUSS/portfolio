import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { styled } from '@mui/system';
import AnimatedLoadingBar from './AnimatedLoadingBar';
import lamp from '../data/lamp.jpg'
import lampoff from '../data/lampoff.jpg'

import './main.css'
import { Player } from '@lottiefiles/react-lottie-player';
import AnimationData from '../lottie/Animation3.json'
import { useState } from 'react';

const Main = () => {
  const [imageSrc, setImageSrc] = useState(lamp); 
  const [bgColor, setBgColor] = useState('#eb89ff'); 
  const [textColor, setTextColor] = useState('rgb(245 228 146)'); 


  const CustomCard = styled(Card)({
    boxShadow: "0px 10px 20px -5px rgba(39,49,78,.1)",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: textColor,
    textAlign: 'center',
    backgroundColor: bgColor,
  
  });



  const Banner = styled(Card)({
    margin: '20px',
    display: "flex",
    color: textColor,
    textAlign: 'center',
    backgroundColor: bgColor,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: 'shrikhand',
  
    
  });

  const handleImageClick = () => {
    // Toggle between original and new image
    setImageSrc((prevSrc) => (prevSrc === lamp ? lampoff : lamp));
    setBgColor((prevColor) => (prevColor === '#eb89ff' ? '#f0dc4e' : '#eb89ff'));
    setTextColor((prevColor) => (prevColor === '#a817ff' ? 'black' : '#a817ff'));

  };
  const cardsData = [
    { title: 'React', description: 'Promises', imageUrl: './assets/logo192.webp', percentage: 80 },
    { title: 'JavaScript', description: 'Promises', imageUrl: './assets/js.webp', percentage: 60 },
    { title: 'Sass', description: 'Description 2', imageUrl: './assets/sass.webp', percentage: 90 },
    { title: 'Css', description: 'Description 3', imageUrl: './assets/css.webp', percentage: 90 },
    { title: 'HTML5', description: 'Description 3', imageUrl: './assets/html.webp', percentage: 1000 },
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
    autoplaySpeed: 3000,
    centerMode: true,
    className: "center",
    centerPadding: "60px",
    cssEase: 'linear',


  };


  return (
    <div>
   
      <Slider {...sliderSettings}>
        {cardsData.map((card, index) => (
          <div key={index}>
            <Card style={{ display: 'flex', flexDirection: 'column ', gap: '2rem', objectFit: 'cover' }}>
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
        <Player
          autoplay
          loop
          src={AnimationData}
          style={{ height: '300px', width: '300px' }}



        />
      <Banner >
      <p>
        I'm Oussama,<br />
        a passionate web developer<br />
        based in France.<br />
        Let's create amazing websites together!
      </p>
      <img onClick={handleImageClick}
        src={imageSrc}
        style={{ width: 80, height: 80, borderRadius: 50 }}
        alt=""
      />
    </Banner>



    </div>
  );
};

export default Main;
