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

export type PriceOnDemandStruct = { token: AddressLike; callData: BytesLike };

export type PriceOnDemandStructOutput = [token: string, callData: string] & {
  token: string;
  callData: string;
};

export type TokenPriceInfoStruct = {
  token: AddressLike;
  balance: BigNumberish;
  balanceInUnderlying: BigNumberish;
  liquidationThreshold: BigNumberish;
};

export type TokenPriceInfoStructOutput = [
  token: string,
  balance: bigint,
  balanceInUnderlying: bigint,
  liquidationThreshold: bigint
] & {
  token: string;
  balance: bigint;
  balanceInUnderlying: bigint;
  liquidationThreshold: bigint;
};

export interface PriceHelperInterface extends Interface {
  getFunction(nameOrSignature: "previewTokens"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "previewTokens",
    values: [AddressLike, PriceOnDemandStruct[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "previewTokens",
    data: BytesLike
  ): Result;
}

export interface PriceHelper extends BaseContract {
  connect(runner?: ContractRunner | null): PriceHelper;
  waitForDeployment(): Promise<this>;

  interface: PriceHelperInterface;

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

  previewTokens: TypedContractMethod<
    [creditAccount: AddressLike, priceUpdates: PriceOnDemandStruct[]],
    [TokenPriceInfoStructOutput[]],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "previewTokens"
  ): TypedContractMethod<
    [creditAccount: AddressLike, priceUpdates: PriceOnDemandStruct[]],
    [TokenPriceInfoStructOutput[]],
    "nonpayable"
  >;

  filters: {};
}