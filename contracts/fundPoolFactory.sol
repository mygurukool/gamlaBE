pragma solidity ^0.8.0;
//SPDX-License-Identifier: UNLICENSED
import "./fundPool.sol";
import "hardhat/console.sol";
contract fundPoolFactory{
    address[] public fundPools;
    mapping(address=>string) public poolStatus;
    // Status can be Started,Ongoing,Cancelled
    event FundPoolCreated(address poolAddress);
    function createFundPool(int totalAmount,int maxParticipants,uint desiredStartDate) public{
        require(totalAmount>0,"Total Amount should be more than 0");
        require(maxParticipants>1,"Participants should be more than 1");       
        require(desiredStartDate>block.timestamp,"Start Date should be greater than today"); 
        console.log(msg.sender);
        address newFundPool =  address(new fundPool(totalAmount,maxParticipants,desiredStartDate,msg.sender));     
        fundPools.push(newFundPool);
        poolStatus[newFundPool] = "Started";
        emit FundPoolCreated(newFundPool);
    }
}