"use client";
import { useEffect } from "react";
import { connector } from "../../../../connector";
import { useTonWallet } from "@/hooks/useTonWallet";

export const TonConnect = () => {
  const wallet = useTonWallet();
  useEffect(() => {
    if (typeof window !== "undefined") {
      connector.restoreConnection();
    }
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      connector.onStatusChange((wallet) => {
        console.log(wallet);
        console.log("kek2");
      }, console.error);
    }
  }, []);
  useEffect(() => {
    return () => {
      console.log("kek3");
    };
  }, []);

  const connect = () => {
    const walletConnectionSource = {
      universalLink: "https://app.tonkeeper.com/ton-connect",
      bridgeUrl: "https://bridge.tonapi.io/bridge",
    };

    const universalLink = connector.connect(walletConnectionSource);
    window?.ReactNativeWebView?.postMessage("testtest");
    window.open(universalLink);
  };
  return (
    <div>
      <p>Ton connector</p>
      <p>{wallet?.account.address}</p>
      <button onClick={connect}>connect</button>
    </div>
  );
};
