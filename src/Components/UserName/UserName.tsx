import { FC, memo } from 'react';

interface UsernameProps {
  name: string | undefined;
}

const Username: FC<UsernameProps> = memo((props) => {
  const { name } = props;

  return <>{name}!</>;
});
export default Username;
