import ImageCarousel from '../components/ImageCarousel'; // Asegúrate de que la ruta sea correcta
import Layout from '../../../shared/components/Layout';
import DetailsProduct from '../components/DetailsProduct';
import { useParams } from 'react-router-dom';
import CardOptions from '../components/CardOptions';

const ProductDetail = () => {
  const { id } = useParams<{ id:any }>();
    return (
      <Layout>
        <div className=' flex flex-col'>
         <div className="flex justify-center items-center m-3 flex-wrap">
        <ImageCarousel productId={id} />
        <DetailsProduct productId={id} />
        </div>
        <div>
        <CardOptions productId={id} />
        </div>
        </div>
      </Layout>
    );
  };
export default ProductDetail;
