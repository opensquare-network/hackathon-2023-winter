import { Footer } from "@osn/common-ui";
import Header from "../header";

export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">{children}</div>

      <div className="[&_footer>div:first-child]:!max-w-7xl [&_footer>div:first-child]:sm:px-8">
        <Footer />
      </div>
    </div>
  );
}
