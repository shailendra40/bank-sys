"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
class CreateUserDTO {
}
exports.CreateUserDTO = CreateUserDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'John Doe',
        type: String,
        description: 'Full name of the user',
    }),
    __metadata("design:type", String)
], CreateUserDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Dhiraj123@gmail.com',
    }),
    __metadata("design:type", String)
], CreateUserDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'dhiraj123',
        type: String,
        description: 'Unique username for the user',
    }),
    __metadata("design:type", String)
], CreateUserDTO.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-01-01',
        type: String,
        description: 'Date of birth in YYYY-MM-DD format',
    }),
    __metadata("design:type", String)
], CreateUserDTO.prototype, "dob", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1234, 5th Avenue, New York',
        type: String,
        description: 'Address of the user',
    }),
    __metadata("design:type", String)
], CreateUserDTO.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1234567890',
        type: String,
        description: 'Contact number of the user',
    }),
    __metadata("design:type", Object)
], CreateUserDTO.prototype, "accounts", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1234567890',
        type: String,
        description: 'Contact number of the user',
    }),
    __metadata("design:type", Object)
], CreateUserDTO.prototype, "files", void 0);
//# sourceMappingURL=create-user.dto.js.map