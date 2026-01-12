import { ethers } from "hardhat";
import * as fs from "fs";
import * as path from "path";

/**
 * Initialize VaultFactory with protocol addresses and admin setup
 * Reads deployment info from deployments folder
 */
async function main() {
  console.log("⚙️  Starting VaultFactory initialization...\n");

  // Load deployment info
  const network = await ethers.provider.getNetwork();
  const deploymentFile = path.join(__dirname, "../deployments", `${network.name}-${network.chainId}.json`);

  if (!fs.existsSync(deploymentFile)) {
    throw new Error(`❌ Deployment file not found: ${deploymentFile}\nRun deploy script first.`);
  }

  const deploymentInfo = JSON.parse(fs.readFileSync(deploymentFile, "utf-8"));
  console.log("📂 Loaded deployment from:", deploymentFile);
  console.log("📍 VaultFactory address:", deploymentInfo.vaultFactory);

  const [signer] = await ethers.getSigners();
  console.log("🔑 Initializing from address:", signer.address);
  console.log("💰 Account balance:", ethers.formatEther(await ethers.provider.getBalance(signer.address)), "ETH\n");

  // Get VaultFactory instance
  const vaultFactory = await ethers.getContractAt("VaultFactory", deploymentInfo.vaultFactory);

  // Protocol addresses for Base Mainnet (Chain ID 8453)
  // Update these with actual protocol addresses when deploying
  const protocolAddresses = {
    aave: process.env.AAVE_ADDRESS || ethers.ZeroAddress,
    compound: process.env.COMPOUND_ADDRESS || ethers.ZeroAddress,
    uniswap: process.env.UNISWAP_ADDRESS || ethers.ZeroAddress,
    weth: process.env.WETH_ADDRESS || ethers.ZeroAddress,
  };

  console.log("📋 Protocol addresses to set:");
  console.log("   Aave:", protocolAddresses.aave);
  console.log("   Compound:", protocolAddresses.compound);
  console.log("   Uniswap:", protocolAddresses.uniswap);
  console.log("   WETH:", protocolAddresses.weth);
  console.log("");

  // Set protocol addresses (only if not zero address)
  if (protocolAddresses.aave !== ethers.ZeroAddress) {
    console.log("Setting Aave address...");
    const tx1 = await vaultFactory.setAaveAddress(protocolAddresses.aave);
    await tx1.wait();
    console.log("✅ Aave address set");
  }

  if (protocolAddresses.compound !== ethers.ZeroAddress) {
    console.log("Setting Compound address...");
    const tx2 = await vaultFactory.setCompoundAddress(protocolAddresses.compound);
    await tx2.wait();
    console.log("✅ Compound address set");
  }

  if (protocolAddresses.uniswap !== ethers.ZeroAddress) {
    console.log("Setting Uniswap address...");
    const tx3 = await vaultFactory.setUniswapAddress(protocolAddresses.uniswap);
    await tx3.wait();
    console.log("✅ Uniswap address set");
  }

  if (protocolAddresses.weth !== ethers.ZeroAddress) {
    console.log("Setting WETH address...");
    const tx4 = await vaultFactory.setWETHAddress(protocolAddresses.weth);
    await tx4.wait();
    console.log("✅ WETH address set");
  }

  // Add additional admins (optional)
  const additionalAdmins = process.env.ADDITIONAL_ADMINS?.split(",").filter(Boolean) || [];
  if (additionalAdmins.length > 0) {
    console.log("\n👥 Adding additional admins...");
    for (const admin of additionalAdmins) {
      console.log("   Adding:", admin);
      const tx = await vaultFactory.addAdmin(admin);
      await tx.wait();
      console.log("   ✅ Admin added");
    }
  }

  console.log("\n✨ Initialization complete!");
  console.log("\n📋 Summary:");
  console.log("   Factory:", deploymentInfo.vaultFactory);
  console.log("   Network:", network.name, `(${network.chainId})`);
  console.log("   Admin count:", await vaultFactory.getAdminCount());
  console.log("");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Initialization failed:", error);
    process.exit(1);
  });
