import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  dob: Date;

  @Prop()
  address: string;

  @Prop()
  mobileNumber: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
