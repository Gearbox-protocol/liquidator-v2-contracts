/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "./common";

export type RevocationPairStruct = { spender: AddressLike; token: AddressLike };

export type RevocationPairStructOutput = [spender: string, token: string] & {
  spender: string;
  token: string;
};

export type BalanceDeltaStruct = { token: AddressLike; amount: BigNumberish };

export type BalanceDeltaStructOutput = [token: string, amount: bigint] & {
  token: string;
  amount: bigint;
};

export interface ICreditFacadeV3MulticallInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addCollateral"
      | "addCollateralWithPermit"
      | "compareBalances"
      | "decreaseDebt"
      | "disableToken"
      | "enableToken"
      | "increaseDebt"
      | "onDemandPriceUpdate"
      | "revokeAdapterAllowances"
      | "setFullCheckParams"
      | "storeExpectedBalances"
      | "updateQuota"
      | "withdrawCollateral"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addCollateral",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addCollateralWithPermit",
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "compareBalances",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "decreaseDebt",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "disableToken",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "enableToken",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseDebt",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "onDemandPriceUpdate",
    values: [AddressLike, boolean, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeAdapterAllowances",
    values: [RevocationPairStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setFullCheckParams",
    values: [BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "storeExpectedBalances",
    values: [BalanceDeltaStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "updateQuota",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawCollateral",
    values: [AddressLike, BigNumberish, AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "addCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addCollateralWithPermit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "compareBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decreaseDebt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "disableToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enableToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseDebt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onDemandPriceUpdate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revokeAdapterAllowances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFullCheckParams",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "storeExpectedBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateQuota",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawCollateral",
    data: BytesLike
  ): Result;
}

export interface ICreditFacadeV3Multicall extends BaseContract {
  connect(runner?: ContractRunner | null): ICreditFacadeV3Multicall;
  waitForDeployment(): Promise<this>;

  interface: ICreditFacadeV3MulticallInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  addCollateral: TypedContractMethod<
    [token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  addCollateralWithPermit: TypedContractMethod<
    [
      token: AddressLike,
      amount: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  compareBalances: TypedContractMethod<[], [void], "nonpayable">;

  decreaseDebt: TypedContractMethod<
    [amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  disableToken: TypedContractMethod<[token: AddressLike], [void], "nonpayable">;

  enableToken: TypedContractMethod<[token: AddressLike], [void], "nonpayable">;

  increaseDebt: TypedContractMethod<
    [amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  onDemandPriceUpdate: TypedContractMethod<
    [token: AddressLike, reserve: boolean, data: BytesLike],
    [void],
    "nonpayable"
  >;

  revokeAdapterAllowances: TypedContractMethod<
    [revocations: RevocationPairStruct[]],
    [void],
    "nonpayable"
  >;

  setFullCheckParams: TypedContractMethod<
    [collateralHints: BigNumberish[], minHealthFactor: BigNumberish],
    [void],
    "nonpayable"
  >;

  storeExpectedBalances: TypedContractMethod<
    [balanceDeltas: BalanceDeltaStruct[]],
    [void],
    "nonpayable"
  >;

  updateQuota: TypedContractMethod<
    [token: AddressLike, quotaChange: BigNumberish, minQuota: BigNumberish],
    [void],
    "nonpayable"
  >;

  withdrawCollateral: TypedContractMethod<
    [token: AddressLike, amount: BigNumberish, to: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addCollateral"
  ): TypedContractMethod<
    [token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "addCollateralWithPermit"
  ): TypedContractMethod<
    [
      token: AddressLike,
      amount: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "compareBalances"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "decreaseDebt"
  ): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "disableToken"
  ): TypedContractMethod<[token: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "enableToken"
  ): TypedContractMethod<[token: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "increaseDebt"
  ): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "onDemandPriceUpdate"
  ): TypedContractMethod<
    [token: AddressLike, reserve: boolean, data: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "revokeAdapterAllowances"
  ): TypedContractMethod<
    [revocations: RevocationPairStruct[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setFullCheckParams"
  ): TypedContractMethod<
    [collateralHints: BigNumberish[], minHealthFactor: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "storeExpectedBalances"
  ): TypedContractMethod<
    [balanceDeltas: BalanceDeltaStruct[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateQuota"
  ): TypedContractMethod<
    [token: AddressLike, quotaChange: BigNumberish, minQuota: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdrawCollateral"
  ): TypedContractMethod<
    [token: AddressLike, amount: BigNumberish, to: AddressLike],
    [void],
    "nonpayable"
  >;

  filters: {};
}