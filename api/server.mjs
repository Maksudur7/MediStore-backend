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
export default require_server();
