export type UserRole = "ADMIN" | "MANAGER" | "USER";
export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    createdAt: string;
}
//# sourceMappingURL=user.d.ts.map