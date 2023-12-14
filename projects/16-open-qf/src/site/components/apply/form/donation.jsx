import Card from "@/components/card";
import FormItem from "@/components/form/item";
import { Input, ChainIcon } from "@osn/common-ui";
import { noop } from "lodash-es";

export default function ApplyProjectDonationForm({
  formValue = {},
  setFormValue = noop,
}) {
  return (
    <Card>
      <FormItem
        label="Donation Address"
        description="Please enter the Polkadot mainnet address for receiving funds"
        htmlFor="donation"
      >
        <Input
          id="donation"
          suffix={<ChainIcon chainName="polkadot" />}
          value={formValue.donation}
          onChange={(e) => {
            setFormValue({ ...formValue, donation: e.target.value });
          }}
        />
      </FormItem>
    </Card>
  );
}
