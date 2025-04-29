import styles from './Card.module.less';
import { useLocation, useParams } from 'wouter';
import { useEffect } from 'react';
import Header from '../../components/Header/Header';
import useAPIService from '../../services/APIService';

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
      </Header>
      {CURRENTCARD? 
      <div className={styles.found}>
        <span>
          <img src={CURRENTCARD.image} />
        </span>
        <span>
          <text>{CURRENTCARD.name}</text>
          {Array.from(keyMap).map(([key, value]) => {
            if(CURRENTCARD[key] != undefined){
              return(<text>{value}: {CURRENTCARD[key]}</text>)
            }
          })}
        </span>
      </div>
      :
      <div className={styles.notfound}>
        Card not found!
      </div>
      }
    </div>
  );
}