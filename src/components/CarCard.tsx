import Image from "next/image";
import Link from "next/link";
import styles from "./CarCard.module.css";

interface CarCardProps {
  brand: string;
  model: string;
  image: string;
  price: string;
}

export default function CarCard({ brand, model, image, price }: CarCardProps) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageWrapper}>
        <Image
          alt={model}
          className={styles.image}
          src={image}
          width={1000}
          height={1000}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.brand}>{brand}</h3>
        <h2 className={styles.model}>{model}</h2>
        <p className={styles.price}>{price}</p>
        <Link href="#" className={styles.link}>
          Learn More
          <svg
            className={styles.icon}
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h6m-3-3l3 3-3 3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
