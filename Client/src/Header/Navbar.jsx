function Navbar({ activeTab, setActiveTab }) {

    const handleToggle = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="mt-12 w-fit flex mx-auto border border-gray-500 rounded-full">
            <h1
                onClick={() => handleToggle('new')}
                className={`cursor-pointer text-lg font-semibold rounded-full px-6 py-2 transition duration-300 ${activeTab === 'new' ? 'bg-black text-white' : 'bg-white text-gray-500'
                    }`}
            >
                Create New
            </h1>
            <h1
                onClick={() => handleToggle('submissions')}
                className={`cursor-pointer text-lg font-semibold rounded-full px-6 py-2 transition duration-300 ${activeTab === 'submissions' ? 'bg-black text-white' : 'bg-white text-gray-500'
                    }`}
            >
                Submissions
            </h1>
        </div>
    );
}

export default Navbar;