# Merkle ETH
>Merkle Tree to generate Root and Proof of Ethereum Addresses  

Project Setup
============

Clone this GitHub repository.

# Steps to compile merkleTree.js

  - Local dependencies
    - [MerkleTree.js](https://github.com/miguelmota/merkletreejs)
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

It will generate root hash, proof.json and check for failure:

```
Root Hash: c8d6d68bda7941a2ef189276b0e2beba779de1725f3615aa26ba0e4fa00dd678d61a0124b73d2721511b8047c378d3300a150bfdaf4c0fa9ce072625de070c5a

Verify: true
```    
  

