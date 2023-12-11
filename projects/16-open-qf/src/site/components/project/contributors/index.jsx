import CardTitle from "../title";
import ContributionsList from "./list";

export default function Contributions() {
  return (
    <div className="flex flex-col p-[32px] shadow-shadow-card-default">
      <CardTitle title="Contributors" count="2" />
      <ContributionsList />
    </div>
  );
}
