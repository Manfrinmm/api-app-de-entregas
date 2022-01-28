import { Request, Response } from "express";
import { FindAllDeliveriesUseCase } from "./FindAllDeliveriesUseCase";

export class FindAllDeliveriesController {
  async handle(req: Request, res: Response) {
    const findAllDeliveries = new FindAllDeliveriesUseCase();

    const { id_client } = req;

    const deliveries = await findAllDeliveries.execute(id_client);

    return res.json(deliveries);
  }
}
