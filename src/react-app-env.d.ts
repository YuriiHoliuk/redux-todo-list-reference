// eslint-disable-next-line
/// <reference types="react-scripts" />

interface User {
  id: number;
  name: string;
  email: string;
}

interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

interface TodoWithUser extends Todo {
  user: User;
}
