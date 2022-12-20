import { useQuery } from '@tanstack/react-query';
import useWebTitle from '../../../hooks/useWebTItle/useWebTitle';
import './SideHome.css';
import SingleCategoryData from './SingleCategoryData';

const SideHome = () => {

    useWebTitle('CateGory Home')
    const url = 'https://resell-autocar-server.vercel.app/cars';
    const { data: cars = [] } = useQuery({
        queryKey: ['cars'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className='container mt-5 mb-5'>
            <p>All Available Data {cars.length} Result of {cars.length}</p>
            <div className='car-container mt-5'>

                <div className="all-car-container">
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