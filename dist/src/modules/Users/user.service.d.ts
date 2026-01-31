export declare const userService: {
    getAllUsers: () => Promise<{
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
    }[]>;
    updateUser: (userId: string, data: {
        name?: string;
        email?: string;
        image?: string;
        phone?: string;
    }) => Promise<{
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
    }>;
    updateUserByAdmin: (userId: string, userStatus: boolean) => Promise<{
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
    }>;
};
//# sourceMappingURL=user.service.d.ts.map