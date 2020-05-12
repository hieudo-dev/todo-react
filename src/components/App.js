import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import NewTodoBar from './NewTodoBar';
import TodoGrid from './TodoGrid';
import { Grid } from '@material-ui/core';


export default props => {
   const theme = createMuiTheme({
      palette: {
         primary: blue,
         secondary: green,
         background: {
         default: grey[100]
         }
      },
   });

   return (
      <ThemeProvider theme={theme}>
         <CssBaseline/>
         <div>
            <NewTodoBar/>
            <br/>
            <br/>
            <TodoGrid/>
         </div>
      </ThemeProvider>
   );
}
