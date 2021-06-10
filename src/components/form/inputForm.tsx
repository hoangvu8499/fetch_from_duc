import React, {
  forwardRef,
} from 'react'
import { InputFormProps } from './inputForm.d'

const InputForm = forwardRef<HTMLInputElement, InputFormProps>(
  (props, ref) => {
    const {
      className = 'form-control form-control-lg',
      isInvalid = false,
      fieldError = '',
      ...refProps
    } = props

    return (
      <>
        <input
          ref={ref}
          className={`${className} ${isInvalid ? 'border-danger' : ''}`}
          {...refProps}
        />
        <div className={`invalid-feedback ${isInvalid ? 'd-block' : ''}`}>{fieldError}</div>
      </>
    )
  }
)

export default InputForm