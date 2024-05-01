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
  const [textColor, setTextColor] = useState('rgb(249 213 28)'); 


  const CustomCard = styled(Card)({
    boxShadow: "0px 10px 20px -5px rgba(39,49,78,.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding:'0',
    margin:'0',
    color: textColor,
    backgroundColor: bgColor,
  
  });



  const Banner = styled(Card)({
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
    setBgColor((prevColor) => (prevColor === 'rgb(41 54 62)' ? 'rgb(206,217,237);' : 'rgb(41 54 62)'));
    setTextColor((prevColor) => (prevColor === 'rgb(249 213 28)' ? 'rgb(41 54 62)' : 'rgb(249 213 28)'));

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
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,


  };


  return (
    <div>
   
      <Slider {...sliderSettings}  >
        {cardsData.map((card, index) => (
          <div key={index}>
            <Card style={{width:'10rem',height:'100%', borderRadius:'20%', padding:0,margin:0}} >
              <CustomCard >
                <CardMedia>
                  <img src={card.imageUrl} alt={card.title} style={{ height: 100, objectFit: 'cover' }} />
                </CardMedia>
              </CustomCard>
              <CardContent>
                <Typography variant="h5" component="h2" style={{fontFamily:'Shrikhand'}}>
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
