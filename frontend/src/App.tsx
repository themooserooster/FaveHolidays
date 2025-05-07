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
import { FavoriteHolidays } from "./features/favoriteHolidays/FavoriteHolidays"

enum AppModes {
  Explore = "Explore",
  Favorites = "Favorites",
}

export const App = () => {
 
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [mode, setMode] = React.useState(AppModes.Explore);

  const handleModeChange = (newMode: AppModes) => {
    setMode(newMode);
    setOpenDrawer(false);
  };

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
          <ListItem key={AppModes.Explore} disablePadding>
            <ListItemButton onClick={() => {handleModeChange(AppModes.Explore)}}>
              <ListItemIcon>
                <ExploreIcon />
              </ListItemIcon>
              <ListItemText>Explore Holidays</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem key={AppModes.Favorites} disablePadding>
            <ListItemButton onClick={() => {handleModeChange(AppModes.Favorites)}}>
              <ListItemIcon>
                <FavoriteIcon />
              </ListItemIcon>
              <ListItemText>My Holidays</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
    {(mode === AppModes.Explore) && (<Explore />)}
    {(mode === AppModes.Favorites) && (<FavoriteHolidays />)}
  </React.Fragment>)
}
