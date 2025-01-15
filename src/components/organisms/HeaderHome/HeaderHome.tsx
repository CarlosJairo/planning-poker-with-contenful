import { useSelector } from "react-redux";
import { FichaPoker } from "../../atoms/Icons";
import "./HeaderHome.scss";
import { RootState } from "../../../app/store";
const HeaderHome: React.FC = () => {
  const { content } = useSelector((state: RootState) => state.content)

  return (
    <header className="o-header-home">
      <div className="o-header-home__logo-subtitulo-ctn">
        <FichaPoker className={"o-header-home__chip-poker"} />
        <h2>{content.headerTitle}</h2>
      </div>
    </header>
  );
};

export default HeaderHome;
