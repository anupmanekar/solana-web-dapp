import AppWalletProvider from "@/app/ui/solana/AppWalletProvider"; 

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <div>
        <AppWalletProvider>{children}</AppWalletProvider>
      </div>
  );
}