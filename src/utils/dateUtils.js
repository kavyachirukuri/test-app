export const formatDate = (dateString) => {
  const options = { weekday: "long", month: "short", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
