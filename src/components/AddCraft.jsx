import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "./AuthProvider";
import { useForm } from "react-hook-form";
import swal from 'sweetalert';

const AddCraft = () => {
    const { user } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors, isDirty }
    } = useForm();
    const onSubmit = (data) => {
        const newData = {...data, userEmail: user.email};
        fetch(`https://artifex-server.vercel.app`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(newData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                swal("Added successfully!", {
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
                <title>Add Craft</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Add New Craft & Sculptures!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)} noValidate>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Item Name</span>
                            </label>
                            <input type="text" className="input input-bordered" {...register("item_name", { required: 'Item name is required' })} />
                            <p className="text-red-500 mt-2">{errors.item_name?.message}</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Sub-category</span>
                            </label>
                            <input type="text" className="input input-bordered" {...register("subcategory_name", { required: 'Subcategory Name is required' })}/>
                            <p className="text-red-500 mt-2">{errors.subcategory_name?.message}</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="url" className="input input-bordered" {...register("image", { required: 'Image URL is required' })}/>
                            <p className="text-red-500 mt-2">{errors.image?.message}</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <input type="text" className="input input-bordered" {...register("short_description", { required: 'Short Description is required' })}/>
                            <p className="text-red-500 mt-2">{errors.short_description?.message}</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" className="input input-bordered" {...register("price", { required: 'Price is required' })}/>
                            <p className="text-red-500 mt-2">{errors.price?.message}</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" className="input input-bordered" {...register("rating", { required: 'Rating is required' })}/>
                            <p className="text-red-500 mt-2">{errors.image?.message}</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Processing Time</span>
                            </label>
                            <input type="text" className="input input-bordered" {...register("processing_time", { required: 'Image URL is required' })}/>
                            <p className="text-red-500 mt-2">{errors.processing_time?.message}</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Customizable</span>
                            </label>
                            <input type="text" className="input input-bordered" {...register("customization", { required: 'Customizable is required' })}/>
                            <p className="text-red-500 mt-2">{errors.customization?.message}</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Stock Status</span>
                            </label>
                            <input type="text" className="input input-bordered" {...register("stock_status", { required: 'Stock Status is required' })}/>
                            <p className="text-red-500 mt-2">{errors.stock_status?.message}</p>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-slate-800 text-white" disabled={!isDirty}>Add</button>
                        </div>                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCraft;