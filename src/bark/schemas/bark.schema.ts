import { User } from "src/user/schemas/user.schema";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as schema } from 'mongoose';

export type BarkDocument = HydratedDocument<Bark>;

@Schema()
export class Bark {

    @Prop({type: schema.Types.ObjectId, ref:  'User'})
    user: User;
    
    @Prop()
    content: string;
    
    @Prop({type: [{type: schema.Types.ObjectId, ref: 'User'}]})
    likes: User[];
    
    @Prop({type: [{type: schema.Types.ObjectId, ref: 'Bark'}]})
    comments: Bark[];
}

export const BarkSchema = SchemaFactory.createForClass(Bark);