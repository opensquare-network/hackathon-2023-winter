import { useState } from "react";
import SelectAccountPopup from "./selectAccountPopup";
import SelectWalletPopup from "./selectWalletPopup";

export default function ConnectWalletPopup({ open, setOpen }) {
  const [walletExtensionType, setWalletExtensionType] = useState();
  console.log(walletExtensionType);

  if (walletExtensionType) {
    return (
      <SelectAccountPopup
        open={open}
        setOpen={setOpen}
        walletExtensionType={walletExtensionType}
      />
    );
  }

  return (
    <SelectWalletPopup
      open={open}
      setOpen={setOpen}
      setWalletExtensionType={setWalletExtensionType}
    />
  );
}
