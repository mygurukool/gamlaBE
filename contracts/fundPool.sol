pragma solidity ^0.8.0;
//SPDX-License-Identifier: UNLICENSED

struct fundPoolStruct{
    int totalAmount;
    int maxParticipants;
    uint desiredStartDate;
    address[] participants;
    address startedBy;
}
contract fundPool{
    fundPoolStruct public FundPool;
    constructor(int totalAmount,int maxParticipants,uint desiredStartDate,address startedBy) payable{
        // require(msg.value ==  (uint)((12*totalAmount)/(maxParticipants*10)),"You Dont Have Enough Balance");
        FundPool.totalAmount = totalAmount;
        FundPool.maxParticipants = maxParticipants;
        FundPool.desiredStartDate = desiredStartDate;
        FundPool.participants.push(startedBy);
        FundPool.startedBy = startedBy;
    }
    function getFundDetails() public view returns(fundPoolStruct memory){
        return FundPool;
    }
}