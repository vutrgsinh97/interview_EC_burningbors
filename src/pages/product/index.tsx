import MainLayout from "@/components/layouts/MainLayout";
import { Button } from "antd";
import type { ReactElement } from "react";

const ProductPage: NextPageWithLayout = () => {
  return (
    <div>
      <Button className="btn btn-primary">
        hello
      </Button>
    </div>
  )
};

ProductPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <div className="pro_list">{page}</div>
    </MainLayout>
  );
};

export default ProductPage;
