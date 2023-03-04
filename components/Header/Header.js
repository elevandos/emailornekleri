import { useContext } from "react";
import AppContext from "../../store/context/AppContext";
import { LANGUAGE_LIST } from "../../store/data/LanguageList";
import DayIcon from "../UI/Icons/DayIcon";
import NightIcon from "../UI/Icons/NightIcon";
import styles from "./Header.module.css";


const Header = () => {
  const { onLanguageChange, onThemeModeChange, isDarkMode, selectedLanguage } = useContext(AppContext);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <ul className={styles.menu}>
            <li className={styles["menu-item"]}>
              <a href="https://elevandos.com">Nasıl Çalışır?</a>
            </li>
            <li className={styles["menu-item"]}>
            <select value={selectedLanguage} onChange={onLanguageChange}>
              {LANGUAGE_LIST.map(lang => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
            </li>
            <li onClick={ onThemeModeChange }>
              {!isDarkMode && (
                <div className={`${styles["icon"]} ${styles["day-icon"]}`}>
                  <DayIcon />
                </div>
              )}
              {isDarkMode && (
                <div className={`${styles["icon"]} ${styles["night-icon"]}`}>
                  <NightIcon />
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
