import { Customer } from "../models";
import { CustomerCreationAttributes } from "../models/Customers";

export abstract class CostumerService {
  static async get(userCod: string) {
    const customers = Customer.findAll({
      where: {
        userCod,
      },
    });

    return customers;
  }

  static async create({ razaoSocial, cidade, logradouro, numero, userCod }: CustomerCreationAttributes) {
    const customer = Customer.create({ razaoSocial, cidade, logradouro, numero, userCod });

    return customer;
  }
}
