import { PageContainer } from "@ant-design/pro-components";
import { Button, Result } from "antd";
import type { FC } from "react";
import { useNavigate } from "umi";

const NotFound: FC = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <Result
        status="404"
        title="404"
        subTitle="Page Not Found"
        extra={
          <Button
            type="primary"
            onClick={() => {
              navigate("/");
            }}
          >
            Back Home
          </Button>
        }
      />
    </PageContainer>
  );
};

export default NotFound;
