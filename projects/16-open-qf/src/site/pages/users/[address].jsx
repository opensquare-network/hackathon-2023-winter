import MainContainer from "@/components/containers/main";
import Backdrop from "@/components/layouts/backdrop";
import UserLayout from "@/components/layouts/userLayout";
import UserTabs from "@/components/user/tabs";
import UserTabsContent from "@/components/user/tabs/content";
import { withCommonPageWrapper } from "@/utils/ssr";
import { useRouter } from "next/router";

const UserPage = withCommonPageWrapper(() => {
  const router = useRouter();
  router;

  return (
    <UserLayout>
      <Backdrop className="static h-auto top-0 z-0">
        <MainContainer className="pt-10 pb-0">
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
