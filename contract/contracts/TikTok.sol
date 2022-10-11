// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract TikTok{
    address public Owner;
    mapping(address=>uint) public balances;
    uint public balance;
    modifier noOwner{
        require(msg.sender != address(Owner), 'can no the owner');
        _;
    }
    constructor() payable{
        Owner = msg.sender;
        balance = msg.value;
    }
    
    function getBalance(address _addr) external view returns(uint){
        require(_addr != address(0), 'address input invalid');
        return balances[_addr];
    }

    function deposite() external noOwner payable{
        balances[msg.sender] += msg.value;
    }
}