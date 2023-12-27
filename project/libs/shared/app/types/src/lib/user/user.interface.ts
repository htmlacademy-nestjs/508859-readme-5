import { UserRole } from './user-role.enum';

export interface User {
    id?: string;
    email: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    role: UserRole;
    countPublications?: number;
    countSubscribers?: number;
    avatarId?: string;
}