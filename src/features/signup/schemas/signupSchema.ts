import { z } from "zod";

export const signupSchema = z.object({
 firstName: z.string().min(3, 'First name must be at least 3 characters'),
 lastName: z.string().min(3, 'Last name must be at least 3 characters'),
 bio: z.string().optional(),
 email: z.string().email('Invalid email address'),
 password: z.string().min(6, 'Password must be at least 8 characters'),
confirmpassword: z.string()
}).refine((data) => data.password === data.confirmpassword, {
  message: 'Passwords do not match',
  path: ['confirmpassword'],
})