export interface User{
    id: number;
    firstName:string;
    lastName:string;
    email:string;
    password:string;
    role: 'WRITER'|'READER';
    plan: 'FREE'|'BASIC'|'PRO'|'ENTERPRISE';
    description: string;
}