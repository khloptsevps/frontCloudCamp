import styles from './MainPage.module.scss';

import { Folder } from 'components/ui/icons';
import { AboutForm } from 'components';

const links = [
  { name: 'Telegram', url: 'https://telegram.me/khloptsevps', id: 1 },
  { name: 'GitHub', url: 'https://github.com/khloptsevps', id: 2 },
  {
    name: 'Resume',
    url: 'https://khabarovsk.hh.ru/resume/804dd760ff0bab50810039ed1f77354b757337',
    id: 3,
  },
];

const MainPage = () => {
  return (
    <div className={styles.root}>
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
                  <a href={link.url} target="_blank">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="middle" style={{ marginTop: '20px' }}>
        <AboutForm />
      </div>
    </div>
  );
};

export default MainPage;
