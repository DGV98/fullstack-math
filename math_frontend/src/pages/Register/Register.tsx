import { useRef, useState } from "react";
import useRegister from "../../hooks/useRegister";
import { useNavigate } from "react-router";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Alert,
} from "@mui/material";

const Register = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const register = useRegister(() => {
    navigate("/login");
  });
  const [message, setMessage] = useState<string | null>(null);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "background.paper",
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography component="h1" variant="h5" color="text.primary">
          Register
        </Typography>
        {register.error && (
          <Alert severity="error">{register.error.message}</Alert>
        )}
        <Box
          component="form"
          onSubmit={(event) => {
            event.preventDefault();
            if (
              emailRef.current &&
              emailRef.current.value &&
              passwordRef.current &&
              passwordRef.current.value
            )
              register.mutate({
                email: emailRef.current?.value,
                password: passwordRef.current?.value,
              });
          }}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            inputRef={emailRef}
            variant="outlined"
            InputProps={{
              style: { color: "white" },
            }}
            InputLabelProps={{
              style: { color: "white" },
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            inputRef={passwordRef}
            variant="outlined"
            InputProps={{
              style: { color: "white" },
            }}
            InputLabelProps={{
              style: { color: "white" },
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
        </Box>
        {message && <Typography color="text.primary">{message}</Typography>}
      </Box>
    </Container>
  );
};

export default Register;
