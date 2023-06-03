import s from "./contributors-list.module.scss";

import Contributor from "./Contributor/Contributor";

const ContributorsList = ({ contributors }) => {
  const list = contributors.map((contributor) => {
    return <Contributor contributor={contributor} />;
  });

  return <ul className={s.list}>{list}</ul>;
};

export default ContributorsList;
