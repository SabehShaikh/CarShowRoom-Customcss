import styles from './page.module.css'; // Import the CSS module

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Welcome to Our Car Showroom</h1>
        <p>We are excited to have you here! Explore our website to learn more about our vehicles, services, and the dedicated team that makes it all possible.</p>
        <p>Whether you're looking for a reliable family car, an electric vehicle, or a luxury ride, we have something for everyone. Dive into our collection of brands below!</p>
      </header>

      {/* Toyota Section */}
      <section className={styles.section}>
        <h2>Explore Toyota</h2>
        <p>Discover our range of Toyota vehicles, known for their reliability and innovation. From the versatile Corolla to the robust Land Cruiser, Toyota offers something for everyone.</p>
        <a href="/toyota">View Toyota Models</a>
      </section>

      {/* Tesla Section */}
      <section className={styles.section}>
        <h2>Discover Tesla</h2>
        <p>Experience the future of driving with our range of Tesla electric vehicles. With cutting-edge technology and sustainability at their core, Tesla leads the way in electric mobility.</p>
        <a href="/tesla">View Tesla Models</a>
      </section>

      {/* Honda Section */}
      <section className={styles.section}>
        <h2>Check Out Honda</h2>
        <p>Honda vehicles are renowned for their performance and efficiency. Explore our selection, from the compact Fit to the spacious CR-V, and find your perfect match.</p>
        <a href="/honda">View Honda Models</a>
      </section>
    </div>
  );
}
