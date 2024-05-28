export interface IJwt {
  sign: (payload: string | object | Buffer) => string;
  verify: (token: string) => Promise<string | object>;
}
