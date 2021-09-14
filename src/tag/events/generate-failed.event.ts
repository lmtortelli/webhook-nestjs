import { datatype } from 'faker/locale/pt_BR';

export class GenerateFailedEvent { 
  constructor(
    public orderId: string,
    public userId: string,
    public message?: string
  ) { 
    this.message = this.fakeMessage()
  }
  
  private fakeMessage(): string { 
    return datatype.string(30)
  }
}