import "../styles/index.css";
import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import SingleProductCall from "../Services/API/SingleProductCall";
import BackToHomeLink from "../Components/BackToHomeLink";

function Product() {
  const { id } = useParams();
  console.log("ID in Product page: ", id);
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
