import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { AnchorLessons } from "../target/types/anchor_lessons";
import * as web3 from "@solana/web3.js";

describe("anchor-lessons", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());
  const program = anchor.workspace.AnchorLessons as Program<AnchorLessons>;

  it("Is initialized!", async () => {
    // Add your test here.
    const newAccountKp = new web3.Keypair();
    const wallet = anchor.AnchorProvider.env().wallet.publicKey;
    console.log("Your public key", wallet);
    console.log("Your new account public key", newAccountKp.publicKey);
    const tx = await program.methods
                      .initialize()
                      .accountsPartial({ newAccount: newAccountKp.publicKey, signer: wallet, systemProgram: web3.SystemProgram.programId})
                      .signers([newAccountKp])
                      .rpc();
    console.log("Your transaction signature", tx);
  });

  it("can init and display PHI", async () => {
    // Add your test here.
    const newAccountKp = new web3.Keypair();
    const wallet = anchor.AnchorProvider.env().wallet.publicKey;
    console.log("Your public key", wallet);
    console.log("Your new account public key", newAccountKp.publicKey);
    const tx = await program.methods
                      .initPhi(new anchor.BN(170), new anchor.BN(65), new anchor.BN(30))
                      .accountsPartial({ phiData: newAccountKp.publicKey, signer: wallet, systemProgram: web3.SystemProgram.programId})
                      .signers([newAccountKp])
                      .rpc();
    console.log("Your transaction signature", tx);
  });

  it("will not display PHI if context is not reused", async () => {
    // Add your test here.
    const newAccountKp = new web3.Keypair();
    const wallet = anchor.AnchorProvider.env().wallet.publicKey;
    console.log("Your public key", wallet);
    console.log("Your new account public key", newAccountKp.publicKey);
    const tx = await program.methods
                      .displayPhi()
                      .accountsPartial({ phiData: newAccountKp.publicKey, signer: wallet, systemProgram: web3.SystemProgram.programId})
                      .signers([newAccountKp])
                      .rpc();
    console.log("Your transaction signature", tx);
  });

  it("will display PHI if context is reused", async () => {
    // Add your test here.
    const newAccountKp = new web3.Keypair();
    const wallet = anchor.AnchorProvider.env().wallet.publicKey;
    console.log("Your public key", wallet);
    console.log("Your new account public key", newAccountKp.publicKey);
    const initPhiTx = await program.methods
                      .initPhi(new anchor.BN(170), new anchor.BN(65), new anchor.BN(30))
                      .accountsPartial({ phiData: newAccountKp.publicKey, signer: wallet, systemProgram: web3.SystemProgram.programId})
                      .signers([newAccountKp])
                      .rpc();
    console.log("Initialized PHI Tx:", initPhiTx);

    const tx = await program.methods
                      .displayPhi()
                      .accountsPartial({ phiData: newAccountKp.publicKey, signer: wallet, systemProgram: web3.SystemProgram.programId})
                      .signers([newAccountKp])
                      .rpc();
    console.log("Only Display PHI Tx:", tx);
  });

});
