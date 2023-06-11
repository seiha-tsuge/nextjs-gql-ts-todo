import { TodoForm, MakeTodoForm } from "./types";

export const makeTodoInitialValues = {
  title: "",
} as MakeTodoForm;

export const todoInitialValues = ({ title, completed }: TodoForm) => {
  return {
    title,
    completed,
  } as TodoForm;
};
