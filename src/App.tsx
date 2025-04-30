import "./App.less";
import { Analytics } from "@vercel/analytics/react";
import { Route, Switch } from 'wouter';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { themeOptions } from "./ThemeOptions";
import { CssBaseline } from "@mui/material";
import NotFound from './views/NotFound/NotFound';
import Search from './views/Search/Search';
import Card from "./views/Card/Card";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <ThemeProvider theme={createTheme(themeOptions)}>
      <CssBaseline />
      <div className="App">
        <Switch>
          <Route path="/" component={Search} />
          <Route path="/card/:cardid" component={Card} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
      <Analytics />
    </ThemeProvider>
  );
};

export default App;
