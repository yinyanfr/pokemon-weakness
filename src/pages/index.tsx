import { DamageCalc, TypeIcon, TypeName } from "@/components";
import "@/global.less";
import { colors } from "@/lib";
import { FloatButton, Button, Divider, Space } from "antd";
import { useId, useState } from "react";

const Index = () => {
  const id = useId();
  const [selected, setSelected] = useState<PokemonType>();

  return (
    <>
      <FloatButton.BackTop />
      <Space direction="vertical">
        <Space wrap>
          {Object.keys(colors).map((e) => (
            <Button
              key={`${id}-${e}`}
              icon={<TypeIcon name={e as PokemonType} />}
              type={e !== selected ? "ghost" : "default"}
              onClick={() => {
                setSelected(e as PokemonType);
              }}
            >
              <TypeName name={e as PokemonType} />
            </Button>
          ))}
        </Space>

        <Divider />

        <section>
          {selected && <DamageCalc name={selected} setSelected={setSelected} />}
        </section>
      </Space>
    </>
  );
};

export default Index;
