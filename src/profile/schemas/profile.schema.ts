import { Bark } from "src/bark/schemas/bark.schema";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as schema } from 'mongoose';
import { User } from "src/user/schemas/user.schema";

export type ProfileDocument = HydratedDocument<Profile>;

@Schema()
export class Profile {
  @Prop({type: schema.Types.ObjectId, ref: 'User'})
  user: User;

  @Prop()
  name: string;

  @Prop()
  profilePicture: ImageData;
  
  @Prop()
  description: string;
  
  @Prop({ type: [{ type: schema.Types.ObjectId, ref: 'Bark' }] })
  posts: Bark[];
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);