import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateParticipanteDto {
  id: number;

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  imagem: string;

  @IsNotEmpty()
  @IsString()
  data_nascimento: string;

  @IsNotEmpty()
  @IsString()
  staff: string;

  @IsNotEmpty()
  @IsInt()
  filmeid: number;
}
