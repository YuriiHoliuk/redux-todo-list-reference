import { BASE_URL, TODOS_URL, USERS_URL } from '../constants';

export const getData = async <T>(url: string): Promise<T> => {
  const resposne = await fetch(`${BASE_URL}/${url}`);

  if (!resposne.ok) {
    throw new Error(resposne.statusText);
  }

  return resposne.json() as Promise<T>;
};

export const loadTodos = () => getData<Todo[]>(TODOS_URL);

export const loadUsers = () => getData<User[]>(USERS_URL);
