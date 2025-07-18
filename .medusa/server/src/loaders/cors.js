"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
// src/loaders/cors.ts
const cors_1 = __importDefault(require("cors"));
async function default_1({ container }) {
    const app = container.resolve("express");
    app.use((0, cors_1.default)({
        origin: ["http://localhost:3001"],
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9sb2FkZXJzL2NvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSw0QkFXQztBQWhCRCxzQkFBc0I7QUFDdEIsZ0RBQXdCO0FBSVQsS0FBSyxvQkFBVyxFQUFFLFNBQVMsRUFBa0M7SUFDMUUsTUFBTSxHQUFHLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBVSxTQUFTLENBQUMsQ0FBQztJQUVsRCxHQUFHLENBQUMsR0FBRyxDQUNMLElBQUEsY0FBSSxFQUFDO1FBQ0gsTUFBTSxFQUFFLENBQUMsdUJBQXVCLENBQUM7UUFDakMsV0FBVyxFQUFFLElBQUk7UUFDakIsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQztRQUNwRCxjQUFjLEVBQUUsQ0FBQyxjQUFjLEVBQUUsZUFBZSxDQUFDO0tBQ2xELENBQUMsQ0FDSCxDQUFDO0FBQ0osQ0FBQyJ9