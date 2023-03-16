export const projects = [
    {   
        id: '768999',
        name: "Project One ",
        description: "Some intresting project about some intresting stuff",
        contributors: [{id: '123445', name: "Anna Barrow", role: 'assistant'}, {id:"334345",name: "James Milner", role: 'admin'}],
        categories: ['Content'],
        tasks: [{
            category: "Content",
            description: "Do something",
            assignee: '123445',
            assignedBy: 'i334345',
            assignedAt: '15:00, 23 March 2023',
            status: 'in work',
            deadline: '15:00, 28 March 2023'
        }],
        status: 'Closed'
    },
    {   
        id: '768499',
        name: "Project Two",
        description: "Some intresting project about some intresting stuff",
        contributors: [{id: '123445', name: "Anna Barrow", role: 'assistant'}, {id:"334345",name: "james Milner", role: 'admin'}],
        categories: ['Content'],
        tasks: [{
            category: "Content",
            description: "Do something",
            assignee: '123445',
            assignedBy: 'i334345',
            assignedAt: '15:00, 23 March 2023',
            status: 'in work',
            deadline: '15:00, 28 March 2023'
        }],
        status: 'Active'
    },
    {   
        id: '768199',
        name: "Project Three",
        description: "Some intresting project about some intresting stuff",
        contributors: [{id: '123445', name: "Anna Barrow", role: 'assistant'}, {id:"334345",name: "james Milner", role: 'admin'}],
        categories: ['Content'],
        tasks: [{
            category: "Content",
            description: "Do something",
            assignee: '123445',
            assignedBy: 'i334345',
            assignedAt: '15:00, 23 March 2023',
            status: 'in work',
            deadline: '15:00, 28 March 2023'
        }],
        status: 'Active'
    },
]

export const users = [
    {
        id: '123445',
        firsName: "Anna",
        lastName: "Barrow"
    }
]