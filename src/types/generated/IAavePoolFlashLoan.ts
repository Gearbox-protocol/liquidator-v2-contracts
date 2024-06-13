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

export interface IAavePoolFlashLoanInterface extends Interface {
  getFunction(
    nameOrSignature: "flashLoan" | "flashLoanSimple"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "flashLoan",
    values: [
      AddressLike,
      AddressLike[],
      BigNumberish[],
      BigNumberish[],
      AddressLike,
      BytesLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "flashLoanSimple",
    values: [AddressLike, AddressLike, BigNumberish, BytesLike, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "flashLoan", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "flashLoanSimple",
    data: BytesLike
  ): Result;
}

export interface IAavePoolFlashLoan extends BaseContract {
  connect(runner?: ContractRunner | null): IAavePoolFlashLoan;
  waitForDeployment(): Promise<this>;

  interface: IAavePoolFlashLoanInterface;

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

  flashLoan: TypedContractMethod<
    [
      receiverAddress: AddressLike,
      assets: AddressLike[],
      amounts: BigNumberish[],
      interestRateModes: BigNumberish[],
      onBehalfOf: AddressLike,
      params: BytesLike,
      referralCode: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  flashLoanSimple: TypedContractMethod<
    [
      receiverAddress: AddressLike,
      asset: AddressLike,
      amount: BigNumberish,
      params: BytesLike,
      referralCode: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "flashLoan"
  ): TypedContractMethod<
    [
      receiverAddress: AddressLike,
      assets: AddressLike[],
      amounts: BigNumberish[],
      interestRateModes: BigNumberish[],
      onBehalfOf: AddressLike,
      params: BytesLike,
      referralCode: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "flashLoanSimple"
  ): TypedContractMethod<
    [
      receiverAddress: AddressLike,
      asset: AddressLike,
      amount: BigNumberish,
      params: BytesLike,
      referralCode: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  filters: {};
}