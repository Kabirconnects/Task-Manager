// Your data
const employees = [
    {
      "id": 1,
      "name": "Alice Johnson",
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newtask": true,
          "completed": false,
          "failed": false,
          "tasktitle": "Prepare Report",
          "taskdescription": "Compile the sales report for Q1.",
          "taskdate": "2025-01-12",
          "category": "Reports"
        },
        {
          "active": false,
          "newtask": false,
          "completed": true,
          "failed": false,
          "tasktitle": "Team Meeting",
          "taskdescription": "Attend the weekly team meeting.",
          "taskdate": "2025-01-05",
          "category": "Meetings"
        },
        {
          "active": false,
          "newtask": false,
          "completed": false,
          "failed": true,
          "tasktitle": "Client Follow-Up",
          "taskdescription": "Follow up with client about pending invoice.",
          "taskdate": "2025-01-08",
          "category": "Client Management"
        },
        {
          "active": true,
          "newtask": true,
          "completed": false,
          "failed": false,
          "tasktitle": "Code Review",
          "taskdescription": "Review the new feature code for the app.",
          "taskdate": "2025-01-13",
          "category": "Development"
        },
      ]
    },
    {
      "id": 2,
      "name": "Bob Smith",
      "email": "employee2@example.com",
      "password": "456",
      "tasks": [
        {
          "active": true,
          "newtask": true,
          "completed": false,
          "failed": false,
          "tasktitle": "Code Review",
          "taskdescription": "Review the new feature code for the app.",
          "taskdate": "2025-01-13",
          "category": "Development"
        },
        {
          "active": false,
          "newtask": false,
          "completed": true,
          "failed": false,
          "tasktitle": "Update Documentation",
          "taskdescription": "Update project documentation for the API.",
          "taskdate": "2025-01-06",
          "category": "Documentation"
        },
        {
          "active": false,
          "newtask": false,
          "completed": false,
          "failed": true,
          "tasktitle": "Bug Fixing",
          "taskdescription": "Resolve the reported bugs in the system.",
          "taskdate": "2025-01-09",
          "category": "Maintenance"
        }
      ]
    },
    {
      "id": 3,
      "name": "Charlie Brown",
      "email": "employee3@example.com",
      "password": "789",
      "tasks": [
        {
          "active": true,
          "newtask": true,
          "completed": false,
          "failed": false,
          "tasktitle": "Market Research",
          "taskdescription": "Analyze competitors' strategies.",
          "taskdate": "2025-01-14",
          "category": "Research"
        },
        {
          "active": false,
          "newtask": false,
          "completed": true,
          "failed": false,
          "tasktitle": "Product Launch",
          "taskdescription": "Plan the product launch event.",
          "taskdate": "2025-01-07",
          "category": "Marketing"
        },
        {
          "active": false,
          "newtask": false,
          "completed": false,
          "failed": true,
          "tasktitle": "Ad Campaign",
          "taskdescription": "Design the ad campaign for social media.",
          "taskdate": "2025-01-10",
          "category": "Advertising"
        }
      ]
    },
    {
      "id": 4,
      "name": "David Wilson",
      "email": "employee4@example.com",
      "password": "101112",
      "tasks": [
        {
          "active": true,
          "newtask": true,
          "completed": false,
          "failed": false,
          "tasktitle": "Server Maintenance",
          "taskdescription": "Perform routine server maintenance.",
          "taskdate": "2025-01-15",
          "category": "IT"
        },
        {
          "active": false,
          "newtask": false,
          "completed": true,
          "failed": false,
          "tasktitle": "System Backup",
          "taskdescription": "Create a backup of the database.",
          "taskdate": "2025-01-04",
          "category": "IT"
        },
        {
          "active": false,
          "newtask": false,
          "completed": false,
          "failed": true,
          "tasktitle": "Network Issue",
          "taskdescription": "Resolve the office network connectivity issue.",
          "taskdate": "2025-01-11",
          "category": "IT"
        }
      ]
    },
    {
      "id": 5,
      "name": "Eva Green",
      "email": "employee5@example.com",
      "password": "131415",
      "tasks": [
        {
          "active": true,
          "newtask": true,
          "completed": false,
          "failed": false,
          "tasktitle": "Customer Feedback",
          "taskdescription": "Collect and analyze customer feedback.",
          "taskdate": "2025-01-16",
          "category": "Customer Service"
        },
        {
          "active": false,
          "newtask": false,
          "completed": true,
          "failed": false,
          "tasktitle": "Training Session",
          "taskdescription": "Conduct a training session for new employees.",
          "taskdate": "2025-01-03",
          "category": "Training"
        },
        {
          "active": false,
          "newtask": false,
          "completed": false,
          "failed": true,
          "tasktitle": "Sales Target",
          "taskdescription": "Meet the sales target for the last quarter.",
          "taskdate": "2025-01-09",
          "category": "Sales"
        }
      ]
    },
    {
      "id": 6,
      "name": "Fiona Carter",
      "email": "employee6@example.com",
      "password": "161718",
      "tasks": [
        {
          "active": true,
          "newtask": true,
          "completed": false,
          "failed": false,
          "tasktitle": "Website Redesign",
          "taskdescription": "Plan the redesign of the company website.",
          "taskdate": "2025-01-17",
          "category": "Design",
        },
      ],
    },
  ];
  
  const admin = [
    {
      "id": 1,
      "name": "John Doe",
      "role": "Manager",
      "department": "Sales",
      "password": "123",
      "email": "admin@example.com",
    },
  ];
  
  
 // LocalStorage.js

 export const setInitialLocalStorage = () => { 
  localStorage.setItem("employees", JSON.stringify(employees)); 
  localStorage.setItem("admin", JSON.stringify(admin));
};


export const getlocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  
  return { employees, admin }; // Return the data as an object
};

