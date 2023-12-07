import { Response, Request, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { UserService } from "../services/userService";
import { User } from "../models/User";
import dotenv from "dotenv"
dotenv.config()

const jwt_token = process.env.JWT_TOKEN;

export interface AuthRequest extends Request {
  user?: User | null;
}

export abstract class Auth {
  static async ensureAuth(req: AuthRequest, res: Response, next: NextFunction) {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) {
      return res.status(401).json({ error: "Token not found" });
    }

    const token = authorizationHeader.split(" ")[1];

    jwt.verify(token, jwt_token!, async (err, decoded) => {
      if (err || !decoded)
        return res.status(401).json({
          message: "Não autorizado: token inválido",
        });

      const user = await UserService.findByEmail((decoded as JwtPayload).email);

      if (!user) {
        return res.status(401).json({
          message: "Não autorizado: user not found",
        });
      }

      req.user = user;

      next();
    });
  }
}
