import styles from './Search.module.less';
import { Button, TextField } from '@mui/material';
import Header from '../../components/Header/Header';

export default function Search() {
  return (
    <div className="Search">
      <Header>
        <div className={styles.subheader}>Find your favorite cards</div> 
        <div className={styles.searchbar}>
          <TextField id="searchfield" label="Search" variant="outlined" color="primary"/>
          <Button className={styles.searchbutton} variant="contained" size="medium">
            <span className="material-icons-round">search</span>
          </Button>
        </div>
      </Header>
    </div>
  );
}