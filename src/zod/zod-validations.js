import { z } from "zod";

// Signup Schema
export const SignupSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .nonempty({ message: "Email is required" }),
  username: z.string().min(1, { message: "Username is required" }),
  password: z.string().min(6, { message: "Password is required and must be at least 6 characters long" }),
  confirmPassword: z.string().min(1, { message: "Confirm password is required" })
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});

// Login Schema
export const LoginSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .nonempty({ message: "Email is required" }),
  password: z.string().min(6, { message: "Password is required and must be at least 6 characters long" })
});
