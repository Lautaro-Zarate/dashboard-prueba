import * as z from "zod";

export const userSchema = z.object({
    firstname: z.string().min(3, { message: "The name must have at least 3 characters" })
    .max(30, { message: "The name cannot exceed 30 characters" }),
    lastname: z.string().min(3, {message: 'The last name must have at least 3 characters'}),
    email: z.email('Invalid email address'),
    age: z.coerce.number().min(18, "Age must be at least 18"),
})