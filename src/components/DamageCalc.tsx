import { getType } from "@/services";
import { PlusOutlined } from "@ant-design/icons";
import { useRequest } from "ahooks";
import { Button, message, Space, Spin, Table } from "antd";
import { FC, Dispatch, SetStateAction, useMemo } from "react";
import { useEffect, useId, Fragment } from "react";
import { FormattedMessage, useIntl } from "umi";
import TypeIcon from "./TypeIcon";
import TypeName from "./TypeName";
import styles from "./index.less";

import sword from "@/assets/icons/crossed-swords.svg";
import shield from "@/assets/icons/checked-shield.svg";

interface DamageCalcProps {
  names: PokemonType[];
  setSelected?: Dispatch<SetStateAction<PokemonType[]>>;
}

const DamageCalc: FC<DamageCalcProps> = ({ names = [], setSelected }) => {
  const id = useId();
  const intl = useIntl();
  const { data, error, loading } = useRequest(() => getType(names), {
    refreshDeps: [JSON.stringify(names)],
  });

  const display = useMemo(() => {
    if (!names?.length) return [];
    if (names.length === 1) return ["from", "to"];
    return ["from"];
  }, [names]);

  const columns = (direction: "from" | "to") => [
    {
      key: `${id}-multiplier`,
      dataIndex: "multiplier",
      title: intl.formatMessage({ id: "table.multiplier" }),
      render: (text: string) => {
        let className = "double";
        const multiplier = parseFloat(text);
        if (multiplier === 0) {
          className = "zero";
        } else if (multiplier < 1) {
          className = "half";
        }
        return (
          <span className={className}>
            <FormattedMessage id="damage.times" values={{ times: text }} />
          </span>
        );
      },
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
                setSelected?.([e]);
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
        {names?.map((name, i) => (
          <Fragment key={`${id}-title-${name}`}>
            <TypeIcon name={name} width={24} height={24} />{" "}
            <TypeName name={name} />{" "}
            {i < names.length - 1 ? (
              <>
                <PlusOutlined />{" "}
              </>
            ) : null}
          </Fragment>
        ))}
      </h2>

      <Space direction="vertical">
        {display.map((e) => (
          <div key={`${id}-${e}`}>
            <h3>
              {
                <div className="anticon">
                  <div className={styles.icon}>
                    <img
                      className={styles["svg-img"]}
                      src={e === "from" ? shield : sword}
                      alt={e}
                      width={16}
                      height={16}
                    />
                  </div>
                </div>
              }{" "}
              {intl.formatMessage({ id: `multiplier.${e}` })}
            </h3>
            <Table<TableData>
              rowKey="multiplier"
              loading={loading}
              columns={columns(e as "from" | "to")}
              dataSource={data?.[e as "from" | "to"]}
              pagination={false}
            />
          </div>
        ))}
      </Space>
    </Spin>
  );
};

export default DamageCalc;
