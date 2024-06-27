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
exports.TransactionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TransactionService = class TransactionService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createTransaction(data) {
        return this.prisma.transaction.create({
            data: {
                date: new Date(data.date),
                description: data.description,
                amount: data.amount,
                from: { connect: { id: data.fromId } },
                to: { connect: { id: data.toId } },
                remarks: data.remarks,
            },
        });
    }
    async getAllTransactions() {
        return this.prisma.transaction.findMany();
    }
    async getTransactionById(id) {
        return this.prisma.transaction.findUnique({
            where: { id },
        });
    }
    async updateTransaction(id, data) {
        return this.prisma.transaction.update({
            where: { id },
            data: {
                date: data.date ? new Date(data.date) : undefined,
                description: data.description,
                amount: data.amount,
                from: data.fromId ? { connect: { id: data.fromId } } : undefined,
                to: data.toId ? { connect: { id: data.toId } } : undefined,
                remarks: data.remarks,
            },
        });
    }
    async deleteTransaction(id) {
        return this.prisma.transaction.delete({
            where: { id },
        });
    }
};
exports.TransactionService = TransactionService;
exports.TransactionService = TransactionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TransactionService);
//# sourceMappingURL=transaction.service.js.map