import { run } from "hardhat";
import * as fs from "fs";
import * as path from "path";

/**
 * Verify VaultFactory contract on block explorer
 * Reads deployment info from deployments folder
 */
async function main() {
  console.log("🔍 Starting contract verification...\n");

  // Load deployment info
  const network = await (await import("hardhat")).ethers.provider.getNetwork();
  const deploymentFile = path.join(__dirname, "../deployments", `${network.name}-${network.chainId}.json`);

  if (!fs.existsSync(deploymentFile)) {
    throw new Error(`❌ Deployment file not found: ${deploymentFile}\nRun deploy script first.`);
  }

  const deploymentInfo = JSON.parse(fs.readFileSync(deploymentFile, "utf-8"));
  console.log("📂 Loaded deployment from:", deploymentFile);
  console.log("📍 VaultFactory address:", deploymentInfo.vaultFactory);
  console.log("🌐 Network:", network.name, `(${network.chainId})\n`);

  // Wait for block explorer to index the contract
  console.log("⏳ Waiting 30 seconds for block explorer to index...");
  await new Promise((resolve) => setTimeout(resolve, 30000));

  try {
    console.log("🔍 Verifying VaultFactory contract...");
    await run("verify:verify", {
      address: deploymentInfo.vaultFactory,
      constructorArguments: [],
    });
    console.log("✅ Contract verified successfully!");
  } catch (error: any) {
    if (error.message.includes("Already Verified")) {
      console.log("ℹ️  Contract already verified");
    } else {
      console.error("❌ Verification failed:", error.message);
      throw error;
    }
  }

  console.log("\n✨ Verification complete!");
  console.log(`\n🔗 View on explorer: https://basescan.org/address/${deploymentInfo.vaultFactory}\n`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Verification script failed:", error);
    process.exit(1);
  });
