import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Theme, ThemeProvider, createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { FC, MouseEvent, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { MenuObject } from "../interfaces/Interfaces";
import {
  AppBar,
  Drawer,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../styled/DashboardParts";
import { MainListItems } from "./ListItems";
import { getRequest } from "../../api/Api";
import { GET_ALL_EMPLOYEE_DETAILS } from "../../api/Server";
import { AxiosResponse } from "axios";
import { Autocomplete } from "@mui/material";

const MenuList: MenuObject[] = [
  { name: "Profile", icon: <AccountCircleIcon /> },
  { name: "Logout", icon: <ExitToAppIcon /> },
];

const Copyright: FC = () => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      mt={5}
      gutterBottom
    >
      {"Copyright © "}
      <Link color="inherit" href="">
        SAWA HRIS
      </Link>
      {" " + new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const theme = createTheme({
  palette: {
    primary: { main: "#191970" },
    secondary: { main: "#dc004e" },
  },
});

const useStyles = makeStyles((theme: Theme) => ({
  main: { display: "flex" },
  menuList: { marginTop: "45px" },
  content: {
    backgroundColor: "#F5F5F5",
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  logo: {
    height: 60,
    marginLeft: 40,
  },
}));

interface Employee {
  _id: string;
  name?: string;
  employeeId?: string;
}

export default function Dashboard() {
  const navigate = useNavigate();
  const classes = useStyles();

  const [searchValue, setSearchValue] = useState("");

  const [allEmployeeData, setallEmployeeData] = useState<Employee[]>([]);
  const [FilteredEmployeeData, setFilteredEmployeeData] = useState<Employee[]>(
    []
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
    const filteredData = allEmployeeData.filter(
      (employee) =>
        (employee.name &&
          employee.name.toLowerCase().includes(value.toLowerCase())) ||
        (employee.employeeId &&
          employee.employeeId.toLowerCase().includes(value.toLowerCase()))
    );
    console.log(filteredData);
    setFilteredEmployeeData(filteredData);
  };

  useEffect(() => {
    getRequest(GET_ALL_EMPLOYEE_DETAILS).then((res: AxiosResponse) =>
      setallEmployeeData(res.data)
    );
  }, []);

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (button: string) => {
    if (button === "Logout") navigate("/login");
    setAnchorElUser(null);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* Container for the entire content */}
        <Box className={classes.main}>
          {/* Drawer Code */}
          <Drawer variant="permanent" open={open}>
            <Toolbar>
              <img
                src={`${process.env.PUBLIC_URL}/SAWA-HRIS.png`}
                alt="SAWA_HRIS_Logo"
                className={classes.logo}
              ></img>
            </Toolbar>
            <Divider />
            <MainListItems />
          </Drawer>

          {/* Main content container */}
          <Container component="main" maxWidth="xl" className={classes.content}>
            {/* Appbar Code */}
            <AppBar position="absolute" open={open}>
              <Container maxWidth="xl">
                <Toolbar>
                  {/* drawer toggler */}
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDrawer}
                  >
                    <MenuIcon />
                  </IconButton>

                  {/* app bar text */}
                  <Typography
                    variant="h6"
                    noWrap
                    flexGrow={1}
                    fontWeight={530}
                    letterSpacing={5}
                    marginLeft={5}
                  >
                    SAWA HR TECHNOLOGIES
                  </Typography>

                  {/* search bar */}
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Employee.."
                      inputProps={{ "aria-label": "search" }}
                      value={searchValue}
                      onChange={handleInputChange}
                    />

                    {/* <Autocomplete
                      id="country-select-demo"
                      sx={{ width: 300 }}
                      // options={countries}
                      autoHighlight
                      // getOptionLabel={(option) => option.label}
                      renderOption={(props, option) => {
                        const { key, ...optionProps } = props;
                        return (
                          <Box
                            key={key}
                            component="li"
                            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                            {...optionProps}
                          >
                            <img
                              loading="lazy"
                              width="20"
                              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                              alt=""
                            />
                            {option.label} ({option.code}) +{option.phone}
                          </Box>
                        );
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Choose a country"
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: "new-password", // disable autocomplete and autofill
                          }}
                        />
                      )}
                    /> */}
                  </Search>

                  {/* notification icon */}
                  <IconButton color="inherit" sx={{ mx: "18px" }}>
                    <Badge badgeContent={4} color="info">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>

                  {/* profile button */}
                  <IconButton onClick={handleOpenUserMenu}>
                    <Avatar alt="Name" src="/static/images/avatar/2.jpg" />
                  </IconButton>

                  <Menu
                    keepMounted
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    className={classes.menuList}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    transformOrigin={{ vertical: "top", horizontal: "right" }}
                  >
                    {MenuList.map((menuItem: MenuObject, index: number) => (
                      <MenuItem
                        key={index}
                        onClick={() => handleCloseUserMenu(menuItem.name)}
                      >
                        {menuItem.icon}
                        <Typography textAlign="center" marginLeft={2}>
                          {menuItem.name}
                        </Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Toolbar>
              </Container>
            </AppBar>

            {/* Component Space */}
            <Toolbar />
            <Container sx={{ flexGrow: 1 }}>
              <Outlet />
              <Copyright />
            </Container>
          </Container>
        </Box>
      </ThemeProvider>
    </>
  );
}
