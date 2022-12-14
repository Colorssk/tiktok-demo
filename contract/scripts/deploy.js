// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  // const initAmount = hre.ethers.utils.parseEther("3");

  const tiktok = await hre.ethers.getContractFactory("TikTok");
  const tiktokContract = await tiktok.deploy();

  await tiktokContract.deployed();

  // 0x7eb0d429eA2221B99b5FEbA41FDDf033A5eE3F2f 已经部署的地址
  console.log(
    `has deployed to  ${tiktokContract.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
