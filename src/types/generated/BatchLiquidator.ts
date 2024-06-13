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

export type BalanceStruct = { token: AddressLike; balance: BigNumberish };

export type BalanceStructOutput = [token: string, balance: bigint] & {
  token: string;
  balance: bigint;
};

export type PathOptionStruct = {
  target: AddressLike;
  option: BigNumberish;
  totalOptions: BigNumberish;
};

export type PathOptionStructOutput = [
  target: string,
  option: bigint,
  totalOptions: bigint
] & { target: string; option: bigint; totalOptions: bigint };

export type RouterLiqParamsStruct = {
  creditAccount: AddressLike;
  expectedBalances: BalanceStruct[];
  leftoverBalances: BalanceStruct[];
  connectors: AddressLike[];
  slippage: BigNumberish;
  pathOptions: PathOptionStruct[];
  iterations: BigNumberish;
  force: boolean;
};

export type RouterLiqParamsStructOutput = [
  creditAccount: string,
  expectedBalances: BalanceStructOutput[],
  leftoverBalances: BalanceStructOutput[],
  connectors: string[],
  slippage: bigint,
  pathOptions: PathOptionStructOutput[],
  iterations: bigint,
  force: boolean
] & {
  creditAccount: string;
  expectedBalances: BalanceStructOutput[];
  leftoverBalances: BalanceStructOutput[];
  connectors: string[];
  slippage: bigint;
  pathOptions: PathOptionStructOutput[];
  iterations: bigint;
  force: boolean;
};

export type MultiCallStruct = { target: AddressLike; callData: BytesLike };

export type MultiCallStructOutput = [target: string, callData: string] & {
  target: string;
  callData: string;
};

export type LiquidationResultStruct = {
  creditAccount: AddressLike;
  pathFound: boolean;
  executed: boolean;
  profit: BigNumberish;
  calls: MultiCallStruct[];
};

export type LiquidationResultStructOutput = [
  creditAccount: string,
  pathFound: boolean,
  executed: boolean,
  profit: bigint,
  calls: MultiCallStructOutput[]
] & {
  creditAccount: string;
  pathFound: boolean;
  executed: boolean;
  profit: bigint;
  calls: MultiCallStructOutput[];
};

export type LiqParamsStruct = {
  creditFacade: AddressLike;
  creditAccount: AddressLike;
  calls: MultiCallStruct[];
};

export type LiqParamsStructOutput = [
  creditFacade: string,
  creditAccount: string,
  calls: MultiCallStructOutput[]
] & {
  creditFacade: string;
  creditAccount: string;
  calls: MultiCallStructOutput[];
};

export interface BatchLiquidatorInterface extends Interface {
  getFunction(
    nameOrSignature: "estimateBatch" | "liquidateBatch" | "router"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "estimateBatch",
    values: [RouterLiqParamsStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidateBatch",
    values: [LiqParamsStruct[], AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "router", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "estimateBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidateBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "router", data: BytesLike): Result;
}

export interface BatchLiquidator extends BaseContract {
  connect(runner?: ContractRunner | null): BatchLiquidator;
  waitForDeployment(): Promise<this>;

  interface: BatchLiquidatorInterface;

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

  estimateBatch: TypedContractMethod<
    [params: RouterLiqParamsStruct[]],
    [LiquidationResultStructOutput[]],
    "nonpayable"
  >;

  liquidateBatch: TypedContractMethod<
    [params: LiqParamsStruct[], to: AddressLike],
    [boolean[]],
    "nonpayable"
  >;

  router: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "estimateBatch"
  ): TypedContractMethod<
    [params: RouterLiqParamsStruct[]],
    [LiquidationResultStructOutput[]],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "liquidateBatch"
  ): TypedContractMethod<
    [params: LiqParamsStruct[], to: AddressLike],
    [boolean[]],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "router"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}