"use client";
import "@solana/wallet-adapter-react-ui/styles.css";
import { lusitana } from '@/app/ui/fonts';
import { useConnection, useWallet, useAnchorWallet, AnchorWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect, useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import {initPHI, displayPHI} from "@/app/solanaapi/phi-crud";
import { web3 } from "@coral-xyz/anchor";
 
export default function Home() {
  const { connection } = useConnection();
  const wallet = useWallet();
  const publicKey = wallet?.publicKey;
  const [balance, setBalance] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [age, setAge] = useState<number>(0);
  let phiAccount: web3.Keypair;
  
  const getAirdropOnClick = async () => {
    try {
      if (!publicKey) {
        throw new Error("Wallet is not Connected");
      }
      const [latestBlockhash, signature] = await Promise.all([
        connection.getLatestBlockhash(),
        connection.requestAirdrop(publicKey, 1 * LAMPORTS_PER_SOL),
      ]);
      const sigResult = await connection.confirmTransaction(
        { signature, ...latestBlockhash },
        "confirmed",
      );
      if (sigResult) {
        alert("Airdrop was confirmed!");
      }
    } catch (err) {
      alert("You are Rate limited for Airdrop");
    }
  };
  
  useEffect(() => {
    if (publicKey) {
      (async function getBalanceEvery10Seconds() {
        const newBalance = await connection.getBalance(publicKey);
        setBalance(newBalance / LAMPORTS_PER_SOL);
        setTimeout(getBalanceEvery10Seconds, 10000);
      })();
    }
  }, [publicKey, connection, balance]);

  async function handleCreate(){
    // Add your create logic here
    phiAccount = new web3.Keypair();
    const transactionId = await initPHI(height, weight, age, wallet as AnchorWallet, phiAccount);
    console.log("Init PHI operation Tx:", transactionId);
    alert("Transaction ID: " + transactionId);

  };

  const handleDisplay = () => {
    // Add your update logic here
    const transactionId = displayPHI(wallet as AnchorWallet, phiAccount);
    alert("Transaction ID: " + transactionId);
  };

  const handleDelete = () => {
    // Add your delete logic here
    alert("Delete operation");
  };
  
  return (
    <main className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-xl`}>Solana Programs</h1>
        <div className="flex flex-col items-end">
          <WalletMultiButton />
          {publicKey ? (
            <div className="flex flex-col gap-4 mt-4">
              {/* <h1>Your Public key is: {publicKey?.toString()}</h1>  */}
              <h2>Your Balance is: {balance} SOL</h2>
              <div>
                <button
                  onClick={getAirdropOnClick}
                  type="button"
                  className="flex flex-col gap-4 mt-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  Get Airdrop
                </button>
              </div>
            </div>
          ) : (
            <h1 className="mt-4">Wallet is not connected</h1>
          )}
        </div>
      </div>
      <div className="mt-4 flex justify-between gap-2 md:mt-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl">PHI Crud Operations</h1>
          <div className="flex flex-col gap-4">
          <input
              className="w-full border border-gray-300"
              placeholder="Enter Height"
              onChange={(e) => setHeight(Number(e.target.value))}
              value={height}
            />
            <input
              className="w-full border border-gray-300"
              placeholder="Enter Weight"
              onChange={(e) => setWeight(Number(e.target.value))}
              value={weight}
            />
            <input
              className="w-full border border-gray-300"
              placeholder="Enter Age"
              onChange={(e) => setAge(Number(e.target.value))}
              value={age}
            />
            <button
              onClick={handleCreate}
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Create PHI
            </button>
            <button
              onClick={handleDisplay}
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Display
            </button>
            <button
              onClick={handleDelete}
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
