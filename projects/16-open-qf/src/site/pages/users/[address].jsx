import MainContainer from "@/components/containers/main";
import Backdrop from "@/components/layouts/backdrop";
import UserLayout from "@/components/layouts/userLayout";
import UserInfo from "@/components/user/info";
import UserTabs from "@/components/user/tabs";
import UserTabsContent from "@/components/user/tabs/content";
import {
  getRoundCategoriesList,
  getRoundProjectsList,
} from "@/services/rounds";
import { loadCommonServerSideProps, withCommonPageWrapper } from "@/utils/ssr";

const UserPage = withCommonPageWrapper(() => {
  return (
    <UserLayout>
      <Backdrop className="static h-auto top-0 z-0">
        <MainContainer className="pt-10 pb-0 space-y-10 max-sm:pb-0">
          <UserInfo />

          <UserTabs />
        </MainContainer>
      </Backdrop>

      <MainContainer className="pt-5 pb-10">
        <UserTabsContent />
      </MainContainer>
    </UserLayout>
  );
});

export default UserPage;

export async function getServerSideProps(context) {
  const [{ result: projectsResult }, { result: categories }] =
    await Promise.all([
      getRoundProjectsList(1, { page_size: 25 }),
      getRoundCategoriesList(1),
    ]);

  const projects = projectsResult?.items ?? [];
  return {
    props: {
      ...loadCommonServerSideProps(context),
      projects,
      categories,
    },
  };
}
