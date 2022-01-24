import * as React from "react";
// Routing
import { Link } from "react-router-dom";
// Styles
import "../../styles/css/Navbar.css";
// Components
import Svg from "./Svg";
// MUI
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Box from "@material-ui/core/Box";
import { styled } from "@mui/material/styles";

const Navbar = (): JSX.Element => {
  return (
    <Box className="navbar">
      <Stack spacing={2}>
        <Item className="navbar__button">
          <div>
            <a href="https://propdo.ai/il/" target="_blank">
              <Svg />
            </a>
          </div>
        </Item>
        <Item className="navbar__button">
          <Link className="navbar__button__link" to="/">
            Table
          </Link>
        </Item>
        <Item className="navbar__button">
          <Link className="navbar__button__link" to="/chartView">
            Chart
          </Link>
        </Item>
      </Stack>
    </Box>
  );
};

export default Navbar;

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
