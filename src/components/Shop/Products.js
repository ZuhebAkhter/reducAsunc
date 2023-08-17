import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const Dummy = [
  {
    id: "p1",
    price: 6,
    title: "My Product",
    description: "My product is best in world",
  },
  {
    id: "p2",
    price: 10,
    title: "My Product1",
    description: "My product1 is best in world",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy.map((product) => (
        <ProductItem
        key={product.id}
        id={product.id}
        title={product.title}
        price={product.price}
        description={product.description}
      />
        ))}

      </ul>
    </section>
  );
};

export default Products;
