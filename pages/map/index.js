import Layout from "../../components/Layout/index";
import Map from "../../components/Dashboard/Maps";


const index = () => {
  return (
    <>
  <Layout>
      <div className="container mt-5">
    <div className="card"> <Map /></div> </div>
      </Layout>
    </>
  );
};

export default index;
