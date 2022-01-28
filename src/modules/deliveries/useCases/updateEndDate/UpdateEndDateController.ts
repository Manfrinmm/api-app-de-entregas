import { Request, Response } from "express";
import { UpdateEndDateUseCase } from "./UpdateEndDateUseCase";

export class UpdateEndDateController {
  async handle(req: Request, res: Response) {
    const updateEndDate = new UpdateEndDateUseCase();

    const { id_delivery } = req.params;
    const { id_deliveryman } = req;

    const delivery = await updateEndDate.execute({
      id_delivery,
      id_deliveryman,
    });

    return res.json(delivery);
  }
}
