import React from 'react';

const EmployeeRow = ({ employee, onEdit, selectedEmployees, setSelectedEmployees,onDelete }) => {
  const handleSelect = (e) => {
    const { checked } = e.target;
    if (checked) {
      setSelectedEmployees([...selectedEmployees, employee.id]);
    } else {
      setSelectedEmployees(selectedEmployees.filter(id => id !== employee.id));
    }
  };

  return (
    <tr>
      <td><input type="checkbox" onChange={handleSelect} /></td>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.address}</td>
      <td>{employee.phone}</td>
      <td>
        <button className="btn btn-warning me-2" onClick={() => onEdit(employee)}>Edit</button>
        <button className="btn btn-danger" onClick={() => onDelete(employee.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default EmployeeRow;