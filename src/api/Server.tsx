// REST-API Endpoints

// public routes
export const LOGIN: string = "/api/public/user/login";
export const SIGNUP: string = "/api/public/user/signup";

// protected routes
export const ONBOARD: string = "/api/private/employee/createEmployee";
export const SETPASSWORD: string = "/api/private/employee/setpassword";

export const ACCOUNTDETAILS: string = "/api/private/accountdetails";

// company api
export const GET_COMPANY_DATA: string = "/api/private/company";
export const ONBOARD_EMPLOYEE: string = "/api/private/employee/createEmployee";

export const GET_EMPLOYEE_DETAILS_BY_ID: string =
  "/api/private/employee/getEmployeeDetailsById";

export const GET_ALL_EMPLOYEE_DETAILS: string =
  "/api/private/employee/getEmployeeDetails";

export const UPLOAD_PHOTO: string = "/api/private/employee/upload-profile";
export const GET_PHOTO: string = "/api/private/employee/profile-photo";

export const GET_DESINAGATION: string =
  "http://localhost:4000/api/private/designation";
