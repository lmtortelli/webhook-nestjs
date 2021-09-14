import { Controller, Post, Body } from '@nestjs/common';

@Controller('callback')
export class CallbackController {
  @Post('/success')
  public success(@Body() body) {
    console.log('---SUCCESS CALLBACK---')
    console.log(body)
  }

  @Post('/failed')
  public failed(@Body() body) {
    console.log('---FAILED CALLBACK---')
    console.log(body)
  }
}
