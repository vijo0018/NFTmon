const hre = require("hardhat");

const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("NFTmonGame");
  const gameContract = await gameContractFactory.deploy(
    [
      "Freya",
      "Frigg",
      "Loki",
      "Odin",
      "Thor",
      "Tyr",
      "Achilles",
      "Aphrodite",
      "Athena",
      "Hades",
      "Poseidon",
      "Zeus",
    ], // Names
    [
      "https://imgur.com/KUH80aI", // Images
      "https://imgur.com/uKCTUu4",
      "https://imgur.com/46Q0ncT",
      "https://imgur.com/rFvJji3",
      "https://imgur.com/rPX2FC5",
      "https://imgur.com/d1BrPzk",
      "https://imgur.com/wrpkL6k",
      "https://imgur.com/8RUyQFL",
      "https://imgur.com/sWjao9C",
      "https://imgur.com/XSRSMWk",
      "https://imgur.com/3aCHBHI",
      "https://imgur.com/vacnveH",
    ],
    [1000, 200, 300, 1000, 500, 600, 2000, 300, 1000, 100, 700, 500], // HP values
    [500, 50, 2000, 1000, 1000, 600, 500, 600, 1000, 3000, 700, 1500]
  );
  await gameContract.deployed();
  console.log("Deployed to: ", gameContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
