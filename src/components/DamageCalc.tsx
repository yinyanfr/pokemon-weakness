import { convertTableData } from "@/lib";
import { getType } from "@/services";
import { useRequest } from "ahooks";
import { Button, message, Space, Spin, Table } from "antd";
import type { FC, Dispatch, SetStateAction } from "react";
import { useEffect, useId } from "react";
import { useIntl } from "umi";
import TypeIcon from "./TypeIcon";
import TypeName from "./TypeName";

interface DamageCalcProps {
  name: PokemonType;
  setSelected?: Dispatch<SetStateAction<PokemonType | undefined>>;
}

const DamageCalc: FC<DamageCalcProps> = ({ name, setSelected }) => {
  const id = useId();
  const intl = useIntl();
  const { data, error, loading } = useRequest(() => getType(name), {
    refreshDeps: [name],
  });

  const columns = (direction: "from" | "to") => [
    {
      key: `${id}-multiplier`,
      dataIndex: "multiplier",
      title: intl.formatMessage({ id: "table.multiplier" }),
      render: (text: string) => (
        <span className={text}>
          {intl.formatMessage({ id: `damage.${text}` })}
        </span>
      ),
    },
    {
      key: `${id}-types`,
      dataIndex: "types",
      title: intl.formatMessage({ id: "table.types" }),
      render: (_: string, record: TableData) => (
        <Space wrap>
          {record.types.map((e) => (
            <Button
              key={`${id}-${record.multiplier}-${direction}-${e}`}
              icon={<TypeIcon name={e} />}
              loading={loading}
              disabled={loading}
              onClick={() => {
                setSelected?.(e);
              }}
            >
              <TypeName name={e} />
            </Button>
          ))}
        </Space>
      ),
    },
  ];

  useEffect(() => {
    if (error) {
      message.error(intl.formatMessage({ id: "msg.error" }));
    }
  }, [error]);
  return (
    <Spin spinning={loading}>
      <h2>
        <TypeIcon name={name} width={24} height={24} /> <TypeName name={name} />
      </h2>

      <Space direction="vertical">
        {["from", "to"].map((e) => (
          <div key={`${id}-${e}`}>
            <h3>{intl.formatMessage({ id: `multiplier.${e}` })}</h3>
            <Table<TableData>
              rowKey="multiplier"
              columns={columns(e as "from" | "to")}
              dataSource={convertTableData(data, e as "from" | "to")}
              pagination={false}
            />
          </div>
        ))}
      </Space>
    </Spin>
  );
};

export default DamageCalc;
