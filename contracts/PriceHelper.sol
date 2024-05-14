// SPDX-License-Identifier: BUSL-1.1
// Gearbox Protocol. Generalized leverage for DeFi protocols
// (c) Gearbox Holdings, 2024
pragma solidity ^0.8.10;

import {IPriceHelper, TokenPriceInfo} from "./interfaces/IPriceHelper.sol";
import {ICreditAccountV3} from "@gearbox-protocol/core-v3/contracts/interfaces/ICreditAccountV3.sol";
import {ICreditManagerV3} from "@gearbox-protocol/core-v3/contracts/interfaces/ICreditManagerV3.sol";
import {IPriceOracleV3} from "@gearbox-protocol/core-v3/contracts/interfaces/IPriceOracleV3.sol";
import {IPriceFeed} from "@gearbox-protocol/core-v2/contracts/interfaces/IPriceFeed.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract PriceHelper is IPriceHelper {
    function previewTokens(address creditAccount) external view returns (TokenPriceInfo[] memory results) {
        ICreditManagerV3 creditManager = ICreditManagerV3(ICreditAccountV3(creditAccount).creditManager());
        address underlying = creditManager.underlying();
        address oracle = creditManager.priceOracle();
        uint256 enabledTokensMask = creditManager.enabledTokensMaskOf(creditAccount);
        (uint256 priceTo, uint256 scaleTo) = _getUncheckedPrice(oracle, underlying);

        uint256 len = creditManager.collateralTokensCount();
        uint256 cnt = 0;
        TokenPriceInfo[] memory tmp = new TokenPriceInfo[](len);
        unchecked {
            for (uint256 i = 0; i < len; ++i) {
                TokenPriceInfo memory info = TokenPriceInfo(address(0), 0, 0, 0);
                (info.token, info.liquidationThreshold) = creditManager.collateralTokenByMask(1 << i);
                info.balance = IERC20(info.token).balanceOf(creditAccount);
                uint256 tokenMask = 1 << i;
                if (info.balance > 10 && tokenMask & enabledTokensMask != 0) {
                    if (info.token == underlying) {
                        info.balanceInUnderlying = info.balance;
                    } else {
                        (uint256 priceFrom, uint256 scaleFrom) = _getUncheckedPrice(oracle, info.token);
                        info.balanceInUnderlying = info.balance * priceFrom * scaleTo / (priceTo * scaleFrom);
                    }
                    tmp[cnt] = info;
                    cnt++;
                }
            }
        }

        results = new TokenPriceInfo[](cnt);
        unchecked {
            for (uint256 i = 0; i < cnt; ++i) {
                results[i] = tmp[i];
            }
        }
    }

    /// @dev Returns price feed answer and scale withouth staleness checks
    function _getUncheckedPrice(address oracle, address token) internal view returns (uint256 price, uint256 scale) {
        IPriceOracleV3 priceOracle = IPriceOracleV3(oracle);

        // check main price feed
        IPriceFeed priceFeed = IPriceFeed(priceOracle.priceFeedsRaw(token, false));
        uint8 decimals = priceFeed.decimals();
        try priceFeed.latestRoundData() returns (uint80, int256 answer, uint256, uint256, uint80) {
            price = uint256(answer);
        } catch {
            // Try reserve price feed
            priceFeed = IPriceFeed(priceOracle.priceFeedsRaw(token, true));
            decimals = priceFeed.decimals();
            (, int256 answer,,,) = priceFeed.latestRoundData();
            price = uint256(answer);
        }

        unchecked {
            scale = 10 ** decimals;
        }
    }
}