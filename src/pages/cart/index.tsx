import { withAuth } from "@/components/hoc/withAuth";
import MainLayout from "@/components/layouts/MainLayout";
import type { ReactElement } from "react";

const ProductPage: NextPageWithLayout = () => {
  return <p>cart page</p>;
};

ProductPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <div className="cart">{page}</div>
    </MainLayout>
  );
};

export default withAuth(ProductPage);
