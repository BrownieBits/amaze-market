import { format, parseISO } from 'date-fns';

const Date: React.FC<{ dateString: string }> = ({
  dateString,
  ...divProps
}) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
};

export default Date;
