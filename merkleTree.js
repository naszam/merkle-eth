const { MerkleTree } = require('merkletreejs')
const SHA3 = require('crypto-js/sha3')
const fs = require('fs')


let accounts = require('./addresses.json')

const leaves = accounts.map(x => SHA3(x))
const tree = new MerkleTree(leaves, SHA3)
const root = tree.getRoot().toString('hex')
const leaf = SHA3('0xdb8f5f7bc1086e59ac909aa845effa09fde735eb')
const proof = tree.getProof(leaf)

console.log('Root Hash:', root)


// Write proof in 'proof.json' 
fs.writeFile("proof.json", JSON.stringify(proof), (err) => {

    // In case of a error throw err.
    if (err) throw err;
})

//console.log(JSON.stringify(proof))

console.log('Verify:', tree.verify(proof, leaf, root)) // true


// MerkleTree.print(tree)
