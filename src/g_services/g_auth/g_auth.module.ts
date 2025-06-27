import { Module } from '@nestjs/common';
import { GoogleAuthProvider } from './g_auth.provider';


@Module({
  providers: [GoogleAuthProvider],
  exports: [GoogleAuthProvider]
})
export class GAuthModule {}
