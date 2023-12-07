import { Request, Response } from "express";
import { supabase } from "../auth/supabase";
import { UserService } from "../services/userService";

export abstract class AuthController {
  static async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return res.status(401).json({ error: error.message });
    }

    return res.status(200).json(data);
  }

  static async register(req: Request, res: Response) {
    const { email, cod, password } = req.body;

    try {
      await UserService.createUser({ email, cod });

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) return res.status(401).json({ error: error.message });

      return res.status(200).json(data);
    } catch (error) {
      if (error instanceof Error) return res.status(401).json({ error: error.message });
    }
  }

  static async getUserAuthenticated() {
    supabase.auth.getSession();
  }
}
