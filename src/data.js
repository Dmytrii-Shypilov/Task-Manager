export const projects = [
  {
    id: "768999",
    name: "Project One ",
    description: "Some intresting project about some intresting stuff",
    materials: [
      { name: "project brochure", link: "link path" },
      { name: "project second brochure ", link: "link path" },
    ],
    contributors: [
      { id: "129945", name: "Jim Parsons", role: "assistant" },
      { id: "123445", name: "Anna Barrow", role: "assistant" },
      { id: "334345", name: "James Milner", role: "admin" },
    ],
    categories: ["Content", "Instagram Stories", "Instagram Reels"],
    tasks: [
      {
        category: "Content",
        statusList: ['pending','in work'],
        tasks: [
          {
            id: "388383",
            name: 'Instagram post',
            description: "Create content for instagram post",
            assignee: { id: "123445", name: "Anna Barrow", role: "assistant" },
            assigner: { id: "334345", name: "James Milner", role: "admin" },
            assignedAt: "15:00, 23 March 2023",
            links: [{name: 'New post template', link: './'}, {name: 'New post template', link: './'}],
            status: "in work",
            deadline: "15:00, 28 March 2023",
          },  {
            id: "388384",
            name: 'Instagram post two',
            description: "Create content for instagram post",
            assignee: { id: "123445", name: "Anna Barrow", role: "assistant" },
            assigner: { id: "334345", name: "James Milner", role: "admin" },
            assignedAt: "16:00, 23 March 2023",
            links: [{name: 'New post template', link: './'}, {name: 'New post template', link: './'}],
            status: "in work",
            deadline: "16:00, 28 March 2023",
          },
          {
            id: "388383",
            name: 'Facebook post',
            description: "Create content for Facebook post",
            assignee: { id: "129945", name: "Jim Parsons", role: "assistant" },
            assigner: { id: "334345", name: "James Milner", role: "admin" },
            assignedAt: "15:00, 23 March 2023",
            links: [{name: 'New post template', link: './'}, {name: 'New post template', link: './'}],
            status: "pending",
            deadline: "15:00, 28 March 2023",
          }
        ],
      },
    ],
    status: "Closed",
  },
  {
    id: "768499",
    name: "Project Two",
    description: "Some intresting project about some intresting stuff",
    materials: [],
    contributors: [
      { id: "123445", name: "Anna Barrow", role: "assistant" },
      { id: "334345", name: "james Milner", role: "admin" },
    ],
    categories: ["Content"],
    tasks: [
      {
        category: "Content",
        description: "Do something",
        assignee: "123445",
        assignedBy: "i334345",
        assignedAt: "15:00, 23 March 2023",
        status: "in work",
        deadline: "15:00, 28 March 2023",
      },
    ],
    status: "Active",
  },
  {
    id: "768199",
    name: "Project Three",
    description: "Some intresting project about some intresting stuff",
    contributors: [
      { id: "123445", name: "Anna Barrow", role: "assistant" },
      { id: "334345", name: "james Milner", role: "admin" },
    ],
    materials: [],
    categories: ["Content"],
    tasks: [
      {
        category: "Content",
        description: "Do something",
        assignee: "123445",
        assignedBy: "i334345",
        assignedAt: "15:00, 23 March 2023",
        status: "in work",
        deadline: "15:00, 28 March 2023",
      },
    ],
    status: "Active",
  },
];

export const users = [
  {
    id: "123445",
    firsName: "Anna",
    lastName: "Barrow",
  },
];
