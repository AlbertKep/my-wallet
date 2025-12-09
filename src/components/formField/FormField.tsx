import { FieldsWrapper, Label, Input } from "./FormField.ts";
import { TextError } from "../ui/TextError.ts";

type FormFieldsProps = {
  id: string;
  name: string;
  label: string;
  type: string;
  value: string;
  error?: string;
  onValueChange: (value: string) => void;
};

const FormField: React.FC<FormFieldsProps> = ({ id, name, label, type, value, error, onValueChange }) => {
  return (
    <FieldsWrapper>
      <Label htmlFor={label}>{name}</Label>
      <Input type={type} id={id} value={value} onChange={(e) => onValueChange(e.target.value)} />
      {error && <TextError $visible={!!error}>{error}</TextError>}
    </FieldsWrapper>
  );
};

export default FormField;
