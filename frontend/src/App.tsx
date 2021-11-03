import Navbar from "components/Navbar";
import DataTable from "components/Navbar/DataTable";
import Footer from "components/Navbar/footer";

function App() {
  return (
    <>
      <Navbar />
      <div className = "container">
        <h1 className = "text-primary">Olá mundo!</h1>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;