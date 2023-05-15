import { ApiProperty, ApiTags } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateArticleDto {
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(5)
  @IsString()
  title: string;

  @IsOptional()
  @ApiProperty({ required: false })
  @MaxLength(300)
  @IsNotEmpty()
  @IsString()
  description?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  body: string;

  @IsOptional()
  @ApiProperty({ required: false, default: false })
  @IsBoolean()
  published?: boolean = false;
}
