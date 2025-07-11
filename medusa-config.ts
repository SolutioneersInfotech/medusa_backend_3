import { loadEnv, defineConfig } from "@medusajs/utils";

process.env.MEDUSA_FF_MEDUSA_V2 = "true";
process.env.MEDUSA_FF_DISABLE_STOCK_LOCATION = "true";

loadEnv(process.env.NODE_ENV || "development", process.cwd());

console.log("DATABASE_URL", process.env.DATABASE_URL);
console.log("REDIS_URL:" , process.env.REDIS_URL)

export default defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    redisUrl: process.env.REDIS_URL,
    http: {
      storeCors: "http://localhost:3001",
      adminCors: "http://localhost:3001",
      authCors: process.env.AUTH_CORS || "http://localhost:5173",
    },
    
  },

  // auth: {
  //   jwtSecret: process.env.JWT_SECRET || "supersecret",
  //   cookieSecret: process.env.COOKIE_SECRET || "supercookie",
  // },

 modules: {
  stockLocation: false,

  eventBus: {
    resolve: "@medusajs/event-bus-redis",
    options: {
      redisUrl: process.env.REDIS_URL,
    },
  },

  cacheService: {
    resolve: "@medusajs/cache-redis",
    options: {
      redisUrl: process.env.REDIS_URL,
    },
  },
},


});
