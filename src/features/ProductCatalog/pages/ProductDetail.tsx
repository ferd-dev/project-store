import ImageCarousel from '../components/ImageCarousel'; // Asegúrate de que la ruta sea correcta
import Layout from '../../../shared/components/Layout';
import DetailsProduct from '../components/DetailsProduct';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams<{ id:any }>();
    return (
      <Layout>
         <div className="flex justify-center items-center m-3 flex-wrap">
        <ImageCarousel productId={id} />
        <DetailsProduct productId={id} />
        </div>
      </Layout>

       
    );
  };
export default ProductDetail;
