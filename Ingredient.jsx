import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Ingredient = (props) => {
    // destructuring an object
    //const { name, image, calories} = props;
const list= props.ingredientsList;
const [checked, setChecked] = useState(false);


  return (
<div>
{console.log(list)}
    {list.map((ing)=> {
        return(           
                <div className='ingDiv' style={{ display: "inline-flex" }}>
                  <Card sx={{ maxWidth: 345 }}>
                  <input type="checkbox" value={ing.Id} defaultChecked={checked} onChange={() => setChecked(!checked)} ></input>
                    <CardMedia
                      component="img"
                      height="194"
                      image={ing.Image}
                      alt={ing.Name} />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        <h1> {ing.Name}</h1>
                        Calories: {ing.Calories}<br /><br />                                               
                      </Typography>
                    </CardContent>
                  </Card>
                  &nbsp;
                </div>                     
        );
    })}
    </div>
  )
};

export default Ingredient;