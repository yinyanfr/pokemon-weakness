import { colors } from "@/lib";
import type { FC } from "react";
import { useIntl } from "umi";

interface TypeNameProps {
  name: PokemonType;
}

const TypeName: FC<TypeNameProps> = ({ name }) => {
  const intl = useIntl();

  return (
    <span style={{ color: colors[name] }}>
      {intl.formatMessage({ id: `type.${name}` })}
    </span>
  );
};

export default TypeName;
