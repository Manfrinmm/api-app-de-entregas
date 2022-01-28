import { Request, Response } from "express";
import { CreateDeliveryUseCase } from "./CreateDeliveryUseCase";

export class CreateDeliveryController {
  async handle(req: Request, res: Response) {
    const createDelivery = new CreateDeliveryUseCase();

    const { item_name } = req.body;
    const { id_client } = req;

    const client = await createDelivery.execute({
      item_name,
      id_client,
    });

    return res.json(client);
  }
}
