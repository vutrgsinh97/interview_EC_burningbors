import { withAuth } from "@/components/hoc/withAuth";
import MainLayout from "@/components/layouts/MainLayout";
import type { ReactElement } from "react";

const CheckoutPage: NextPageWithLayout = () => {
  return <p>checkout page</p>;
};

CheckoutPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <div className="checkout">{page}</div>
    </MainLayout>
  );
};

export default withAuth(CheckoutPage);
