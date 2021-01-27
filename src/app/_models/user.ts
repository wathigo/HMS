// import { Role } from "./role";

export class User {
    id: number;
    username: string;
    password: string;
    email: string;
    age: number;
    gender: string;
    is_doctor: boolean;
    is_patient: boolean;
    is_active: boolean;
    is_staff: boolean;
    is_admin: boolean;
    is_superuser: boolean;
    token?: string;        
}