import { zod } from "@/libraries/zod";

import type { ZodSchema } from "@/libraries/zod";
import type { MakeTodoForm } from "./types";

const message = {
  title: {
    required: "Title is required.",
  },
};

export const makeTodoSchema = zod.object({
  title: zod.string().min(1, { message: message.title.required }),
}) as ZodSchema<MakeTodoForm>;
