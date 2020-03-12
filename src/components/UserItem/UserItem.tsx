import React, { FC } from 'react';

type Props = Pick<User, 'email' | 'name'>;

export const UserItem: FC<Props> = ({ name, email }) => (
  <>
    <p>
      {`Name: ${name}`}
    </p>
    <p>
      {`Email: ${email}`}
    </p>
  </>
);
