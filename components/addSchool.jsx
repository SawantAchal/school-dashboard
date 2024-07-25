import { useForm } from 'react-hook-form';

export default function AddSchool() {
  const { register, handleSubmit, formState: { errors } ,reset} = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    if (data.image[0]) {
      formData.append('image', data.image[0]);
    }

    const response = await fetch('/api/addSchool', {
      method: 'POST',
      body: formData,
    });
    const result = await response.json();
    alert(result.message);
    reset();
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl text-center font-bold mb-4 drop-shadow-2xl">ADD SCHOOL</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="name">Name</label>
          <input id="name" {...register('name', { required: true })} placeholder="Enter school name" className={`w-full p-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}/>
          {
            errors.name && <p className="text-red-500 text-sm mt-1">This field is required</p>
          }
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="address">Address</label>
          <input id="address" {...register('address', { required: true })} placeholder="Enter school address" className={`w-full p-2 border rounded-md ${errors.address ? 'border-red-500' : 'border-gray-300'}`}/>
          {
            errors.address && <p className="text-red-500 text-sm mt-1">This field is required</p>
          }
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="city">City</label>
          <input id="city" {...register('city', { required: true })} placeholder="Enter city" className={`w-full p-2 border rounded-md ${errors.city ? 'border-red-500' : 'border-gray-300'}`}/>
          {
            errors.city && <p className="text-red-500 text-sm mt-1">This field is required</p>
          }
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="state">State</label>
          <input id="state" {...register('state', { required: true })} placeholder="Enter state" className={`w-full p-2 border rounded-md ${errors.state ? 'border-red-500' : 'border-gray-300'}`}/>
          {
            errors.state && <p className="text-red-500 text-sm mt-1">This field is required</p>
          }
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="contact">Contact</label>
          <input id="contact" {...register('contact', { required: true, pattern: /^[0-9]+$/ })} placeholder="Enter contact number" className={`w-full p-2 border rounded-md ${errors.contact ? 'border-red-500' : 'border-gray-300'}`}/>
          {
            errors.contact && <p className="text-red-500 text-sm mt-1">Invalid contact number</p>
          }
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="email_id">Email ID</label>
          <input id="email_id" {...register('email_id', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} placeholder="Enter email ID" className={`w-full p-2 border rounded-md ${errors.email_id ? 'border-red-500' : 'border-gray-300'}`}/>
          {
            errors.email_id && <p className="text-red-500 text-sm mt-1">Invalid email address</p>
          }
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="image">Image</label>
          <input id="image" type="file" {...register('image')} className="w-full text-sm"/>
        </div>
        <button type="submit" className="w-full bg-[#1d7a85] text-white py-2 px-4 rounded-md hover:bg-[#1a494e] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          Add School
        </button>
      </form>
    </div>
  );
}
