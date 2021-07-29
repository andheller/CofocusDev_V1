//import Feature1 from '../components/Feature1';
import Hero from '../components/Feature2';
import Header from '../components/Header';
import dynamic from 'next/dynamic'
const Feature1 = dynamic(() => import('../components/Feature1'))

const mapComponents = {
  'Hero':(item) =><Hero obj={item}/>,
  'Header':(item) =><Header obj={item}/>,
  'Feature1':(item) =><Feature1 obj={item}/>

}
const property = 'Feature1'

var ob = 'Feature1'

function MapComponents({ arr }) {
  return arr.map(item =>
      <>
        {mapComponents.[item.component](item)}
      </>
  );
}
export default MapComponents;
