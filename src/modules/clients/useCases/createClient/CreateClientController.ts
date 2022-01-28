import { Request, Response } from "express";
import { CreateClientUseCase } from "./CreateClientUseCase";

export class CreateClientController {
  async handle(req: Request, res: Response) {
    const createClient = new CreateClientUseCase();

    const { username, password } = req.body;

    const client = await createClient.execute({
      username,
      password,
    });

    return res.json(client);
  }
}
