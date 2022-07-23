import { forwardRef } from "react";
import { useField, useFormikContext, ErrorMessage } from "formik";
export const LabeledTextField = forwardRef(({
  name,
  label,
  outerProps,
  ...props
}, ref) => {
  const [input] = useField(name);
  const {
    isSubmitting
  } = useFormikContext();
  return <div {...outerProps}>
        <label>
          {label}
          <input {...input} disabled={isSubmitting} {...props} ref={ref} />
        </label>

        <ErrorMessage name={name}>
          {msg => <div role="alert" style={{
        color: "red"
      }}>
              {msg}
            </div>}
        </ErrorMessage>

        <style jsx>{`
          label {
            display: flex;
            flex-direction: column;
            align-items: start;
            font-size: 1rem;
          }
          input {
            font-size: 1rem;
            padding: 0.25rem 0.5rem;
            border-radius: 3px;
            border: 1px solid purple;
            appearance: none;
            margin-top: 0.5rem;
          }
        `}</style>
      </div>;
});
export default LabeledTextField;