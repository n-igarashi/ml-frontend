import { useTranslation } from "react-i18next";
import "./Home.scss";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2>{t("title")}</h2>
      <p>{t("description.part1")}</p>
      <p>{t("description.part2")}</p>
    </>
  );
};
