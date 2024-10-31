import styles from '@/app/cars.module.css'
import CarCard from '@/components/CarCard';

export default function ToyotaPage() {
  const toyotaCars = [
    { brand: "Toyota", model: "Corolla", image: "/images/toyota/corolla.jpg", price: "$23,000" },
    { brand: "Toyota", model: "Camry", image: "/images/toyota/camry.jpg", price: "$29,000" },
    { brand: "Toyota", model: "Yaris", image: "/images/toyota/yaris.jpg", price: "$20,000" },
    { brand: "Toyota", model: "Land Cruiser", image: "/images/toyota/land-cruiser.jpg", price: "$89,000" },
    { brand: "Toyota", model: "Hilux", image: "/images/toyota/hilux.jpg", price: "$50,000" },
    { brand: "Toyota", model: "Prius", image: "/images/toyota/prius.jpg", price: "$26,000" },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Toyota Cars</h1>
      <div className={styles.grid}>
        {toyotaCars.map((car, index) => (
          <CarCard
            key={index}
            brand={car.brand}
            model={car.model}
            image={car.image}
            price={car.price}
          />
        ))}
      </div>
    </div>
  );
}
