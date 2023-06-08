import styles from './MainPage.module.scss';

import { Folder } from '../../components/ui/icons';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui';

const links = [
  { name: 'Telegram', url: '#', id: 1 },
  { name: 'GitHub', url: '#', id: 2 },
  { name: 'Resume', url: '#', id: 3 },
];

const MainPage = () => {
  return (
    <div className={styles.content}>
      <div className={styles.top}>
        <div className={styles.info}>
          <div className={styles.avatar}>
            <span>ПХ</span>
          </div>
          <div className={styles.aboutMe}>
            <h3 className={styles.name}>Петр Хлопцев</h3>
            <ul className={styles.list}>
              {links.map((link) => (
                <li key={link.id}>
                  <Folder />
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="middle">
        <form action="">
          <input type="text" />
        </form>
      </div>
      <div className="bottom">
        {/* <button>
          <Link to="/create" id="button-start" className={styles.linkButton}>
            Начать
          </Link>
        </button> */}
        <Button id="button-start">
          <Link to="/create">Начать</Link>
        </Button>
      </div>
    </div>
  );
};

export default MainPage;
