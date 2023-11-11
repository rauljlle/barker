import { PartialType } from '@nestjs/mapped-types';
import { CreateBarkDto } from './create-bark.dto';

export class UpdateBarkDto extends PartialType(CreateBarkDto) {}
