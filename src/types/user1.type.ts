import z from 'zod';
export const userType=z.object({
    firstname:z.string().optional(),
    lastname:z.string().optional(),
    email:z.email(),
    username:z.string().min(3),
    password:z.string().min(6)
});

export type UserType=z.infer<typeof userType>;