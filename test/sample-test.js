const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Fund Pool", function () {
  let fundPoolFactory;
  before( async ()=>{
    //Deploy Fund Pool Factory
    const FundPoolFactory = await ethers.getContractFactory("fundPoolFactory");
    fundPoolFactory = await FundPoolFactory.deploy();
    await fundPoolFactory.deployed();
  })
  it("Create a Fund Pool", async  ()=> {
    //Create a Fund Pool using Factory
    let accounts = await ethers.getSigners();
    const deployFundPool = await fundPoolFactory.createFundPool(20,20,1638302793);
    //Get The Created Fund Pool Address
    const FundPool = await ethers.getContractFactory("fundPool");
    const fundPool = FundPool.attach((await deployFundPool.wait()).events[0].args.poolAddress);
    let fundDetails = await fundPool.getFundDetails()
    
    expect(await fundDetails.totalAmount.toNumber() == 20);
    expect(await fundDetails.maxParticipants.toNumber() == 20);
    expect(await fundDetails.desiredStartDate.toNumber() == 1638302793);
    expect(await fundDetails.participants[0] == accounts[0]);
    expect(await fundDetails.startedBy == accounts[0]);
  });
});
