// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DFAEvidenceStorage {
    struct User {
        bytes32 idHash;
        bytes32 pwHash;
        bytes32 scHash;
    }

    struct Evidence {
        string ipfsHash;
        uint256 timestamp;
    }

    mapping(address => User) public users;
    mapping(address => Evidence[]) private userEvidence;

    function register(bytes32 idHash, bytes32 pwHash, bytes32 scHash) public {
        users[msg.sender] = User(idHash, pwHash, scHash);
    }

    function authenticate(bytes32 idHash, bytes32 pwHash, bytes32 scHash) public view returns (bool) {
        User memory u = users[msg.sender];
        return u.idHash == idHash && u.pwHash == pwHash && u.scHash == scHash;
    }

    function storeEvidenceHash(string memory ipfsHash) public {
        userEvidence[msg.sender].push(Evidence({
            ipfsHash: ipfsHash,
            timestamp: block.timestamp
        }));
    }

    function getEvidenceHashes() public view returns (string[] memory) {
        uint256 count = userEvidence[msg.sender].length;
        string[] memory hashes = new string[](count);
        for (uint256 i = 0; i < count; i++) {
            hashes[i] = userEvidence[msg.sender][i].ipfsHash;
        }
        return hashes;
    }

    function getEvidenceTimestamps() public view returns (uint256[] memory) {
        uint256 count = userEvidence[msg.sender].length;
        uint256[] memory timestamps = new uint256[](count);
        for (uint256 i = 0; i < count; i++) {
            timestamps[i] = userEvidence[msg.sender][i].timestamp;
        }
        return timestamps;
    }
}