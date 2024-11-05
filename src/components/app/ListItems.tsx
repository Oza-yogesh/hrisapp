import { ExpandLess, ExpandMore } from "@mui/icons-material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import BackpackIcon from "@mui/icons-material/Backpack";
import BarChartIcon from "@mui/icons-material/BarChart";
import BusinessIcon from "@mui/icons-material/Business";
import CurrencyExchangeSharpIcon from "@mui/icons-material/CurrencyExchangeSharp";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import FolderIcon from "@mui/icons-material/Folder";
import GroupsIcon from "@mui/icons-material/Groups";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import PaymentsIcon from "@mui/icons-material/Payments";
import PersonIcon from "@mui/icons-material/Person";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import ReceiptSharpIcon from "@mui/icons-material/ReceiptSharp";
import RuleIcon from "@mui/icons-material/Rule";
import SchoolIcon from "@mui/icons-material/School";
import SubtitlesIcon from "@mui/icons-material/Subtitles";
import TabIcon from "@mui/icons-material/Tab";
import WorkIcon from "@mui/icons-material/Work";
import { Collapse, List } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FC, Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

// Define the SidebarItem and SidebarSubItem interfaces
interface SidebarItem {
  id: string;
  name: string;
  subItem: boolean;
  icon: JSX.Element;
  path?: string;
  roles: string[]; // Array of roles that can access the item
}

interface SidebarSubItem {
  id: string;
  list: SidebarItem[];
}

// Retrieve the user role from local storage
const userId: any = localStorage.getItem("userId");

// Define the main sidebar items with roles
const mainList: SidebarItem[] = [
  {
    id: "dashboard",
    name: "Dashboard",
    subItem: false,
    icon: <DashboardIcon />,
    path: "/dashboard",
    roles: ["admin", "user"],
  },
  {
    id: "companyProfile",
    name: "Company Profile",
    subItem: false,
    icon: <BusinessIcon />,
    path: "company-profile",
    roles: ["admin", "user"],
  },
  {
    id: "myProfile",
    name: "My Profile",
    subItem: true,
    icon: <PersonIcon />,
    roles: ["admin", "user"],
  },
  {
    id: "directory",
    name: "Directory",
    subItem: false,
    icon: <BarChartIcon />,
    path: "/dashboard/directory",
    roles: ["admin", "user"],
  },
  {
    id: "attendance",
    name: "Attendance",
    subItem: true,
    icon: <AssignmentIcon />,
    roles: ["admin", "user"],
  },
  {
    id: "leave",
    name: "Leave",
    subItem: true,
    icon: <BackpackIcon />,
    roles: ["admin", "user"],
  },
  {
    id: "payroll",
    name: "Payroll",
    subItem: true,
    icon: <PaymentsIcon />,
    roles: ["admin", "user"],
  },
  {
    id: "recruitment",
    name: "Recruitment",
    subItem: false,
    icon: <PersonSearchIcon />,
    path: "recruitment-details",
    roles: ["admin"],
  },
  {
    id: "onboard-employee",
    name: "Onboarding Employee",
    subItem: false,
    icon: <PersonSearchIcon />,
    path: "onboarding-new-employee",
    roles: ["admin"], // Only visible to admin
  },
  {
    id: "SetupPayroll",
    name: "Setup Payroll",
    subItem: false,
    icon: <AccountBalanceIcon />,
    path: "/dashboard/setup",
    roles: ["admin"], // Only visible to admin
  },
  {
    id: "admin",
    name: "Admin",
    subItem: false,
    icon: <TabIcon />,
    path: "/dashboard/admin",
    roles: ["admin"], // Only visible to admin
  },
];

