import { FieldsWrapper, Label, Input } from "./FormField.ts";

type FormFieldsProps = {
  id: string;
  name: string;
  label: string;
  type: string;
  value: string;
  onValueChange: (value: string) => void;
};

const FormField: React.FC<FormFieldsProps> = ({
  id,
  name,
  label,
  type,
  value,
  onValueChange,
}) => {
  return (
    <FieldsWrapper>
      <Label htmlFor={label}>{name}</Label>
      <Input
        type={type}
        id={id}
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
      {/* <TextError $visible={!!errors.email}>{errors.email}</TextError> */}
    </FieldsWrapper>
  );
};

export default FormField;
