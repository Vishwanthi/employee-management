import React from 'react';
import { useSelector } from 'react-redux';
import EmployeeRow from './EmployeeRow';

const EmployeeTable = ({ onEditEmployee, selectedEmployees, setSelectedEmployees,onDelete }) => {
  const employees = useSelector(state => state.employees);

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Select</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Address</th>
          <th scope="col">Phone</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(employee => (
          <EmployeeRow
            key={employee.id}
            employee={employee}
            onEdit={onEditEmployee}
            onDelete={onDelete}
            selectedEmployees={selectedEmployees}
            setSelectedEmployees={setSelectedEmployees}
          />
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;