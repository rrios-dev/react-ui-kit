import FormControl, { FormLabel } from '@rrios-dev/react-form-control';
import CheckBox, { CheckBoxProps } from '@rrios-dev/react-checkbox';
import { ComponentProps } from '@rrios-dev/styled';
import { useId } from 'react';

export type FormCheckBoxProps = Omit<
  ComponentProps<typeof FormControl>,
  'children'
> &
  Omit<CheckBoxProps, 'error'> & {
    label?: string;
  };

const FormCheckBox = ({
  error,
  label,
  helperText,
  ...props
}: FormCheckBoxProps) => {
  const id = useId();
  return (
    <FormControl
      helperText={helperText}
      error={error}
      childrenContainerProps={{
        direction: 'row',
        alignItems: 'center',
      }}
    >
      <CheckBox {...props} id={id} error={Boolean(error)} />
      <FormLabel htmlFor={id}>{label}</FormLabel>
    </FormControl>
  );
};

export default FormCheckBox;
