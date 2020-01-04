import { TodoItem, User } from '../../core';

const users: User[] = [
  {
    name: 'Martin Neumann',
    assignedTo: [],
  },
];

export const DEFAULT_TODOS: TodoItem[] = [
  {
    id: '83cab48e-5fb7-4ca0-b0de-3e6177e927ca',
    description: 'Number one',
    isDone: true,
    assignedUser: users[0],
    createdAt: new Date().toISOString(),
  },
  {
    id: '85c792ca-d793-465b-9932-50763ab8b888',
    description: 'Number two',
    isDone: false,
    assignedUser: users[0],
    createdAt: new Date(new Date().getTime() - 600000).toISOString(),
  },
];

users[0].assignedTo = DEFAULT_TODOS;

export const DEFAULT_USERS = users;
