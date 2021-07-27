import Feature1 from '../components/Feature1';
import Hero from '../components/Feature2';
import Header from '../components/Header';

function MapComponents({ arr }) {
  return arr.map(item =>
    item.component == 'Feature1' ? (
      <Feature1 />
    ) : item.component == 'hero' ? (
      <Hero />
    ) : item.component == 'header' ? (
      <Header />
    ) : (
      <div className="text-center mt-20 text-6xl">
        <h1>No luck, try again!</h1>
      </div>
    )
  );
}
export default MapComponents;
