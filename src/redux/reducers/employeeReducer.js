import { ADD_EMPLOYEE, EDIT_EMPLOYEE, DELETE_EMPLOYEE, BULK_DELETE_EMPLOYEES } from '../actions/employeeActions';

const initialState = {
  employeeList: [{ id: 1, name: "Vish", email: "abc@gmail.com", address: "abs", phone: 123 }],
  employees: [{ id: 1, name: "Vish", email: "abc@gmail.com", address: "abs", phone: 123 }],
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return { ...state, employees: [...state.employees, action.payload] };
    case EDIT_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.map(emp => emp.id === action.payload.id ? action.payload : emp),
      };
    case DELETE_EMPLOYEE:
      return { ...state, employees: state.employees.filter(emp => emp.id !== action.payload) };
    case BULK_DELETE_EMPLOYEES:
      return { ...state, employees: state.employees.filter(emp => !action.payload.includes(emp.id)) };
    default:
      return state;
  }
};

export default employeeReducer;