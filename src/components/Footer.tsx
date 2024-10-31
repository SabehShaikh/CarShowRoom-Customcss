import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import styles from "./Footer.module.css"; 

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <Link href="/" className={styles.logoLink}>
            <Image
              className={styles.logoImage}
              src="/logo.jpg"
              width={2000}
              height={2000}
              alt="Logo"
            />
          </Link>
          <p className={styles.tagline}>
            Your trusted car showroom since 2024.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className={styles.quickLinks}>
          <h2>Quick Links</h2>
          <Link href="/toyota">Toyota</Link>
          <Link href="/honda">Honda</Link>
          <Link href="/tesla">Tesla</Link>
        </div>

        {/* Social Media Links */}
        <div className={styles.socialLinks}>
          <h2>Follow Us</h2>
          <div className={styles.socialIcons}>
            <a
              href="https://www.facebook.com/Sabeh420/"
              className={styles.facebook}
              target="_blank"

            >
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/shaikh_sabeh"
              className={styles.twitter}
              target="_blank"

            >
              <FaXTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/sabeh-shaikh-016623245/"
              className={styles.linkedin}
              target="_blank"
            >
              <FaLinkedinIn className="w-6 h-6" />
            </a>
            <a href="https://github.com/SabehShaikh" className={styles.github}
                          target="_blank"
>
              <FaGithub className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className={styles.bottomSection}>
        <p>
          © 2024 Car Showroom —
          <Link
            href="https://personal-portfolio-sabeh.vercel.app/"
            className="text-gray-100 ml-1 underline hover:text-gray-300"
            rel="noopener noreferrer"
            target="_blank"
          >
            Sabeh Shaikh
          </Link>
        </p>
      </div>
    </footer>
  );
}
