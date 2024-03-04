import { z } from "zod";

export const imcFormSchema = z.object({
  height: z.any(),
  weight: z.any(),
});

export type TypeImcDataProps = z.infer<typeof imcFormSchema>;
