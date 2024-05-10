import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { styled } from '@mui/system';
import AnimatedLoadingBar from './AnimatedLoadingBar';
import lamp from '../data/lamp.webp'
import lampoff from '../data/lampoff.webp'

import { Player } from '@lottiefiles/react-lottie-player';
import AnimationData from '../lottie/Animation.json'
import { useState } from 'react';

const Main = () => {
  const [imageSrc, setImageSrc] = useState(lamp);
  const [bgColor, setBgColor] = useState('rgb(41 54 62)');

  const handleImageClick = () => {
    // Toggle between original and new image
    setImageSrc((prevSrc) => (prevSrc === lamp ? lampoff : lamp));
    setBgColor((prevColor) => (prevColor === 'rgb(41 54 62)' ? 'rgb(206,217,237);' : 'rgb(41 54 62)'));
  };

  const CustomCard = styled(Card)({
    boxShadow: "0px 10px 20px -5px rgba(39,49,78,.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: '0',
    margin: '0',
    backgroundColor: bgColor,
  });

  const Banner = styled(Card)({
    display: "flex",
    textAlign: 'center',
    backgroundColor: bgColor,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: '3rem'
  });

  const cardsData = [
    { title: 'React', imageUrl: './assets/logo192.webp', percentage: 80 },
    { title: 'JavaScript', imageUrl: './assets/js.webp', percentage: 60 },
    { title: 'Sass', imageUrl: './assets/sass.webp', percentage: 90 },
    { title: 'Css', imageUrl: './assets/css.webp', percentage: 90 },
    { title: 'HTML5', imageUrl: './assets/html.webp', percentage: 100 },
    { title: 'Figma', imageUrl: './assets/figma.webp', percentage: 100 },
    { title: 'Agile', imageUrl: './assets/agile.webp', percentage: 100 },
    { title: 'Git', imageUrl: './assets/git.webp', percentage: 100 },
  ];

  // Settings for React Slick slider
  const sliderSettings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div>
      <div style={{ margin: '4rem  0' }}> 
        <Slider {...sliderSettings}>
          {cardsData.map((card, index) => (
            <div key={index}>
              <Card style={{ width: '10rem', height: '100%', borderRadius: '20%', padding: 0, margin: 0, }} >
                <CustomCard >
                  <CardMedia>
                    <img src={card.imageUrl} alt={card.title} style={{ height: 100, objectFit: 'cover' }} />
                  </CardMedia>
                </CustomCard>
                <CardContent>
                  <Typography variant="h5" component="h2" style={{ fontFamily: 'Shrikhand' }}>
                    {card.title}
                  </Typography>
                  <AnimatedLoadingBar percentage={card.percentage} />
                </CardContent>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
      <Player
        autoplay
        loop
        src={AnimationData}
        style={{ height: '300px', width: '300px' }}
      />
      <Banner>
        <img onClick={handleImageClick} src={imageSrc} style={{ width: 80, height: 80, borderRadius: 50 }} alt="" />
      </Banner>
    </div>
  );
};

export default Main;
