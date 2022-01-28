import { Request, Response } from "express";
import { AuthenticateDeliverymanUseCase } from "./AuthenticateDeliverymanUseCase";

export class AuthenticateDeliverymanController {
  async handle(req: Request, res: Response) {
    const authenticateDeliveryman = new AuthenticateDeliverymanUseCase();

    const { username, password } = req.body;

    const authenticate = await authenticateDeliveryman.execute({
      username,
      password,
    });

    return res.json(authenticate);
  }
}
