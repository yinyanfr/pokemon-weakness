import { SetLang } from "@/components";
import { GithubOutlined } from "@ant-design/icons";
import Darkreader from "react-darkreader";
import { Outlet, useIntl } from "umi";
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
        </ul>
        <ul>
          <li>
            <a
              href="https://github.com/yinyanfr/pokemon-weakness"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubOutlined />
            </a>
          </li>
          <li>
            <Darkreader />
          </li>
          <li>
            <SetLang />
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
