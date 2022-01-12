// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract NFTmonGame {
    struct CharacterAttributes {
        uint characterIndex;
        string name;
        string imageUrl;
        uint health;
        uint maxHealth;
        uint attackDamage;
    }

    CharacterAttributes[] defaultCharacters;
    constructor(
        string[] memory characterNames,
        string[] memory characterImages,
        uint[] memory characterHealth,
        uint[] memory characterAttackDamage
    ) {
        for (uint i = 0; i < characterNames.length; i+=1) {
            defaultCharacters.push(CharacterAttributes({
                characterIndex: i,
                name: characterNames[i],
                imageUrl: characterImages[i],
                health: characterHealth[i],
                maxHealth: characterHealth[i],
                attackDamage: characterAttackDamage[i]
            }));
            CharacterAttributes memory c = defaultCharacters[i];
            console.log("Done initializing %s w/ HP %s, img %s", c.name, c.health, c.imageUrl);

        }
    }
}