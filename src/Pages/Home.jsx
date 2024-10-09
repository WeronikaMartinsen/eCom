import { useState } from "react";
import Layout from "../Layout/Layout";
import HeroSection from "../Components/HeroSection";
import ProductList from "../Services/API/ProductList";

function Home() {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (input) => {
    setSearchInput(input);
  };

  return (
    <Layout>
      <HeroSection onSearch={handleSearch} />
      <ProductList searchInput={searchInput} />
    </Layout>
  );
}

export default Home;
