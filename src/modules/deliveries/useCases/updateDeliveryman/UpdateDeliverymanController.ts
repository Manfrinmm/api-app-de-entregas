import { Request, Response } from "express";
import { UpdateDeliverymanUseCase } from "./UpdateDeliverymanUseCase";

export class UpdateDeliverymanController {
  async handle(req: Request, res: Response) {
    const updateDeliveryman = new UpdateDeliverymanUseCase();

    const { id_delivery } = req.params;
    const { id_deliveryman } = req;

    const delivery = await updateDeliveryman.execute({
      id_delivery,
      id_deliveryman,
    });

    return res.json(delivery);
  }
}
