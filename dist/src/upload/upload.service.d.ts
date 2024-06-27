/// <reference types="multer" />
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UploadService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    uploadFile(file: Express.Multer.File): import(".prisma/client").Prisma.Prisma__FileClient<{
        id: number;
        path: string;
        type: string;
        userId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
