import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";


const Navbar = () => (
  <Stack direction="row" alignItems="center" p={1} sx={{ position:  "sticky", background:"linear-gradient(to right, #111827 40%, #115c6c )", top: 0, justifyContent: "space-between", zIndex:999}}>
    <Link to="/" style={{ display: "flex", alignItems: "center" , backgroundColor:"#fff"}}>
      <img src={logo} alt="logo" height={100}  />
    </Link>
  <SearchBar />
  </Stack>
);

export default Navbar;
