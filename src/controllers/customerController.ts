import { Response } from "express";
import { CostumerService } from "../services/costumerService";
import { AuthRequest } from "../middleware/auth";

export abstract class CustomerController {
  static async get(req: AuthRequest, res: Response) {
    const { cod } = req.user!;

    try {
      const costumers = await CostumerService.get(cod);
      res.status(200).json(costumers);
    } catch (err) {
      if (err instanceof Error) {
        res.status(404).json({ error: err.message });
      }
    }
  }

  static async create(req: AuthRequest, res: Response) {
    const { razaoSocial, cidade, logradouro, numero } = req.body;
    const { cod } = req.user!;

    try {
      const costumers = await CostumerService.create({ razaoSocial, cidade, logradouro, numero, userCod: cod });
      res.status(200).json(costumers);
    } catch (err) {
      if (err instanceof Error) {
        res.status(404).json({ error: err.message });
      }
    }
  }
}
