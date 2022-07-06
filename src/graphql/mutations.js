/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTravelers = /* GraphQL */ `
  mutation CreateTravelers(
    $input: CreateTravelersInput!
    $condition: ModelTravelersConditionInput
  ) {
    createTravelers(input: $input, condition: $condition) {
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
export const updateTravelers = /* GraphQL */ `
  mutation UpdateTravelers(
    $input: UpdateTravelersInput!
    $condition: ModelTravelersConditionInput
  ) {
    updateTravelers(input: $input, condition: $condition) {
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
export const deleteTravelers = /* GraphQL */ `
  mutation DeleteTravelers(
    $input: DeleteTravelersInput!
    $condition: ModelTravelersConditionInput
  ) {
    deleteTravelers(input: $input, condition: $condition) {
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
export const createProjects = /* GraphQL */ `
  mutation CreateProjects(
    $input: CreateProjectsInput!
    $condition: ModelProjectsConditionInput
  ) {
    createProjects(input: $input, condition: $condition) {
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
export const updateProjects = /* GraphQL */ `
  mutation UpdateProjects(
    $input: UpdateProjectsInput!
    $condition: ModelProjectsConditionInput
  ) {
    updateProjects(input: $input, condition: $condition) {
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
export const deleteProjects = /* GraphQL */ `
  mutation DeleteProjects(
    $input: DeleteProjectsInput!
    $condition: ModelProjectsConditionInput
  ) {
    deleteProjects(input: $input, condition: $condition) {
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
export const createTimeSheetEntrys = /* GraphQL */ `
  mutation CreateTimeSheetEntrys(
    $input: CreateTimeSheetEntrysInput!
    $condition: ModelTimeSheetEntrysConditionInput
  ) {
    createTimeSheetEntrys(input: $input, condition: $condition) {
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
export const updateTimeSheetEntrys = /* GraphQL */ `
  mutation UpdateTimeSheetEntrys(
    $input: UpdateTimeSheetEntrysInput!
    $condition: ModelTimeSheetEntrysConditionInput
  ) {
    updateTimeSheetEntrys(input: $input, condition: $condition) {
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
export const deleteTimeSheetEntrys = /* GraphQL */ `
  mutation DeleteTimeSheetEntrys(
    $input: DeleteTimeSheetEntrysInput!
    $condition: ModelTimeSheetEntrysConditionInput
  ) {
    deleteTimeSheetEntrys(input: $input, condition: $condition) {
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
export const createTimeSheet = /* GraphQL */ `
  mutation CreateTimeSheet(
    $input: CreateTimeSheetInput!
    $condition: ModelTimeSheetConditionInput
  ) {
    createTimeSheet(input: $input, condition: $condition) {
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
export const updateTimeSheet = /* GraphQL */ `
  mutation UpdateTimeSheet(
    $input: UpdateTimeSheetInput!
    $condition: ModelTimeSheetConditionInput
  ) {
    updateTimeSheet(input: $input, condition: $condition) {
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
export const deleteTimeSheet = /* GraphQL */ `
  mutation DeleteTimeSheet(
    $input: DeleteTimeSheetInput!
    $condition: ModelTimeSheetConditionInput
  ) {
    deleteTimeSheet(input: $input, condition: $condition) {
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
export const createEmployee = /* GraphQL */ `
  mutation CreateEmployee(
    $input: CreateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    createEmployee(input: $input, condition: $condition) {
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
export const updateEmployee = /* GraphQL */ `
  mutation UpdateEmployee(
    $input: UpdateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    updateEmployee(input: $input, condition: $condition) {
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
export const deleteEmployee = /* GraphQL */ `
  mutation DeleteEmployee(
    $input: DeleteEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    deleteEmployee(input: $input, condition: $condition) {
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


export const createEmployeeNew = `
mutation CreateEmployeeNew {
  CreateEmployeeNew(
    input: {first_name: "", last_name: "", id: "", email: "", status: false, supervisor: ""}
  ) {
    first_name
    last_name
    id
    status
    normal_start_time
    supervisor
  }
}
`;