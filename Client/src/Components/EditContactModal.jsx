import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Modal, Button } from '@mui/material';
import axios from 'axios';

const EditContactModal = ({ open, handleClose, contact, onUpdate }) => {
    const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm();

    useEffect(() => {
        if (contact) {
            setValue('firstName', contact.firstName);
            setValue('lastName', contact.lastName);
            setValue('email', contact.email);
            setValue('phoneNumber', contact.phoneNumber);
            setValue('company', contact.company);
            setValue('jobTitle', contact.jobTitle);
        }
    }, [contact, setValue]);

    const onSubmit = async (data) => {
        try {
            await axios.put(`${import.meta.env.REACT_SERVER_URL}/contacts/${contact._id}`, data);
            onUpdate();
            handleClose(); 
            flash('Contact updated successfully', 'Success');
        } catch (error) {
            flash('Error updating contact', 'Error');
        }
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <div className="modal-content bg-white max-w-lg mx-auto mt-20 p-6 rounded-2xl shadow-lg">
                <h2 className="text-lg font-bold mb-4">Edit Contact</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                            <input
                                {...register("firstName", { required: "First name is required" })}
                                id="firstName"
                                type="text"
                                className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-1 focus:outline-none focus:border-black"
                                placeholder={contact ? contact.firstName : ''}
                            />
                            {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                            <input
                                {...register("lastName", { required: "Last name is required" })}
                                id="lastName"
                                type="text"
                                className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-1 focus:outline-none focus:border-black"
                                placeholder={contact ? contact.lastName : ''}
                            />
                            {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName.message}</p>}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "Invalid email address"
                                }
                            })}
                            id="email"
                            type="email"
                            className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-1 focus:outline-none focus:border-black"
                            placeholder={contact ? contact.email : ''} 
                        />
                        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                            {...register("phoneNumber", { required: "Phone number is required" })}
                            id="phoneNumber"
                            type="tel"
                            className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-1 focus:outline-none focus:border-black"
                            placeholder={contact ? contact.phoneNumber : ''} 
                        />
                        {errors.phoneNumber && <p className="mt-1 text-xs text-red-500">{errors.phoneNumber.message}</p>}
                    </div>
                    <div >
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
                        <input
                            {...register("company", { required: "Company is required" })}
                            id="company"
                            type="text"
                            className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-1 focus:outline-none focus:border-black"
                            placeholder={contact ? contact.company : ''}
                        />
                        {errors.company && <p className="mt-1 text-xs text-red-500">{errors.company.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">Job Title</label>
                        <input
                            {...register("jobTitle", { required: "Job title is required" })}
                            id="jobTitle"
                            type="text"
                            className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-1 focus:outline-none focus:border-black"
                            placeholder={contact ? contact.jobTitle : ''}
                        />
                        {errors.jobTitle && <p className="mt-1 text-xs text-red-500">{errors.jobTitle.message}</p>}
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-indigo-600 ${isSubmitting ? 'opacity-50' : 'opacity-100'}`}
                    >
                        {isSubmitting ? 'Submitting...' : 'Save Changes'}
                    </button>
                </form>
            </div>
        </Modal>
    );
};

export default EditContactModal;