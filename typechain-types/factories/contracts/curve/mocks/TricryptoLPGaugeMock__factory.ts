/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  TricryptoLPGaugeMock,
  TricryptoLPGaugeMockInterface,
} from "../../../../contracts/curve/mocks/TricryptoLPGaugeMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_lpToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_rewardToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "claimable_tokens",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "crv_token",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lpToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60803461008d57601f61061c38819003918201601f19168301916001600160401b0383118484101761009257808492604094855283398101031261008d57610052602061004b836100a8565b92016100a8565b600080546001600160a01b039384166001600160a01b0319918216179091556001805492909316911617905560405161055f90816100bd8239f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b038216820361008d5756fe608060408181526004918236101561001657600080fd5b600092833560e01c91826333134583146102915750816338d07436146102255781635fcbd285146101fd57816370a082311461015f57816376d8b1171461013657816383df67471461009d575063f7c618c11461007257600080fd5b3461009957816003193601126100995760015490516001600160a01b039091168152602090f35b5080fd5b838334610099576060366003190112610099576001600160a01b03602435818116036101325760443580151503610132578254168151916323b872dd60e01b6020840152336024840152306044840152843560648401526064835260a083019083821067ffffffffffffffff83111761011f5761011c94955052610310565b80f35b634e487b7160e01b855260418652602485fd5b8280fd5b50503461009957816003193601126100995760015490516001600160a01b039091168152602090f35b83833461009957602092836003193601126101325761017c6102bd565b50825482516370a0823160e01b815230928101929092528490829060249082906001600160a01b03165afa9283156101f25780936101bd575b505051908152f35b909192508382813d83116101eb575b6101d681836102d8565b810103126101e85750519083806101b5565b80fd5b503d6101cc565b8251903d90823e3d90fd5b505034610099578160031936011261009957905490516001600160a01b039091168152602090f35b838334610099578060031936011261009957602435801515036100995760018060a01b0382541681519163a9059cbb60e01b60208401523360248401528435604484015260448352608083019083821067ffffffffffffffff83111761011f5761011c94955052610310565b849034610099576020366003190112610099576020906102af6102bd565b50678ac7230489e800008152f35b600435906001600160a01b03821682036102d357565b600080fd5b90601f8019910116810190811067ffffffffffffffff8211176102fa57604052565b634e487b7160e01b600052604160045260246000fd5b60018060a01b0316906040516040810167ffffffffffffffff90828110828211176102fa576040526020938483527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564858401526000808587829751910182855af1903d1561044a573d92831161043657906103ab9392916040519261039e88601f19601f84011601856102d8565b83523d868885013e610455565b8051806103b9575b50505050565b8184918101031261009957820151908115918215036101e857506103df578080806103b3565b6084906040519062461bcd60e51b82526004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152fd5b634e487b7160e01b85526041600452602485fd5b906103ab9392506060915b919290156104b75750815115610469575090565b3b156104725790565b60405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b8251909150156104ca5750805190602001fd5b6040519062461bcd60e51b82528160208060048301528251908160248401526000935b828510610510575050604492506000838284010152601f80199101168101030190fd5b84810182015186860160440152938101938593506104ed56fea264697066735822122019c94281bfae9225de8bc686a3ecea2f7edb18e8df7b9903e786e673674c688964736f6c63430008120033";

type TricryptoLPGaugeMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TricryptoLPGaugeMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TricryptoLPGaugeMock__factory extends ContractFactory {
  constructor(...args: TricryptoLPGaugeMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _lpToken: PromiseOrValue<string>,
    _rewardToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TricryptoLPGaugeMock> {
    return super.deploy(
      _lpToken,
      _rewardToken,
      overrides || {}
    ) as Promise<TricryptoLPGaugeMock>;
  }
  override getDeployTransaction(
    _lpToken: PromiseOrValue<string>,
    _rewardToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_lpToken, _rewardToken, overrides || {});
  }
  override attach(address: string): TricryptoLPGaugeMock {
    return super.attach(address) as TricryptoLPGaugeMock;
  }
  override connect(signer: Signer): TricryptoLPGaugeMock__factory {
    return super.connect(signer) as TricryptoLPGaugeMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TricryptoLPGaugeMockInterface {
    return new utils.Interface(_abi) as TricryptoLPGaugeMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TricryptoLPGaugeMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TricryptoLPGaugeMock;
  }
}
