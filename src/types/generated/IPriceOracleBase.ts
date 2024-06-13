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

export interface IPriceOracleBaseInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "convert"
      | "convertFromUSD"
      | "convertToUSD"
      | "getPrice"
      | "priceFeeds"
      | "version"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "convert",
    values: [BigNumberish, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "convertFromUSD",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "convertToUSD",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getPrice",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "priceFeeds",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(functionFragment: "convert", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "convertFromUSD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "convertToUSD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "priceFeeds", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
}

export interface IPriceOracleBase extends BaseContract {
  connect(runner?: ContractRunner | null): IPriceOracleBase;
  waitForDeployment(): Promise<this>;

  interface: IPriceOracleBaseInterface;

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

  convert: TypedContractMethod<
    [amount: BigNumberish, tokenFrom: AddressLike, tokenTo: AddressLike],
    [bigint],
    "view"
  >;

  convertFromUSD: TypedContractMethod<
    [amount: BigNumberish, token: AddressLike],
    [bigint],
    "view"
  >;

  convertToUSD: TypedContractMethod<
    [amount: BigNumberish, token: AddressLike],
    [bigint],
    "view"
  >;

  getPrice: TypedContractMethod<[token: AddressLike], [bigint], "view">;

  priceFeeds: TypedContractMethod<[token: AddressLike], [string], "view">;

  version: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "convert"
  ): TypedContractMethod<
    [amount: BigNumberish, tokenFrom: AddressLike, tokenTo: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "convertFromUSD"
  ): TypedContractMethod<
    [amount: BigNumberish, token: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "convertToUSD"
  ): TypedContractMethod<
    [amount: BigNumberish, token: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getPrice"
  ): TypedContractMethod<[token: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "priceFeeds"
  ): TypedContractMethod<[token: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "version"
  ): TypedContractMethod<[], [bigint], "view">;

  filters: {};
}