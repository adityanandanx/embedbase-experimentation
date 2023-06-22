"use client";
import { forwardRef } from "react";
import Button, { ButtonProps } from "./Button";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

const FormSubmitButton = forwardRef(
  (
    { children, ...props }: Omit<ButtonProps, "isLoading">,
    forwardedRef
  ): JSX.Element => {
    const { pending, data } = useFormStatus();

    return (
      <Button {...props} isLoading={pending} ref={forwardedRef}>
        {children}
      </Button>
    );
  }
);

FormSubmitButton.displayName = "FormSubmitButton";
export default FormSubmitButton;
