//import Feature1 from '../components/Feature1';
import Hero from '../components/Feature2';
import Header from '../components/Header';
import dynamic from 'next/dynamic';
const Feature1 = dynamic(() => import('../components/Feature1'));


const mapComponents = {
  'Hero':(item) =><Hero obj={item}/>,
  'Header':(item) =><Header obj={item}/>,
  'Feature1':(item) =><Feature1 obj={item}/>
  //'Feature2':(item) =><Feature2 obj={item}/>

}
const tags ={
  "div": (children, className) =><div className={className}>{children}</div>,
  }
const property = 'Feature1'

var ob = 'Feature1'

function MapComponents({arr}) {
  //localStorage.setItem('arr', JSON.stringify(arr));
  return arr.map(item =>
        <div contentEditable="true" key="item.key">
          <h1>{tags.div('It works!', 'text-8xl text-red-700')}</h1>
          {mapComponents.[item.component](item)}
       </div>
  );
}
export default MapComponents;
