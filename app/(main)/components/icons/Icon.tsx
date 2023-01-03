import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type IIcon = {
  name: string;
};
export default function Icon({ name }: IIcon) {
  const iconProp: IconProp = name as IconProp;
  return <FontAwesomeIcon icon={iconProp} />;
}
