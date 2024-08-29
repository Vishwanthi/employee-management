export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const EDIT_EMPLOYEE = 'EDIT_EMPLOYEE';
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';
export const BULK_DELETE_EMPLOYEES = 'BULK_DELETE_EMPLOYEES';

export const addEmployee = (employee) => ({ type: ADD_EMPLOYEE, payload: employee });
export const editEmployee = (employee) => ({ type: EDIT_EMPLOYEE, payload: employee });
export const deleteEmployee = (id) => ({ type: DELETE_EMPLOYEE, payload: id });
export const bulkDeleteEmployees = (ids) => ({ type: BULK_DELETE_EMPLOYEES, payload: ids });