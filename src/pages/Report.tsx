import { Box, Typography } from "@mui/material";
import React from "react";

const Report = () => {
  return (
    <>
      <Typography fontWeight="fontWeightRegular"> レギュラー</Typography>
      <Typography fontWeight="fontWeightMedium"> ミディアム</Typography>
      <Typography fontWeight="fontWeightBold"> ボールド</Typography>

      <Box sx={{ fontWeight: "fontWightBold" }}>ボックス</Box>
    </>
  );
};

export default Report;
