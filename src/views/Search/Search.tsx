import './Search.less';
import { Button, TextField } from '@mui/material';
import Header from '../../components/Header/Header';

export default function Search() {
  return (
    <div className="Search">
      <div id="heading">
        <Header></Header>
        <div id="subheader">Find your favorite cards</div> 
        <div id="searchbar">
          <TextField id="searchfield" label="Search" variant="outlined" color="primary"/>
          <Button id="searchbutton" variant="contained" size="medium">
            <span className="material-icons-round">search</span>
          </Button>
        </div>
      </div>
    </div>
  );
}