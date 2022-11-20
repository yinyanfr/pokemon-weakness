import type { FC } from "react";
import { colors } from "@/lib";
import styles from "./index.less";

import normal from "@/assets/icons/normal.svg";
import fire from "@/assets/icons/fire.svg";
import water from "@/assets/icons/water.svg";
import electric from "@/assets/icons/electric.svg";
import grass from "@/assets/icons/grass.svg";
import ice from "@/assets/icons/ice.svg";
import fighting from "@/assets/icons/fighting.svg";
import poison from "@/assets/icons/poison.svg";
import ground from "@/assets/icons/ground.svg";
import flying from "@/assets/icons/flying.svg";
import psychic from "@/assets/icons/psychic.svg";
import bug from "@/assets/icons/bug.svg";
import rock from "@/assets/icons/rock.svg";
import ghost from "@/assets/icons/ghost.svg";
import dragon from "@/assets/icons/dragon.svg";
import dark from "@/assets/icons/dark.svg";
import steel from "@/assets/icons/steel.svg";
import fairy from "@/assets/icons/fairy.svg";

interface TypeIconProps {
  name: PokemonType;
  width?: number;
  height?: number;
}

const icons = {
  normal,
  fire,
  water,
  electric,
  grass,
  ice,
  fighting,
  poison,
  ground,
  flying,
  psychic,
  bug,
  rock,
  ghost,
  dragon,
  dark,
  steel,
  fairy,
};

const TypeIcon: FC<TypeIconProps> = ({ name, width = 16, height = 16 }) => {
  return (
    <div className="anticon">
      <div
        className={styles.icon}
        style={{
          backgroundColor: colors[name],
          boxShadow: `0 0 20px ${name}`,
          width,
          height,
        }}
      >
        <img
          className={styles["svg-img"]}
          src={icons[name]}
          alt={name}
          width={Math.floor(width * 0.9)}
          height={Math.floor(height * 0.9)}
        />
      </div>
    </div>
  );
};

export default TypeIcon;
