import { User } from "src/user/schemas/user.schema";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PostDocument = HydratedDocument<Post>;

@Schema()
export class Post {

    @Prop()
    user: User;
    
    @Prop()
    content: string;
    
    @Prop()
    likes: User[];
    
    @Prop()
    comments: Post[];
}

export const PostSchema = SchemaFactory.createForClass(Post);