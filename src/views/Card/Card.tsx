import styles from './Card.module.less';
import Header from '../../components/Header/Header';

export default function Card() {
  return (
    <div className={styles.Card}>
      <Header>
        <div className={styles.subheader}>Card details</div> 
      </Header>
    </div>
  );
}