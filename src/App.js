 import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

const App = () => {
return (
<>
<Header title = "This is Header Title"  descr = "Header descr"/>
<Layout title = "Layout 1 title" descr ="Layout 1 descr" />
<Layout title = "Layout 2 title" descr ="Layout 2 descr" />
<Layout title = "Layout 3 title" descr ="Layout 3 descr" />
<Footer />
</>
);
}

export default App;
