import * as z from "zod";

export const profileSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must me at least 2 character." }),
  lastName: z
    .string()
    .min(2, { message: "Last name must me at least 2 character." }),
  userName: z
    .string()
    .min(2, { message: "User name must me at least 2 character." }),
});
