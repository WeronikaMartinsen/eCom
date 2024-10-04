import "../styles/index.css";
import Layout from "../Layout/Layout";
import SingleProductCall from "../Services/API/SingleProductCall";
import BackToHomeLink from "../Components/BackToHomeLink";

function Product() {
  return (
    <Layout>
      <main>
        <BackToHomeLink />
        <SingleProductCall />
      </main>
    </Layout>
  );
}

export default Product;
