import { Request, Response } from "express";
import { AuthRequest } from "../middleware/auth";
import { PdvService } from "../services/pdvService";

export abstract class PdvController {
  static async get(req: AuthRequest, res: Response) {
    const { cod } = req.user!;

    try {
      const pdvs = await PdvService.get(cod);
      res.status(200).json(pdvs);
    } catch (err) {
      if (err instanceof Error) res.status(404).json({ error: err.message });
    }
  }

  static async create(req: Request, res: Response) {
    const { customerCod, imgUrl1, imgUrl2, approved, returnDesc } = req.body;

    try {
      const pdv = await PdvService.create({ customerCod, imgUrl1, imgUrl2, approved, returnDesc });
      res.status(200).json(pdv);
    } catch (err) {
      if (err instanceof Error) res.status(404).json({ error: err.message });
    }
  }

  static async delete(req: AuthRequest, res: Response) {
    const { id } = req.params;

    try {
      await PdvService.delete(Number(id));
      res.status(200).send();
    } catch (err) {
      if (err instanceof Error) res.status(404).json({ error: err.message });
    }
  }

  static async update(req: AuthRequest, res: Response) {
    const { customerCod, imgUrl1, imgUrl2, approved, returnDesc } = req.body;
    const { id } = req.params;

    try {
      await PdvService.update(Number(id), { customerCod, imgUrl1, imgUrl2, approved, returnDesc });
      res.status(200).send();
    } catch (err) {
      if (err instanceof Error) res.status(404).json({ error: err.message });
    }
  }
}
