import { useState } from "react";
import ApplyProjectDonationForm from "./donation";
import ApplyProjectInfoForm from "./info";

export default function ApplyProjectForm() {
  const [formValue, setFormValue] = useState({
    name: "",
    summary: "",
    category: "",
    links: [""],
    description: "",
    bannerCid: "",
    logoCid: "",
    donation: "",
  });

  return (
    <div className="space-y-5">
      <ApplyProjectInfoForm formValue={formValue} setFormValue={setFormValue} />
      <ApplyProjectDonationForm
        formValue={formValue}
        setFormValue={setFormValue}
      />
    </div>
  );
}
