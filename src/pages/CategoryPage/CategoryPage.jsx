import s from "./category-page.module.scss";

import Container from "../../components/Container";

const CategoryPage = () => {
  return (
    <section>
      <Container>
        <div className="page-section">
          <h2 className="page-title">Category</h2>
          <div className={s.tasksWrapper}></div>
        </div>
      </Container>
    </section>
  );
};

export default CategoryPage;
