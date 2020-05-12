import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import NewTodoBar from './NewTodoBar';
import TodoGrid from './TodoGrid';


export default props => {
   const theme = createMuiTheme({
      palette: {
         primary: blue,
         secondary: green,
         background: {
         default: grey[900]
         }
      },
   });

   return (
      <ThemeProvider theme={theme}>
         <CssBaseline/>
         <NewTodoBar/>
         <TodoGrid/>
      </ThemeProvider>
   );
}
