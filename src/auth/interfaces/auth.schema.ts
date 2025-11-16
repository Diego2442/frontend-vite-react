import z from "zod";

export const loginSchema = z.object({
  email: z.email({ message: "Email inválido" }),
  password: z.string().min(1, { message: "La contraseña no debe ir vacía" }),
});

export type LoginForm = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
    email: z.email({ message: "Email inválido" }),
    password: z.string().min(8, { message: "La contraseña debe tener al menos 8 caracteres" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

export type RegisterForm = z.infer<typeof registerSchema>;