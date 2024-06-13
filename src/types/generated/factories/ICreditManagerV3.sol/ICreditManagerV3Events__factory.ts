/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ICreditManagerV3Events,
  ICreditManagerV3EventsInterface,
} from "../../ICreditManagerV3.sol/ICreditManagerV3Events";

const _abi = [
  {
    type: "event",
    name: "SetCreditConfigurator",
    inputs: [
      {
        name: "newConfigurator",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
] as const;

export class ICreditManagerV3Events__factory {
  static readonly abi = _abi;
  static createInterface(): ICreditManagerV3EventsInterface {
    return new Interface(_abi) as ICreditManagerV3EventsInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ICreditManagerV3Events {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as ICreditManagerV3Events;
  }
}