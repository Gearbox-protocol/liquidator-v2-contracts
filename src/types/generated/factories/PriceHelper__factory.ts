/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { PriceHelper, PriceHelperInterface } from "../PriceHelper";

const _abi = [
  {
    type: "function",
    name: "previewTokens",
    inputs: [
      {
        name: "creditAccount",
        type: "address",
        internalType: "address",
      },
      {
        name: "priceUpdates",
        type: "tuple[]",
        internalType: "struct PriceOnDemand[]",
        components: [
          {
            name: "token",
            type: "address",
            internalType: "address",
          },
          {
            name: "callData",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
    ],
    outputs: [
      {
        name: "results",
        type: "tuple[]",
        internalType: "struct TokenPriceInfo[]",
        components: [
          {
            name: "token",
            type: "address",
            internalType: "address",
          },
          {
            name: "balance",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "balanceInUnderlying",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "liquidationThreshold",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "error",
    name: "PriceFeedDoesNotExistException",
    inputs: [],
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610fbb806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063324d1c8e14610030575b600080fd5b61004361003e366004610b12565b610059565b6040516100509190610c83565b60405180910390f35b60606000836001600160a01b031663c12c21c06040518163ffffffff1660e01b8152600401602060405180830381865afa15801561009b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100bf9190610cf0565b90506000816001600160a01b0316632630c12f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610101573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101259190610cf0565b905061013181856106fc565b6000826001600160a01b0316636f307dc36040518163ffffffff1660e01b8152600401602060405180830381865afa158015610171573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101959190610cf0565b90506000816001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101fb9190610d14565b61020690600a610e33565b6040517ff9f0ca660000000000000000000000000000000000000000000000000000000081526001600160a01b03898116600483015291925060009186169063f9f0ca6690602401602060405180830381865afa15801561026b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061028f9190610e42565b9050600061029d858561088a565b90506000866001600160a01b031663458936f56040518163ffffffff1660e01b8152600401602060405180830381865afa1580156102df573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103039190610d14565b60ff1690506000808267ffffffffffffffff81111561032457610324610aa2565b60405190808252806020026020018201604052801561038957816020015b610376604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b8152602001906001900390816103425790505b50905060005b838110156106205760408051608081018252600080825260208201819052818301819052606082015290517f52c5fe110000000000000000000000000000000000000000000000000000000081526001831b60048201526001600160a01b038c16906352c5fe11906024016040805180830381865afa158015610416573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061043a9190610e5b565b8061ffff169050826000018360600182815250826001600160a01b03166001600160a01b0316815250505080600001516001600160a01b03166370a082318f6040518263ffffffff1660e01b81526004016104a491906001600160a01b0391909116815260200190565b602060405180830381865afa1580156104c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104e59190610e42565b6020808301919091528151604080517f313ce56700000000000000000000000000000000000000000000000000000000815290516001861b936000936001600160a01b03169263313ce56792600480830193928290030181865afa158015610551573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105759190610d14565b60ff16600a0a9050600a8360200151118015610592575081891615155b156106125782516001600160a01b03808d169116036105ba57602083015160408401526105ed565b60006105ca8d856000015161088a565b90508189028b8286602001510202816105e5576105e5610e9c565b046040850152505b8285878151811061060057610600610eb2565b60209081029190910101526001909501945b50505080600101905061038f565b508167ffffffffffffffff81111561063a5761063a610aa2565b60405190808252806020026020018201604052801561069f57816020015b61068c604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b8152602001906001900390816106585790505b50995060005b828110156106ec578181815181106106bf576106bf610eb2565b60200260200101518b82815181106106d9576106d9610eb2565b60209081029190910101526001016106a5565b5050505050505050505092915050565b8051829060005b81811015610883576000836001600160a01b0316639dcb511a86848151811061072e5761072e610eb2565b6020908102919091010151516040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b1681526001600160a01b039091166004820152602401602060405180830381865afa158015610796573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ba9190610cf0565b90506001600160a01b0381166107fc576040517f68d8c6d800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b806001600160a01b0316638736ec4786848151811061081d5761081d610eb2565b6020026020010151602001516040518263ffffffff1660e01b81526004016108459190610ec8565b600060405180830381600087803b15801561085f57600080fd5b505af1158015610873573d6000803e3d6000fd5b5050505050806001019050610703565b5050505050565b6040517fff2998450000000000000000000000000000000000000000000000000000000081526001600160a01b03828116600483015260006024830181905291849183919083169063ff29984590604401602060405180830381865afa1580156108f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061091c9190610cf0565b9050806001600160a01b031663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa925050508015610978575060408051601f3d908101601f1916820190925261097591810190610f35565b60015b610a7a576040517fff2998450000000000000000000000000000000000000000000000000000000081526001600160a01b0385811660048301526001602483015283169063ff29984590604401602060405180830381865afa1580156109e2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a069190610cf0565b90506000816001600160a01b031663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa158015610a48573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a6c9190610f35565b50919650610a829350505050565b509195505050505b505092915050565b6001600160a01b0381168114610a9f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715610adb57610adb610aa2565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715610b0a57610b0a610aa2565b604052919050565b60008060408385031215610b2557600080fd5b8235610b3081610a8a565b915060208381013567ffffffffffffffff80821115610b4e57600080fd5b818601915086601f830112610b6257600080fd5b813581811115610b7457610b74610aa2565b8060051b610b83858201610ae1565b918252838101850191858101908a841115610b9d57600080fd5b86860192505b83831015610c7257823585811115610bba57600080fd5b8601601f196040828e0382011215610bd157600080fd5b610bd9610ab8565b89830135610be681610a8a565b8152604083013588811115610bfa57600080fd5b8084019350508d603f840112610c0f57600080fd5b8983013588811115610c2357610c23610aa2565b610c338b84601f84011601610ae1565b92508083528e6040828601011115610c4a57600080fd5b80604085018c85013760009083018b0152808a01919091528352509186019190860190610ba3565b809750505050505050509250929050565b602080825282518282018190526000919060409081850190868401855b82811015610ce357815180516001600160a01b03168552868101518786015285810151868601526060908101519085015260809093019290850190600101610ca0565b5091979650505050505050565b600060208284031215610d0257600080fd5b8151610d0d81610a8a565b9392505050565b600060208284031215610d2657600080fd5b815160ff81168114610d0d57600080fd5b634e487b7160e01b600052601160045260246000fd5b600181815b80851115610d88578160001904821115610d6e57610d6e610d37565b80851615610d7b57918102915b93841c9390800290610d52565b509250929050565b600082610d9f57506001610e2d565b81610dac57506000610e2d565b8160018114610dc25760028114610dcc57610de8565b6001915050610e2d565b60ff841115610ddd57610ddd610d37565b50506001821b610e2d565b5060208310610133831016604e8410600b8410161715610e0b575081810a610e2d565b610e158383610d4d565b8060001904821115610e2957610e29610d37565b0290505b92915050565b6000610d0d60ff841683610d90565b600060208284031215610e5457600080fd5b5051919050565b60008060408385031215610e6e57600080fd5b8251610e7981610a8a565b602084015190925061ffff81168114610e9157600080fd5b809150509250929050565b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603260045260246000fd5b600060208083528351808285015260005b81811015610ef557858101830151858201604001528201610ed9565b506000604082860101526040601f19601f8301168501019250505092915050565b805169ffffffffffffffffffff81168114610f3057600080fd5b919050565b600080600080600060a08688031215610f4d57600080fd5b610f5686610f16565b9450602086015193506040860151925060608601519150610f7960808701610f16565b9050929550929590935056fea2646970667358221220080644edffef2135b417e097958d7bac9ec111dc7c311a9dbf6277542bca568b64736f6c63430008110033";

type PriceHelperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PriceHelperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PriceHelper__factory extends ContractFactory {
  constructor(...args: PriceHelperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      PriceHelper & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): PriceHelper__factory {
    return super.connect(runner) as PriceHelper__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PriceHelperInterface {
    return new Interface(_abi) as PriceHelperInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): PriceHelper {
    return new Contract(address, _abi, runner) as unknown as PriceHelper;
  }
}