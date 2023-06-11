import { useForm, zodResolver } from "@/libraries/mantine/form";
import type { MakeTodoForm } from "./types";
import { makeTodoInitialValues } from "./initialValues";
import { makeTodoSchema } from "./schema";

export const useMakeTodoForm = () => {
  return useForm<MakeTodoForm>({
    initialValues: makeTodoInitialValues,
    validate: zodResolver(makeTodoSchema),
  });
};
