import { User } from "../types/user.type";

let users: User[] = [
  { 
    id: "user1", 
    username: 'john_doe', 
    email: 'john@example.com', 
    name: 'John Doe', 
    age: 30 },
  { 
    id: "user2", 
    username: 'jane_smith', 
    email: 'jane@example.com', 
    name: 'Jane Smith', 
    age: 25 
  },
];

export interface IUserRepository {
  createUser(user: User): User;
  getUsers(): User[];
  getUserById(id: string): User | undefined;
  putUser(id: string, user: Partial<User>): User | undefined;
  updateUser(id: string, user: User): User | undefined;
  deleteUser(id: string): boolean;
}

export class UserRepository implements IUserRepository {
  createUser(user: User): User {
    users.push(user);
    return user;
  }
    getUsers(): User[] {
      return users;
    }
    getUserById(id: string): User | undefined {
      const user = users.find((user) => user.id === id);
      return user;}

    putUser(id: string, user: Partial<User>): User | undefined {
      const existingUserIndex = users.findIndex((u) => u.id === id);
        if (existingUserIndex === -1) {
            return undefined;
        }
        const existingUser = users[existingUserIndex];
        const updatedUser = { ...existingUser, ...user };
        users[existingUserIndex] = updatedUser;
        return updatedUser;
    }

    updateUser(id: string, user: User): User | undefined {
      const existingUserIndex = users.findIndex((u) => u.id === id);
        if (existingUserIndex === -1) {
            return undefined;
        }
        users[existingUserIndex] = user;
        return user;
    }

    deleteUser(id: string): boolean {
      const existingUserIndex = users.findIndex((u) => u.id === id);
        if (existingUserIndex === -1) {
            return false;
        }
        users.splice(existingUserIndex, 1);
        return true;
    }
}