import s from "./contributors-panel.module.scss";

import ContributorsList from "../ContributorsList";

const ContributorsPanel = ({ contributors }) => {
 
  return (
    <div className={s.panel}>
      <h4 className={s.title}>Contributors:</h4>
        <ContributorsList contributors={contributors} />
    </div>
  );
};

export default ContributorsPanel;
