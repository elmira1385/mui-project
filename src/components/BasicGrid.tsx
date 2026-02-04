import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';



export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={2}>
          icon
        </Grid>
        <Grid size={10}>
          header
        </Grid>
        <Grid size={2}>
         sidebar
        </Grid>
        <Grid size={10}>
         main
        </Grid>
      </Grid>
    </Box>
  );
}
