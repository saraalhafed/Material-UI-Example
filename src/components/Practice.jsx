
import {
     IconButton,
     Button, 
     Typography,
     Box,
     AppBar,
     Toolbar,
     FormControlLabel,
     MenuItem
     ,Menu,
    Stack,
     Drawer,
     Avatar,
     Badge,Card,
     CardMedia,CardContent,CardActions,
     Container} from '@mui/material';
     import MenuIcon from '@mui/icons-material/Menu';
     import { Mail, Notifications } from "@mui/icons-material";
     import { useState } from 'react';
export default function Practice() {
    /* to open the drawer */
    const [open,setOpen]=useState(false)
      const handelopenDrawer= ()=> setOpen(true);
      const handelcloseDrawer =()=> setOpen(false)

  const [anchorEl, setAnchorEl] = useState(null);
  const menuopen = Boolean(anchorEl);
  
/* to open the  avatar menu */
  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  }; 
  return (
    <div>
 <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <Stack direction='row' flexGrow={1} alignItems="center" spacing={4} >
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handelopenDrawer}        /* we add the handelclick here inside the iconbtn */
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>{/* variant :like size */}
          My Blog
          </Typography>
            </Stack>
           
            
          
            <Stack direction="row" spacing={2}>
              <IconButton color="inherit" >
               <Notifications/>
              </IconButton>
               
              <IconButton color="inherit" >
                <Badge badgeContent={2} color="error"> {/* to add a number of msg */}
                <Mail/>
                </Badge>
              </IconButton>

              <IconButton color="inherit" >
               <Avatar alt="profilePicture" onClick={handleOpenMenu}/>
              </IconButton>
              <Stack>
                <Menu open={menuopen} anchorEl={anchorEl} onClose={handleCloseMenu}>
                     <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
                     <MenuItem onClick={handleCloseMenu}>Setting</MenuItem>
                     <MenuItem onClick={handleCloseMenu}>Account</MenuItem>
                </Menu>
              </Stack>
              
            </Stack>
            
        </Toolbar>
      </AppBar>
    {/* the card outside the Appbar */}
    {/* we need container and box */}
    <Container sx={{mt:5}}  alignItems="center">
        <Box  alignItems="center" width="300px">
    <Card elevation={3}>
      <CardMedia          /* to style the img */
        sx={{ height: 140 }}
        image="https://images.unsplash.com/photo-1720849644323-499c62694fbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
       
      />
      <CardContent>   {/* just for text */}
        <Typography gutterBottom variant="h5" component="div"> {/*  gutterBottom :make space under the title */}
       Post Title
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ p: 2 }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <Stack alignItems="center" spacing={2}>
      <CardActions>       {/* outside the content */}
        <Button size="small">Share</Button>
        <Button size="small"> More</Button>
      </CardActions>
      </Stack>
    </Card>
    </Box>
    </Container>
             
      <Drawer open={open} onClose={handelcloseDrawer}>
                   <Box width="300px">
                        <Typography variant="h5"> here is the Drawer</Typography>
                   </Box>
            </Drawer>
    </Box>
    </div>
  )
}
