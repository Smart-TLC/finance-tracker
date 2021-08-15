import React from 'react';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

export default function Theme({children}) {
    const state = useSelector((state) => ({
        auth: state.auth,
      }));
    const darkMode = state.auth.setting.darkMode;

    const lightTheme = createTheme({
        palette: {
          primary: {
            main: '#26c6da',
            light: '#80deea',
            dark: '#0097a7',
          },
          secondary: {
              light: '#81d4fa',
              main: '#4fc3f7',
              dark: '#039be5',
          },
          typography: {
            fontFamily: 'Poppins',
            fontWeightLight: '200',
            fontWeightRegular: '300',
            fontWeightMedium: '400',
            fontWeightBold: '500',
          }
        }
      }
    );
  
    const darkTheme = createTheme({
      palette: {
        type: "dark",
        primary: {
          main: '#26c6da',
          light: '#80deea',
          dark: '#0097a7',
        },
        secondary: {
            light: '#81d4fa',
            main: '#4fc3f7',
            dark: '#039be5',
        },
        typography: {
          fontFamily: 'Poppins',
          fontWeightLight: '200',
          fontWeightRegular: '300',
          fontWeightMedium: '400',
          fontWeightBold: '500',
        }
      }
    }
  )

  return (
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          {children}
      </ThemeProvider>
  )
}