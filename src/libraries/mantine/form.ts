import {
  useForm as _useForm,
  createFormContext as _createFormContext,
  FORM_INDEX as _FORM_INDEX,
  isNotEmpty as _isNotEmpty,
  isEmail as _isEmail,
  isInRange as _isInRange,
  hasLength as _hasLength,
  matches as _matches,
  matchesField as _matchesField,
  Form as _Form,
  zodResolver as _zodResolver,
} from "@mantine/form";
import type {
  UseFormReturnType as _UseFormReturnType,
  FormErrors as _FormErrors,
} from "@mantine/form";

export const useForm = _useForm;
export const createFormContext = _createFormContext;
export const FORM_INDEX = _FORM_INDEX;
export const isNotEmpty = _isNotEmpty;
export const isEmail = _isEmail;
export const isInRange = _isInRange;
export const hasLength = _hasLength;
export const matches = _matches;
export const matchesField = _matchesField;
export const Form = _Form;
export const zodResolver = _zodResolver;

export type UseFormReturnType<T> = _UseFormReturnType<T>;
export type FormErrors = _FormErrors;
