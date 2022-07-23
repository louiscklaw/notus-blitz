import { useState } from "react";
import { Formik } from "formik";
import { validateZodSchema } from "blitz";
export const FORM_ERROR = "FORM_ERROR";
export function Form({
  children,
  submitText,
  schema,
  initialValues,
  onSubmit,
  ...props
}) {
  const [formError, setFormError] = useState(null);
  return <Formik initialValues={initialValues || {}} validate={validateZodSchema(schema)} onSubmit={async (values, {
    setErrors
  }) => {
    const {
      FORM_ERROR,
      ...otherErrors
    } = (await onSubmit(values)) || {};

    if (FORM_ERROR) {
      setFormError(FORM_ERROR);
    }

    if (Object.keys(otherErrors).length > 0) {
      setErrors(otherErrors);
    }
  }}>
      {({
      handleSubmit,
      isSubmitting
    }) => <form onSubmit={handleSubmit} className="form" {...props}>
          {
        /* Form fields supplied as children are rendered here */
      }
          {children}

          {formError && <div role="alert" style={{
        color: "red"
      }}>
              {formError}
            </div>}

          {submitText && <button type="submit" disabled={isSubmitting}>
              {submitText}
            </button>}

          <style global jsx>{`
            .form > * + * {
              margin-top: 1rem;
            }
          `}</style>
        </form>}
    </Formik>;
}
export default Form;