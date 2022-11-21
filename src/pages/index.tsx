import { DamageCalc, TypeIcon, TypeName } from "@/components";
import "@/global.less";
import { colors } from "@/lib";
import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import { FloatButton, Button, Divider, Space } from "antd";
import { useId, useState } from "react";
import { useIntl } from "umi";

const Index = () => {
  const id = useId();
  const intl = useIntl();
  const [selected, setSelected] = useState<PokemonType[]>([]);
  const [plus, setPlus] = useState(false);

  return (
    <main>
      <FloatButton.BackTop />
      <Space direction="vertical">
        <Space wrap>
          {Object.keys(colors).map((e) => (
            <Button
              key={`${id}-${e}`}
              icon={<TypeIcon name={e as PokemonType} />}
              type={selected?.includes(e as PokemonType) ? "default" : "ghost"}
              onClick={() => {
                if (plus) {
                  setSelected((prev) => {
                    if (prev.includes(e as PokemonType)) {
                      return prev.filter((t) => t !== e);
                    }
                    return [...prev, e as PokemonType];
                  });
                } else {
                  setSelected([e as PokemonType]);
                }
              }}
            >
              <TypeName name={e as PokemonType} />
            </Button>
          ))}
          <Button
            type={plus ? "default" : "link"}
            icon={<PlusOutlined />}
            onClick={() => {
              setPlus((prev) => !prev);
            }}
          >
            {intl.formatMessage({ id: `action.${plus ? "cancel" : "plus"}` })}
          </Button>
          <Button
            danger
            type="link"
            icon={<CloseOutlined />}
            onClick={() => {
              setSelected([]);
            }}
          >
            {intl.formatMessage({ id: "action.reset" })}
          </Button>
        </Space>

        <Divider />

        <section>
          {selected && (
            <DamageCalc names={selected} setSelected={setSelected} />
          )}
        </section>
      </Space>
    </main>
  );
};

export default Index;
