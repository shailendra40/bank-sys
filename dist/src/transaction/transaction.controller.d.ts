import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
export declare class TransactionController {
    private readonly transactionService;
    constructor(transactionService: TransactionService);
    create(createTransactionDto: CreateTransactionDto): Promise<{
        id: number;
        date: Date;
        description: string;
        amount: number;
        fromId: number;
        toId: number;
        remarks: string;
    }>;
    findAll(): Promise<{
        id: number;
        date: Date;
        description: string;
        amount: number;
        fromId: number;
        toId: number;
        remarks: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        date: Date;
        description: string;
        amount: number;
        fromId: number;
        toId: number;
        remarks: string;
    }>;
    update(id: number, updateTransactionDto: UpdateTransactionDto): Promise<{
        id: number;
        date: Date;
        description: string;
        amount: number;
        fromId: number;
        toId: number;
        remarks: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        date: Date;
        description: string;
        amount: number;
        fromId: number;
        toId: number;
        remarks: string;
    }>;
}
