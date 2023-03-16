import s from "./contributors-list.module.scss";

import Contributor from "./Contributor/Contributor";

const Contributorslist = ({ contributors }) => {
  const list = contributors.map((contributor) => {
    return <Contributor contributor={contributor} />;
  });

  return (
    <div className={s.wrapper}>
      <h4 className={s.title}>Contributors:</h4>
      <ul className={s.list}>{list}</ul>
    </div>
  );
};

export default Contributorslist;
