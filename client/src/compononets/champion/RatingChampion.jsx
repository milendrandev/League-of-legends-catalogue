import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import ratingService from '../../services/ratingService';
import { UserContext } from '../../contexts/UserContext';
import useFetchFilterByTwo from '../../hooks/useSearchByTwoCriteries';

export default function RatingChampion({ championId, data, rating }) {
  const [voted, setVoted] = React.useState(false);
  const [value, setValue] = React.useState(2);


  const { accessToken, _id } = React.useContext(UserContext);



  const handleVote = (event) => {
    setVoted(true);
    if (data[0] === undefined) {
      console.log('create')
      ratingService.create(championId, event.target.value, accessToken);
    }
    else {
      console.log('update')
      console.log(data)
    }
  }

  return (
    <Box sx={{ '& > legend': { mt: 0.5 }, color: 'white' }}>
      {!voted && data[0] === undefined &&
        <>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event) => {
              setValue(event.target.value)
              handleVote(event);
            }}
          />
          <Typography component="legend" sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            backgroundColor: 'orange',
            cursor: 'default',
            width: '200px',
            borderRadius: '0.3em',
            fontSize: '22px'
          }}>
            Vote Up
          </Typography>
        </>
      }
      {voted && data[0] === undefined &&
        <>
          <Rating name="read-only" value={value} readOnly />
          <Typography component="legend" sx={{
            textAlign: 'center',
            fontWeight: 'bold', backgroundColor: 'green',
            cursor: 'default',
            width: '240px',
            borderRadius: '0.3em',
            fontSize: '22px'
          }}>
            Thank's for your vote
          </Typography>
        </>
      }
      {data[0] != undefined &&
        <>
          <Rating name="read-only" value={data[0].ratingValue} readOnly />
          <Typography component="legend" sx={{
            textAlign: 'center',
            fontWeight: 'bold', backgroundColor: 'green',
            cursor: 'default',
            width: '240px',
            borderRadius: '0.3em',
            fontSize: '22px'
          }}>
            Thank's for your vote
          </Typography>
        </>
      }
    </Box>
  );
}