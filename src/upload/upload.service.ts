import { Injectable, BadRequestException } from '@nestjs/common';
import { Express } from 'express';
import * as fs from 'fs';
import * as path from 'path';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UploadService {
  constructor(private readonly prismaService: PrismaService) {}
  uploadFile(file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }
    let fileType: string;
    if (file.mimetype.startsWith('image')) {
      fileType = 'image';
    } else if (file.mimetype.startsWith('application')) {
      fileType = 'doc';
    } else {
      fileType = 'other';
    }
    return this.prismaService.file.create({
      data: {
        path: file.path,
        type: fileType,
        userId: 1,
      },
    });
  }
}
