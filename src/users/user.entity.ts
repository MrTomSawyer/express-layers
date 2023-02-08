import {hash} from 'bcryptjs';

export class User {
  private _password: string;

  constructor(
    private readonly _email: string,
    private readonly _name: string
  ) {}

  get email(): string {
    return this.email;
  }

  get name(): string {
    return this.name;
  }

  get password(): string {
    return this._password;
  }

  public async setPassword(password: string): Promise<void> {
    this._password = await hash(password, 10);
  }
}