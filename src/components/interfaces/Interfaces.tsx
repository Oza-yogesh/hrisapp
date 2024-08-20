import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { ReactNode } from "react";

export interface RouteComponent {
  path: string;
  component: JSX.Element;
  props?: unknown;
}

export interface ContactUs {
  name: string;
  email: string;
  phone: number;
  message: string;
}

export interface SidebarItem {
  id: string;
  name: string;
  subItem: boolean;
  icon: JSX.Element;
  path?: string;
}

export interface SidebarSubItem {
  id: string;
  list: SidebarItem[];
}

export interface TabPanelProps {
  children: ReactNode;
  value: any;
  index: any;
}

export interface MenuObject {
  name: string;
  icon: JSX.Element;
  path?: string;
}

export interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

export interface ErrorBoundaryProps {
  children: ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
}

export interface EmployeeDetails {
  _id: string;
  companyId: string;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  alternatePhoneNumber?: string; // Optional as it's not in the provided object
  dateOfBirth: string;
  gender: string;
  bloodGroup: string;
  maritalStatus: string;
  employeeId: string;
  departmentId: string;
  subDepartmentId: string;
  designationId: string;
  jobTitle: string;
  reportingManagerId: string;
  workLocation: string;
  employeeType: string;
  probationPeriod: number;
  probationStatus: string;
  dateOfJoining: string;
  ctc: number;
  status: string;
  roleId: string;
  bankDetails: {
    accountHolderName: string;
    bankName: string;
    city: string;
    branchName: string;
    ifscCode: string;
    accountNumber: string;
  };
  addresses: {
    currentAddress: string;
    permanentAddress: string;
    houseType: string;
    currentResidenceSince: string;
    currentCitySince: string;
  };
  socialProfile: {
    linkedin: string;
    facebook: string;
    twitter: string;
  };
  workHistory: {
    department: string;
    designation: string;
    from: string;
    to: string;
    _id: string;
  }[];
  __v: number;
}
