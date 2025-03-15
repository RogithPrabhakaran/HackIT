import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useState, useEffect } from "react";

// Mock data: Replace with real API data
const getMockMoodData = () => {
  return [
    { date: "Mar 9", mood: 3 },
    { date: "Mar 10", mood: 4 },
    { date: "Mar 11", mood: 2 },
    { date: "Mar 12", mood: 5 },
    { date: "Mar 13", mood: 3 },
    { date: "Mar 14", mood: 4 },
    { date: "Mar 15", mood: 2 },
  ];
};

export default function MoodTrackerGraph() {
  const [moodData, setMoodData] = useState([]);

  useEffect(() => {
    // Fetch real data here
    setMoodData(getMockMoodData());
  }, []);

  return (
    <div className="w-full max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-4">
      <h2 className="text-xl font-bold text-center mb-4">Mood Tracker (Last 7 Days)</h2>
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={moodData}>
            <XAxis dataKey="date" stroke="#8884d8" />
            <YAxis domain={[1, 5]} tickCount={5} stroke="#8884d8" />
            <Tooltip />
            <Line type="monotone" dataKey="mood" stroke="#4f46e5" strokeWidth={3} dot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
