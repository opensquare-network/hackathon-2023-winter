import { useSelector } from "react-redux";
import ConnectedAccount from "../user/connectedAccount";
import ConnectWalletButton from "./connectWalletButton";
import { useAccount } from "@/context/account";

export default function Connect() {
  const account = useAccount();
  console.log(account);

  return <div>{account ? <ConnectedAccount /> : <ConnectWalletButton />}</div>;
}
