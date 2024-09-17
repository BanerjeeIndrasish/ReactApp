import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Switch, FormControlLabel, Box } from '@mui/material';


export default function Navbar(props) {
  return (
    <AppBar position="static" color={props.mode === 'light' ? 'primary' : 'default'}>
      <Toolbar>
        {/* Brand / Title */}
        <Typography variant="h6" component={Link} to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          {props.title}
        </Typography>

        {/* Links */}
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', ml: 2 }}>
          {/* <Typography variant="body1" component={Link} to="/" style={{ color: 'inherit', textDecoration: 'none', marginRight: '16px' }}>
            Home
          </Typography>
          <Typography variant="body1" component={Link} to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>
            About
          </Typography> */}
        </Box>

        {/* Dark Mode Switch */}
        <FormControlLabel
          control={
            <Switch checked={props.mode === 'dark'} onChange={props.toggleMode} name="modeSwitch" />
          }
          label={`Enable ${props.mode === 'light' ? 'Dark' : 'Light'} Mode`}
        />
      </Toolbar>
    </AppBar>
  )
}

Navbar.propTypes = {
    titleName : PropTypes.string,
    aboutText : PropTypes.string
}