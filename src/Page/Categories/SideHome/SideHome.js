import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import './SideHome.css';
import SingleCategoryData from './SingleCategoryData';

const SideHome = () => {
    const { user } = useContext(AuthContext)

    const url = 'https://autocar-two.vercel.app/cars';
    const { data: cars = [] } = useQuery({
        queryKey: ['cars'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json();
            return data;
        }
    })
    // const BaseURL = 'https://autocar-two.vercel.app/wishlist';
    // const { data } = useQuery({
    //     queryKey: [],
    //     queryFn: async () => {
    //         const res = await fetch(BaseURL);
    //         const data = await res.json();
    //         return data;
    //     }
    // })
    console.log('cars details', cars[0])

    console.log(cars)
    return (
        <div className='container mt-5 mb-5'>
            <p>All Available Data {cars.length} Result of {cars.length}</p>
            <div className='car-container mt-5'>

                <div class="all-car-container">
                    {
                        cars.map(car =>
                            <div key={car._id}
                                car={car}
                            >
                                <SingleCategoryData car={car}></SingleCategoryData>
                            </div>
                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default SideHome;