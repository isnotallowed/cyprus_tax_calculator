import { Wallet } from "@tonconnect/sdk";
import { useEffect, useState } from "react";
import { connector } from "../../connector";

export function useTonWallet() {
  const [wallet, setWallet] = useState<Wallet | null>(connector.wallet);

  useEffect(() => {
    console.log("kek");
  }, []);

  useEffect(() => connector.onStatusChange(setWallet, console.error), []);

  return wallet;
}
