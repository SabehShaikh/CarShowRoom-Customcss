import CarCard from '@/components/CarCard';
import styles from '@/app/cars.module.css'


export default function HondaPage() {
    const hondaCars = [
        { brand: 'Honda', model: 'Civic', image: '/images/honda/civics.jpg', price: '$23,000' },
        { brand: 'Honda', model: 'Accord', image: '/images/honda/accord.jpg', price: '$28,000' },
        { brand: 'Honda', model: 'City', image: '/images/honda/city.jpg', price: '$15,000' },
        { brand: 'Honda', model: 'CR-V', image: '/images/honda/crv.jpg', price: '$31,000' },
        { brand: 'Honda', model: 'HR-V', image: '/images/honda/hr-v.jpg', price: '$25,000' },
        { brand: 'Honda', model: 'Fit', image: '/images/honda/fit.jpg', price: '$16,000' },
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Honda Cars</h1>
            <div className={styles.grid}>
                {hondaCars.map((car, index) => (
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
