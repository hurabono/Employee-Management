// resolvers.js
const bcrypt = require('bcrypt');
const User = require('./models/User');
const Employee = require('./models/Employee');

const resolvers = {
  Query: {
    // 1.  Login
    login: async (_, { username, email, password }) => {
      try {
        // Fine user by username or email
        const user = await User.findOne({
          $or: [{ username }, { email }],
        });
        if (!user) {
          throw new Error('User not found');
        }

        // match password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          throw new Error('Invalid credentials');
        }

        // return jwt token when log in successful
        return 'Login successful!';
      } catch (err) {
        throw err;
      }
    },

    // 2. access all employees
    getAllEmployees: async () => {
      try {
        return await Employee.find({});
      } catch (err) {
        throw err;
      }
    },

    // 3. access employee by id
    getEmployeeById: async (_, { eid }) => {
      try {
        const employee = await Employee.findById(eid);
        if (!employee) {
          throw new Error('Employee not found');
        }
        return employee;
      } catch (err) {
        throw err;
      }
    },

    // 4. search employee by designation or department
    searchEmployeeByDesignationOrDepartment: async (_, { designation, department }) => {
      try {
        const query = {};
        if (designation) query.designation = designation;
        if (department) query.department = department;

        const employees = await Employee.find(query);
        return employees;
      } catch (err) {
        throw err;
      }
    },
  },

  Mutation: {
    //  sign up
    signup: async (_, { username, email, password }) => {
      try {
        // check the user already exists
        const existingUser = await User.findOne({
          $or: [{ username }, { email }],
        });
        if (existingUser) {
          throw new Error('User already exists');
        }

        // passward hashing
        const hashedPassword = await bcrypt.hash(password, 10);

        // sign up new user
        const newUser = new User({
          username,
          email,
          password: hashedPassword,
        });
        await newUser.save();

        return 'Signup successful!';
      } catch (err) {
        throw err;
      }
    },

    // 5. add new employee
    addNewEmployee: async (
      _,
      {
        first_name,
        last_name,
        email,
        gender,
        designation,
        salary,
        date_of_joining,
        department,
        employee_photo,
      }
    ) => {
      try {
        const employee = new Employee({
          first_name,
          last_name,
          email,
          gender,
          designation,
          salary,
          date_of_joining,
          department,
          employee_photo,
        });
        await employee.save();
        return employee;
      } catch (err) {
        throw err;
      }
    },

    // 6. edit employee by id
    updateEmployeeById: async (
      _,
      {
        eid,
        first_name,
        last_name,
        email,
        gender,
        designation,
        salary,
        date_of_joining,
        department,
        employee_photo,
      }
    ) => {
      try {
        const employee = await Employee.findById(eid);
        if (!employee) {
          throw new Error('Employee not found');
        }

        // update only the fields that are passed
        if (first_name !== undefined) employee.first_name = first_name;
        if (last_name !== undefined) employee.last_name = last_name;
        if (email !== undefined) employee.email = email;
        if (gender !== undefined) employee.gender = gender;
        if (designation !== undefined) employee.designation = designation;
        if (salary !== undefined) employee.salary = salary;
        if (date_of_joining !== undefined) employee.date_of_joining = date_of_joining;
        if (department !== undefined) employee.department = department;
        if (employee_photo !== undefined) employee.employee_photo = employee_photo;

        employee.updated_at = new Date();
        await employee.save();
        return employee;
      } catch (err) {
        throw err;
      }
    },

    // 7. delete employee by id
    deleteEmployeeById: async (_, { eid }) => {
      try {
        const employee = await Employee.findByIdAndDelete(eid);
        if (!employee) {
          throw new Error('Employee not found');
        }
        return 'Employee deleted successfully!';
      } catch (err) {
        throw err;
      }
    },
  },
};

module.exports = resolvers;
