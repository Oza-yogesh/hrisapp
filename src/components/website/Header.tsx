import LockOpenIcon from "@mui/icons-material/LockOpen";
import ManIcon from "@mui/icons-material/Man";
import MenuIcon from "@mui/icons-material/Menu";
import PaymentIcon from "@mui/icons-material/Payment";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Fade, Menu, MenuItem, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { MouseEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MenuObject } from "../interfaces/Interfaces";

const drawerWidth = 200;
let HEAD_COLOR = "#F5F5F5";
const DRWR_COLOR = "#707e8b";
const DRWR_TXT_COLOR = "#F5F5F5";

const navItems = [
  { name: "home", path: "/" },
  { name: "about us", path: "/about-us" },
  { name: "features", path: "/features" },
  { name: "services", path: null },
  { name: "contact us", path: "/contact-us" },
  { name: "log in", path: "/login", endIcon: <LockOpenIcon /> },
];

const menuItems: MenuObject[] = [
  { name: "Payroll Services", path: "/payroll", icon: <PaymentIcon /> },
  { name: "Recruitment Services", path: "/recruitment", icon: <ManIcon /> },
  { name: "HR Management", path: "/hr-management", icon: <PeopleAltIcon /> },
  {
    name: "Time & Attendance",
    path: "/time-attendance",
    icon: <PendingActionsIcon />,
  },
];

const LogoImg = styled("img")(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    width: 40,
    height: "auto",
    marginRight: theme.spacing(1),
  },
  [theme.breakpoints.down("xs")]: {
    width: 30,
    height: "auto",
    marginRight: theme.spacing(1),
  },
}));

const ColorButton = styled(Button)(({ theme }) => ({
  textTransform: "uppercase",
  fontFamily: "'Nunito Sans', sans-serif",
  fontSize: "1.5 rem",
  color: HEAD_COLOR,
  transition: "box-shadow 0.5s",
  "&:hover": {
    backgroundColor: "#4393E4",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
  },
}));

const DrawerTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
  [theme.breakpoints.down("xs")]: {
    display: "block",
    paddingLeft: theme.spacing(1),
  },
}));

const ResGridTitleLogo = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
    paddingLeft: theme.spacing(1),
    flexGrow: 1,
    alignItems: "left",
    justifyContent: "center",
  },
  [theme.breakpoints.up("xs")]: {
    display: "flex",
    paddingLeft: theme.spacing(1),
    alignItems: "center",
    justifyContent: "center",
  },
  [theme.breakpoints.down("sm")]: {
    flexGrow: 1,
    paddingRight: theme.spacing(8),
    alignItems: "center",
    justifyContent: "center",
  },
}));

const myStyles = {
  drawer: {
    display: { xs: "block", sm: "block", md: "block", lg: "none" },
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: drawerWidth,
      backgroundColor: DRWR_COLOR,
      color: DRWR_TXT_COLOR,
      textShadow:
        "0px 4px 3px rgba(0,0,0,0.4),0px 8px 13px rgba(0,0,0,0.5),0px 18px 23px rgba(0,0,0,0.1)",
    },
  },
  mainGrid: { display: "flex", zIndex: 999 },
  headGrid: {
    display: {
      xs: "none",
      sm: "none",
      md: "none",
      lg: "flex",
      xl: "flex",
    },
    justifyContent: {
      sx: "center",
      xs: "center",
      lg: "flex-end",
      xl: "flex-end",
      md: "flex-end",
    },
  },
};

export default function Header() {
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [customShadow, setCustomShadow] = useState<number>(30);
  const [appBarColor, setAppBarColor] = useState<any>("primary");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (path?: string) => {
    setAnchorEl(null);
    path && navigate(path);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <DrawerTitle variant="body2" sx={{ my: 2 }} textTransform="uppercase">
        {/* <LogoImg
          src="https://ik.imagekit.io/nwssoft/NWS_Prerna_Project/prerna-academy-logo.png?updatedAt=167956941364"
          width="40px"
          alt="logo"
        /> */}
        <br />
        sawa hris
      </DrawerTitle>
      <Divider />

      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => handleNavClick(item.path)}
            >
              <ListItemText
                primary={item.name}
                sx={{ textTransform: "uppercase" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const handleNavClick = (path: string | null) => {
    path && navigate(path);
  };

  const handleHoverIn = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition !== 0) {
      setAppBarColor("primary");
      HEAD_COLOR = "#F5F5F5";
      setCustomShadow(10);
    }
  };

  const handleHoverOut = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition !== 0) {
      setAppBarColor("transparent");
      HEAD_COLOR = "#505050";
      setCustomShadow(30);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        setAppBarColor("transparent");
        HEAD_COLOR = "#505050";
      } else {
        setAppBarColor("primary");
        HEAD_COLOR = "#F5F5F5";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Grid container sx={myStyles.mainGrid}>
        <AppBar
          component="nav"
          position="fixed"
          color={appBarColor}
          onMouseOver={handleHoverIn}
          onMouseOut={handleHoverOut}
          sx={{ boxShadow: customShadow }}
        >
          <Container maxWidth="xl">
            <Toolbar>
              <IconButton
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  mr: 2,
                  color: HEAD_COLOR,
                  display: { sm: "block", md: "block", lg: "none" },
                }}
              >
                <MenuIcon />
              </IconButton>

              <ResGridTitleLogo p={2}>
                <Grid
                  item
                  xs={12}
                  xl={4}
                  md={4}
                  sm={12}
                  lg={4}
                  display="flex"
                  alignItems="center"
                >
                  {/* <LogoImg
                    src="https://ik.imagekit.io/nwssoft/NWS_Prerna_Project/prerna-academy-logo.png?updatedAt=1679569413646"
                    width="40px"
                    alt="logo"
                  /> */}
                  <Typography
                    fontWeight="600"
                    variant="h5"
                    textTransform="uppercase"
                    sx={{
                      color: HEAD_COLOR,
                      letterSpacing: "2px",
                      fontFamily: "'Nunito Sans', sans-serif",
                    }}
                  >
                    sawa hris
                  </Typography>
                </Grid>

                <Grid
                  item
                  display="flex"
                  alignItems="center"
                  xs={8}
                  xl={8}
                  md={8}
                  sm={8}
                  lg={8}
                  sx={myStyles.headGrid}
                >
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ textTransform: "none" }}
                  >
                    {navItems.map((item) =>
                      item.name === "services" ? (
                        <ColorButton
                          key={item.name}
                          endIcon={item.endIcon}
                          size="medium"
                          id="fade-button"
                          aria-controls={open ? "fade-menu" : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? "true" : undefined}
                          onClick={handleClick}
                        >
                          {item.name}
                        </ColorButton>
                      ) : (
                        <ColorButton
                          key={item.name}
                          endIcon={item.endIcon}
                          size="medium"
                          onClick={() => handleNavClick(item.path)}
                        >
                          {item.name}
                        </ColorButton>
                      )
                    )}
                    <Menu
                      id="fade-menu"
                      MenuListProps={{ "aria-labelledby": "fade-button" }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      TransitionComponent={Fade}
                    >
                      {menuItems.map((item: MenuObject, index: number) => (
                        <MenuItem
                          key={index}
                          onClick={() => handleMenuItemClick(item.path)}
                        >
                          {item.icon}
                          <Typography textAlign="center" marginLeft={2}>
                            {item.name}
                          </Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Stack>
                </Grid>
              </ResGridTitleLogo>
            </Toolbar>
          </Container>
        </AppBar>

        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={myStyles.drawer}
          >
            {drawer}
          </Drawer>
        </Box>
      </Grid>
    </>
  );
}
