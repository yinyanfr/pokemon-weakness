import { DamageCalc, TypeIcon, TypeName } from "@/components";
import { colors, isFunction } from "@/lib";
import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import { FloatButton, Button, Divider, Row, Col } from "antd";
import { useId, useMemo, useState } from "react";
import type { FC } from "react";
import { useIntl, useSearchParams } from "umi";

const SIZES = {
  xs: 8,
  sm: 6,
  md: 4,
  lg: 3,
  xl: 3,
  xxl: 3,
};

const Index: FC = () => {
  const id = useId();
  const intl = useIntl();
  const [plus, setPlus] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const selected = useMemo(() => {
    const query = searchParams.get("q");
    if (query?.length) {
      return query.split(" ") as PokemonType[];
    }
    return [];
  }, [searchParams]);
  const setSelected = (
    _selected: PokemonType[] | ((prev: PokemonType[]) => PokemonType[])
  ) => {
    if (isFunction(_selected)) {
      setSearchParams({
        q: (_selected as (prev: PokemonType[]) => PokemonType[])(selected).join(
          " "
        ),
      });
    } else {
      setSearchParams({ q: (_selected as PokemonType[]).join(" ") });
    }
  };

  return (
    <>
      <FloatButton.BackTop />
      <Row wrap gutter={24} align="middle">
        {Object.keys(colors).map((e) => (
          <Col key={`${id}-${e}`} className="margin-bottom-10" {...SIZES}>
            <Button
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
          </Col>
        ))}
      </Row>

      <Row wrap gutter={24} align="middle" justify="center">
        <Col {...SIZES}>
          <Button
            type={plus ? "default" : "link"}
            icon={<PlusOutlined />}
            onClick={() => {
              setPlus((prev) => !prev);
            }}
          >
            {intl.formatMessage({ id: `action.${plus ? "cancel" : "plus"}` })}
          </Button>
        </Col>
        <Col {...SIZES}>
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
        </Col>
      </Row>

      <Divider />

      <section>
        {selected?.length ? (
          <DamageCalc names={selected} setSelected={setSelected} />
        ) : null}
      </section>
    </>
  );
};

export default Index;
