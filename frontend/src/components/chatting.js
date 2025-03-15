import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ChatPage = () => {
  const { roomID } = useParams();
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const dummyMessages = [
    { MessageID: 1, RoomID: 1, User: 'Alice', Content: 'Hello, everyone!', Timestamp: '2023-09-10 09:00:00' },
    { MessageID: 2, RoomID: 1, User: 'Bob', Content: 'How do you stay focused on sobriety?', Timestamp: '2023-09-10 09:15:00' },
    { MessageID: 3, RoomID: 2, User: 'Eve', Content: 'Celebrating 1 year sober today!', Timestamp: '2023-09-12 18:30:00' },
  ];

  useEffect(() => {
    const roomMessages = dummyMessages.filter((msg) => msg.RoomID === parseInt(roomID));
    setMessages(roomMessages);
  }, [roomID]);

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const newChat = {
      MessageID: Date.now(),
      RoomID: parseInt(roomID),
      User: 'You',
      Content: newMessage,
      Timestamp: new Date().toISOString(),
    };

    setMessages((prevMessages) => [...prevMessages, newChat]);
    setNewMessage('');
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Back to Chatrooms
        </button>

        {/* Chat Room Title */}
        <h1 className="text-3xl font-bold mb-6 text-blue-800">Chat Room {roomID}</h1>

        {/* Chat Container */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          {/* Messages Section */}
          <div className="h-[400px] overflow-y-auto mb-6 border-b border-gray-200 pb-6">
            {messages.map((msg) => (
              <div key={msg.MessageID} className="mb-4">
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-blue-700">{msg.User}</p>
                  <small className="text-gray-500">
                    {new Date(msg.Timestamp).toLocaleString()}
                  </small>
                </div>
                <p className="mt-1 text-gray-700">{msg.Content}</p>
              </div>
            ))}
          </div>

          {/* Input Section */}
          <div className="flex items-center gap-4">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;