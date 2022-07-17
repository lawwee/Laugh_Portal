const main = async () => {
    const [owner, randomUser] = await hre.ethers.getSigners()
    const laughContractFactory = await hre.ethers.getContractFactory("LaughPortal");
    const laughContract = await laughContractFactory.deploy({
        value: hre.ethers.utils.parseEther("0.1"),
    });
    await laughContract.deployed();

    console.log("Contract deployed to:", laughContract.address);

    let contractBalance = await hre.ethers.provider.getBalance(
        laughContract.address
    );
    console.log(
        "Contract Balance",
        hre.ethers.utils.formatEther(contractBalance)
    );

    // let laughCount;
    // laughCount = await laughContract.getTotalLaughs();
    // console.log(laughCount.toNumber());

    let txn = await laughContract.laugh("A simple message from me i guess");
    await txn.wait();

    txn = await laughContract.connect(randomUser).laugh("A simple message from second me");
    await txn.wait();

    // const [_, randomPerson] = await hre.ethers.getSigners();
    // laughFriend = await laughContract.connect(randomPerson).laugh("Another message from me as well");
    // await laughFriend.wait();

    contractBalance = await hre.ethers.provider.getBalance(
        laughContract.address
    );
    console.log(
        "Contract Balance",
        hre.ethers.utils.formatEther(contractBalance)
    );

    let allLaughs = await laughContract.getAllLaughs();
    console.log(allLaughs);

    let totalLaughs = await laughContract.getTotalLaughs();
    console.log(totalLaughs);
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