// import { diskStorage } from 'multer';
// import { v4 as uuidv4 } from 'uuid';
// import { extname } from 'path';
// import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';

// export const multerConfig: MulterOptions = {
//   storage: diskStorage({
//     destination: './uploads',
//     filename: (req, file, callback) => {
//       const uniqueSuffix = uuidv4();
//       const ext = extname(file.originalname);
//       callback(null, `${uniqueSuffix}${ext}`);
//     },
//   }),
//   limits: {
//     fileSize: 5 * 1024 * 1024, // 5MB max file size
//   },
// };

import { diskStorage, memoryStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { extname } from 'path';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';

export const multerConfig: MulterOptions = {
  storage: diskStorage({
    destination: './uploads',
    filename: (req, file, callback) => {
      const uniqueSuffix = uuidv4();
      const ext = extname(file.originalname);
      callback(null, `${uniqueSuffix}${ext}`);
    },
  }), // Use memory storage to get the file buffer
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB max file size
  },
};
