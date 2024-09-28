const questionSet = [
    {
        question: "What is the primary security concern with using keccak256 for generating random numbers?",
        choices: [
            "It is computationally expensive",
            "It can be easily predicted",
            "It does not handle large data",
            "It is not deterministic"
        ],
        answer: 1
    },
    {
        question: "What does it mean when a smart contract is reentrant?",
        choices: [
            "The contract allows unlimited gas usage",
            "The contract can be called again after being terminated",
            "The contract can be executed multiple times in parallel",
            "The contract allows external calls during execution, which can lead to unexpected results"
        ],
        answer: 3
    },
    {
        question: "What is the primary role of Ethereum’s gas limit?",
        choices: [
            "To set a maximum computation that a block can process",
            "To restrict the total Ether sent in a transaction",
            "To limit the number of transactions per block",
            "To prevent miners from changing transaction fees"
        ],
        answer: 0
    },
    {
        question: "What is one major limitation of smart contracts after deployment?",
        choices: [
            "They cannot interact with other smart contracts",
            "They can be updated easily by the contract owner",
            "They automatically scale with application growth",
            "Their code is immutable i.e. it cannot be changed."
        ],
        answer: 3
    },
    {
        question: "What is the purpose of Ethereum's account abstraction layer?",
        choices: [
            "To abstract gas calculations from user interfaces",
            "To differentiate between externally owned accounts (EOAs) and smart contracts",
            "To facilitate communication between Ethereum and off-chain systems",
            "To enable users to interact with decentralized applications"
        ],
        answer: 1
    },
    {
        question: "Which method should be used to handle complex data structures in Solidity effectively?",
        choices: [
            "Arrays",
            "Enums",
            "Structs",
            "Mappings"
        ],
        answer: 2
    },
    {
        question: "What is the difference between a call and a transaction in Ethereum?",
        choices: [
            "A call is read-only and free, while a transaction modifies the blockchain state and requires gas",
            "A call requires gas while a transaction is free",
            "Both require gas but a call is processed faster",
            "A call modifies the blockchain, while a transaction is only read-only"
        ],
        answer: 0
    },
]

export default questionSet;