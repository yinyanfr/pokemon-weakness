import { TranslationOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import type { FC } from "react";
import { setLocale } from "umi";

const langs: Record<string, string> = {
  "en-US": "English",
  "fr-FR": "Français",
  "ja-JP": "日本語",
  "zh-CN": "简体中文",
};

const SetLang: FC = () => {
  return (
    <Dropdown
      trigger={["hover", "click"]}
      menu={{
        items: Object.keys(langs).map((e) => ({
          key: e,
          label: (
            <a
              onClick={(evt) => {
                evt.preventDefault();
                setLocale(e);
              }}
            >
              {langs[e]}
            </a>
          ),
        })),
      }}
    >
      <TranslationOutlined />
    </Dropdown>
  );
};

export default SetLang;
