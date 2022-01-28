import { Request, Response } from "express";
import { AuthenticateClientUseCase } from "./AuthenticateClientUseCase";

export class AuthenticateClientController {
  async handle(req: Request, res: Response) {
    const authenticateClient = new AuthenticateClientUseCase();

    const { username, password } = req.body;

    const authenticate = await authenticateClient.execute({
      username,
      password,
    });

    return res.json(authenticate);
  }
}
