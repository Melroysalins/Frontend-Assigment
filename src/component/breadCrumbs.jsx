import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function BreadCrumbs() {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="#d1d1da"
      href="/"
      fontFamily="Poppins"
      fontWeight="600"
      fontSize="14px"
    >
      Home
    </Link>,

    <Typography
      key="3"
      color="#3f72a5"
      fontFamily="Poppins"
      fontWeight="600"
      fontSize="14px"
      cursor="pointer"
    >
      Breadcrumb
    </Typography>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
