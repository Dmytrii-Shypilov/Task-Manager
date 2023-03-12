import s from "./header.module.scss";

import Container from "../Container";
import UserAuth from "./UserAuth";

const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.wrapper}>
          <span className={s.logo}>TaskManager</span>
          <UserAuth />
        </div>
      </Container>
    </header>
  );
};

export default Header;
