import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import { deepOrange, } from '@mui/material/colors';



const Reg = (props) => {
  return (
    <>
    <body>
      
    
     <Card sx={{ maxWidth: 345 }}>
      <Avatar sx={{ bgcolor: deepOrange[500] }}>
        {props.ava}
      </Avatar>
      <CardMedia
        component="img"
        
        height="140"
        image={props.img}
        
      />
      <CardContent>
        <Typography>
          {props.Typography}
          {props.typo}
        </Typography>
        
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </body>
    </>
  )
}

export default Reg