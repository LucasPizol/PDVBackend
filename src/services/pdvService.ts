import { PdvCreationAttributes } from "../models/Pdv";
import { Pdv } from "../models";

export abstract class PdvService {
  static async get(customerCod: string) {
    const pdvs = await Pdv.findAll({
      attributes: ["id", ["img_url1", "imgUrl1"], ["img_url2", "imgUrl2"], "approved", "returnDesc"],
      include: {
        association: "customer",
        attributes: ["cod", "razaoSocial", "cidade", "logradouro", "numero"],
        where: {
          user_cod: customerCod,
        },
      },
    });

    return pdvs;
  }

  static async create(params: PdvCreationAttributes) {
    const pdv = await Pdv.create(params);

    return pdv;
  }

  static async delete(id: number) {
    const pdv = await Pdv.destroy({
      where: {
        id,
      },
    });

    return pdv;
  }

  static async update(id: number, params: PdvCreationAttributes) {
    const pdv = await Pdv.update(params, {
      where: {
        id,
      },
    });

    return pdv;
  }
}
