import { TextField, TextFieldProps } from "@mui/material";

export function Input(props: TextFieldProps) {
  return <TextField size="small" {...props} />;
}
