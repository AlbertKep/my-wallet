import type { Timestamp } from "firebase/firestore";
import type { FiltersField } from "@/pages/transactions/Transactions";
export type FiltersErrors = {
  date?: string;
  range?: string;
  general?: string;
};
export const datesValidate = (from: Timestamp | null, to: Timestamp | null) => {
  const dateErrors: FiltersErrors = {};
  let dateHasErrors = false;

  if (!from || !to) return { errors: {}, hasErrors: false };
  if (from && to) {
    if (from.seconds > to.seconds) {
      dateErrors.date = "The start date cannot be later than the end date";
      dateHasErrors = true;
    }
  }
  return { dateErrors, dateHasErrors };
};

export const rangeValidate = (min: string, max: string) => {
  const rangeErrors: FiltersErrors = {};
  let rangeHasErrors = false;

  const minProvided = min.length > 0;
  const maxProvided = max.length > 0;
  let minNumber: number | undefined;
  let maxNumber: number | undefined;

  if (minProvided) {
    minNumber = Number(min);
    if (!Number.isFinite(minNumber)) {
      rangeErrors.range = "The price has to be a number";
      rangeHasErrors = true;
      return { rangeErrors, rangeHasErrors };
    }

    if (minNumber < 0) {
      rangeErrors.range = "The price has to be greater than 0";
      rangeHasErrors = true;
      return { rangeErrors, rangeHasErrors };
    }
  }

  if (maxProvided) {
    maxNumber = Number(max);
    if (!Number.isFinite(maxNumber)) {
      rangeErrors.range = "The price has to be a number";
      rangeHasErrors = true;
      return { rangeErrors, rangeHasErrors };
    }

    if (maxNumber < 0) {
      rangeErrors.range = "The price has to be greater than 0";
      rangeHasErrors = true;
      return { rangeErrors, rangeHasErrors };
    }
  }

  if (minProvided && maxProvided) {
    if (minNumber! >= maxNumber!) {
      rangeErrors.range = "The max price has to be greater than min";
      rangeHasErrors = true;
      return { rangeErrors, rangeHasErrors };
    }
  }

  return { rangeErrors, rangeHasErrors };
};

export const filtersValidate = (selectedFilters: FiltersField) => {
  const { from, to, min, max } = selectedFilters;
  const { dateErrors, dateHasErrors } = datesValidate(from, to);
  const { rangeErrors, rangeHasErrors } = rangeValidate(min, max);

  const errors = { ...dateErrors, ...rangeErrors };
  const hasErrors = dateHasErrors || rangeHasErrors;

  return { errors, hasErrors };
};
