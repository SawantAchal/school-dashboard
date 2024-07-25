import { useEffect, useState } from 'react';

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    async function fetchSchools() {
      const response = await fetch('/api/showSchools');
      const data = await response.json();
      setSchools(data);
    }
    fetchSchools();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">School List</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {schools.map((school, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={`/schoolImages/${school.image}`} alt={school.name} className="w-full h-40 object-cover"/>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{school.name}</h2>
              <p className="text-gray-700 mb-1"><span className='text-black'>Add: </span>{school.address}</p>
              <p className="text-gray-500">{school.city}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
