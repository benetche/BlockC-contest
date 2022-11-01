import { TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import "./App.css";

const SignupForm = () => {
  const initialValues = {
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    const errors = {};
    const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!values.fullname) {
      errors.fullname = "Nome completo não pode ser vazio";
    }
    if (!values.email) {
      errors.email = "E-Mail não pode ser vazio";
    }
    else if(!emailValidator.test(values.email)){
      errors.email = "Parece que isso não é um email"
    }
    if (!values.password) {
      errors.password = "Senha não pode ser vazio";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Repita a senha não pode ser vazio";
    }
    else if(values.password !== values.confirmPassword){
      errors.confirmPassword = "As senhas devem ser iguais"
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true)
  };

  useEffect(() => {
    if(Object.keys(formErrors).length === 0 && isSubmit){
      alert("Cadastro Efetuado!")
    }
  }, [formErrors])

  return (
    <Box
      sx={{
        my: 6,
        mx: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4">
        Cadastrar-se
      </Typography>
      <Box
        component="form"
        noValidate
        sx={{ mt: 1 }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <label for="name">
          <Typography>Nome Completo:</Typography>
        </label>
        <TextField
          error={formErrors.fullname}
          helperText={formErrors.fullname}
          onChange={handleChange}
          name="fullname"
          sx={{ mb: 2 }}
          fullWidth
          placeholder="ex: João da Silva"
          autoFocus
        />
        <label for="email">
          <Typography>E-Mail:</Typography>
        </label>
        <TextField
          error={formErrors.email}
          helperText={formErrors.email}
          onChange={handleChange}
          name="email"
          sx={{ mb: 2 }}
          fullWidth
          hiddenLabel
          placeholder="user@email.com"
          autoFocus
        />
        <label for="password">
          <Typography>Senha:</Typography>
        </label>
        <TextField
          error={formErrors.password}
          helperText={formErrors.password}
          onChange={handleChange}
          name="password"
          type="password"
          sx={{ mb: 2 }}
          required
          fullWidth
          placeholder="********"
          autoFocus
        />
        <label for="re-password">
          <Typography>Repita a Senha:</Typography>
        </label>
        <TextField
          error={formErrors.confirmPassword}
          helperText={formErrors.confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
          type="password"
          sx={{ mb: 2 }}
          fullWidth
          placeholder="********"
          autoFocus
        />
        <Button fullWidth variant="contained" type="submit">
          Efetuar Cadastro
        </Button>
      </Box>
    </Box>
  );
};

export default SignupForm;
