import Rules from "../components/app/Admin/attendance/rules/Rulesbar";
import AdminCompanyProfile from "../components/app/Admin/compnay_profile/AdminCompanyProfile";
import AdminDirectory from "../components/app/Admin/directory/AdminDirectory";
import AdminVerify from "../components/app/Admin/verify/AdminVerify";
import CompanyProfile from "../components/app/company_profile/CompanyProfile";
import Directory from "../components/app/directory/Directory";
import ApplyLeave from "../components/app/leave/ApplyLeave";
import EducationProfile from "../components/app/my_profile/EducationProfile";
import FamilyProfile from "../components/app/my_profile/FamilyProfile";
import DocumentProfile from "../components/app/my_profile/PersonalDocuments/DocumentProfile";
import PersonalProfile from "../components/app/my_profile/PersonalProfile";
import TeamProfile from "../components/app/my_profile/TeamProfile";
import WorkProfile from "../components/app/my_profile/WorkProfile";
import WorkWeek from "../components/app/my_profile/WorkWeek";
import OnboardEmployee from "../components/app/onboarding_employee/OnboardEmployee";
import Admin from "../components/app/payroll/Admin";

import BankAccount from "../components/app/payroll/BankAccount";
import Declaration from "../components/app/payroll/Declaration";
import PaySlip from "../components/app/payroll/PaySlip";
import SalaryStructure from "../components/app/payroll/SalaryStructure";
import SetupPayroll from "../components/app/payroll/SetUpAdmin/SetupPayroll";
import { RouteComponent } from "../components/interfaces/Interfaces";
import About from "../components/website/About";
import Contact from "../components/website/Contact";
import Features from "../components/website/Features";
import HrManagement from "../components/website/HrManagement";
import Login from "../components/website/Login";
import Payroll from "../components/website/Payroll";
import Recruitment from "../components/website/Recruitment";
import TimeAttendance from "../components/website/TimeAttendance";
import Logs from "./../components/app/Admin/attendance/Logs";
import Settings from "../components/app/Admin/attendance/Settings";
import ForgotPassword from "../components/website/ForgotPassword";
import { Component } from "react";

// website routes
export const websiteRoutes: RouteComponent[] = [
  { path: "/about-us", component: <About /> },
  { path: "/features", component: <Features /> },
  { path: "/payroll", component: <Payroll /> },
  { path: "/recruitment", component: <Recruitment /> },
  { path: "/hr-management", component: <HrManagement /> },
  { path: "/time-attendance", component: <TimeAttendance /> },
  { path: "/contact-us", component: <Contact /> },
  { path: "/login", component: <Login /> },
  { path: "/forgot-password", component: <ForgotPassword /> },

  // { path: "/set-password", component: <SetPassword /> },
];

// app routes
export const appRoutes: RouteComponent[] = [
  { path: "/dashboard/company-profile", component: <CompanyProfile /> },
  { path: "/dashboard/work-details", component: <WorkProfile /> },
  { path: "/dashboard/team-details", component: <TeamProfile /> },
  { path: "/dashboard/educational-details", component: <EducationProfile /> },
  { path: "/dashboard/family-details", component: <FamilyProfile /> },
  {
    path: "/dashboard/personal-details/:id",
    component: <PersonalProfile />,
  },
  { path: "/dashboard/bank-account", component: <BankAccount /> },
  { path: "/dashboard/declaration", component: <Declaration /> },
  { path: "/dashboard/salary-structure", component: <SalaryStructure /> },
  { path: "/dashboard/pay-slip", component: <PaySlip /> },

  { path: "/dashboard/setup", component: <SetupPayroll /> },
  { path: "/dashboard/document", component: <DocumentProfile /> },
  { path: "/dashboard/admin", component: <Admin /> },
  { path: "/dashboard/work-week", component: <WorkWeek /> },
  // { path: "/dashboard/optional-info", component: <OptionalInfo /> },
  { path: "/dashboard/directory", component: <Directory /> },
  { path: "/dashboard/apply-leave", component: <ApplyLeave /> },
];

// Admin Routes
export const adminRoutes: RouteComponent[] = [
  {
    path: "/dashboard/admin/onboarding-new-employee",
    component: <OnboardEmployee />,
  },
  {
    path: "/dashboard/admin/company-profile",
    component: <AdminCompanyProfile />,
  },
  { path: "/dashboard/admin/directory", component: <AdminDirectory /> },
  { path: "/dashboard/admin/verify", component: <AdminVerify /> },
  { path: "/dashboard/admin/attendance/rules", component: <Rules /> },
  { path: "/dashboard/admin/attendance/logs", component: <Logs /> },
  { path: "/dashboard/admin/attendance/Settings", component: <Settings /> },
];

// onboarding-new-employee
