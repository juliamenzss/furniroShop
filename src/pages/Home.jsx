import { BannerHeader } from "../components/BannerHeader";
import { ServiceBar } from "../components/ServiceBar";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import { ProductCard } from "../components/ProductCard";
import { FilterToolbar } from "../components/FilterToolbar";
import { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState({ products: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/product');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Menu />
      <BannerHeader />
      <FilterToolbar />
      <div className="w-full flex flex-wrap items-center justify-center py-10">
      {data.products.length > 0 ? (
        data.products.map(product => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            description={product.description}
            skus={product.productSkus.map(productSku => ({
              key: productSku.id,
              price:productSku.price,
              discountPrice: productSku.discountPrice,
              discountPercentage: productSku.discountPercentage,
              newProduct: productSku.newProduct,
            }))}
          />
        ))
      ) : (
        <p>No products available</p>
      )} 
      </div>
      <ServiceBar />
      <Footer />
    </div>
  );
}

export { Home };
