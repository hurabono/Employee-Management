/*
    The schema.js file is where we define our GraphQL schema. 
    The schema defines the types and queries that our API will support. 
    The schema is written in the GraphQL Schema Definition Language (SDL). 
    The schema defines two types: User and Employee.
*/


/*
GraphQL Implementation Checklist (for me!)

** Mutation **
- Signup 
- Add New employee
- Update employee by id
- Delete employee by id

** Query **
- Login 
- Get all employees
- Search employee by id
- Search employee by designation or department

*/

const { gql } = require('apollo-server-express');

const typeDefs = gql`
  #  ** User Type ** 
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    created_at: String
    updated_at: String
  }

  # ** Employee Type **
  type Employee {
    _id: ID!
    first_name: String!
    last_name: String!
    email: String!
    gender: String
    designation: String!
    salary: Float!
    date_of_joining: String!
    department: String!
    employee_photo: String
    created_at: String
    updated_at: String
  }

  # ** Query **
  type Query {
    # 1. login
    login(username: String, email: String, password: String!): String

    # 2. get all employees
    getAllEmployees: [Employee]

    # 3. get employee by id
    getEmployeeById(eid: ID!): Employee

    # 4. search employee by designation or department
    searchEmployeeByDesignationOrDepartment(designation: String, department: String): [Employee]
  }

  # Mutation
  type Mutation {
    # 1. signup
    signup(username: String!, email: String!, password: String!): String

    # 2. add new employee
    addNewEmployee(
      first_name: String!
      last_name: String!
      email: String!
      gender: String
      designation: String!
      salary: Float!
      date_of_joining: String!
      department: String!
      employee_photo: String
    ): Employee

    # 3. update employee by id
    updateEmployeeById(
      eid: ID!
      first_name: String
      last_name: String
      email: String
      gender: String
      designation: String
      salary: Float
      date_of_joining: String
      department: String
      employee_photo: String
    ): Employee

    # 4. delete employee by id
    deleteEmployeeById(eid: ID!): String
  }
`;

module.exports = typeDefs;
