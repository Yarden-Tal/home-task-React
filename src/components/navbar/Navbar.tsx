import * as React from "react";
// Routing
import { Link } from "react-router-dom";
// Styles
import "../../styles/css/Navbar.css";
// Components
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Box from "@material-ui/core/Box";

const Navbar = (): JSX.Element => {
  return (
    <>
      <Box className="navbar">
        <Stack spacing={2}>
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
    </>
  );
};

export default Navbar;

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
