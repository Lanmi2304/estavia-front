import { z } from "zod";

export const signInSchema = z.object({
  username: z.string().min(3, { message: "Must be 3 or more characters long" }),
  password: z.string().min(8, { message: "Must be 8 or more characters long" }),
});
export type SignInInput = z.infer<typeof signInSchema>;
