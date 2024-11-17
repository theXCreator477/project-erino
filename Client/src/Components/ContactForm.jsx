import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function ContactForm() {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 500))
            const response = await axios.post(`${import.meta.env.REACT_SERVER_URL}/contacts`, data);
            flash(response.data, 'Success')
            reset();
        } catch (error) {
            flash(error.response.data, 'Error')
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl"
        >
            <h2 className="text-2xl font-bold mb-6 text-gray-800">New Contact Information</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                        <input
                            {...register("firstName", { required: "First name is required" })}
                            id="firstName"
                            type="text"
                            className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-1 focus:outline-none focus:border-black"
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
                    />
                    {errors.phoneNumber && <p className="mt-1 text-xs text-red-500">{errors.phoneNumber.message}</p>}
                </div>
                <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
                    <input
                        {...register("company", { required: "Company is required" })}
                        id="company"
                        type="text"
                        className="mt-1 block w-full rounded-md border border-gray-300 py-1.5 px-1 focus:outline-none focus:border-black"
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
                    />
                    {errors.jobTitle && <p className="mt-1 text-xs text-red-500">{errors.jobTitle.message}</p>}
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-indigo-600 ${isSubmitting ? 'opacity-50' : 'opacity-100'}`}
                >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </motion.div>
    );
}