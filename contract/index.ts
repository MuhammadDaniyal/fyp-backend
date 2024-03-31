import { InterfaceAbi } from "ethers";
import { ethers } from "ethers";

interface ContractInfo {
  abi: InterfaceAbi;
  address: string;
}

export async function getContractVariable(
  contractInfo: ContractInfo,
  rpcUrl: string,
  provider: any
) {
  const { abi, address } = contractInfo;
  const contract = new ethers.Contract(address, abi, provider);
  const contractVariable = await contract.someVariable();

  return contractVariable;
}
