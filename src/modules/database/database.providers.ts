import * as mongoose from 'mongoose';
import * as process from 'process';
import { DATABASE_CONNECTION } from '../../config/constants';

export const mongoProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(
        `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PW}@${process.env.MONGODB_PROJECT}.mongodb.net/${process.env.MONGODB_DBNAME}`,
      ),
  },
];
