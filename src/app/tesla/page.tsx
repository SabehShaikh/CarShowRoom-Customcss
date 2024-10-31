import CarCard from '@/components/CarCard';
import styles from '@/app/cars.module.css'


export default function TeslaPage() {
    const teslaCars = [
        { brand: 'Tesla', model: 'Model S', image: '/images/tesla/model-s.jpg', price: '$94,990' },
        { brand: 'Tesla', model: 'Model X', image: '/images/tesla/model-x.jpg', price: '$109,990' },
        { brand: 'Tesla', model: 'Model 3', image: '/images/tesla/model-3.jpg', price: '$39,990' },
        { brand: 'Tesla', model: 'Model Y', image: '/images/tesla/model-y.jpg', price: '$49,990' },
        { brand: 'Tesla', model: 'Cybertruck', image: '/images/tesla/cybertruck.jpg', price: '$59,990' },
        { brand: 'Tesla', model: 'Roadster', image: '/images/tesla/roadster.jpg', price: '$200,000' },
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Tesla Cars</h1>
            <div className={styles.grid}>
                {teslaCars.map((car, index) => (
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
