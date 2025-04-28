import "./App.less";
import { Analytics } from "@vercel/analytics/react";
import { Redirect, Route, Switch } from 'wouter';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { themeOptions } from "./ThemeOptions";
import { CssBaseline } from "@mui/material";
import NotFound from './views/NotFound/NotFound';
import Search from './views/Search/Search';
import Card from "./views/Card/Card";

const App = () => {

  return (
    <ThemeProvider theme={createTheme(themeOptions)}>
      <CssBaseline />
      <Switch>
        <Route path="/">
          <Redirect to="/search" />
        </Route>
        <Route path="/search" component={Search} />
        <Route path="/card/:cardid" component={Card} />
        <Route component={NotFound} />
      </Switch>
      <Analytics />
    </ThemeProvider>
  );
};

export default App;
