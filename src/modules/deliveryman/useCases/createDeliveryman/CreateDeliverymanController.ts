import { Request, Response } from "express";
import { CreateDeliverymanUseCase } from "./CreateDeliverymanUseCase";

export class CreateDeliverymanController {
  async handle(req: Request, res: Response) {
    const createDeliveryman = new CreateDeliverymanUseCase();

    const { username, password } = req.body;

    const client = await createDeliveryman.execute({
      username,
      password,
    });

    return res.json(client);
  }
}
