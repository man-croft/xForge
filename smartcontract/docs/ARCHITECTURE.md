# ForgeX Smart Contracts Architecture

## Overview

ForgeX is a decentralized multi-vault platform built on Base, enabling users to create ERC-4626 compliant vaults with automated yield strategies across multiple DeFi protocols.

## Contract Architecture

```
┌──────────────────┐
│  VaultFactory    │ ◄─── Admin manages protocol addresses
└────────┬─────────┘
         │ creates
         │
         ▼
┌──────────────────┐
│   UserVault      │ ◄─── Implements ERC-4626 standard
│  (ERC-20 Shares) │
└────────┬─────────┘
         │ interacts with
         │
         ▼
┌──────────────────┐
│ DeFi Protocols   │
│ • Aave           │
│ • Compound       │
│ • Uniswap        │
└──────────────────┘
```

## Core Contracts

### VaultFactory

**Purpose**: Factory contract for creating and managing user vaults

**Key Features**:
- User registration with on-chain username and bio
- Vault deployment and tracking
- Admin management system
- Protocol address configuration
- Chainlink price feed integration

**Access Control**:
- `onlyAdmin`: Protocol address setters, price feed setters
- `onlyOwner`: Inherited from Ownable (transferOwnership)
- Public: User registration, vault creation (registered users only)

### UserVault

**Purpose**: ERC-4626 compliant tokenized vault with DeFi protocol integration

**Key Features**:
- Full ERC-4626 standard implementation
- Protocol allocation management
- Compound V2 integration
- Pause/unpause emergency controls
- Chainlink price feed for USD valuation

**Access Control**:
- `onlyOwner`: Protocol allocations, pause/unpause, Compound operations
- `whenNotPaused`: Deposit, withdraw, mint, redeem, protocol operations
- Public: View functions, share transfers (ERC-20)

## Data Flow

### User Registration & Vault Creation
```
User calls registerUser(username, bio)
  → VaultFactory stores user data
  → User calls createVault(asset, name, symbol)
    → VaultFactory deploys new UserVault
    → UserVault initialized with owner, asset, price feed
    → Vault address tracked in factory
```

### Deposit Flow
```
User approves vault to spend asset
  → User calls deposit(assets, receiver)
    → Vault transfers assets from user
    → Vault calculates shares to mint
    → Vault mints shares to receiver
    → Emits Deposit event
```

### Compound Integration Flow
```
Owner calls deployToCompound(amount)
  → Vault approves Compound cToken
  → Vault calls cToken.mint(amount)
  → Vault tracks deposited amount
  → Updates totalAssets() calculation
  → Emits ProtocolDeployed event
```

## Security Considerations

### Access Control
- Multi-tier admin system in VaultFactory
- Deployer admin cannot be removed
- Owner-only functions in UserVault
- Pause mechanism for emergency stops

### Input Validation
- Non-zero address checks
- Amount validation
- Username/bio length limits
- Protocol allocation limits

### External Calls
- SafeERC20 for all token transfers
- Custom errors for gas efficiency
- Reentrancy protection via checks-effects-interactions pattern

## Protocol Integrations

### Chainlink Price Feeds
- Used for USD valuation of vault assets
- Set per-asset by factory admins
- Required for vault creation

### Compound V2
- Lending protocol integration
- Tracks deposited balance
- Updates totalAssets() calculation
- Supports deposit and withdrawal

### Future Integrations
- Aave lending (pending)
- Uniswap liquidity (pending)

## Testing Strategy

- Unit tests for all core functions
- Edge case coverage (first deposit, zero amounts)
- Access control verification
- Protocol integration tests with mocks
- Gas optimization benchmarks

## Deployment

1. Deploy VaultFactory
2. Initialize protocol addresses (Aave, Compound, Uniswap, WETH)
3. Set price feeds for supported assets
4. Verify contracts on block explorer

See `scripts/deploy.ts`, `scripts/initialize.ts`, and `scripts/verify.ts` for deployment automation.

## Known Limitations

- Compound balance uses estimated value (not real-time)
- Single owner per vault (no multi-sig)
- Protocol allocations are manual (not automated)
- No slippage protection on protocol interactions

## License

MIT
