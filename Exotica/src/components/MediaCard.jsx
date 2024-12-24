import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import car1 from '../assets/images/car1.jpg';





const MediaCard = ({ title, description, price, coverImg, location }) => {
  return (
    <Card sx={{ width: 300, marginBottom: '20px' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={coverImg}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.primary' }}>
          {price}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {location}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">More Info</Button>
      </CardActions>
    </Card>
  );
};

export default MediaCard;


  