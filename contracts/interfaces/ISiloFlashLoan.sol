// SPDX-License-Identifier: BUSL-1.1
// Gearbox Protocol. Generalized leverage for DeFi protocols
// (c) Gearbox Foundation, 2024
pragma solidity ^0.8.10;

interface ISiloFlashLoan {
    function flashLoan(address receiver, address token, uint256 amount, bytes calldata data) external returns (bool);
}
