import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../context/AuthProvider';
import useWebTitle from '../../../../hooks/useWebTItle/useWebTitle';



const SellerProductPost = () => {
    useWebTitle('Post My Car')
    const { user } = useContext(AuthContext);
    console.log(user)
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const imgHostBB = process.env.REACT_APP_imgBB_key;

    const handleProductPost = (data) => {

        const image = data.img[0];

        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgHostBB}`;
        console.log(url)
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData.data.url)
                if (imgData.success) {
                    // const productInfo = {
                    //     title: data.title,
                    //     img: imgData.data.url,
                    //     price: data.price,
                    //     condition: data.condition,
                    //     slug: data.slug,
                    //     position: data.position,
                    //     wheel: data.wheel,
                    //     gear_type: data.mileage,
                    //     mileage: data.gear_type,
                    //     model: data.model,
                    //     negotiable_price: data.negotiable_price,
                    //     phone: data.phone,
                    //     description: data.description
                    // }
                    saveProduct(
                        data.title,
                        imgData.data.url,
                        data.price,
                        data.condition,
                        data.slug,
                        data.position,
                        data.wheel,
                        data.mileage,
                        data.gear_type,
                        data.model,
                        data.negotiable_price,
                        data.phone,
                        data.description,
                        user?.displayName,
                        user?.photoURL,
                        user?.email,

                    )
                }
            })
            .catch(err => console.error(err))
    }

    const saveProduct = (title, img, price, condition, slug, position, wheel, mileage, gear_type, model, negotiable_price, phone, description, displayName, photoURL, email) => {

        const sellerPost = { title, img, price, condition, slug, position, wheel, mileage, gear_type, model, negotiable_price, phone, description, displayName, photoURL, email, postStatus: 'sellerPost' };


        fetch('https://autocar-two.vercel.app/cars', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(sellerPost)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    reset();
                    toast.success('Car Details Added')

                }
            })
        console.log('sellerPost', sellerPost)
    }


    return (
        <div className='container'>
            <h1 className='text-center'>Post Product</h1>
            <div>
                <div class=" w-50 mx-auto mt-5 mb-5">
                    <form onSubmit={handleSubmit(handleProductPost)}>
                        <div className='d-flex '>
                            <input
                                {...register("title", {
                                    required: 'Title is Required'
                                })}
                                placeholder="Product Title"
                                className='form-style mb-2'
                            />
                            {errors.title && <p className='text-danger mb-5'>{errors.title?.message}</p>}

                            <input
                                {...register("price", {
                                    required: 'Price is Required'
                                })}
                                placeholder="Product Price"
                                className='form-style mb-2 ms-2'
                            />
                            {errors.price && <p className='text-danger mb-5'>{errors.price?.message}</p>}
                        </div>

                        <div className='d-flex '>
                            <input
                                {...register("condition", {
                                    required: 'Car condition is required'
                                })}
                                placeholder="Card Condition"
                                className='form-style mb-2'
                            />
                            {errors.condition && <p className='text-danger mb-5'>{errors.condition?.message}</p>}

                            <select
                                {...register("slug", {
                                    required: 'brand Required'
                                })}
                                class=" form-style mb-2 ms-2" aria-label="Default select example">
                                <option selected value="toyota">Which Brand</option>
                                <option value="toyota">ToyoTa</option>
                                <option value="bmw">BMW</option>
                                <option value="ford">Ford</option>
                                <option value="jeep">Jeep</option>
                                <option value="jaguar">Jaguar</option>
                            </select>
                            {errors.slug && <p className='text-danger mb-5'>{errors.slug?.message}</p>}
                        </div>

                        <div className='d-flex '>
                            <input
                                {...register("position ", {
                                    required: 'Siting Position Is Required'
                                })}
                                placeholder="Inter Car Siting Position"
                                className='form-style mb-2'
                            />
                            {errors.position && <p className='text-danger mb-5'>{errors.position?.message}</p>}

                            <input
                                {...register("wheel", {
                                    required: 'Car Wheel is required'
                                })}
                                placeholder="Wheel Side"
                                className='form-style mb-2 ms-2'
                            />
                            {errors.wheel && <p className='text-danger mb-5'>{errors.wheel?.message}</p>}
                        </div>

                        <div className='d-flex '>
                            <input
                                {...register("gear_type", {
                                    required: 'Gear Type is Required'
                                })}
                                placeholder="Gear Type"
                                className='form-style mb-2'
                            />
                            {errors.gear_type && <p className='text-danger mb-5'>{errors.gear_type?.message}</p>}

                            <input
                                {...register("mileage", {
                                    required: 'Inter Car Mileage'
                                })}
                                placeholder="Inter Mileage"
                                className='form-style mb-2 ms-2'
                            />
                            {errors.mileage && <p className='text-danger mb-5'>{errors.mileage?.message}</p>}
                        </div>

                        <div className='d-flex '>
                            <input
                                {...register("model", {
                                    required: 'Car Model Number/Name Required'
                                })}
                                placeholder="Car Model Number/Name"
                                className='form-style mb-2'
                            />
                            {errors.model && <p className='text-danger mb-5'>{errors.model?.message}</p>}
                            <input
                                {...register("negotiable_price", {
                                    required: 'Inter Negotiable Status '
                                })}
                                placeholder="Inter negotiable_price"
                                className='form-style mb-2 ms-2'
                            />
                            {errors.negotiable_price && <p className='text-danger mb-5'>{errors.negotiable_price?.message}</p>}
                        </div>

                        <input type="number"
                            {...register("phone", {
                                required: 'Phone number is required'
                            })}
                            placeholder="Inter Your Phone number"
                            className='form-style mb-2 '
                        />
                        {errors.phone && <p className='text-danger mb-5'>{errors.phone?.message}</p>}

                        <input type="file"
                            {...register("img", {
                                required: 'Photo URL Required'
                            })}
                            placeholder="Inter Product Image"
                            className='form-style mb-2 '
                        />
                        {errors.img && <p className='text-danger mb-5'>{errors.img?.message}</p>}


                        <textarea
                            {...register("description", {
                                required: 'Product Description Is Required'
                            })}
                            className='form-style mb-2'
                            placeholder="Product Description"
                            id="floatingTextarea" >
                        </textarea>
                        {errors.description && <p className='text-danger mb-5'>{errors.description?.message}</p>}

                        <input type="submit" value='Post Product' className='btns mt-3' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SellerProductPost;