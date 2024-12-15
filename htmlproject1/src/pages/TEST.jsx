import React from "react";
import {
  Container,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";


const CarDetailstest = () => {
  const carData = {
    name: "Porsche Panamera",
    details: [
      { key: "Hệ thống lái", value: "Động cơ xăng V6 tăng áp kép" },
      { key: "Công suất tối đa", value: "330 mã lực" },
      { key: "Hộp số", value: "Tự động 8 cấp" },
      { key: "Dẫn động", value: "Cầu sau" },
      { key: "Tăng tốc", value: "5.6s (0-100 km/h)" },
      { key: "Tiêu thụ nhiên liệu", value: "9.5 lít/100 km" },
    ],
  };

  return (
    <Container style={{ marginTop: "50px", width: "90%" }}>
  <Box className="details-info-box">
    <Typography variant="h4" className="table-title" gutterBottom>
      PORCHE PANAMERA
    </Typography>
    <TableContainer component={Paper} className="table-container">
      <Table>
        <TableBody>
          <TableRow className="group-header">
            <TableCell colSpan={2}>Hộp số</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Hộp số</TableCell>
            <TableCell>CVT - Tự động vô cấp</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Động cơ</TableCell>
            <TableCell>1.5L i-VTEC DOHC</TableCell>
          </TableRow>

          <TableRow className="group-header">
            <TableCell colSpan={2}>Tổng quan</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Xuất xứ</TableCell>
            <TableCell>Việt Nam</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Số ghế</TableCell>
            <TableCell>5</TableCell>
          </TableRow>

          <TableRow className="group-header">
            <TableCell colSpan={2}>Thông số kỹ thuật động cơ</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Dung tích xi lanh</TableCell>
            <TableCell>1498</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Mã lực</TableCell>
            <TableCell>119/6600</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Momen xoắn</TableCell>
            <TableCell>145/4300</TableCell>
          </TableRow>

          <TableRow className="group-header">
            <TableCell colSpan={2}>Kích thước & trọng lượng</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Chiều dài (mm)</TableCell>
            <TableCell>4580</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Chiều rộng (mm)</TableCell>
            <TableCell>1748</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
</Container>

  );
};

export default CarDetailstest;
