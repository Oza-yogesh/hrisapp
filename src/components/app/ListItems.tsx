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
import { SidebarItem, SidebarSubItem } from "../interfaces/Interfaces";

const mainList: SidebarItem[] = [
  {
    id: "dashboard",
    name: "Dashboard",
    subItem: false,
    icon: <DashboardIcon />,
    path: "/dashboard",
  },
  {
    id: "companyProfile",
    name: "Company Profile",
    subItem: false,
    icon: <BusinessIcon />,
    path: "company-profile",
  },
  { id: "myProfile", name: "My Profile", subItem: true, icon: <PersonIcon /> },
  {
    id: "directory",
    name: "Directory",
    subItem: false,
    icon: <BarChartIcon />,
    path: "/dashboard/directory",
  },
  {
    id: "attendance",
    name: "Attendance",
    subItem: true,
    icon: <AssignmentIcon />,
  },
  { id: "leave", name: "Leave", subItem: true, icon: <BackpackIcon /> },
  { id: "payroll", name: "Payroll", subItem: true, icon: <PaymentsIcon /> },
  {
    id: "recruitment",
    name: "Recruitment",
    subItem: false,
    icon: <PersonSearchIcon />,
    path: "recruitment-details",
  },

  {
    id: "onboard-employee",
    name: "Onboarding Employee",
    subItem: false,
    icon: <PersonSearchIcon />,
    path: "onboarding-new-employee",
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
        path: "personal-details",
      },
      {
        id: "work",
        name: "Work",
        subItem: false,
        icon: <WorkIcon />,
        path: "work-details",
      },
      {
        id: "workweek",
        name: "Work Week",
        subItem: false,
        icon: <TabIcon />,
        path: "/dashboard/work-week",
      },
      {
        id: "team",
        name: "Team",
        subItem: false,
        icon: <GroupsIcon />,
        path: "team-details",
      },
      {
        id: "education",
        name: "Education",
        subItem: false,
        icon: <SchoolIcon />,
        path: "educational-details",
      },
      {
        id: "family",
        name: "Family",
        subItem: false,
        icon: <Diversity1Icon />,
        path: "family-details",
      },
      {
        id: "documents",
        name: "Documents",
        subItem: false,
        icon: <TabIcon />,
        path: "/dashboard/document",
      },
      {
        id: "fileManager",
        name: "File Manger",
        subItem: false,
        icon: <FolderIcon />,
      },
    ],
  },
  {
    id: "attendance",
    list: [
      { id: "log", name: "Log", subItem: false, icon: <LoginIcon /> },
      {
        id: "automationLog",
        name: "Automation Log",
        subItem: false,
        icon: <AutoModeIcon />,
        path: "/dashboard/admin/attendance/logs",
      },
      {
        id: "rules",
        name: "Rules",
        subItem: false,
        icon: <RuleIcon />,
        path: "/dashboard/admin/attendance/Settings",
      },
      {
        id: "settings",
        name: "Settings",
        subItem: false,
        icon: <RuleIcon />,
        path: "/dashboard/admin/attendance/Settings",
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
        path:"/dashboard/apply-leave"
      },
      { id: "logs", name: "Logs", subItem: false, icon: <AutoModeIcon /> },
      { id: "rules", name: "Rules", subItem: false, icon: <RuleIcon /> },
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
      },
      {
        id: "salaryStructure",
        name: "Salary Structure",
        subItem: false,
        icon: <CurrencyExchangeSharpIcon />,
        path: "/dashboard/salary-structure",
      },
      {
        id: "declaration",
        name: "Declaration",
        subItem: false,
        icon: <SubtitlesIcon />,
        path: "/dashboard/declaration",
      },
      {
        id: "bankAccount",
        name: "Bank Account",
        subItem: false,
        icon: <AccountBalanceIcon />,
        path: "/dashboard/bank-account",
      },

      {
        id: "SetupPayroll",
        name: "Setup Payroll",
        subItem: false,
        icon: <AccountBalanceIcon />,
        path: "/dashboard/setup",
      },
      {
        id: "admin",
        name: "Admin",
        subItem: false,
        icon: <TabIcon />,
        path: "/dashboard/admin",
      },
    ],
  },
];

export const MainListItems: FC = () => {
  const navigate = useNavigate();
  const [openCollapse, setOpenCollapse] = useState<string | null>(null);

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
        {mainList.map((listItem: SidebarItem) => (
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
                    ?.list.map((itemObject: SidebarItem) => (
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
