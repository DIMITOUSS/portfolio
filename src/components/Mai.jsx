import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { styled } from '@mui/system';
import AnimatedLoadingBar from './AnimatedLoadingBar'; 

const Main = () => {
  const CustomCard = styled(Card)({
    backgroundColor: '#AEB6BF',
    color: '#E84C1A',
    
    boxShadow: "0px 10px 20px -5px rgba(39,49,78,.1)",
    borderRadius: "10px",
    display:"flex",
    flexDirection:"column",
    justifyContent: "center",
    alignItems: "center",

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
    fade: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 1500,
autoplay:true,
   

    
  };

 
  return (
    <div>
      <Slider {...sliderSettings}>
        {cardsData.map((card, index) => (
          <div key={index}>
            <Card >
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
      
    </div>
  );
};

export default Main;
