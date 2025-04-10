import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import ratingService from '../../services/ratingService';
import { UserContext } from '../../contexts/UserContext';

export default function RatingChampion({ championId, data }) {
  const [voted, setVoted] = React.useState(false);
  const [value, setValue] = React.useState(2);
  const { accessToken } = React.useContext(UserContext);

  const handleVote = (event) => {
    setVoted(true);
    if (data[0] === undefined) {
      ratingService.create(championId, event.target.value, accessToken);
    }
  }

  return (
    <Box sx={{ '& > legend': { mt: 1 }, color: 'white' }}>
      {!voted && data[0] === undefined &&
        <>
          <Rating
            name="simple-controlled"
            size='large'
            sx={{ mt: 1 }}
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
          <Rating name="read-only"
            size='large'
            sx={{ mt: 1 }}
            value={value}
            readOnly />
          <Typography component="legend" sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            backgroundColor: 'green',
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
          <Rating name="read-only"
            size='large'
            sx={{ mt: 1 }}
            value={data[0].ratingValue}
            readOnly />
          <Typography component="legend" sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            backgroundColor: 'green',
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