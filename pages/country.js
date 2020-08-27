import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import { useRouter } from "next/router";
const country = ({ allcountry }) => {
  const router = useRouter();
  const { alpha2Code } = router.query;

  if (!allcountry)
    return (
      <Layout>
        <div className="jumbotron text-center">
          <h1 className="display-3">TreeDom</h1>
          <p className="lead">Loading...</p>
        </div>
      </Layout>
    );
  return (
    <Layout>
      <div className="jumbotron text-center">
        <h1 className="display-3">TreeDom</h1>
        <p className="lead">All countries information</p>
      </div>
      <div className="container">
        <div className="row">
          {allcountry.map((country) => (
            <div className="col-sm-4">
              <div className="card mb-3">
                <h3 className="card-header text-truncate">{country.name}</h3>
                <img className="card-img" src={country.flag} />
                <div className="card-body">
                  <h6 className="card-subtitle text-muted">
                    <small className="text-capitalize text-black-50">capital</small>{" "}
                    : {country.capital} ({country.alpha2Code})
                  </h6>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <small className="text-capitalize text-black-50">
                      currency
                    </small>{" "}
                    :{" "}
                    <span className="badge badge-info text-lg">
                      {country.currencies[0].symbol}
                    </span>{" "}
                    {country.currencies[0].name}
                  </li>
                  <li className="list-group-item">
                    <small className="text-capitalize text-black-50">region</small>{" "}
                    : {country.region}
                  </li>
                  <li className="list-group-item">
                    <small className="text-capitalize text-black-50">
                      subregion
                    </small>{" "}
                    : {country.subregion}
                  </li>
                </ul>
                <Link href="/[alpha2Code]" as={`/${country.alpha2Code}`}>
                  <a className="badge badge-primary">Read More</a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>
        {`
          .card-img {
            max-height: 9rem;
          }
        `}
      </style>
    </Layout>
  );
};

country.getInitialProps = async (ctx) => {
  const res = await fetch(
    "https://restcountries.eu/rest/v2/all?fields=name;capital;currencies;flag;region;subregion;alpha2Code"
  );
  const json = await res.json();
  return { allcountry: json };
};
export default country;
