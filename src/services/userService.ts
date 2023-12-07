import { User } from "../models";
import { UserCreationAttributes } from "../models/User";

export abstract class UserService {
  static async findByEmail(email: string) {
    const users = await User.findAll()

    const user = await User.findOne({
      where: {
        email,
      },
    });

    return user;
  }

  static async createUser({ email, cod }: UserCreationAttributes) {
    const user = await User.create({ email, cod });

    return user;
  }
}
