import MainContainer from "../containers/main";
import AppLayout from "./appLayout";
import { HeaderBg } from "./common";

export default function DetailLayout({
  children,
  breadcrumb,
  sidebar,
  ...props
}) {
  return (
    <AppLayout {...props}>
      <HeaderBg>
        <MainContainer className="pt-10">
          <div className="mb-[20px]">{breadcrumb}</div>
          <div className="flex gap-[20px]">
            <div className="flex grow">{children}</div>
            <div className="max-md:hidden min-w-[392px]">{sidebar}</div>
          </div>
        </MainContainer>
      </HeaderBg>
    </AppLayout>
  );
}
