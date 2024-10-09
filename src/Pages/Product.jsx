import "../styles/index.css";
import Layout from "../Layout/Layout";
import SingleProduct from "../Services/API/SingleProduct";
import BackToHomeLink from "../Components/BackToHomeLink";

function Product() {
  return (
    <Layout>
      <main>
        <BackToHomeLink />
        <SingleProduct />
      </main>
    </Layout>
  );
}

export default Product;
