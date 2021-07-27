import Feature1 from '../components/Feature1';
import Hero from '../components/Feature2';
import Header from '../components/Header';

function MapComponents({ arr }) {
  return arr.map(item =>
    item.component == 'Feature1' ? (
      <Feature1 obj={item}/>
    ) : item.component == 'hero' ? (
      <Hero obj={item}/>
    ) : item.component == 'header' ? (
      <Header obj={item}/>
    ) : (
      <div className="text-center mt-20 text-6xl">
        <h1>No luck, try again!</h1>
      </div>
    )
  );
}
export default MapComponents;
