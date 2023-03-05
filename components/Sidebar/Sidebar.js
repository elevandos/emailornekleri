import styles from "./Sidebar.module.css";

const Sidebar = () => {
    return (
        <aside className={styles['sidebar']}>
            <div className={'ads banner-300x250'}>
              <img src="assets/images/banner-300x250.png" />
            </div>
            <div className={'ads banner-300x250'}>
              <img src="assets/images/elevandos-300x600.png" />
            </div>
            <div className={'ads sticky banner-300x250'}>
              <img src="assets/images/banner-300x250.png" />
            </div>
        </aside>
    );
}

export default Sidebar;
