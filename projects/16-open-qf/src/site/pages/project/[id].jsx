import ListLayout from "@/components/layouts/listLayout";
import { ROUND_LIST_DATA } from "@/fixtures/roundList";
import { find } from "lodash-es";
import { useRouter } from "next/router";
import ExploreProjectInfo from "@/components/project/info";

export default function ProjectPage() {
  const router = useRouter();
  const id = Number(router.query.id);

  const data = find(ROUND_LIST_DATA, { id }) ?? {};

  return (
    <ListLayout title="Explore Projects" description="How OpenQF Works">
      <ExploreProjectInfo data={data} />
    </ListLayout>
  );
}
