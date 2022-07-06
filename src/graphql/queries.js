/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTravelers = /* GraphQL */ `
  query GetTravelers($id: ID!) {
    getTravelers(id: $id) {
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
export const listTravelers = /* GraphQL */ `
  query ListTravelers(
    $filter: ModelTravelersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTravelers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        display_name
        status
        installation_location
        projectsID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProjects = /* GraphQL */ `
  query GetProjects($id: ID!) {
    getProjects(id: $id) {
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
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        display_nam
        status
        location
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTimeSheetEntrys = /* GraphQL */ `
  query GetTimeSheetEntrys($id: ID!) {
    getTimeSheetEntrys(id: $id) {
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
export const listTimeSheetEntrys = /* GraphQL */ `
  query ListTimeSheetEntrys(
    $filter: ModelTimeSheetEntrysFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTimeSheetEntrys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        allocated_hours
        untitledfield
        timesheetID
        projectsID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTimeSheet = /* GraphQL */ `
  query GetTimeSheet($id: ID!) {
    getTimeSheet(id: $id) {
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
export const listTimeSheets = /* GraphQL */ `
  query ListTimeSheets(
    $filter: ModelTimeSheetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTimeSheets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        clock_in
        lunch_out
        lunch_in
        clock_out
        date
        total_hours
        employeeID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEmployee = /* GraphQL */ `
  query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
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
export const listEmployees = /* GraphQL */ `
  query ListEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        first_name
        last_name
        supervisor
        status
        normal_start_time
        email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
