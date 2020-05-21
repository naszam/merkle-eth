# Merkle ETH
>Merkle Tree to generate Root and Proof of Ethereum Addresses  

Project Setup
============

Clone this GitHub repository.

# Steps to compile merkleTree.js

  - Local dependencies
    - MerkleTree.js
    - Crypto-JS
    ```sh
    $ npm i
    ```
## Running the project with Node.js
    
   - Add Ethereum Addresses to address.json
   - Insert the leaf you want the proof of:
     ``` 
     const leaf = SHA3('0xdb8f5f7bc1086e59ac909aa845effa09fde735eb')
     ``` 
   - Run with Node.js:
   ```sh
   $ node merkleTree.js
   ```
    It will generate proof.json
    
  

