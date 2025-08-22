import * as z from "zod";
import { ZodType } from "zod";

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

export function validateWithZodSchema<T extends ZodType>(
  schema: T,
  data: unknown
) {
  const result = schema.safeParse(data);

  if (!result.success) {
    const errors = result.error.issues.map((error) => error.message);
    throw new Error(errors.join(", "));
  }

  return result.data;
}

const validateFile = () => {
  const maxUploadSize = 1024 * 1024;
  const acceptedFilesTypes = ["image/"];

  return z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= maxUploadSize;
    }, "File size must be less than 1 MB")
    .refine((file) => {
      return (
        !file || acceptedFilesTypes.some((type) => file.type.startsWith(type))
      );
    }, "File must be an image");
};

export const imageSchema = z.object({
  image: validateFile(),
});
