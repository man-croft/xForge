import { ethers } from "hardhat";
import * as fs from "fs";
import * as path from "path";

/**
 * Deploy VaultFactory contract and save deployment info
 */
async function main() {
  console.log("🚀 Starting VaultFactory deployment...\n");

  const [deployer] = await ethers.getSigners();
  console.log("📍 Deploying from address:", deployer.address);
  console.log("💰 Account balance:", ethers.formatEther(await ethers.provider.getBalance(deployer.address)), "ETH\n");

  // Deploy VaultFactory
  console.log("📦 Deploying VaultFactory...");
  const VaultFactory = await ethers.getContractFactory("VaultFactory");
  const vaultFactory = await VaultFactory.deploy();
  await vaultFactory.waitForDeployment();

  const factoryAddress = await vaultFactory.getAddress();
  console.log("✅ VaultFactory deployed to:", factoryAddress);

  // Verify deployer is admin
  const isAdmin = await vaultFactory.isAdmin(deployer.address);
  console.log("🔑 Deployer is admin:", isAdmin);

  // Get network info
  const network = await ethers.provider.getNetwork();
  console.log("🌐 Network:", network.name, `(chainId: ${network.chainId})`);

  // Save deployment info
  const deploymentInfo = {
    network: network.name,
    chainId: Number(network.chainId),
    vaultFactory: factoryAddress,
    deployer: deployer.address,
    deployedAt: new Date().toISOString(),
    blockNumber: await ethers.provider.getBlockNumber(),
  };

  const deploymentsDir = path.join(__dirname, "../deployments");
  if (!fs.existsSync(deploymentsDir)) {
    fs.mkdirSync(deploymentsDir, { recursive: true });
  }

  const deploymentFile = path.join(deploymentsDir, `${network.name}-${network.chainId}.json`);
  fs.writeFileSync(deploymentFile, JSON.stringify(deploymentInfo, null, 2));
  console.log("💾 Deployment info saved to:", deploymentFile);

  console.log("\n✨ Deployment complete!");
  console.log("\n📋 Next steps:");
  console.log("   1. Run initialize script to set protocol addresses");
  console.log("   2. Verify contract on explorer if on public network");
  console.log(`   3. Share VaultFactory address with frontend: ${factoryAddress}\n`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Deployment failed:", error);
    process.exit(1);
  });
