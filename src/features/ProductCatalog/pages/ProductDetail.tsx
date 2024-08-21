import ImageCarousel from '../components/ImageCarousel'; // Asegúrate de que la ruta sea correcta
import Layout from '../../../shared/components/Layout';
import DetailsProduct from '../components/DetailsProduct';

const ProductDetail = () => {
    return (
      <Layout>
         <div className="flex justify-center items-center m-3 flex-wrap">
        <ImageCarousel productId={10} />
        <DetailsProduct productId={10} />
        </div>
      </Layout>

       
    );
  };
export default ProductDetail;
