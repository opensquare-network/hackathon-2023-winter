import ConnectWalletButton from "./connectWalletButton";
import { useSelector } from "react-redux";
import { accountSelector } from "@/store/reducers/accountSlice";
import ConnectedAccount from "../user/connectedAccount";

export default function Connect() {
  const account = useSelector(accountSelector);
  console.log(account);

  return <div>{account ? <ConnectedAccount /> : <ConnectWalletButton />}</div>;
}
