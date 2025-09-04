const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Prepare report",
        "description": "Complete the monthly sales report",
        "date": "2025-09-05",
        "category": "Reporting"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Team meeting",
        "description": "Attend the weekly sync-up meeting",
        "date": "2025-08-30",
        "category": "Meeting"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Client follow-up",
        "description": "Call client regarding pending feedback",
        "date": "2025-08-28",
        "category": "Communication"
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Bug fixing",
        "description": "Resolve login page validation issue",
        "date": "2025-09-04",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Code review",
        "description": "Review pull requests for feature branch",
        "date": "2025-09-01",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Research",
        "description": "Explore new UI library for dashboard",
        "date": "2025-09-06",
        "category": "Research"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Testing task",
        "description": "Write unit tests for user service",
        "date": "2025-08-25",
        "category": "Testing"
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "UI design",
        "description": "Design mockups for onboarding flow",
        "date": "2025-09-07",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Wireframes",
        "description": "Finalize wireframes for settings page",
        "date": "2025-08-31",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Icon pack",
        "description": "Deliver new icon set for project",
        "date": "2025-08-27",
        "category": "Design"
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Market research",
        "description": "Collect competitor product data",
        "date": "2025-09-05",
        "category": "Research"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Survey analysis",
        "description": "Analyze customer feedback survey",
        "date": "2025-08-29",
        "category": "Analytics"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Campaign draft",
        "description": "Prepare initial draft of marketing campaign",
        "date": "2025-08-26",
        "category": "Marketing"
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Database update",
        "description": "Update schema for orders table",
        "date": "2025-09-03",
        "category": "Database"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Backup check",
        "description": "Verify daily backups",
        "date": "2025-08-30",
        "category": "Maintenance"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Query optimization",
        "description": "Optimize slow-running queries",
        "date": "2025-09-06",
        "category": "Database"
      }
    ]
  }
];

const admin = [
    
 {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
];

export const setLocaleStorage=()=>{

    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocaleStorage=()=>{

  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  console.log(employees, admin)
}


