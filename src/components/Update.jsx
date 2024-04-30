import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useLoaderData } from 'react-router-dom';
import swal from 'sweetalert';

const Update = () => {
    const craft = useLoaderData();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
            item_name: craft.item_name,
            subcategory_name: craft.subcategory_name,
            short_description: craft.short_description,
            customization: craft.customization,
            price: craft.price,
            rating: craft.rating,
            image: craft.image,
            processing_time: craft.processing_time,
            stock_status: craft.stock_status
        }
    });
    const onSubmit = (data) => {
        fetch(`https://artifex-server.vercel.app/${craft._id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "PATCH",
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if (result.modifiedCount === 1) {
                swal("Updated successfully!", {
                    icon: "success",
                });
            } else {
                swal("Failed to update!", {
                    icon: "warning",
                });
            }
        });
    };
    return (
        <div>
            <Helmet>
                <title>Update Craft</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold dark:text-white">Update Craft & Sculpture info!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 dark:bg-gray-800">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)} noValidate>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Item Name</span>
                            </label>
                            <input type="text" className="input input-bordered dark:text-white dark:bg-gray-700" {...register("item_name", { required: 'Item name is required' })} />
                            <p className="text-red-500 mt-2">{errors.item_name?.message}</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Sub-category</span>
                            </label>
                            <select className="select bg-gray-100 dark:bg-gray-700 dark:text-white text-lg font-semibold" {...register("subcategory_name", { required: 'Subcategory Name is required' })}>
                                <option>Metal Sculpture</option>
                                <option>Clay Sculpture</option>
                                <option>Stone Sculpture</option>
                                <option>Beaded Sculpture</option>
                                <option>Natural Material Sculpture</option>
                                <option>Food carving</option>
                            </select>
                            <p className="text-red-500 mt-2">{errors.subcategory_name?.message}</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Image URL</span>
                            </label>
                            <input type="url" className="input input-bordered dark:bg-gray-700 dark:text-white" {...register("image", { required: 'Image URL is required' })}/>
                            <p className="text-red-500 mt-2">{errors.image?.message}</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Short Description</span>
                            </label>
                            <input type="text" className="input input-bordered dark:bg-gray-700 dark:text-white" {...register("short_description", { required: 'Short Description is required' })}/>
                            <p className="text-red-500 mt-2">{errors.short_description?.message}</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Price</span>
                            </label>
                            <input type="text" className="input input-bordered dark:bg-gray-700 dark:text-white" {...register("price", { required: 'Price is required' })}/>
                            <p className="text-red-500 mt-2">{errors.price?.message}</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Rating</span>
                            </label>
                            <input type="text" className="input input-bordered dark:bg-gray-700 dark:text-white" {...register("rating", { required: 'Rating is required' })}/>
                            <p className="text-red-500 mt-2">{errors.image?.message}</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Processing Time</span>
                            </label>
                            <input type="text" className="input input-bordered dark:bg-gray-700 dark:text-white" {...register("processing_time", { required: 'Image URL is required' })}/>
                            <p className="text-red-500 mt-2">{errors.processing_time?.message}</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Customizable</span>
                            </label>
                            <select className="select bg-gray-100 dark:bg-gray-700 dark:text-white text-lg font-semibold" {...register("customization", { required: 'Customizable is required' })}>
                                <option>yes</option>
                                <option>no</option>
                            </select>
                            <p className="text-red-500 mt-2">{errors.customization?.message}</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Stock Status</span>
                            </label>
                            <select className="select bg-gray-100 dark:bg-gray-700 dark:text-white text-lg font-semibold" {...register("stock_status", { required: 'Stock Status is required' })}>
                                <option>In stock</option>
                                <option>Made to Order</option>
                            </select>
                            <p className="text-red-500 mt-2">{errors.stock_status?.message}</p>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-slate-800 text-white">Update</button>
                        </div>                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update;