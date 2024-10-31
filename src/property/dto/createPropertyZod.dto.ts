import { z } from 'zod';

export const CreatePropertySchema = z
  .object({
    name: z.string(),
    description: z.string().min(2).max(10),
    area: z.number().positive(),
  })
  .required();

export type CreatePropertyZodDto = z.infer<typeof CreatePropertySchema>;
