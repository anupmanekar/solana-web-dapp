import { Program, AnchorProvider, web3, BN } from "@coral-xyz/anchor"
import { AnchorLessons } from "@/app/solanaapi/types/anchor_lessons";
import {
  connection,
  commitmentLevel,
  crudPhiProgInterface,
  crudPhiProgram,
} from "@/app/lib/solana-utils";
import { AnchorWallet } from "@solana/wallet-adapter-react";


export async function initPHI(
  height: number,
  weight: number,
  age: number,
  owner: AnchorWallet,
  phiAccount: web3.Keypair
) {
  const provider = new AnchorProvider(connection, owner, {
    preflightCommitment: commitmentLevel,
  });

  if (!provider) return;

  /* create the program interface combining the idl, program Id, and provider */
  const program = new Program(
    crudPhiProgInterface,
    provider
  ) as Program<AnchorLessons>;
  try {
    /* interact with the program via rpc */
    const tx = await program.methods
                      .initPhi(new BN(height), new BN(weight), new BN(age))
                      .accountsPartial({ phiData: phiAccount.publicKey, signer: owner.publicKey, systemProgram: web3.SystemProgram.programId})
                      .signers([phiAccount])
                      .rpc();
    console.log("Transaction signature: ", tx);
    return tx;
  } catch (err) {
    console.log("Transaction error: ", err);
    return;
  }
}

export async function displayPHI(
  owner: AnchorWallet,
  phiAccount: web3.Keypair
) {
  const provider = new AnchorProvider(connection, owner, {
    preflightCommitment: commitmentLevel,
  });

  if (!provider) return;

  /* create the program interface combining the idl, program Id, and provider */
  const program = new Program(
    crudPhiProgInterface,
    provider
  ) as Program<AnchorLessons>;
  try {
    /* interact with the program via rpc */
    const tx = await program.methods
                      .displayPhi()
                      .accountsPartial({ phiData: phiAccount.publicKey, signer: owner.publicKey, systemProgram: web3.SystemProgram.programId})
                      .signers([phiAccount])
                      .rpc();
    console.log("Transaction signature: ", tx);
    return tx;
  } catch (err) {
    console.log("Transaction error: ", err);
    return;
  }
}