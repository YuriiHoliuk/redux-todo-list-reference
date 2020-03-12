import { TodosSortBy } from '../constants';

export const prepareTodos = (todos: Todo[], users: User[]): TodoWithUser[] => {
  const usersMap = users.reduce<Record<number, User>>((acc, user) => ({
    ...acc,
    [user.id]: user,
  }), {});

  return todos.map((todo) => {
    return {
      ...todo,
      user: usersMap[todo.userId] as User,
    };
  });
};

export const sortTodos = (todos: TodoWithUser[], sortBy: TodosSortBy): TodoWithUser[] => {
  switch (sortBy) {
    case 'title': {
      return [...todos].sort((todoA, todoB) => todoA.title.localeCompare(todoB.title));
    }

    case 'completed': {
      return [...todos].sort((todoA, todoB) => {
        if (todoA.completed === todoB.completed) {
          return 0;
        }

        return todoA.completed ? 1 : -1;
      });
    }

    case 'user.name': {
      return [...todos].sort((todoA, todoB) => todoA.user.name.localeCompare(todoB.user.name));
    }

    default:
      return todos;
  }
};
