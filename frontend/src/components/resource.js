import React from 'react';

const resources = [
    {
      ResourceID: 1,
      Title: "Understanding Alcohol Addiction",
      Description:
        "A comprehensive article explaining the science behind alcohol addiction and its effects on the brain.",
      Type: "Article",
      URL: "https://www.example.com/understanding-alcohol-addiction",
      AddedBy: 1,
    },
    {
      ResourceID: 2,
      Title: "Alcohol Recovery: A Step-by-Step Guide",
      Description:
        "A video guide that takes you through the process of alcohol addiction recovery, including strategies for coping with cravings.",
      Type: "Video",
      URL: "https://www.example.com/alcohol-recovery-guide",
      AddedBy: 2,
    },
    {
      ResourceID: 3,
      Title: "Support Groups: Finding Your Community",
      Description:
        "A podcast episode discussing the importance of support groups in the recovery process and how to find the right one for you.",
      Type: "Podcast",
      URL: "https://www.example.com/support-groups-episode",
      AddedBy: 3,
    },
    {
      ResourceID: 4,
      Title: "Alcohol Recovery Tracker Tool",
      Description:
        "A tool designed to help individuals track their progress during recovery, set goals, and stay motivated.",
      Type: "Tool",
      URL: "https://www.example.com/recovery-tracker",
      AddedBy: 4,
    },
    {
      ResourceID: 5,
      Title: "The Power of Meditation in Recovery",
      Description:
        "An article that explains how meditation can help reduce stress and manage triggers in the alcohol recovery process.",
      Type: "Article",
      URL: "https://www.example.com/meditation-in-recovery",
      AddedBy: 5,
    },
    {
      ResourceID: 6,
      Title: "Dealing with Alcohol Cravings",
      Description:
        "A video that offers practical advice for managing cravings and preventing relapse during the recovery journey.",
      Type: "Video",
      URL: "https://www.example.com/dealing-with-cravings",
      AddedBy: 6,
    },
  ];

// Dummy Data for Users
const users = [
  { UserID: 1, Name: 'John Doe' },
  { UserID: 2, Name: 'Jane Smith' },
  { UserID: 3, Name: 'Emily Clark' },
  { UserID: 4, Name: 'David Brown' },
];

const ResourceList = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-8 text-blue-800">Resources</h1>

        {/* Resource Categories */}
        <div className="space-y-8">
          {['Article', 'Video', 'Podcast', 'Tool'].map((type) => (
            <div key={type} className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-6 text-blue-700">{type}s</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources
                  .filter((resource) => resource.Type === type)
                  .map((resource) => (
                    <div
                      key={resource.ResourceID}
                      className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <h3 className="text-xl font-semibold text-blue-800 mb-2">{resource.Title}</h3>
                      <p className="text-gray-700 mb-4">{resource.Description}</p>
                      <a
                        href={resource.URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                      >
                        Access Resource
                      </a>
                      <p className="mt-4 text-sm text-gray-600">
                        <strong>Added by:</strong>{' '}
                        {users.find((user) => user.UserID === resource.AddedBy)?.Name}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourceList;