import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ChatroomPage = () => {
  const [chatrooms, setChatrooms] = useState([]);
  const [locationFilter, setLocationFilter] = useState('');
  const [languageFilter, setLanguageFilter] = useState('');
  const navigate = useNavigate();

  // Dummy data for addiction recovery chatrooms
  const dummyChatrooms = [
    {
      RoomID: 1,
      RoomName: 'Daily Support Group',
      Description: 'A safe space for daily check-ins and mutual support.',
      Location: 'Online',
      Language: 'English',
      CreatedAt: '2023-09-01 10:00:00',
    },
    {
      RoomID: 2,
      RoomName: 'Sobriety Milestones',
      Description: 'Celebrate and discuss key milestones in your sobriety journey.',
      Location: 'Remote',
      Language: 'English',
      CreatedAt: '2023-09-05 14:30:00',
    },
    {
      RoomID: 3,
      RoomName: 'Family & Friends Support',
      Description: 'A place for loved ones to share and find guidance.',
      Location: 'Online',
      Language: 'Spanish',
      CreatedAt: '2023-09-10 16:00:00',
    },
  ];

  useEffect(() => {
    // Simulate fetching data
    setChatrooms(dummyChatrooms);
  }, []);

  const handleJoinRoom = (roomID) => {
    navigate(`/chatroom/${roomID}`);
  };

  const filteredChatrooms = chatrooms.filter((room) => {
    return (
      (locationFilter === '' || room.Location.toLowerCase() === locationFilter.toLowerCase()) &&
      (languageFilter === '' || room.Language.toLowerCase() === languageFilter.toLowerCase())
    );
  });

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-blue-800 text-center">Addiction Recovery Community</h1>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">
          <input
            type="text"
            placeholder="Filter by location"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full md:w-64"
          />
          <input
            type="text"
            placeholder="Filter by language"
            value={languageFilter}
            onChange={(e) => setLanguageFilter(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full md:w-64"
          />
        </div>

        {/* Chatroom Cards */}
        {filteredChatrooms.length === 0 ? (
          <p className="text-center text-gray-600">No matching chatrooms found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredChatrooms.map((room) => (
              <div
                key={room.RoomID}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">{room.RoomName}</h2>
                <p className="text-gray-600 mb-4">{room.Description}</p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Location:</strong> {room.Location}</p>
                  <p><strong>Language:</strong> {room.Language}</p>
                  <p><strong>Created At:</strong> {new Date(room.CreatedAt).toLocaleString()}</p>
                </div>
                <button
                  onClick={() => handleJoinRoom(room.RoomID)}
                  className="mt-6 w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Join Room
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatroomPage;