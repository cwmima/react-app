import React, { useState } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import MediaGrid from './Components/MediaGrid/MediaGrid';
import { IUserInput } from './Common/Interfaces';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

// const theme = createMuiTheme({
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 700,
//       md: 960,
//       lg: 1280,
//       xl: 1920,
//     },
//   },
// })

function App() {
  // The initial query sent to NASA API when loading the page
  const initialUserInput = {
    SearchQuery: "Moon",
    StartDate: new Date('2014-08-18T21:11:54'),
    EndDate: new Date('2018-08-18T21:11:54'),
  }
  const [UserInput, setUserInput] = useState<IUserInput>(initialUserInput);

  // we could've passed setUserInput directly into SearchBar as no modification needed for the user input
  const SetUserInput = (a: IUserInput) => setUserInput(a)

  return (
    <div className="App">
      {/* <MuiThemeProvider theme={theme}> */}
        <SearchBar SetUserInput={SetUserInput} />
        <MediaGrid SearchQuery={UserInput.SearchQuery} StartDate={UserInput.StartDate} EndDate={UserInput.EndDate} />
      {/* </MuiThemeProvider> */}
    </div>
  );
}

export default App;