const subList: SidebarSubItem[] = [
  {
    id: "myProfile",
    list: [
      {
        id: "personal",
        name: "Personal",
        subItem: false,
        icon: <AccountCircleIcon />,
        path: `personal-details/${userId}`,
        roles: ["admin", "user"],
      },
      {
        id: "work",
        name: "Work",
        subItem: false,
        icon: <WorkIcon />,
        path: "work-details",
        roles: ["admin", "user"],
      },
      {
        id: "workweek",
        name: "Work Week",
        subItem: false,
        icon: <TabIcon />,
        path: "/dashboard/work-week",
        roles: ["admin", "user"],
      },
      {
        id: "team",
        name: "Team",
        subItem: false,
        icon: <GroupsIcon />,
        path: "team-details",
        roles: ["admin", "user"],
      },
      {
        id: "education",
        name: "Education",
        subItem: false,
        icon: <SchoolIcon />,
        path: "educational-details",
        roles: ["admin", "user"],
      },
      {
        id: "family",
        name: "Family",
        subItem: false,
        icon: <Diversity1Icon />,
        path: "family-details",
        roles: ["admin", "user"],
      },
      {
        id: "documents",
        name: "Documents",
        subItem: false,
        icon: <TabIcon />,
        path: "/dashboard/document",
        roles: ["admin", "user"],
      },
      {
        id: "fileManager",
        name: "File Manager",
        subItem: false,
        icon: <FolderIcon />,
        roles: ["admin", "user"],
      },
      {
        id: "stationery",
        name: "Stationery",
        subItem: false,
        icon: <FolderIcon />,
        roles: ["admin", "user"],
      },
    ],
  },
  {
    id: "attendance",
    list: [
      {
        id: "log",
        name: "Log",
        subItem: false,
        icon: <LoginIcon />,
        roles: ["admin", "user"],
      },
      {
        id: "automationLog",
        name: "Automation Log",
        subItem: false,
        icon: <AutoModeIcon />,
        path: "/dashboard/admin/attendance/logs",
        roles: ["admin"], // Only visible to admin
      },
      {
        id: "rules",
        name: "Rules",
        subItem: false,
        icon: <RuleIcon />,
        path: "/dashboard/admin/attendance/Settings",
        roles: ["admin"], // Only visible to admin
      },
      {
        id: "settings",
        name: "Settings",
        subItem: false,
        icon: <RuleIcon />,
        path: "/dashboard/admin/attendance/Settings",
        roles: ["admin"], // Only visible to admin
      },
    ],
  },
  {
    id: "leave",
    list: [
      {
        id: "applyLeave",
        name: "Apply Leave",
        subItem: false,
        icon: <ExitToAppIcon />,
        path: "/dashboard/apply-leave",
        roles: ["admin", "user"],
      },
      {
        id: "logs",
        name: "Logs",
        subItem: false,
        icon: <AutoModeIcon />,
        roles: ["admin", "user"],
      },
      {
        id: "rules",
        name: "Rules",
        subItem: false,
        icon: <RuleIcon />,
        roles: ["admin", "user"],
      },
    ],
  },
  {
    id: "payroll",
    list: [
      {
        id: "paySlip",
        name: "Pay Slip",
        subItem: false,
        icon: <ReceiptSharpIcon />,
        path: "/dashboard/pay-slip",
        roles: ["admin", "user"],
      },
      {
        id: "salaryStructure",
        name: "Salary Structure",
        subItem: false,
        icon: <CurrencyExchangeSharpIcon />,
        path: "/dashboard/salary-structure",
        roles: ["admin", "user"],
      },
      {
        id: "declaration",
        name: "Declaration",
        subItem: false,
        icon: <SubtitlesIcon />,
        path: "/dashboard/declaration",
        roles: ["admin", "user"],
      },
      {
        id: "bankAccount",
        name: "Bank Account",
        subItem: false,
        icon: <AccountBalanceIcon />,
        path: "/dashboard/bank-account",
        roles: ["admin", "user"],
      },
      {
        id: "SetupPayroll",
        name: "Setup Payroll",
        subItem: false,
        icon: <AccountBalanceIcon />,
        path: "/dashboard/setup",
        roles: ["admin"], // Only visible to admin
      },
      {
        id: "admin",
        name: "Admin",
        subItem: false,
        icon: <TabIcon />,
        path: "/dashboard/admin",
        roles: ["admin"], // Only visible to admin
      },
    ],
  },
];

export const MainListItems: FC = () => {
  const navigate = useNavigate();
  const [openCollapse, setOpenCollapse] = useState<string | null>(null);
  const userRole: string | null = useSelector(
    (state: RootState) => state.user.role
  );

  // Filter the main list based on user role
  const filteredMainList = mainList.filter((item) =>
    item.roles.includes(userRole as string)
  );

  console.log({ userRole });

  const handleItemClick = (
    itemId: string,
    isSubList: boolean,
    path?: string
  ) => {
    if (isSubList)
      setOpenCollapse((prevItem) => (prevItem === itemId ? null : itemId));
    else path && navigate(path);
  };

  const handleSubItemButtonClick = (path?: string) => {
    path && navigate(path);
  };

  return (
    <Fragment>
      <List component="nav">
        {filteredMainList.map((listItem: SidebarItem) => (
          <Fragment key={listItem.id}>
            <ListItemButton
              onClick={() =>
                handleItemClick(listItem.id, listItem.subItem, listItem.path)
              }
            >
              <ListItemIcon>{listItem.icon}</ListItemIcon>
              <ListItemText primary={listItem.name} />
              {listItem.subItem &&
                (openCollapse === listItem.id ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                ))}
            </ListItemButton>
            {listItem.subItem && (
              <Collapse
                in={openCollapse === listItem.id}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {subList
                    .find(
                      (subListObject: SidebarSubItem) =>
                        listItem.id === subListObject.id
                    )
                    ?.list.filter((item) =>
                      item.roles.includes(userRole as string)
                    )
                    .map((itemObject: SidebarItem) => (
                      <ListItemButton
                        key={itemObject.id}
                        onClick={() =>
                          handleSubItemButtonClick(itemObject.path)
                        }
                      >
                        <ListItemIcon>{itemObject.icon}</ListItemIcon>
                        <ListItemText primary={itemObject.name} />
                      </ListItemButton>
                    ))}
                </List>
              </Collapse>
            )}
          </Fragment>
        ))}
      </List>
    </Fragment>
  );
};
