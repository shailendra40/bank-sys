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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createUser(data) {
        return this.prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                username: data.username,
                dob: new Date(data.dob),
                address: data.address,
            },
        });
    }
    async getUsers() {
        return this.prisma.user.findMany();
    }
    async getUserById(id) {
        return this.prisma.user.findUnique({
            where: { id },
            include: {
                _count: {
                    select: { accounts: true, files: true },
                },
            },
        });
    }
    async getUserAccounts(id) {
        const user = await this.prisma.account.findMany({
            where: {
                userId: id,
            },
        });
        return user;
    }
    async getUserAccountById(userId, accountId) {
        const user = await this.prisma.account.findFirst({
            where: {
                id: accountId,
                userId: userId,
            },
        });
        return user;
    }
    async getUserAccountTransaction(userId, accountId) {
        const transactions = await this.prisma.transaction.findMany({
            where: {
                OR: [
                    {
                        from: {
                            id: accountId,
                            userId: userId,
                        },
                    },
                    {
                        to: {
                            id: accountId,
                            userId: userId,
                        },
                    },
                ],
            },
        });
        const totalSent = transactions.reduce((acc, curr) => {
            if (curr.fromId === accountId) {
                return acc + curr.amount;
            }
            return acc;
        }, 0);
        const totalReceived = transactions.reduce((acc, curr) => {
            if (curr.toId === accountId) {
                return acc + curr.amount;
            }
            return acc;
        }, 0);
        return {
            totalSent,
            totalReceived,
            transactions,
        };
    }
    async getUserTransactions(userId) {
        const transactions = await this.prisma.transaction.findMany({
            where: {
                OR: [
                    {
                        from: {
                            userId: userId,
                        },
                    },
                    {
                        to: {
                            userId: userId,
                        },
                    },
                ],
            },
        });
        return transactions;
    }
    async transferFunds(transferDto) {
        const senderExist = await this.prisma.account.findFirst({
            where: {
                id: transferDto.sender,
            },
        });
        if (!senderExist) {
            throw new common_1.NotFoundException('Sender A/C not found.');
        }
        const receiverExist = await this.prisma.account.findFirst({
            where: {
                id: transferDto.receiver,
            },
        });
        if (!receiverExist) {
            throw new common_1.NotFoundException('Receiver A/C not found.');
        }
        if (senderExist.balance < transferDto.fund) {
            throw new common_1.BadRequestException('Insufficient fund.');
        }
        try {
            await this.prisma.$transaction([
                this.prisma.account.update({
                    where: {
                        id: transferDto.sender,
                    },
                    data: {
                        balance: senderExist.balance - transferDto.fund,
                    },
                }),
                this.prisma.account.update({
                    where: {
                        id: transferDto.receiver,
                    },
                    data: {
                        balance: receiverExist.balance + transferDto.fund,
                    },
                }),
                this.prisma.transaction.create({
                    data: {
                        amount: transferDto.fund,
                        date: new Date(),
                        description: transferDto.description,
                        remarks: transferDto.remarks,
                        fromId: transferDto.sender,
                        toId: transferDto.receiver,
                    },
                }),
            ]);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Something went wrong!');
        }
        return {
            message: 'Balance trasferred successfully!',
        };
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map