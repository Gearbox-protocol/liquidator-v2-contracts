/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  FunctionFragment,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
} from "../common";

export interface ICreditManagerV3EventsInterface extends Interface {
  getEvent(nameOrSignatureOrTopic: "SetCreditConfigurator"): EventFragment;
}

export namespace SetCreditConfiguratorEvent {
  export type InputTuple = [newConfigurator: AddressLike];
  export type OutputTuple = [newConfigurator: string];
  export interface OutputObject {
    newConfigurator: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ICreditManagerV3Events extends BaseContract {
  connect(runner?: ContractRunner | null): ICreditManagerV3Events;
  waitForDeployment(): Promise<this>;

  interface: ICreditManagerV3EventsInterface;

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

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getEvent(
    key: "SetCreditConfigurator"
  ): TypedContractEvent<
    SetCreditConfiguratorEvent.InputTuple,
    SetCreditConfiguratorEvent.OutputTuple,
    SetCreditConfiguratorEvent.OutputObject
  >;

  filters: {
    "SetCreditConfigurator(address)": TypedContractEvent<
      SetCreditConfiguratorEvent.InputTuple,
      SetCreditConfiguratorEvent.OutputTuple,
      SetCreditConfiguratorEvent.OutputObject
    >;
    SetCreditConfigurator: TypedContractEvent<
      SetCreditConfiguratorEvent.InputTuple,
      SetCreditConfiguratorEvent.OutputTuple,
      SetCreditConfiguratorEvent.OutputObject
    >;
  };
}