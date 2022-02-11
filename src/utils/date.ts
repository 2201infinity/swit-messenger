export const getCurrentDate = () =>
  new Date(+new Date() + 3240 * 10000)
    .toISOString()
    .replace("T", " ")
    .replace(/\..*/, "");
