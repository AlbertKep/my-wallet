export const errorHandling = (error: unknown) => {
  console.error(error);
  const message = error instanceof Error ? error.message : "Unexpected error";
  return message;
};
