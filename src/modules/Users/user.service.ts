import { prisma } from "../../lib/prisma";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const regsterUser = async (userData: any) => {
    const { name, email, password, phone, role } = userData;
    console.log('userData', userData);
    const isUserExist = await prisma.user.findUnique({ where: { email } });
    if (isUserExist) {
        throw new Error("User already exists!");
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hashSync(password, salt);

    let finalRole: "CUSTOMER" | "SELLER" | "ADMIN";
    if (role === "CUSTOMER") {
        finalRole = "CUSTOMER";
    } else if (role === "SELLER") {
        finalRole = "SELLER";
    }else{
        finalRole = "ADMIN";
    }

    const result = await prisma.user.create({
        data: {
            name,
            email,
            role: finalRole,
            accounts: {
                create: {
                    accountId: email,
                    providerId: "credentials",
                    password: hashedPassword
                }
            }
        },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            phone: true,
            createdAt: true,
            image: true,
            emailVerified: true,
        }
    })

    const jwtSecret = process.env.JWT_SECRET

    const token = jwt.sign(
        {
            userId: result.id,
            email: result.email,
            role: result.role,
            phone: phone
        },
        jwtSecret as string,
        { expiresIn: '1d' }
    )


    return {
        user: result,
        token
    };

}

const loginUser = async (email: string, password: string) => {

    const isUserExist = await prisma.user.findUnique({
        where: { email },
        include: {
            accounts: true
        }
    });

    if (!isUserExist) {
        throw new Error("User does not exist!");
    }

    const userAccount = isUserExist.accounts.find(acc => acc.providerId === "credentials");

    if (!userAccount || !userAccount.password) {
        throw new Error("Invalid credentials!");
    }

    const isPasswordMatched = await bcrypt.compare(password, userAccount.password);

    if (!isPasswordMatched) {
        throw new Error("Password incorrect!");
    }

    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
        throw new Error("JWT_SECRET is not defined!");
    }

    const token = jwt.sign(
        {
            userId: isUserExist.id,
            email: isUserExist.email,
            role: isUserExist.role
        },
        jwtSecret as string,
        { expiresIn: '1d' }
    );

    const { accounts, ...userWithoutPassword } = isUserExist;

    return {
        user: userWithoutPassword,
        token
    };
};



export const userService = {
    regsterUser,
    loginUser,
}