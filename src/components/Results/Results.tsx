import { useLocation } from 'wouter';
import useAPIService from '../../services/APIService';
import styles from './Results.module.less';

export default function Results() {
    const { CARDS, clearCard } = useAPIService();
    const [_, navigate] = useLocation();

    console.log(CARDS);

    return (
      <div className={styles.Results}>
        {CARDS && CARDS["cards"].map((card: any) => (
            <span key={card.id}>
                <img className={styles.result} src={card.image} alt={card.name} onClick={() => {
                    clearCard();
                    navigate(`/card/${card.id}`);
                }}></img>
            </span>
        ))}
      </div>
    );
  }