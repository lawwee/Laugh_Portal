const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();

    console.log("Contract has been deployed by:", deployer.address);
    console.log("Account Balance is currently:", accountBalance.toString());

    const laughContractFactory = await hre.ethers.getContractFactory("LaughPortal");
    const laughContract = await laughContractFactory.deploy({
        value: hre.ethers.utils.parseEther("0.001"),
    });
    await laughContract.deployed();

    console.log("Current Laugh Portal is:", laughContract.address);
};

const runMain = async () => {
    try {
      await main();
      process.exit(0); // exit Node process without error
    } catch (error) {
      console.log(error);
      process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error
    }
    // Read more about Node exit ('process.exit(num)') status codes here: https://stackoverflow.com/a/47163396/7974948
  };
  
runMain();    