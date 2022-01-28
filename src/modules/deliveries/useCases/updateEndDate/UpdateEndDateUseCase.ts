import { prisma } from "../../../../database/prismaClient";

interface IUpdateDeliveryman {
  id_delivery: string;
  id_deliveryman: string;
}

export class UpdateEndDateUseCase {
  async execute({ id_delivery, id_deliveryman }: IUpdateDeliveryman) {
    const delivery = await prisma.deliveries.updateMany({
      where: {
        id: id_delivery,
        id_deliveryman,
      },
      data: {
        end_at: new Date(),
      },
    });

    if (delivery.count == 1) {
      return { message: "Entrega registrada!" };
    } else {
      return { message: "Não foi possível registrar a entrega!" };
    }
  }
}
