import {
  Button,
  Input,
  Sheet,
  Typography,
  FormControl,
  FormLabel,
} from "@mui/joy";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí llamarías a tu servicio. Por ahora simulamos:
    login({ name: "Usuario Prueba", role: "user" }, "fake-token");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Sheet
        variant="outlined"
        className="p-8 rounded-xl shadow-md w-full max-w-sm flex flex-col gap-4">
        <Typography level="h3" component="h1" className="text-center">
          ¡Bienvenido!
        </Typography>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <FormControl>
            <FormLabel>Correo electrónico</FormLabel>
            <Input
              name="email"
              type="email"
              placeholder="correo@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <Button type="submit" fullWidth>
            Iniciar Sesión
          </Button>
        </form>
      </Sheet>
    </div>
  );
}
