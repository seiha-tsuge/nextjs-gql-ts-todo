import { useForm, zodResolver } from "@/libraries/mantine/form";
import type { MakeTodoForm, TodoForm } from "./types";
import { makeTodoInitialValues, todoInitialValues } from "./initialValues";
import { makeTodoSchema } from "./schema";

export const useMakeTodoForm = () => {
  return useForm<MakeTodoForm>({
    initialValues: makeTodoInitialValues,
    validate: zodResolver(makeTodoSchema),
  });
};

export const useTodoForm = ({ title, completed }: TodoForm) => {
  return useForm<MakeTodoForm>({
    initialValues: todoInitialValues({ title, completed }),
    validate: zodResolver(makeTodoSchema),
  });
};
