// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract Inbox {
    string public message;

    /*Using the name of a contract as its constructor is now deprecated. Must use constructor()*/
    constructor(string memory initialMessage){
        message = initialMessage;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}
