import Moment from "react-moment";

export const dateFormat = (date) => {
  return <Moment format="DD MMM YYYY">{date}</Moment>;
};
