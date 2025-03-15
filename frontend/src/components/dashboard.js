import { useState, useEffect } from 'react';

const RecoveryProgress = () => {
  const [progressData, setProgressData] = useState([]);

  // Dummy data for a single user's recovery progress
  const dummyUser = {
    UserID: 101,
    UserName: 'John Doe',
  };

  const dummyProgress = [
    {
      ProgressID: 1,
      Date: '2023-09-20',
      SobrietyDays: 120,
      MoodRating: '5',
      Notes: 'Feeling strong and positive today!',
    },
    {
      ProgressID: 2,
      Date: '2023-08-20',
      SobrietyDays: 90,
      MoodRating: '4',
      Notes: 'Celebrated 90 days of sobriety!',
    },
    {
      ProgressID: 3,
      Date: '2023-07-21',
      SobrietyDays: 60,
      MoodRating: '4',
      Notes: 'Reached 2 months milestone.',
    },
    {
      ProgressID: 4,
      Date: '2023-06-21',
      SobrietyDays: 30,
      MoodRating: '3',
      Notes: 'First month down, feeling proud!',
    },
    {
      ProgressID: 5,
      Date: '2023-06-01',
      SobrietyDays: 10,
      MoodRating: '2',
      Notes: 'Struggled a bit, but staying on track.',
    },
  ];

  useEffect(() => {
    // Simulating data fetch
    setProgressData(dummyProgress);
  }, []);

  const calculateAverages = () => {
    if (progressData.length === 0) return { avgDays: 0, avgMood: 0 };

    const totalDays = progressData.reduce((acc, record) => acc + record.SobrietyDays, 0);
    const totalMood = progressData.reduce((acc, record) => acc + parseInt(record.MoodRating), 0);

    return {
      avgDays: (totalDays / progressData.length).toFixed(1),
      avgMood: (totalMood / progressData.length).toFixed(1),
    };
  };

  const { avgDays, avgMood } = calculateAverages();

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-8 text-blue-800">Recovery Progress</h1>

        {/* User Information Card */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">User Information</h2>
          <div className="space-y-2 text-gray-700">
            <p><strong>Name:</strong> {dummyUser.UserName}</p>
            <p><strong>User ID:</strong> {dummyUser.UserID}</p>
          </div>
        </div>

        {/* Summary Card */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Summary</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-lg font-medium text-blue-700">Average Sobriety Days</p>
              <p className="text-2xl font-bold text-blue-800">{avgDays}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-lg font-medium text-blue-700">Average Mood Rating</p>
              <p className="text-2xl font-bold text-blue-800">{avgMood}</p>
            </div>
          </div>
        </div>

        {/* Progress History Section */}
        <h2 className="text-2xl font-semibold mb-6 text-blue-700">Progress History</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {progressData.map((entry) => (
            <div
              key={entry.ProgressID}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-lg font-semibold text-blue-700 mb-2">{entry.Date}</p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Sobriety Days:</strong> {entry.SobrietyDays}</p>
                <p><strong>Mood Rating:</strong> {entry.MoodRating}</p>
                <p><strong>Notes:</strong> {entry.Notes}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecoveryProgress;