import React from 'react'
import { AppBar, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const StyledAppBar = withStyles({
    root:{
        backgroundColor: '#282c34',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        height: '4rem',
        boxShadow: '0px 10px 5px -5px rgba(0,0,0,0.15)',
    }
})(AppBar)

function Header() {
  return (
    <>
        <header>
            <StyledAppBar>
              <Typography variant="h4">COOL LIST APP</Typography>
            </StyledAppBar>
        </header>
    </>
  );
}

export default Header
