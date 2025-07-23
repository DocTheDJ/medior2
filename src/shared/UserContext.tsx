'use client';

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';
import { User } from './types';

interface IProps {
  children?: ReactNode
}

type UserState = [User | null, Dispatch<SetStateAction<User | null>>];

type UserContextType = {
  value: UserState | null,
};

const UserContext = createContext<UserContextType>({
  value: null,
});

export const UserProvider = ({ children }: IProps): ReactNode => {
  const state = useState<User | null>(null);

  const value = {
    value: state,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
