import styles from './Header.module.css';
import logo from './images/logo.png';
import Image from 'next/image';
import mainFone from './images/main-fone.png';
export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.row}>
                        <div className={styles.colXl4}>
                            <div className={styles.headerLeft}>
                                <div className={styles.headerLogo}>
                                    <Image src={logo} alt="Логотип" className={styles.headerLogoImg} />
                                    <h2 className={styles.headerLogoTitle}>
                                        Оренбургский государственный медицинский университет
                                    </h2>
                                </div>
                                <Image src={mainFone} alt="Университет" className={styles.headerUniver} />
                            </div>
                        </div>
                        <div className={styles.colXl8}>
                            <nav className={styles.navMenu}>
                                <ul className={styles.navMenuUl}>
                                    <li className={styles.navMenuItem}>Университет</li>
                                    <li className={styles.navMenuItem}>Поступающим</li>
                                    <li className={styles.navMenuItem}>Обучающимся</li>
                                    <li className={styles.navMenuItem}>Научная деятельность</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>)
}