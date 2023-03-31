import React, { useState } from 'react'
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from '@mui/icons-material'
import FlexBetween from 'components/FlexBetween'
import { useDispatch } from 'react-redux'
import { setMode } from 'state'
import profileImage from 'assets/me2.png'
import { AppBar, Toolbar, useTheme, InputBase, IconButton } from '@mui/material'

const NavBar = () => {
  const dispatch = useDispatch()
  const theme = useTheme()

  return(
      <AppBar
        sx={{
          position: 'static',
          background: 'none',
          boxShadow: 'none',
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between"}}>
            {/* LEFT SIDE */}
            <FlexBetween>
                <IconButton onClick={() => console.log("open/close sidebar")}>
                    <MenuIcon />
                </IconButton>
                <FlexBetween
                    backgroundColor={theme.pallette.background.alt}
                    borderRadius = "9px"
                    gap="3rem"
                    p="0.1rem 1.5rem"
                >
                    <InputBase placeholder="Search..." />
                    <IconButton>
                        <Search />
                    </IconButton>
                </FlexBetween>
            </FlexBetween>

            {/* RIGHT SIDE */}
            <FlexBetween gap="1.5rem">
                <IconButton onClick={() => dispatch(setMode())}>
                    {theme.pallette.mode === 'dark' ? (
                        <DarkModeOutlined sx={{ fontSize: '25px'}} />
                    ):(
                        <LightModeOutlined sx={{ fontSize: "25px"}} />
                    )}
                </IconButton>
                <IconButton>
                    <SettingsOutlined sx={{ fontSize: "25px"}} />
                </IconButton>
            </FlexBetween>
        </Toolbar>
      </AppBar>

  )
}

export default NavBar