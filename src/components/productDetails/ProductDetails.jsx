import { Image } from "./Image"
import { Description } from "./Description"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react"

function ProductDetails() {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.id.id);
  const skuId = useSelector((state) => state.id.skuId);

  const [productData, setProductData] = useState(null);
  const [skuData, setSkuData] = useState(null);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const productResponse = await fetch(`http://localhost:3000/${id}`);
              if (!productResponse.ok) {
                  throw new Error('Network response was not ok');
              }
              const product = await productResponse.json();
              setProductData(product);

              if (skuId) {
                  const skuResponse = await fetch(`http://localhost:3000/sku/${skuId}`);
                  if (!skuResponse.ok) {
                      throw new Error('Network response was not ok');
                  }
                  const sku = await skuResponse.json();
                  setSkuData(sku);
              }
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };

      fetchData();
  }, [id, skuId]);

  if (!productData || (skuId && !skuData)) {
      return <div>Loading...</div>; 
  }
  console.log(productData)
  
  return (
    <div className="flex-col sm:flex-row flex w-screen justify-center items-center">
      <Image 
        img={productData.image}
      />
      <Description 
        name={productData.name}
        description={productData.description}
        longDescription={productData.longDescription}
        price={skuData.price}
      />
    </div>
  );
}

export { ProductDetails };
