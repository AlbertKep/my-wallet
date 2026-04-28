import { DateWrapper, DateInput } from "./DatePicker.styled.ts";
import { Label } from "../ui/Label.styled.ts";
import { timestampToInputDate, inputDateToTimestamp } from "../../utils/dateConverters.ts";
import type { Timestamp } from "firebase/firestore";
import { TextError } from "../ui/TextError.styled.ts";

type DatePickerProps<T> = {
  id: string;
  label: string;
  selectedDate: Timestamp | null;
  error?: string;
  updateField: (payload: T) => void;
};
const DatePicker = <T,>({ id, label, selectedDate, error, updateField }: DatePickerProps<T>) => {
  return (
    <DateWrapper>
      <Label htmlFor={id}>{label}</Label>
      <DateInput
        id={id}
        type='date'
        name='date-start'
        value={selectedDate === null ? "" : timestampToInputDate(selectedDate)}
        onChange={(e) => updateField({ field: id, value: inputDateToTimestamp(e.target.value) } as T)}
      />
      <TextError $visible={!!error}>{error}</TextError>
    </DateWrapper>
  );
};

export default DatePicker;
