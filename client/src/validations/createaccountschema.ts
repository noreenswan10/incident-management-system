import { z } from "zod";

export const createAccountSchema = z.object({
    firstName: z.string().min(1, { message: "First name is required" }),
    middleName: z.string().optional(),
    lastName: z.string().min(1, { message: "Last name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    phoneNumber: z.string().regex(/^\+?[0-9]{10,15}$/, {
      message: "Phone number must be a valid number (10-15 digits)",
    }),
    address: z.string().min(1, { message: "Address is required" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters" }),
    role: z.enum(["Technician", "User"]),
  });