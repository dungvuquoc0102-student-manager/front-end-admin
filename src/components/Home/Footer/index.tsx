import { Typography } from "antd";

import styles from "./Footer.module.scss";

const Footer = () => {
  const phoneNumber = "+84962984562";
  const policyUrl = "https://www.google.com";
  const termUrl = "https://www.google.com";

  return (
    <div className={styles.wrapper}>
      <Typography.Link href={"tel:" + phoneNumber}>Call us</Typography.Link>
      <Typography.Link href={policyUrl} target="_blank">
        Privacy Policy
      </Typography.Link>
      <Typography.Link href={termUrl} target={"_blank"}>
        Terms of Use
      </Typography.Link>
    </div>
  );
};

export default Footer;
