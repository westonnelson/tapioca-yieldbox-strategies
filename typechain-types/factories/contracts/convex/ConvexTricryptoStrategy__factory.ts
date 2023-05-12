/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ConvexTricryptoStrategy,
  ConvexTricryptoStrategyInterface,
} from "../../../contracts/convex/ConvexTricryptoStrategy";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IYieldBox",
        name: "_yieldBox",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_rewadPool",
        type: "address",
      },
      {
        internalType: "address",
        name: "_booster",
        type: "address",
      },
      {
        internalType: "address",
        name: "_zap",
        type: "address",
      },
      {
        internalType: "address",
        name: "_lpGetter",
        type: "address",
      },
      {
        internalType: "address",
        name: "_multiSwapper",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "AmountDeposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "AmountQueued",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "AmountWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_old",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_new",
        type: "uint256",
      },
    ],
    name: "DepositThreshold",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_old",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_new",
        type: "address",
      },
    ],
    name: "LPGetterSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_old",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_new",
        type: "address",
      },
    ],
    name: "MultiSwapper",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "booster",
    outputs: [
      {
        internalType: "contract IConvexBooster",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "cheapWithdrawable",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claimOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "compound",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "compoundAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contractAddress",
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
    name: "currentBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "depositThreshold",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposited",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "description",
    outputs: [
      {
        internalType: "string",
        name: "description_",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "emergencyWithdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lpGetter",
    outputs: [
      {
        internalType: "contract ITricryptoLPGetter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lpToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    name: "pendingOwner",
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
    name: "pid",
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
    inputs: [],
    name: "rewardPool",
    outputs: [
      {
        internalType: "contract IConvexRewardPool",
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
        internalType: "contract IERC20",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "setDepositThreshold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_swapper",
        type: "address",
      },
    ],
    name: "setMultiSwapper",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_lpGetter",
        type: "address",
      },
    ],
    name: "setTricryptoLPGetter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "swapper",
    outputs: [
      {
        internalType: "contract IUniswapV2Router02",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenId",
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
    inputs: [],
    name: "tokenType",
    outputs: [
      {
        internalType: "enum TokenType",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
      {
        internalType: "bool",
        name: "direct",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "renounce",
        type: "bool",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawable",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "wrappedNative",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "yieldBox",
    outputs: [
      {
        internalType: "contract IYieldBox",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "zap",
    outputs: [
      {
        internalType: "contract IConvexZap",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6101a08060405234620004045760e08162002e7d803803809162000024828562000645565b833981010312620004045780516001600160a01b03811681036200040457620000506020830162000669565b916200005f6040820162000669565b916200006e6060830162000669565b926200007d6080840162000669565b6200009960c06200009160a0870162000669565b950162000669565b926080528560a05260018060a01b03199033826000541617600055604051963360007f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a360016002556001600160a01b0390811660c0526003805484168683161790559081166101205285811660e0526004805490921685821617825591909116610100818152633c41a11560e21b8752959160209183919082905afa90811562000412576000916200060d575b5061014081905260e051604051631526fe2760e01b8152600481019290925260c090829060249082906001600160a01b03165afa908115620004125760009162000535575b50516001600160a01b0390811661016052845160405163f7c618c160e01b81529160209183916004918391165afa9081156200041257600091620004f3575b506001600160a01b039081166101805260c05160405163095ea7b360e01b8082528584166004830152600019602483018190529690959093909260209183916044918391600091165af180156200041257620004ac575b50610160516040518581526001600160a01b039283166004820152602481018790529160209183916044918391600091165af18015620004125762000465575b50610160516040518481526001600160a01b039283166004820152602481018690529160209183916044918391600091165af1801562000412576200041e575b506044602092600060018060a01b0361018051166040519687958694855260018060a01b0316600485015260248401525af180156200041257620003cc575b506040516127f091826200068d833960805182818161039001528181610ada0152610d84015260a051826101d4015260c05182818161026e015281816103d001528181610a680152818161164b01528181611dca0152818161204f015281816125560152612692015260e051828181610d3801526123a90152518181816106bd01528181610b6001528181610ec0015281816115ba01526124de0152610120518181816110c401528181611a9b0152611b4d015261014051818181610918015261237701526101605181610f0401526101805181818161018d015281816109a7015261161e0152f35b6020813d60201162000409575b81620003e86020938362000645565b810103126200040457620003fc906200067e565b5038620002e3565b600080fd5b3d9150620003d9565b6040513d6000823e3d90fd5b6020813d6020116200045c575b816200043a6020938362000645565b810103126200040457602092620004536044926200067e565b509250620002a4565b3d91506200042b565b6020813d602011620004a3575b81620004816020938362000645565b8101031262000404576000916200049a6020926200067e565b50915062000264565b3d915062000472565b6020813d602011620004ea575b81620004c86020938362000645565b810103126200040457600091620004e16020926200067e565b50915062000224565b3d9150620004b9565b90506020813d6020116200052c575b81620005116020938362000645565b810103126200040457620005259062000669565b38620001cd565b3d915062000502565b905060c0813d60c01162000604575b816200055360c0938362000645565b8101031262000404576040519060c082016001600160401b03811183821017620005ee57620005e29160a0916040526200058d8162000669565b84526200059d6020820162000669565b6020850152620005b06040820162000669565b6040850152620005c36060820162000669565b6060850152620005d66080820162000669565b6080850152016200067e565b60a0820152386200018e565b634e487b7160e01b600052604160045260246000fd5b3d915062000544565b90506020813d6020116200063c575b816200062b6020938362000645565b810103126200040457513862000149565b3d91506200061c565b601f909101601f19168101906001600160401b03821190821017620005ee57604052565b51906001600160a01b03821682036200040457565b51908115158203620004045756fe608060408181526004918236101561001657600080fd5b600092833560e01c91826306fdde031461129357508163078dfbe71461118257816317d70f7c1461116757816322a58c5d146110f3578163262d6152146110af5781632b3297f91461108657816330fa738c1461106a57816348dcb051146110465781634cce992d14610fe65781634e71e0c814610f335781635018830114610a975781635fcbd28514610eef57816366666aa914610eab578163726c64f214610e835781637284e41614610e0f578163734daaa114610df05781638da5cb5b14610dc8578163afa91cc614610d67578163c6def07614610d23578163ce845d1d14610a97578163db2e21bc14610b09578163de40657714610ac5578163e30c397814610a9c578163e3575f0514610a97578163eb6d3a1114610a53578163ec32e1b91461093b578163f106845414610900578163f3fef3a314610360578163f64920b81461020357508063f6b4dfb4146101c05763f7c618c11461017a57600080fd5b346101bc57816003193601126101bc57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b5080fd5b50346101bc57816003193601126101bc57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b90503461035c57602091826003193601126103585761022061134c565b84546001600160a01b0393919061023a9085163314611412565b85848084541692169484519086847fec75cca752304221051372b35f3488d6d59ae4be7bbbb04869f1e887318e12998580a37f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b360e01b9384825285820152826024820152878160448186865af1801561034e57916044939189969593610331575b50876001600160601b0360a01b86541617855586519788958694855284015260001960248401525af190811561032857506102fb578280f35b8161031a92903d10610321575b61031281836113b3565b81019061174f565b5038808280f35b503d610308565b513d85823e3d90fd5b61034790873d89116103215761031281836113b3565b50386102c2565b86513d85823e3d90fd5b8380fd5b8280fd5b90503461035c578160031936011261035c5761037a61134c565b602480359390916001600160a01b03916103b7337f000000000000000000000000000000000000000000000000000000000000000085161461263a565b6103bf612766565b856103c86124b5565b106108ad57827f000000000000000000000000000000000000000000000000000000000000000016948151946370a0823160e01b8087523083880152602096878184818c5afa908115610690578b91610880575b50891161069a575b83518181523084820152878184818c5afa90811561069057908a918c9161065b575b501061060e57835163a9059cbb60e01b8882019081526001600160a01b038716848301908152602081018c90528c928392916104909082906040015b03601f1981018352826113b3565b5190828c5af161049e612478565b816105de575b501561059d579086929184519889938492835230908301525afa8015610593578790610542575b7f058b581e2433b8b02263f5b0e5c2889fcb7b3495112884a3147619038fba46d8955084600554821161050a575b5050519485521692a2600160025580f35b816105357fde22222b0ac0d69f2a19cd7b1443a29a5f37346640fff3506bdd6a9a9497f9d3936122b1565b8351908152a138846104f9565b508385813d831161058c575b61055881836113b3565b81010312610588577f058b581e2433b8b02263f5b0e5c2889fcb7b3495112884a3147619038fba46d894516104cb565b8680fd5b503d61054e565b81513d89823e3d90fd5b50601c9086606494519362461bcd60e51b85528401528201527f426f72696e6745524332303a205472616e73666572206661696c6564000000006044820152fd5b805180159250899083156105f6575b505050386104a4565b610606935082018101910161174f565b3888816105ed565b5060239086608494519362461bcd60e51b85528401528201527f436f6e76657854726963727970746f53747261746567793a206e6f7420656e6f6044820152620eaced60eb1b6064820152fd5b809250898092503d8311610689575b61067481836113b3565b810103126106855789905138610446565b8a80fd5b503d61066a565b85513d8d823e3d90fd5b6106b084516106a881611398565b8b8152611776565b835181815230848201528a7f0000000000000000000000000000000000000000000000000000000000000000881689838681845afa92831561087657908a918394610845575b506044885180948193636197390160e11b8352878b840152818a8401525af1801561083b5761081e575b508684541690855163af30c87360e01b8152818682015289818681865afa908115610814578d916107e3575b5060328102818104603214821517156107d1578a926107738f936127106044940490611571565b928951958694859363ca26855760e01b85528b850152898401525af18015610690579088916107a4575b5050610424565b813d83116107ca575b6107b781836113b3565b810103126107c657863861079d565b8980fd5b503d6107ad565b634e487b7160e01b8e5260118752858efd5b90508981813d831161080d575b6107fa81836113b3565b8101031261080957513861074c565b8c80fd5b503d6107f0565b87513d8f823e3d90fd5b61083490893d8b116103215761031281836113b3565b5038610720565b86513d8e823e3d90fd5b8281939295503d831161086f575b61085d81836113b3565b810103126101bc5789905192386106f6565b503d610853565b87513d84823e3d90fd5b90508781813d83116108a6575b61089781836113b3565b8101031261068557513861041c565b503d61088d565b5162461bcd60e51b81526020818601526029818501527f436f6e76657854726963727970746f53747261746567793a20616d6f756e74206044820152681b9bdd081d985b1a5960ba1b6064820152608490fd5b5050346101bc57816003193601126101bc57602090517f00000000000000000000000000000000000000000000000000000000000000008152f35b90503461035c57602091826003193601126103585761095861134c565b84546001600160a01b039391906109729085163314611412565b8584806003541692169484519086847fe36d79dcda63d47bee388b7dde8bba0b326a1b459889de48dc94dcf3504eda4b8580a37f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b360e01b9384825285820152826024820152878160448186865af1801561034e57916044939189969593610a36575b50876001600160601b0360a01b600354161760035586519788958694855284015260001960248401525af190811561032857506102fb578280f35b610a4c90873d89116103215761031281836113b3565b50386109fb565b5050346101bc57816003193601126101bc57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b6113ef565b5050346101bc57816003193601126101bc5760015490516001600160a01b039091168152602090f35b5050346101bc57816003193601126101bc57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b8383346101bc57816003193601126101bc5781546001600160a01b039390610b349085163314611412565b610b4a8251610b4281611398565b848152611776565b81516370a0823160e01b815230828201526020947f000000000000000000000000000000000000000000000000000000000000000081168683602481845afa928315610cca57869188918395610cf1575b506044875180948193636197390160e11b8352888a8401528160248401525af18015610cca57610cd4575b508254845163af30c87360e01b81528085018490529391168684602481845afa938415610cca578694610c97575b50603284029380850460321490151715610c8457869291866044926127108851978896879563ca26855760e01b87528601520460248401525af1928315610c79578093610c44575b505051908152f35b909192508382813d8311610c72575b610c5d81836113b3565b81010312610c6f575051908380610c3c565b80fd5b503d610c53565b8251903d90823e3d90fd5b634e487b7160e01b865260118252602486fd5b9093508681813d8311610cc3575b610caf81836113b3565b81010312610cbf57519287610bf4565b8580fd5b503d610ca5565b85513d88823e3d90fd5b610cea90873d89116103215761031281836113b3565b5086610bc6565b9250935081813d8311610d1c575b610d0981836113b3565b81010312610cbf57868691519389610b9b565b503d610cff565b5050346101bc57816003193601126101bc57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b8390346101bc5760203660031901126101bc57610dc090610db2337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03161461263a565b610dba612766565b35612675565b600160025580f35b5050346101bc57816003193601126101bc57905490516001600160a01b039091168152602090f35b5050346101bc57816003193601126101bc576020906005549051908152f35b5050346101bc57816003193601126101bc578051610e7f91610e3082611367565b603382527f436f6e7665782d54726963727970746f20737472617465677920666f722077726020830152726170706564206e61746976652061737365747360681b818301525191829182611320565b0390f35b90503461035c578260031936011261035c575490516001600160a01b03909116815260209150f35b5050346101bc57816003193601126101bc57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b5050346101bc57816003193601126101bc57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b9190503461035c578260031936011261035c576001546001600160a01b03929091838316919033839003610fa35750508084549384167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08680a36001600160a01b03199283161783551660015580f35b906020606492519162461bcd60e51b8352820152602060248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e65726044820152fd5b90503461035c57602036600319011261035c577f3b779194d2cc7daf4de546bec10f6f325d421b2e202c11aa24e86e39845860cc90359161103160018060a01b038554163314611412565b6005548151908152836020820152a160055580f35b5050346101bc57816003193601126101bc57602090611063611594565b9051908152f35b5050346101bc57816003193601126101bc576020905160018152f35b5050346101bc57816003193601126101bc5760035490516001600160a01b039091168152602090f35b5050346101bc57816003193601126101bc57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b9190503461035c57602036600319011261035c57828235926001600160401b0384116101bc57366023850112156101bc578301359261113d611134856113d4565b935193846113b3565b83835236602485830101116101bc5783611164946024602093018386013783010152611776565b80f35b5050346101bc57816003193601126101bc5751908152602090f35b9190503461035c57606036600319011261035c5761119e61134c565b9160243591821515830361128f57604435928315158403610cbf5760018060a01b039485916111d1838954163314611412565b1561127357169283159081159161126b575b50156112305750508083549283167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08580a36001600160601b0360a01b8092161782556001541660015580f35b906020606492519162461bcd60e51b835282015260156024820152744f776e61626c653a207a65726f206164647265737360581b6044820152fd5b9050386111e3565b9350505050166001600160601b0360a01b600154161760015580f35b8480fd5b838534610c6f5780600319360112610c6f57818301908382106001600160401b038311176112ea5750610e7f93508152601082526f436f6e7665782d54726963727970746f60801b60208301525191829182611320565b634e487b7160e01b815260418552602490fd5b60005b8381106113105750506000910152565b8181015183820152602001611300565b6040916020825261134081518092816020860152602086860191016112fd565b601f01601f1916010190565b600435906001600160a01b038216820361136257565b600080fd5b606081019081106001600160401b0382111761138257604052565b634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b0382111761138257604052565b90601f801991011681019081106001600160401b0382111761138257604052565b6001600160401b03811161138257601f01601f191660200190565b3461136257600036600319011261136257602061140a6124b5565b604051908152f35b1561141957565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b6001600160401b0381116113825760051b60200190565b8051156114815760200190565b634e487b7160e01b600052603260045260246000fd5b8051600110156114815760400190565b80518210156114815760209160051b010190565b6020908181840312611362578051906001600160401b03821161136257019180601f840112156113625782516114f08161145d565b936114fe60405195866113b3565b818552838086019260051b820101928311611362578301905b828210611525575050505090565b81518152908301908301611517565b90815180825260208080930193019160005b828110611554575050505090565b83516001600160a01b031685529381019392810192600101611546565b9190820391821161157e57565b634e487b7160e01b600052601160045260246000fd5b60408051630700037d60e01b815230600482015291906001600160a01b036020846024817f000000000000000000000000000000000000000000000000000000000000000085165afa93841561174457600094611711575b50600093806115fa57505050565b829450906000916116a193519161161083611367565b6002835286366020850137807f00000000000000000000000000000000000000000000000000000000000000001661164784611474565b52807f00000000000000000000000000000000000000000000000000000000000000001661167484611497565b526003541690865180958194829363d06ca61f60e01b845260048401528960248401526044830190611534565b03915afa908115611706576116c09293506000916116e5575b50611497565b5160328102908082046032148115171561157e576127106116e2920490611571565b90565b611700913d8091833e6116f881836113b3565b8101906114bb565b386116ba565b83513d6000823e3d90fd5b90936020823d821161173c575b8161172b602093836113b3565b81010312610c6f57505192386115ec565b3d915061171e565b82513d6000823e3d90fd5b90816020910312611362575180151581036113625790565b600019811461157e5760010190565b908151916000921561220c576040519060c082018281106001600160401b038211176121f05760405260608252606060208301526060604083015260608083015260606080830152606060a08301528051810160c08282031261128f5760208201516001600160401b038111610cbf576117f890602080840191850101612211565b9160408101516001600160401b0381116105885761181e90602080850191840101612211565b9160608201516001600160401b0381116122085761184490602080840191850101612211565b9160808101516001600160401b0381116121365761186a90602080850191840101612211565b9160a08201516001600160401b0381116107c65761189090602080840191850101612211565b9160c0810151906001600160401b0382116106855760208301603f83830101121561068557602082820101519060206118c8836113d4565b946118d660405196876113b3565b838652016040838584010101116122045760406118f993602086019201016112fd565b60a08701526080860152606085015260408401526020830152815260405160a081018181106001600160401b038211176121f05760405283815283602082015283604082015283606082015283608082015260a082015160a08180518101031261128f5760208101519060408101519060608101519060a060808201519101516080860152606085015260408401526020830152815281515160608301515103612195578151511561213a576119b360608301515161227f565b91845b60608201518051821015611a6057602491906020906001600160a01b03906119df9084906114a7565b5116604051938480926370a0823160e01b82523060048301525afa8015611a55578790611a21575b611a1c9250611a1682876114a7565b52611767565b6119b6565b506020823d602011611a4d575b81611a3b602093836113b3565b8101031261058857611a1c9151611a07565b3d9150611a2e565b6040513d89823e3d90fd5b505091929084835160208501516040860151936080870151948151916020810151604082015190608060608401519301519360018060a01b037f0000000000000000000000000000000000000000000000000000000000000000163b1561213657611af599611b19611b2b92611b076101249a6040519e8f9d8e9d8e632d3dc3f960e11b815261012060048201520190611534565b8c81036003190160248e015290611534565b8a81036003190160448c015290611534565b8881036003190160648a015290611534565b608487019590955260a486015260c485015260e48401526101048301520381837f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165af1801561212b576120fc575b50611b9160608301515161227f565b91845b60608201518051821015611c2d57602491906020906001600160a01b0390611bbd9084906114a7565b5116604051938480926370a0823160e01b82523060048301525afa8015611a55578790611bf9575b611bf49250611a1682876114a7565b611b94565b506020823d602011611c25575b81611c13602093836113b3565b8101031261136257611bf49151611be5565b3d9150611c06565b5050929190611c4060608501515161227f565b94805b606086015151811015611c825780611c73611c61611c7d93876114a7565b51611c6c83896114a7565b5190611571565b611a16828a6114a7565b611c43565b5092509260609150015192815b845181101561202e57611ca281836114a7565b51611cb6575b611cb190611767565b611c8f565b6001600160a01b03611cc882876114a7565b516003546001600160a01b03169116611ce183856114a7565b519060405163095ea7b360e01b6020820152836024820152866044820152604481528060808101106001600160401b03608083011117611382578681608082930160405260208151910182855af1611d37612478565b5015611fcf5760405163095ea7b360e01b602082019081526001600160a01b0390941660248201526044810192909252859283928390611d7a8160648101610482565b51925af1611d86612478565b81611fa0575b5015611f4857604051611d9e81611367565b6002815260403660208301376001600160a01b03611dbc83886114a7565b5116611dc782611474565b527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316611dfb82611497565b526003546001600160a01b0316611e1283856114a7565b516040519063d06ca61f60e01b8252600482015260406024820152858180611e3d6044820187611534565b0381855afa908115611f3d5790611e5a918791611f295750611497565b5160328181810204811482151715611f155791611e83826127108995611ebe9795020490611571565b83611e8e87896114a7565b51604051968795869485936338ed173960e01b85526004850152602484015260a0604484015260a4830190611534565b30606483015268056bc75e2d63100000608483015203925af18015611f0a5790611cb19291611ef0575b509050611ca8565b611f03903d8087833e6116f881836113b3565b5038611ee8565b6040513d86823e3d90fd5b634e487b7160e01b87526011600452602487fd5b61170091503d8089833e6116f881836113b3565b6040513d88823e3d90fd5b60405162461bcd60e51b815260206004820152602a60248201527f4f7065726174696f6e734c69623a3a73616665417070726f76653a20617070726044820152691bdd994819985a5b195960b21b6064820152608490fd5b8051801592508215611fb5575b505038611d8c565b611fc8925060208091830101910161174f565b3880611fad565b60405162461bcd60e51b815260206004820152603160248201527f4f7065726174696f6e734c69623a3a73616665417070726f76653a20617070726044820152701bdd985b081c995cd95d0819985a5b1959607a1b6064820152608490fd5b50506040516370a0823160e01b8152306004820152919250906020816024817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa9182156120f057916120bd575b506020816120b47fde22222b0ac0d69f2a19cd7b1443a29a5f37346640fff3506bdd6a9a9497f9d3936122b1565b604051908152a1565b90506020813d6020116120e8575b816120d8602093836113b3565b8101031261136257516020612086565b3d91506120cb565b604051903d90823e3d90fd5b6001600160401b038195929511612117576040529238611b82565b634e487b7160e01b82526041600452602482fd5b6040513d87823e3d90fd5b8880fd5b60405162461bcd60e51b815260206004820152602d60248201527f436f6e76657854726963727970746f53747261746567793a206e6f7468696e6760448201526c103a379031b630b4b6903337b960991b6064820152608490fd5b60405162461bcd60e51b815260206004820152602d60248201527f436f6e76657854726963727970746f53747261746567793a20636c61696d206460448201526c185d18481b9bdd081d985b1a59609a1b6064820152608490fd5b634e487b7160e01b85526041600452602485fd5b8b80fd5b8780fd5b509050565b81601f82011215611362578051916122288361145d565b9261223660405194856113b3565b808452602092838086019260051b820101928311611362578301905b828210612260575050505090565b81516001600160a01b0381168103611362578152908301908301612252565b906122898261145d565b61229660405191826113b3565b82815280926122a7601f199161145d565b0190602036910137565b60018060a01b0380600454169060409081516305c43acd60e01b81528460048201526020948582602481885afa91821561246d5760009261243e575b50670de0b6b3a7640000821015612307575b505050505050565b60328202918083046032148115171561157e5761232c60449161271089950490611571565b9160008651978894859363b529fe1d60e01b8552600485015260248401525af192831561174457908491600094612409575b506064600094845195869384926321d0683360e11b84527f000000000000000000000000000000000000000000000000000000000000000060048501526024840152600160448401527f0000000000000000000000000000000000000000000000000000000000000000165af19081156123ff57506123e1575b808080806122ff565b816123f792903d106103215761031281836113b3565b5038806123d8565b513d6000823e3d90fd5b918281959294953d8311612437575b61242281836113b3565b81010312610c6f57505191908390606461235e565b503d612418565b90918682813d8311612466575b61245581836113b3565b81010312610c6f57505190386122ed565b503d61244b565b84513d6000823e3d90fd5b3d156124a3573d90612489826113d4565b9161249760405193846113b3565b82523d6000602084013e565b606090565b9190820180921161157e57565b604080516370a0823160e01b808252306004830152602092906001600160a01b039084846024817f000000000000000000000000000000000000000000000000000000000000000086165afa9384156117065760009461260b575b5084826004541694602485518097819363af30c87360e01b835260048301525afa938415611706579085916000956125d9575b50602484518094819382523060048301527f0000000000000000000000000000000000000000000000000000000000000000165afa9182156123ff57506000916125a5575b506116e292506125a09061259a611594565b926124a8565b6124a8565b919282813d83116125d2575b6125bb81836113b3565b81010312610c6f5750516116e291906125a0612588565b503d6125b1565b9182819692963d8311612604575b6125f181836113b3565b81010312610c6f57508490519338612543565b503d6125e7565b90938582813d8311612633575b61262281836113b3565b81010312610c6f5750519238612510565b503d612618565b1561264157565b60405162461bcd60e51b815260206004820152600c60248201526b09cdee840b2d2cad8c884def60a31b6044820152606490fd5b6040516370a0823160e01b815230600482015260209081816024817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa90811561275a5760009161272d575b50600554811161270157507f9447d5abbf0af693ca2937bf8b1ec6a8c9dc4fbac672911c633fb31c78e5e3ca91604051908152a1565b7fde22222b0ac0d69f2a19cd7b1443a29a5f37346640fff3506bdd6a9a9497f9d392506120b4816122b1565b908282813d8311612753575b61274381836113b3565b81010312610c6f575051386126cb565b503d612739565b6040513d6000823e3d90fd5b60028054146127755760028055565b60405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606490fdfea26469706673582212200f501fb6bbe6c22a9f58d0d1ba599d5fde85209f639006e09021fe182f30b44064736f6c63430008120033";

type ConvexTricryptoStrategyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConvexTricryptoStrategyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ConvexTricryptoStrategy__factory extends ContractFactory {
  constructor(...args: ConvexTricryptoStrategyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _yieldBox: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    _rewadPool: PromiseOrValue<string>,
    _booster: PromiseOrValue<string>,
    _zap: PromiseOrValue<string>,
    _lpGetter: PromiseOrValue<string>,
    _multiSwapper: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ConvexTricryptoStrategy> {
    return super.deploy(
      _yieldBox,
      _token,
      _rewadPool,
      _booster,
      _zap,
      _lpGetter,
      _multiSwapper,
      overrides || {}
    ) as Promise<ConvexTricryptoStrategy>;
  }
  override getDeployTransaction(
    _yieldBox: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    _rewadPool: PromiseOrValue<string>,
    _booster: PromiseOrValue<string>,
    _zap: PromiseOrValue<string>,
    _lpGetter: PromiseOrValue<string>,
    _multiSwapper: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _yieldBox,
      _token,
      _rewadPool,
      _booster,
      _zap,
      _lpGetter,
      _multiSwapper,
      overrides || {}
    );
  }
  override attach(address: string): ConvexTricryptoStrategy {
    return super.attach(address) as ConvexTricryptoStrategy;
  }
  override connect(signer: Signer): ConvexTricryptoStrategy__factory {
    return super.connect(signer) as ConvexTricryptoStrategy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConvexTricryptoStrategyInterface {
    return new utils.Interface(_abi) as ConvexTricryptoStrategyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConvexTricryptoStrategy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ConvexTricryptoStrategy;
  }
}
