/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTravelers = /* GraphQL */ `
  subscription OnCreateTravelers {
    onCreateTravelers {
      id
      display_name
      status
      installation_location
      projectsID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTravelers = /* GraphQL */ `
  subscription OnUpdateTravelers {
    onUpdateTravelers {
      id
      display_name
      status
      installation_location
      projectsID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTravelers = /* GraphQL */ `
  subscription OnDeleteTravelers {
    onDeleteTravelers {
      id
      display_name
      status
      installation_location
      projectsID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProjects = /* GraphQL */ `
  subscription OnCreateProjects {
    onCreateProjects {
      id
      display_nam
      status
      location
      TimeSheetEntrys {
        nextToken
      }
      Travelers {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProjects = /* GraphQL */ `
  subscription OnUpdateProjects {
    onUpdateProjects {
      id
      display_nam
      status
      location
      TimeSheetEntrys {
        nextToken
      }
      Travelers {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProjects = /* GraphQL */ `
  subscription OnDeleteProjects {
    onDeleteProjects {
      id
      display_nam
      status
      location
      TimeSheetEntrys {
        nextToken
      }
      Travelers {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTimeSheetEntrys = /* GraphQL */ `
  subscription OnCreateTimeSheetEntrys {
    onCreateTimeSheetEntrys {
      id
      allocated_hours
      untitledfield
      timesheetID
      projectsID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTimeSheetEntrys = /* GraphQL */ `
  subscription OnUpdateTimeSheetEntrys {
    onUpdateTimeSheetEntrys {
      id
      allocated_hours
      untitledfield
      timesheetID
      projectsID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTimeSheetEntrys = /* GraphQL */ `
  subscription OnDeleteTimeSheetEntrys {
    onDeleteTimeSheetEntrys {
      id
      allocated_hours
      untitledfield
      timesheetID
      projectsID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTimeSheet = /* GraphQL */ `
  subscription OnCreateTimeSheet {
    onCreateTimeSheet {
      id
      clock_in
      lunch_out
      lunch_in
      clock_out
      date
      total_hours
      employeeID
      TimeSheetEntrys {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTimeSheet = /* GraphQL */ `
  subscription OnUpdateTimeSheet {
    onUpdateTimeSheet {
      id
      clock_in
      lunch_out
      lunch_in
      clock_out
      date
      total_hours
      employeeID
      TimeSheetEntrys {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTimeSheet = /* GraphQL */ `
  subscription OnDeleteTimeSheet {
    onDeleteTimeSheet {
      id
      clock_in
      lunch_out
      lunch_in
      clock_out
      date
      total_hours
      employeeID
      TimeSheetEntrys {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee {
    onCreateEmployee {
      id
      first_name
      last_name
      supervisor
      status
      normal_start_time
      email
      employee_timesheet {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee {
    onUpdateEmployee {
      id
      first_name
      last_name
      supervisor
      status
      normal_start_time
      email
      employee_timesheet {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee {
    onDeleteEmployee {
      id
      first_name
      last_name
      supervisor
      status
      normal_start_time
      email
      employee_timesheet {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
