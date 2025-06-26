async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contract with address:", deployer.address);

  const DFAEvidenceStorage = await ethers.getContractFactory("DFAEvidenceStorage");
  const contract = await DFAEvidenceStorage.deploy(); // No need to wait for .deployed()

  console.log("DFAEvidenceStorage deployed to:", contract.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
