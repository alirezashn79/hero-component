import Contect from "./components/Content";
import Details from "./components/Details";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <main className="hero">
        <Navbar />
        <Contect />
      </main>
      <Details />
    </>
  );
}
