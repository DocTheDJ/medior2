'use client';

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';
import { User } from './types';

interface IProps {
  children?: ReactNode
}

// this is a helper type to be used in the context, its the result of 'useState'
type UserState = [User | null, Dispatch<SetStateAction<User | null>>];

type UserContextType = {
  value: UserState | null,
};

// create context with defasult value
const UserContext = createContext<UserContextType>({
  value: null,
});

// create provider for the context and have it wrap around its children
export const UserProvider = ({ children }: IProps): ReactNode => {
  const state = useState<User | null>(null);

  const value = {
    value: state,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// prepared function to get the wanted context, can be broken down further
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
