import { Request, Response } from "express";

export const getAllCollection: any = async (req: Request, res: Response) => {
  return res.status(201).send({ msg: "NFT Success" });
};

