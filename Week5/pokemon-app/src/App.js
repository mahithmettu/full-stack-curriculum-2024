import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeContext } from './context/ThemeContext';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { WbSunny, NightsStay } from '@mui/icons-material';
<<<<<<< HEAD
import PokemonList from './components/PokemonList.js'
import PokemonDetail from './components/PokemonList.js'
=======
>>>>>>> upstream/main

function App() {

  const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <ThemeProvider theme={theme}>
<<<<<<< HEAD
      <AppBar>
        <Toolbar>
          <Typography variant = 'h6' sx={{ flexGrow : 1}}>
            Pokedex App
          </Typography>
          <IconButton onClick={toggleTheme}>
            {theme.palette.mode === 'dark' ? <WbSunny/> : <NightsStay/>}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path = '/' element={PokemonList}/>
        <Route path = '/:name' element={PokemonDetail}/>
      </Routes>
=======
      Hello World!
>>>>>>> upstream/main
    </ThemeProvider>
  );
}

export default App;
