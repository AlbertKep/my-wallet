export type TransactionErrors = {
  title?: string;
  price?: string;
  general?: string;
};

export const transactionValidate = (title: string, price: string) => {
  const errors: TransactionErrors = {};

  const trimmedTitle = title.trim();
  const priceNumber = Number(price);

  if (trimmedTitle.length < 3) {
    errors.title = "Title should contains min 3 characters";
  }

  if (!Number.isFinite(priceNumber)) {
    errors.price = "Price should be a number";
  } else if (priceNumber <= 0) {
    errors.price = "Price should be greater than 0";
  }

  const hasErrors = trimmedTitle.length < 3 || !Number.isFinite(priceNumber) || priceNumber <= 0;
  return { errors, hasErrors };
};
