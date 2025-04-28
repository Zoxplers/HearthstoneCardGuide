import styles from './NotFound.module.less';
import Header from '../../components/Header/Header';

export default function NotFound() {
  return (
    <div className={styles.NotFound}>
      <Header />
      <div className={styles.notfound}>
        <h1>Page Not Found</h1>
        <h2>Error 404</h2>
      </div>
    </div>
  );
}