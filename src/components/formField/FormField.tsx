import { FieldsWrapper, Input } from "./FormField.styled.ts";
import { Label } from "../ui/Label.styled.ts";
import { TextError } from "../ui/TextError.styled.ts";

type FormFieldsProps = {
  id: string;
  name: string;
  label: string;
  type: string;
  value: string | number;
  error?: string;
  className?: string;
  onValueChange: (value: string) => void;
};

const FormField: React.FC<FormFieldsProps> = ({ id, name, label, type, value, className, error, onValueChange }) => {
  return (
    <FieldsWrapper className={className}>
      <Label htmlFor={id}>{label}</Label>
      <Input type={type} id={id} name={name} value={value} onChange={(e) => onValueChange(e.target.value)} />
      <TextError $visible={!!error}>{error}</TextError>
    </FieldsWrapper>
  );
};

export default FormField;
