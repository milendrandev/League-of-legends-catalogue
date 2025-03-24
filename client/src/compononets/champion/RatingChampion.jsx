import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import ratingService from '../../services/ratingService';
import { UserContext } from '../../contexts/UserContext';
import useFetchFilterByTwo from '../../hooks/useSearchByTwoCriteries';

export default function RatingChampion({ championId }) {
  const [voted, setVoted] = React.useState({});
  const [value, setValue] = React.useState(2);

  const { accessToken, _id } = React.useContext(UserContext);

  const { data } = useFetchFilterByTwo("_ownerId", _id, "championId", championId)

  console.log(data);
  //setVoted(data[0].ratingValue)

  const handleVote = (event) => {

    ratingService.create(championId, event.target.value, accessToken);
  }

  return (
    <Box sx={{ '& > legend': { mt: 0.5 }, color: 'white' }}>
      {data.length === 0 && data[0] != 404 ?
        <>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event) => {

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
        :
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
    </Box>
  );
}