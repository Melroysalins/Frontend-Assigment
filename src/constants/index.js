export const dummyData = [
  {
    id: "101",
    layout: 1,
    category: "CSPM Executive Dashboard",
    type: "CSPM",
    dashboard: [
      {
        id: "102",
        type: "Cloud Accounts",
        data: [
          {
            connected: 2,
            NotConnected: 2,
          },
        ],
      },
      {
        id: "103",
        type: "Cloud Account Risk Assessment",
        data: [
          {
            Failed: 300,
            warning: 40,
            NotAvailable: 50,
            Passed: 70,
          },
        ],
      },
    ],
  },
  {
    id: "104",
    layout: 2,
    category: "CWPP Dashboard",
    type: "CWPP",
    dashboard: [
      {
        id: "105",
        type: "Top 5 Namespaces Specific Alerts",
        data: [],
      },
      {
        id: "106",
        type: "Workload Alerts",
        data: [],
      },
    ],
  },
  {
    id: "107",
    layout: 3,
    category: "Registry Scan",
    type: "Image",
    dashboard: [
      {
        id: "108",
        type: "Image Risk Assessment",
        data: [
          {
            critical: 300,
            high: 900,
          },
        ],
      },
      {
        id: "109",
        type: "Image Security Issues",
        data: [
          {
            critical: 30,
            high: 20,
          },
        ],
      },
    ],
  },
];
