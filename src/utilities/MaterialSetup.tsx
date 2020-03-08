import { CssBaseline, ThemeProvider } from '@material-ui/core'
import React from 'react'

import { theme } from '../theme'

type Props = {
  children: React.ReactNode
}

export function MaterialSetup({ children }: Props) {
  return (
    <>
        <ThemeProvider theme={theme}>
          {/* CssBaseline needs to be inside the ThemeProvider to get a theme baseline */}
          <CssBaseline />
          {children}
        </ThemeProvider>
    </>
  )
}
