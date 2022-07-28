let options = { year: "numeric", month: "short", day: "numeric" };
const currentDate = new Date();
export const dateFormat = (date) => {
  const dateFormat =
    currentDate.getFullYear() > new Date(date).getFullYear() ? (
      new Date(date).toLocaleDateString("en-US", options)
    ) : currentDate.getMonth() > new Date(date).getMonth() ? (
      new Date(date).toLocaleDateString("en-US", options)
    ) : currentDate.getDate() == new Date(date).getDate() ? (
      <span>Today</span>
    ) : currentDate.getDate() - new Date(date).getDate() == 1 ? (
      <span>{currentDate.getDate() - new Date(date).getDate()} Day ago </span>
    ) : currentDate.getDate() - new Date(date).getDate() <= 3 ? (
      <span>{currentDate.getDate() - new Date(date).getDate()} Days ago </span>
    ) : (
      new Date(date).toLocaleDateString("en-US", options)
    );
  return dateFormat;
};
