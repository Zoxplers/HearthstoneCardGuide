import styles from './Card.module.less';
import { useLocation, useParams } from 'wouter';
import { useEffect } from 'react';
import Header from '../../components/Header/Header';
import useAPIService from '../../services/APIService';
import { Button } from '@mui/material';

export default function Card() {
  const params = useParams();
  const { CURRENTCARD, fetchCard } = useAPIService();
  const [_, navigate] = useLocation();
  const keyMap = new Map();
  keyMap.set("id", "Card ID");
  keyMap.set("manaCost", "Mana Cost");
  keyMap.set("health", "Health");
  keyMap.set("attack", "Attack");
  keyMap.set("rarityId", "Rarity");
  keyMap.set("craftingCost", "Cost to craft");
  keyMap.set("dustValue", "Disenchant Dust");
  keyMap.set("minionTypeId", "Minion Type");
  keyMap.set("text", "Text");
  keyMap.set("flavorText", "Flavor Text");
  keyMap.set("artistName", "Artist");
  
  useEffect(() => {
    if(params.cardid == undefined){
      navigate("/");
    }
    else{ 
      fetchCard(params.cardid);
    }
  }, []);

  return (
    <div className={styles.Card}>
      <Header>
        <div className={styles.subheader}>Card details</div> 
        <div className={styles.navbar}>
          <Button variant="contained" color="secondary" onClick={() => {navigate("/")}}>Back to search</Button>
          <Button variant="contained" color="secondary" onClick={() => console.error("Not yet implemented")}>Add to favorites</Button>
        </div>
      </Header>
      {typeof CURRENTCARD == "string" ?
      <div className={styles.notfound}>
        {CURRENTCARD}
      </div>
      :
      <div className={styles.found}>
        <span>
          <img src={CURRENTCARD.image} />
        </span>
        <span>
          <text>{CURRENTCARD.name}</text>
          {Array.from(keyMap).map(([key, value], index) => {
            if(CURRENTCARD[key] != undefined){
              return(<text key={index}>{value}: <section dangerouslySetInnerHTML={{ __html: CURRENTCARD[key] }}/></text>)
            }
          })}
        </span>
      </div>
      }
    </div>
  );
}