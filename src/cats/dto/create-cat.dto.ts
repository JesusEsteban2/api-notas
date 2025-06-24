import { IsInt, IsString, MinLength } from 'class-validator';

export class CreateCatDto {
  @IsString()
  name: string;
  @IsInt()
  age: number;
  @IsString()
  @MinLength(2)
  breed: string;
}
