/// <reference types="multer" />
import { UploadService } from './upload.service';
export declare class UploadController {
    private readonly uploadService;
    constructor(uploadService: UploadService);
    uploadImage(file: Express.Multer.File): Promise<{
        id: number;
        path: string;
        type: string;
        userId: number;
    }>;
    uploadDocument(file: Express.Multer.File): Promise<{
        id: number;
        path: string;
        type: string;
        userId: number;
    }>;
}
