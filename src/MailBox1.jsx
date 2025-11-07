import { Avatar, Box, Container, Paper, Typography } from '@mui/material'
import React from 'react'
import dot from './assets/Ellipse 39.png'
import x from './assets/Vector.png'
import draft from './assets/ri_draft-fill.png'

function MailBox1() {
  return (
    <Box >
      <Paper sx={{width: '85vw'}}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'FFFFFF', flexGrow: '1' }} >
          <Box >
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
              <Avatar />
              <Box>
                <Typography variant='h6' mr={14} > Tarik Abaza</Typography>
                <Typography variant='caption' color='#acaaaaff' ml={3}>From: tarik_abazza@hotmail.com <img src={dot} /> To: Me</Typography>
              </Box>
            </Container>
          </Box>
          <Box color='#acaaaaff'>
            2024, September 16, 08:00 am <img src={x} style={{ height: '13px', marginLeft: "40px" }} />
          </Box>
        </Box>


        <Paper  >
          <Container sx={{ display: 'flex', alignItems: 'center', gap: '10px', py: '5px', ml: '5px' }}> <img src={draft} alt="draft-image" /><Typography color='#0022FF' fontWeight={'bold'} fontSize={'20px'}>DRAFT</Typography> </Container>
          <Typography variant='h5' sx={{ display: 'flex', fontWeight: 'bold', ml: '30px' }}>Your Contract is Started</Typography>
        </Paper>

        <Box ml={1}>
          Dear Sales Team,

          I've noticed a discrepancy in the latest invoice you sent us . ...
        </Box>

        <Box>
          {/* Text editor which i have no idea what to use for it. lecturer says we cant us react quill so i could import icons and make them functional i think i did preety good but this is just hard coded lay out maybe the upper layer wouldnt work as a preview i was also thinking  */}
        </Box>
      </Paper>
    </Box>
  )
}

export default MailBox1
