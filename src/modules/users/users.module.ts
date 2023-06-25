import { Module } from '@nestjs/common';
import { Connection } from 'mongoose';
import { DATABASE_CONNECTION } from 'src/config/constants';
import { User, UserSchema } from './schemas/user.schema';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  providers: [
    {
      provide: User.name,
      useFactory: (connection: Connection) =>
        connection.model(User.name, UserSchema),
      inject: [DATABASE_CONNECTION],
    },
    UsersService,
  ],
})
export class UsersModule {}
