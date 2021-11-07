import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";
import Navbar from "components/Navbar";
import DataTable from "components/Navbar/DataTable";
import Footer from "components/Navbar/footer";

function Dashboard() {
    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="text-primary py-3">DashBoard de Vendas</h1>

                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Taxa de sucesso(%)</h5>
                        <BarChart />
                    </div>

                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Taxa de sucesso(%)</h5>
                        <DonutChart />

                    </div>
                </div>

                <div className="py-3">
                    <h2 className="text-primary"> Todas Vendas </h2>

                </div>



                <DataTable />
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;