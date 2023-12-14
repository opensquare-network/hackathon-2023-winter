import Card from "@/components/card";
import FormItem from "@/components/form/item";
import { Input, ChainIcon } from "@osn/common-ui";

export default function ApplyProjectDonationForm() {
  return (
    <Card>
      <FormItem
        label="Donation Address"
        description="Please enter the Polkadot mainnet address for receiving funds"
        htmlFor="donation"
      >
        <Input id="donation" suffix={<ChainIcon chainName="polkadot" />} />
      </FormItem>
    </Card>
  );
}
