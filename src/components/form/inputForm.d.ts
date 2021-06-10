import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface InputFormProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  isInvalid?: boolean
  fieldError: string
}
