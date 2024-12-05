/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/anchor_lessons.json`.
 */
export type AnchorLessons = {
  "address": "7QpTNRsu5Cm6ZDSWofgw25D2dfPZHvK7SsJCDbq84pjw",
  "metadata": {
    "name": "anchorLessons",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "displayPhi",
      "discriminator": [
        20,
        149,
        6,
        219,
        32,
        128,
        25,
        58
      ],
      "accounts": [
        {
          "name": "phiData",
          "writable": true,
          "signer": true
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "initPhi",
      "discriminator": [
        94,
        179,
        41,
        50,
        59,
        217,
        144,
        65
      ],
      "accounts": [
        {
          "name": "phiData",
          "writable": true,
          "signer": true
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "height",
          "type": "u64"
        },
        {
          "name": "weight",
          "type": "u64"
        },
        {
          "name": "age",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initialize",
      "discriminator": [
        175,
        175,
        109,
        31,
        13,
        152,
        155,
        237
      ],
      "accounts": [
        {
          "name": "newAccount",
          "writable": true,
          "signer": true
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "myData",
      "discriminator": [
        145,
        158,
        1,
        176,
        150,
        99,
        252,
        226
      ]
    },
    {
      "name": "myPhiData",
      "discriminator": [
        140,
        77,
        198,
        240,
        178,
        119,
        129,
        249
      ]
    }
  ],
  "types": [
    {
      "name": "myData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "data",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "myPhiData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "height",
            "type": "u64"
          },
          {
            "name": "weight",
            "type": "u64"
          },
          {
            "name": "age",
            "type": "u64"
          }
        ]
      }
    }
  ]
};
