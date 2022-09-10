# Laugh Portal

Technologies Used:
  * Solidity
  * Javascript
  * Hardhat
  * Remix IDE
  * Alchemy
  * Metamask

Laugh Portal is a very basic decentralized application.

The address of the Smart Contract is **0xE48431765402fD1d27C650f2592FA3D23F9574fA** and can be found on the Goerli Testnet of the Ethereum network.

Its most basic functionality is to allow users sign transactions and send them as laugh emojis with any desirable messages of their choice. Also allows for an automated system, designed to send ether(ETH) as a gift to any random user or address on the network.

Herein lies the functionalities available to all users on the platform.

* The **NewLaugh** Event - This event is triggered each time a user on the platform sends a laugh emoji and message. The details on each trigger is of three parameters namely _from_, _timestamp_ and _message_. The "from" indicates the address that is signing and sending a message, the "timestamp" shows the time in which the message and laugh was signed, and lastly, the "message" is a copy of the message that was sent by the user.

* The **laugh()** Function - This function represents the main functionality of the platform, it takes one parameter called _message_ (see NewLaugh). The function is called when the user intends to send a message unto the platform. It has a security check that prevents users from sending mre than one message in 24 hours, and also sets the randomness of how the contract sends ether to a user or address.

* The **getAllLaughs()** Function - This function simply returns an array of all the laugh emojis and their designated messages.

* The **getTotalLaughs()** Function - This function returns a total number of all the laughs that has been signed.
