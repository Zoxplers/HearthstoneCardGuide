import styles from './Search.module.less';
import { Button, Pagination, TextField, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Results from '../../components/Results/Results';
import useAPIService from '../../services/APIService';

export default function Search() {
  const { CARDS, PARAMS, fetchCards } = useAPIService();
  const [pageCount, setPageCount] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  function search()
  {
    PARAMS.set("textFilter", searchQuery);
    fetchCards();
  }

  useEffect(() => {
    search();
  }, []);

  useEffect(() => {
    if(CARDS.pageCount){
      setPageCount(CARDS.pageCount);
    }
  }, [CARDS]);

  return (
    <div className={styles.Search}>
      <Header>
        <div className={styles.subheader}>Find your favorite cards</div> 
        <div className={styles.searchbar}>
          <TextField id="searchfield" label="Search" variant="outlined" color="primary"
          onKeyDown={(event:  any) => {
            if(event.key == "Enter") {
              search();
            }
          }}
          onChange={(event: any) => {
            setSearchQuery(event.target.value);
          }}/>
          <Button className={styles.searchbutton} variant="contained" size="medium" onClick={() => {
            search();
          }}>
            <span className="material-icons-round">search</span>
          </Button>
        </div>
        <div className={styles.navbar}>
          <Pagination color="secondary" count={pageCount} size={isSmall ? "medium":"large"} page={Number(PARAMS.get("page"))} onChange={ (_, page) => {
            PARAMS.set("page", page.toString());
            fetchCards();
          }} />
        </div>
      </Header>
      <Results />
    </div>
  );
}