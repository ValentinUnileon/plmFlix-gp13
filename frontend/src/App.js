import './App.css';
import Login from "./pages/login.js";
import Profiles from "./pages/profiles.js";
import Home from "./pages/home";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { makeStyles } from '@mui/styles';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Configuration from './pages/configuration';
import Administrador from './pages/administrador';

function App() {
  const classes = useStyles();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/:user/profiles" element={<Profiles />} />
          <Route path="/:user/:profile/home" element={<Home />} />
          <Route path="/:user/:profile/configuration" element={<Configuration />} />
          <Route path="/:user/:profile/administrador" element={<Administrador />} />
        </Routes>
      </Router>
    </LocalizationProvider>
  );
}

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    backgroundColor: '#111',
  },
});
export default App;
