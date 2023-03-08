import React from 'react'
//Icons for Navbar
import { 
  LightModeOutlined, 
  DarkModeOutlined, 
  Menu as MenuIcon, 
  Search, 
  SettingsOutlined, 
  ArrowDropDownOutlined 
} from '@mui/icons-material';
import FlexBetween from './FlexBetween';
import { useDispatch } from 'react-redux';
import { setMode } from 'state';
import profileImage from 'assets/profile.jpeg';
import { AppBar, IconButton, InputBase, Toolbar, useTheme } from '@mui/material';

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  return <AppBar
    sx={{
      position: 'static',
      background: 'none',
      boxShadow: 'none'
    }}
  >
    <Toolbar sx={{ justifyContent: 'space-between' }}>
      {/* Left Side */}

      <FlexBetween>
        <IconButton onClick={() => console.log('open/close sidebar')}>
          <MenuIcon />
        </IconButton>
        <FlexBetween
          backgroundColor={theme.palette.background.alt}
          borderRadius='9px'
          gap='3rem' // gap allows you to set the space between the children components instead of using margin
          padding='0.1rem 1.5rem' // .1 padding on top and bottom, 1.5 padding on left and right
        >
          <InputBase placeholder='Search...' />
          <IconButton>
            <Search />
          </IconButton>
        </FlexBetween>
      </FlexBetween>

      {/* Right Side */}
      <FlexBetween gap='1.5rem'>
        <IconButton onClick={() => dispatch(setMode())}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlined sx={{ fontSize: '25px' }} /> 
          ) : ( 
            <LightModeOutlined sx={{ fontSize: '25px' }} />
          )}  
        </IconButton>
        <IconButton>  
          <SettingsOutlined sx={{ fontSize: '25px' }} />
        </IconButton>
      </FlexBetween>

    </Toolbar>
  </AppBar>
}

export default Navbar