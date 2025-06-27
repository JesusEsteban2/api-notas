import { IsInt, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateCatDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  name: string;

  @IsInt()
  age: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  breed: string;
}
