import { useLocation } from 'wouter';
import useAPIService from '../../services/APIService';
import styles from './Results.module.less';

export default function Results() {
    const { CARDS, clearCard } = useAPIService();
    const [_, navigate] = useLocation();

    return (
      <div className={styles.Results}>
        {typeof CARDS == "string" ?
         <span className={styles.text}>{CARDS}</span>
         :
         CARDS["cards"].map((card: any) => (
            <span className={styles.imageContainer} key={card.id}>
                <img className={styles.result} src={card.image} alt={card.name} onClick={() => {
                    clearCard();
                    navigate(`/card/${card.id}`);
                }}></img>
            </span>
        ))}
      </div>
    );
  }