import { useParams } from 'react-router-dom';

const ProductCategory = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Category {id}</h1>
    </div>
  );
};

export default ProductCategory;
