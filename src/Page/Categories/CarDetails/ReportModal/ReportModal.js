import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../../context/AuthProvider';


const ReportModal = ({ show, handleClose, singleService }) => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { _id, slug, position, title, img, description, price, gear_type, condition, mileage, wheel, model_id, negotiable_price } = singleService;



    const handleReport = (data) => {
        // console.log(data.comments)

        const reportPost = {
            reportPostId: _id,
            product_img: img,
            product_title: title,
            price: price,
            email: user?.email,
            userName: user?.displayName,
            userComment: data.comments,
            userPhoto: user?.photoURL,
        }

        console.log(reportPost)
        fetch(`https:autocar-two.vercel.app/reportedpost`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reportPost)
        }).then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => console.error(error))
    }
    return (

        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>{singleService.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='container mb-2'>
                    <div className='row shadow-lg primary-bg rounded text-white p-2 justify-content-center align-items-center'>
                        <div className='col-lg-4'>
                            <img src={img} className="img-fluid" alt="" />
                        </div>
                        <div className='col-lg-4'>
                            <p>Name</p>
                            <p>{title}</p>
                            <p>$ {price}</p>
                        </div>
                        <div className='col-lg-4'>
                            <p>About</p>
                            <p> {description.slice(0, 45)} ...</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit(handleReport)}>
                    <input
                        {...register("name", {
                            required: 'Name'
                        })}
                        defaultValue={user?.displayName}
                        className='form-style mb-2'
                        readOnly
                    />

                    <input
                        {...register("email", {
                            required: 'Email Address Required'
                        })}
                        defaultValue={user?.email}
                        className='form-style mb-2'
                        readOnly
                    />
                    <textarea
                        {...register("comments", {
                            required: 'Email Address Required'
                        })}
                        className='form-style mb-2'
                        placeholder="Leave a comment here"
                        id="floatingTextarea" >

                    </textarea>
                    {errors.comments && <p className='text-danger mb-5'>{errors.comments?.message}</p>}
                    <input type="submit" value='Report Post' className='btns mt-3' />
                </form>
            </Modal.Body>

        </Modal>





    );
};

export default ReportModal;