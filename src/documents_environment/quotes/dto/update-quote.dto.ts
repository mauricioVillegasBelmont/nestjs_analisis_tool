import { PartialType } from '@nestjs/swagger';
import { CreateQuoteDto } from 'documents_environment/quotes/dto/create-quote.dto';

export class UpdateQuoteDto extends PartialType(CreateQuoteDto) {}
