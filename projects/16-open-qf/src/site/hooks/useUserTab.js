import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import qs from "querystring";

export function useUserTab() {
  const items = [
    {
      value: "qfpower",
      content: "QFpower",
    },
    {
      value: "contributions",
      content: "Contributions",
      activeCount: 2,
    },
    {
      value: "projects",
      content: "Projects",
      activeCount: 3,
    },
  ];

  const router = useRouter();
  const address = router.query.address;
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || items[0].value;

  function setTab(tab) {
    router.replace(
      {
        pathname: `/users/${address}`,
        search: `?${qs.stringify({
          ...qs.parse(searchParams.toString()),
          tab,
        })}`,
      },
      null,
      { shallow: true },
    );
  }

  return [tab, setTab, items];
}
