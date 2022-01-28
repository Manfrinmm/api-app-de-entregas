import { Request, Response } from "express";
import { FindAllDeliveriesUseCase } from "./FindAllDeliveriesUseCase";

export class FindAllDeliveriesDeliverymanController {
  async handle(req: Request, res: Response) {
    const findAllDeliveries = new FindAllDeliveriesUseCase();

    const { id_deliveryman } = req;

    const deliveries = await findAllDeliveries.execute(id_deliveryman);

    return res.json(deliveries);
  }
}
