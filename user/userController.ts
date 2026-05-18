import { Request, Response } from "express";
import { UserService } from "./userService";
import { ObjectId } from "mongodb";

export const listUsers = (userService: UserService) => async (req: Request, res: Response) => {
    const userData = await userService.getUsers();
    return res.status(200).json({ success: true, data: userData });
}

export const getUserById = (userService: UserService) => async (req: Request, res: Response) => {
       if (!ObjectId.isValid(req.params.id as string)) {
    return res.status(400).json({ success: false, message: 'Please provide a valid product Id' });

  }
  const user = await userService.getUserById(new ObjectId(req.params.id as string));
  if (!user) {
    res.status(404).json({ success: false, message: 'Product not found' });
    return;
  }
  res.json({ success: true, data: user });
}