//SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract LaughPortal {
    uint256 totalLaughs;

    uint256 private seed;

    event NewLaugh(address indexed from, uint256 timestamp, string message);

    struct Laugh {
        address waver;
        string message;
        uint256 timestamp;
    }

    Laugh[] laughs;

    mapping(address => uint256) public lastWavedAt;

    constructor() payable {
        console.log("Lawwee is still trying his best");

        seed = (block.timestamp + block.difficulty) % 100;
    }

    function laugh(string memory _message) public {
        require(
            lastWavedAt[msg.sender] + 24 hours < block.timestamp,
            "Wait 24 hours"
        );
        lastWavedAt[msg.sender] = block.timestamp;

        totalLaughs += 1;
        console.log("%s has laughed! w/ message %s", msg.sender, _message);
        laughs.push(Laugh(msg.sender, _message, block.timestamp));

        seed = (block.timestamp + block.difficulty + seed) % 100;
        console.log("Random # generated: %d", seed);

        if (seed <= 10) {
            console.log("%s won the prize!!!", msg.sender);

            uint256 prizeAmount = 0.00001 ether;
            require(
                prizeAmount <= address(this).balance,
                "Not enough ether to send"
            );
            (bool success, ) = (msg.sender).call{value: prizeAmount}("");
            require(success, "Failed to complete bonus transaction");
        }

        emit NewLaugh(msg.sender, block.timestamp, _message);

    }

    function getAllLaughs() public view returns (Laugh[] memory) {
        return laughs;
    }

    function getTotalLaughs() public view returns (uint256) {
        console.log("we have %d total laughs!", totalLaughs);
        return totalLaughs;
    }
}