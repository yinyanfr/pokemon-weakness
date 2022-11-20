import { GithubOutlined } from "@ant-design/icons";
import { Outlet, SelectLang, useIntl } from "umi";
import styles from "./index.less";

export default function Layout() {
  const intl = useIntl();

  return (
    <div className={styles.navs}>
      <nav>
        <ul>
          <li>
            <p>{intl.formatMessage({ id: "layout.title" })}</p>
          </li>
          <li>
            <a
              href="https://github.com/yinyanfr/pokemon-weakness"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubOutlined /> GitHub
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <SelectLang className={styles.lang} />
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
