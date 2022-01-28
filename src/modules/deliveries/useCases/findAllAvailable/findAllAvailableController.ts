import { Request, Response } from "express";
import { findAllAvailableUseCase } from "./findAllAvailableUseCase";

export class FindAllAvailableController {
  async handle(req: Request, res: Response) {
    const findAllAvailable = new findAllAvailableUseCase();

    const deliveries = await findAllAvailable.execute();

    return res.json(deliveries);
  }
}
