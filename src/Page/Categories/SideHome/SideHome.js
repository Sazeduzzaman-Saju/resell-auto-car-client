import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../comps/PrimaryButton/PrimaryButton';
import { AuthContext } from '../../../context/AuthProvider';
import './SideHome.css';

const SideHome = () => {
    const { loading } = useContext(AuthContext);

    const url = 'https://autocar-two.vercel.app/cars';
    const { data: cars = [] } = useQuery({
        queryKey: ['cars'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json();
            return data
        }
    })
    console.log(cars)
    return (
        <div className='container mt-5 mb-5'>
            <p>All Available Data {cars.length} Result of {cars.length}</p>
            <div className='car-container mt-5'>

                <div class="all-car-container">
                    {
                        cars.map(car =>
                            <div key={car._id}>
                                <div class="card border-0 shadow-lg">
                                    <span class="percent">{car.condition}</span>
                                    <div class="card-image ">
                                        <img src={car.img} className="img-fluid service-car-img" alt='' />
                                    </div>
                                    <div class="card-inner">
                                        <span className=''>{car.slug.toUpperCase()}</span>
                                        <h5 class="mb-0">{car.title.slice(0, 20)}</h5>
                                        <div class="price mt-3 ">
                                            <span>${car.price}</span>
                                            <sup className='primary-bg text-white rounded-pill p-1 ms-1 shadow-lg text-end'>{car.negotiable_price ? <>Fixed</> : <>NEG</>}</sup>
                                        </div>
                                        <div class="mt-3 d-flex justify-content-between align-items-center">
                                            <Link to={`/carsCategories/carDetails/${car._id}`} style={{ textDecoration: 'none' }}>
                                                <PrimaryButton>Details</PrimaryButton>
                                            </Link>
                                            <div class="d-flex flex-row">
                                                <span class="wishlist"><FaHeart></FaHeart></span>
                                                <Link to={`/carsCategories/add-to-cart/${car._id}`}>
                                                    <span class="cart"><FaShoppingCart></FaShoppingCart></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default SideHome;