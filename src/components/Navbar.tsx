import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            className={styles.logoImage}
            src="/logo.jpg"
            width={2000}
            height={2000}
            alt="Logo"
          />
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <Link href="/toyota" className={styles.navLink}>
                Toyota
                <span></span>
              </Link>
            </li>
            <li>
              <Link href="/honda" className={styles.navLink}>
                Honda
              </Link>
              <span></span>
            </li>
            <li>
              <Link href="/tesla" className={styles.navLink}>
                Tesla
                <span></span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
