import { Avatar, Box, Container, Paper, Typography } from '@mui/material'
import React from 'react'
import draft from './assets/ri_draft-fill.png'
import CloseIcon from '@mui/icons-material/Close'; 
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function MailBox1() {
  return (
    <Box >
      <Paper sx={{mx: 2, px: 2}}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} >
          <Box >
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
              <Avatar />
              <Box>
                <Typography variant='h6' ml={3} > Tarik Abaza</Typography>
                <Typography variant='caption' color='#acaaaaff' ml={3}>From: tarik_abazza@hotmail.com <FiberManualRecordIcon sx={{height: 6}}/> To: Me</Typography>
              </Box>
            </Container>
          </Box>
          <Box color='#acaaaaff'  sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            2024, September 16, 08:00 am  <CloseIcon fontSize='small'/>
          </Box>
        </Box>


        <Box  >
          <Container sx={{ display: 'flex', alignItems: 'center', gap: '10px', py: '5px', ml: '5px' }}> <img src={draft} alt="draft-image" /><Typography color='#0022FF' fontWeight={'bold'} fontSize={'20px'}>DRAFT</Typography> </Container>
          <Typography variant='h5' sx={{ display: 'flex', fontWeight: 'bold', ml: '30px' }}>Your Contract is Started</Typography>
        </Box>

        <Box ml={1}>
          Dear Sales Team, 
          I've noticed a discrepancy in the latest invoice you sent us . ...
        </Box>

        <Box>
         </Box>
      </Paper>
    </Box>
  )
}

export default MailBox1
