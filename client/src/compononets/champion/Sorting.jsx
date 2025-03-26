import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Sorting({ handleChange }) {
    
    return (
        <Box>
            <FormControl sx={{ width: 140 , m:1, mt:2}} error>
                <InputLabel id="simple-select-label" sx={{ textAlign: 'right' }}>Sort By</InputLabel>
                <Select
                    labelId="simple-select-label"
                    id="simple-select"
                    label="Sort By"
                    defaultValue={''}
                    sx={{ color: 'white' }}
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Name: A - Z</MenuItem>
                    <MenuItem value={20}>Name: Z - A</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}