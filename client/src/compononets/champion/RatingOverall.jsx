import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function RatingOverall({ data }) {
    const [value, setValue] = React.useState(0);
    //const [ratings, setRatings] = React.useState([])

    function avarage() {
        let sum = 0;

        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            sum += parseInt(element.ratingValue)
        }
        return (sum / data.length)
    }

    return (
        <>
            {data[0] !== undefined ?
                <Box sx={{ '& > legend': { mt: 2, mb: 1 } }}>
                    <Typography component="legend" sx={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        backgroundColor: 'orange',
                        cursor: 'default',
                        width: '200px',
                        borderRadius: '0.3em',
                        fontSize: '22px'
                    }}>Overall Rating</Typography>
                    <Rating name="read-only" value={avarage()} readOnly />
                </Box>
                :
                <Box sx={{ '& > legend': { mt: 2 } }}>
                    <Typography component="legend" sx={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        backgroundColor: 'red',
                        cursor: 'default',
                        width: '200px',
                        borderRadius: '0.3em',
                        fontSize: '22px'
                    }}>No Rating</Typography>
                    <Rating name="read-only" value={value} readOnly />
                </Box>
            }
        </>
    );
}