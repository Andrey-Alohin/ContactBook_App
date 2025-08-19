import { Container, Paper, Typography } from "@mui/material";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <Paper
      component={"footer"}
      elevation={12}
      sx={{
        position: "sticky",
        bottom: 0,
        py: 3,
      }}
    >
      <Container>
        <Typography textAlign={"center"} variant="body2" color="text.secondary">
          © {year} Contact App • Built with React, TypeScript & MUI • Andrii
        </Typography>
      </Container>
    </Paper>
  );
}
