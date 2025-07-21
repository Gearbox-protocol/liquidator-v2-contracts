import AaveFLTaker from "./forge-out/AaveFLTaker.sol/AaveFLTaker.json" assert { type: "json" };
import BatchLiquidator from "./forge-out/BatchLiquidator.sol/BatchLiquidator.json" assert { type: "json" };
import AaveLiquidator from "./forge-out/AaveLiquidator.sol/AaveLiquidator.json" assert { type: "json" };
import PriceHelper from "./forge-out/PriceHelper.sol/PriceHelper.json" assert { type: "json" };
import GhoFMTaker from "./forge-out/GhoFMTaker.sol/GhoFMTaker.json" assert { type: "json" };
import GhoLiquidator from "./forge-out/GhoLiquidator.sol/GhoLiquidator.json" assert { type: "json" };
import SiloFLTaker from "./forge-out/SiloFLTaker.sol/SiloFLTaker.json" assert { type: "json" };
import SiloLiquidator from "./forge-out/SiloLiquidator.sol/SiloLiquidator.json" assert { type: "json" };
import AaveUnwinder from "./forge-out/AaveUnwinder.sol/AaveUnwinder.json" assert { type: "json" };
import GhoUnwinder from "./forge-out/GhoUnwinder.sol/GhoUnwinder.json" assert { type: "json" };
import SiloUnwinder from "./forge-out/SiloUnwinder.sol/SiloUnwinder.json" assert { type: "json" };
import { writeFileSync } from "node:fs";

const address = "`0x${string}`";

const bytecode = `export const AaveFLTaker_bytecode: ${address} = "${AaveFLTaker.bytecode.object}";
export const AaveLiquidator_bytecode: ${address} = "${AaveLiquidator.bytecode.object}";
export const AaveUnwinder_bytecode: ${address} = "${AaveUnwinder.bytecode.object}";
export const BatchLiquidator_bytecode: ${address} = "${BatchLiquidator.bytecode.object}";
export const GhoFMTaker_bytecode: ${address} = "${GhoFMTaker.bytecode.object}";
export const GhoLiquidator_bytecode: ${address} = "${GhoLiquidator.bytecode.object}";
export const GhoUnwinder_bytecode: ${address} = "${GhoUnwinder.bytecode.object}";
export const PriceHelper_bytecode: ${address} = "${PriceHelper.bytecode.object}";
export const SiloFLTaker_bytecode: ${address} = "${SiloFLTaker.bytecode.object}";
export const SiloLiquidator_bytecode: ${address} = "${SiloLiquidator.bytecode.object}";
export const SiloUnwinder_bytecode: ${address} = "${SiloUnwinder.bytecode.object}";
`;

writeFileSync("./src/bytecode/bytecode.generated.ts", bytecode, "utf-8");
