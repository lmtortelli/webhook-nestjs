export class GenerateSuccessEvent {
  constructor(public orderId: string, public userId: string, public authorizationCode: string) {}
}
