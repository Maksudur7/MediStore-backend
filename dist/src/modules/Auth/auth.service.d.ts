export declare const authService: {
    regsterUser: (userData: any) => Promise<{
        user: {
            id: string;
            name: string;
            email: string;
            emailVerified: boolean;
            image: string | null;
            createdAt: Date;
            role: import("../../../generated/prisma/enums").Role;
            phone: string | null;
        };
        token: string;
    }>;
    loginUser: (email: string, password: string) => Promise<{
        user: {
            id: string;
            name: string;
            email: string;
            emailVerified: boolean;
            image: string | null;
            createdAt: Date;
            updatedAt: Date;
            role: import("../../../generated/prisma/enums").Role;
            phone: string | null;
            status: boolean;
        };
        token: string;
    }>;
};
//# sourceMappingURL=auth.service.d.ts.map