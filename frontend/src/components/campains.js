import React, { useState } from "react";

// Dummy data for alcohol addiction awareness campaigns
const campaignsData = [
  {
    CampaignID: 1,
    Title: "Sobriety Support Groups",
    Description: "Join local support groups to share experiences and stay motivated on your sobriety journey.",
    StartDate: "2025-03-01",
    EndDate: "2025-03-31",
    Location: "Global",
    OrganizerID: 101,
    OrganizerName: "John Doe",
  },
  {
    CampaignID: 2,
    Title: "Alcohol-Free Lifestyle Workshop",
    Description: "Learn strategies to maintain an alcohol-free lifestyle and improve your mental and physical health.",
    StartDate: "2025-04-01",
    EndDate: "2025-04-15",
    Location: "New York",
    OrganizerID: 102,
    OrganizerName: "Alice Smith",
  },
  {
    CampaignID: 3,
    Title: "Recovery Milestones Celebration",
    Description: "Celebrate milestones in recovery with others who understand the challenges of sobriety.",
    StartDate: "2025-05-01",
    EndDate: "2025-05-15",
    Location: "San Francisco",
    OrganizerID: 103,
    OrganizerName: "Emily Johnson",
  },
  {
    CampaignID: 4,
    Title: "Family Support for Addiction Recovery",
    Description: "A workshop for families to learn how to support loved ones in their recovery journey.",
    StartDate: "2025-06-01",
    EndDate: "2025-06-30",
    Location: "Los Angeles",
    OrganizerID: 104,
    OrganizerName: "Michael Brown",
  },
  {
    CampaignID: 5,
    Title: "Mindfulness and Sobriety",
    Description: "Explore mindfulness techniques to help manage cravings and maintain sobriety.",
    StartDate: "2025-07-01",
    EndDate: "2025-07-31",
    Location: "Chicago",
    OrganizerID: 105,
    OrganizerName: "Sarah Lee",
  },
];

const AwarenessCampaignsPage = () => {
  const [campaigns, setCampaigns] = useState(campaignsData);

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-8 text-blue-800">Alcohol Addiction Awareness Campaigns</h1>

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign) => (
            <div
              key={campaign.CampaignID}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-blue-800 mb-2">{campaign.Title}</h2>
              <p className="text-gray-700 mb-4">{campaign.Description}</p>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Start Date:</strong> {campaign.StartDate}</p>
                <p><strong>End Date:</strong> {campaign.EndDate}</p>
                <p><strong>Location:</strong> {campaign.Location}</p>
                <p><strong>Organizer:</strong> {campaign.OrganizerName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwarenessCampaignsPage;