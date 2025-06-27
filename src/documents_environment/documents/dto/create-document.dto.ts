import { IsOptional, IsString } from "class-validator";

export class CreateDocumentDto {
  @IsString()
  title: string;

  @IsString()
  excerpt: string;

  @IsString()
  content: string;

  @IsOptional()
  @IsString()
  type?: string;
  
  @IsOptional()
  @IsString()
  online_url?: string;
  
  @IsOptional()
  @IsString()
  drive_url?: string;
}
