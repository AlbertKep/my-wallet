import { DateWrapper, Label, DateInput } from "./DatePicker.styled.ts";
import { type TransactionFieldUpdate } from "../../pages/addTransaction/AddTransaction.tsx";
import { timestampToInputDate, inputDateToTimestamp } from "../../utils/dateConverters.ts";
import type { Timestamp } from "firebase/firestore";

type DatePickerProps = {
  selectedDate: Timestamp;
  updateField: ({ field, value }: TransactionFieldUpdate) => void;
};
const DatePicker: React.FC<DatePickerProps> = ({ selectedDate, updateField }) => {
  return (
    <DateWrapper>
      <Label htmlFor='date'>Date</Label>
      <DateInput
        id='date'
        type='date'
        name='date-start'
        value={timestampToInputDate(selectedDate)}
        onChange={(e) => updateField({ field: "date", value: inputDateToTimestamp(e.target.value) })}
      />
    </DateWrapper>
  );
};

export default DatePicker;
