"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/utils");
process.env.MEDUSA_FF_MEDUSA_V2 = "true";
process.env.MEDUSA_FF_DISABLE_STOCK_LOCATION = "true";
(0, utils_1.loadEnv)(process.env.NODE_ENV || "development", process.cwd());
console.log("DATABASE_URL", process.env.DATABASE_URL);
console.log("REDIS_URL:", process.env.REDIS_URL);
exports.default = (0, utils_1.defineConfig)({
    projectConfig: {
        databaseUrl: process.env.DATABASE_URL,
        redisUrl: process.env.REDIS_URL,
        http: {
            storeCors: "http://localhost:3000",
            adminCors: "http://localhost:3000",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkdXNhLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21lZHVzYS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBd0Q7QUFFeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQUM7QUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsR0FBRyxNQUFNLENBQUM7QUFFdEQsSUFBQSxlQUFPLEVBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksYUFBYSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBRTlELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQUVqRCxrQkFBZSxJQUFBLG9CQUFZLEVBQUM7SUFDMUIsYUFBYSxFQUFFO1FBQ2IsV0FBVyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWTtRQUNyQyxRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTO1FBQy9CLElBQUksRUFBRTtZQUNKLFNBQVMsRUFBRSx1QkFBdUI7WUFDbEMsU0FBUyxFQUFFLHVCQUF1QjtZQUNsQyxRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLElBQUksdUJBQXVCO1NBQzNEO0tBRUY7SUFFRCxVQUFVO0lBQ1Ysd0RBQXdEO0lBQ3hELDhEQUE4RDtJQUM5RCxLQUFLO0lBRU4sT0FBTyxFQUFFO1FBQ1IsYUFBYSxFQUFFLEtBQUs7UUFFcEIsUUFBUSxFQUFFO1lBQ1IsT0FBTyxFQUFFLDJCQUEyQjtZQUNwQyxPQUFPLEVBQUU7Z0JBQ1AsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUzthQUNoQztTQUNGO1FBRUQsWUFBWSxFQUFFO1lBQ1osT0FBTyxFQUFFLHVCQUF1QjtZQUNoQyxPQUFPLEVBQUU7Z0JBQ1AsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUzthQUNoQztTQUNGO0tBQ0Y7Q0FHQSxDQUFDLENBQUMifQ==