import * as React from "react"
import "./App.css"
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import ExploreIcon from "@mui/icons-material/Explore"
import FavoriteIcon from "@mui/icons-material/Favorite"
import { Explore } from "./features/exploreHolidays/Explore"

export const App = () => {
 
  const [openDrawer, setOpenDrawer] = React.useState(false);
 
  return (<React.Fragment>
    <CssBaseline />
    <Box sx={{ flexGrow: 1 }}></Box>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => {setOpenDrawer(!openDrawer)}}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>My Favorite Holidays</Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
    <Drawer open={openDrawer} onClose={() => {setOpenDrawer(false)}}>
      <Box sx={{ width: 250 }} role="presentation" onClick={() => {setOpenDrawer(false)}}>
        <List>
          <ListItem key="explore" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ExploreIcon />
              </ListItemIcon>
              <ListItemText>Explore Holidays</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem key="explore" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FavoriteIcon />
              </ListItemIcon>
              <ListItemText>My Holidays</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
    <Explore />
  </React.Fragment>)
}
