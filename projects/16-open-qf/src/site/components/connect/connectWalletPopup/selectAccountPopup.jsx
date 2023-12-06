import Modal from "@osn/common-ui/es/Modal";
import { Button } from "@/components/button";
import { PROJECT_NAME } from "@/utils/constants";
import { useCallback, useEffect, useState } from "react";
import useInjectedWeb3 from "./useInjectedWeb3";
import { useIsMounted } from "@osn/common";
import { useDispatch } from "react-redux";

function ExtensionAccountSelect({ walletExtensionType }) {
  const dispatch = useDispatch();
  const isMounted = useIsMounted();
  const { injectedWeb3 } = useInjectedWeb3();
  const [accounts, setAccounts] = useState([]);

  console.log(accounts);

  const loadPolkadotAccounts = useCallback(
    async (walletExtensionType) => {
      setAccounts([]);
      const extension = injectedWeb3?.[walletExtensionType];
      if (!extension) {
        return;
      }

      try {
        const wallet = await extension.enable(PROJECT_NAME);
        console.log({ wallet });
        let extensionAccounts = await wallet.accounts?.get();
        console.log({ extensionAccounts });

        extensionAccounts = extensionAccounts.filter(
          (acc) => acc.type !== ChainTypes.ETHEREUM,
        );

        if (isMounted.current) {
          setAccounts(extensionAccounts);
        }
      } catch (e) {
        // dispatch(newErrorToast(e.message));
      }
    },
    [dispatch, injectedWeb3, setAccounts, isMounted],
  );

  useEffect(() => {
    if (!walletExtensionType) {
      return;
    }

    loadPolkadotAccounts(walletExtensionType);
  }, [walletExtensionType, loadPolkadotAccounts]);
}

export default function SelectAccountPopup({
  open,
  setOpen,
  walletExtensionType,
}) {
  const footer = (
    <div>
      <Button>Connect</Button>
    </div>
  );

  return (
    <Modal open={open} setOpen={setOpen} footer={footer}>
      <div className="flex flex-col gap-[20px]">
        <h2 className="text-2xl font-bold">Connect Wallet</h2>
        <ExtensionAccountSelect walletExtensionType={walletExtensionType} />
      </div>
    </Modal>
  );
}
