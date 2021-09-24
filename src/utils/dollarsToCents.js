export default (dollar) => {
  dollar = (dollar + "").replace(/[^\d.-]/g, "");
  if (dollar && dollar.includes(".")) {
    dollar = dollar.substring(0, dollar.indexOf(".") + 3);
  }

  return dollar ? Math.round(parseFloat(dollar) * 100) : 0;
};
