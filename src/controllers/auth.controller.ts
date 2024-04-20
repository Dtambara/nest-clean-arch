import { Controller, Get } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

@Controller('/sessions')
export class AuthController {
  constructor(private jwt: JwtService) {}

  @Get()
  async handleget() {
    const token = this.jwt.sign({ sub: 'user-id' })
    return token
  }
}
