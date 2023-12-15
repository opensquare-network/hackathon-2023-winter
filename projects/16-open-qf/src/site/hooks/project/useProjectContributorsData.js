import { useServerSideProps } from "@/context/serverSideProps";
import { getProjectContributors } from "@/services/project";
import { useRouter } from "next/router";
import { useState } from "react";
import { useUpdateEffect } from "react-use";

export function useProjectContributorsData(page) {
  const { contributors } = useServerSideProps();
  const [data, setData] = useState(contributors);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { id: roundId, pid: projectId } = router.query;

  useUpdateEffect(() => {
    setLoading(true);

    getProjectContributors(roundId, projectId, {
      page: page - 1,
    })
      .then((resp) => {
        if (resp?.result) {
          setData(resp.result);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page, roundId, projectId]);

  return { data, loading };
}
