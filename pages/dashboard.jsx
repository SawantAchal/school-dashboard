import { useState, useEffect } from 'react';
import AddSchool from '../components/addSchool';
import ShowSchools from '../components/showSchool';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('addSchool');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    // Attach event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} h-screen`}>
      {/* Sidebar for Desktop */}
      {!isMobile && (
        <div className="w-1/6 bg-[#1d7a85] text-white p-4 ">
          <button className={`block w-full text-center p-2 font-bold ${activeTab === 'addSchool' ? 'bg-[#aeaeaf] rounded-md' : ''}`} onClick={() => setActiveTab('addSchool')}>
            ADD SCHOOL
          </button>
          <button className={`block w-full text-center p-2 mt-3 font-bold ${activeTab === 'showSchools' ? 'bg-[#aeaeaf] rounded-md' : ''}`} onClick={() => setActiveTab('showSchools')}>
            SHOW SCHOOL
          </button>
        </div>
      )}

      {/* Main Content */}
      <div className={`flex-1 p-4 ${isMobile ? 'mt-5' : ''}`}>
        {activeTab === 'addSchool' && <AddSchool />}
        {activeTab === 'showSchools' && <ShowSchools />}
      </div>

      {/* Mobile Button */}
      {isMobile && (
        <button className="fixed bottom-4 right-4 bg-[#1d7a85] text-white p-3 rounded-full" onClick={() => setActiveTab(activeTab === 'addSchool' ? 'showSchools' : 'addSchool')}>
          {activeTab === 'addSchool' ? 'Show Schools' : 'Add School'}
        </button>
      )}
    </div>
  );
}
