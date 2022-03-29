import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssessmentIcon from "@mui/icons-material/Assessment";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Admin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <DashboardIcon />
            <span>Dashboard</span>
          </li>
          <li>
            <PersonOutlineIcon />
            <span>Users</span>
          </li>
          <li>
            <StorefrontOutlinedIcon />
            <span>Products</span>
          </li>
          <li>
            <CreditCardIcon />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon />
            <span>Delivery</span>
          </li>
          <li>
            <AssessmentIcon />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveOutlinedIcon />
            <span>Notifications</span>
          </li>
          <li>
            <HealthAndSafetyOutlinedIcon />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon />
            <span>Settings</span>
          </li>
          <li>
            <AccountCircleOutlinedIcon />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppOutlinedIcon />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">color options</div>
    </div>
  );
};

export default Sidebar;
