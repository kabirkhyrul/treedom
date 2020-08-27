import { useRouter } from "next/router";
import useSwr from "swr";
import Layout from "../components/Layout";
import Link from "next/link";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Country() {
  const router = useRouter();
  const { data, error } = useSwr(
    `https://restcountries.eu/rest/v2/alpha/${router.query.alpha2Code}`,
    fetcher
  );

  if (error)
    return (
      <Layout>
        <div className="jumbotron text-center">
          <h1 className="display-3">TreeDom</h1>
          <p className="lead">Failed to load country</p>
        </div>
      </Layout>
    );
  if (!data)
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
        <p className="lead">Information about {data.name}</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <p>
              <strong>Name</strong> : {data.name}
            </p>
            <p>
              <strong className="text-capitalize">top Level Domain</strong> :{" "}
              {data.topLevelDomain}
            </p>
            <p>
              <strong className="text-capitalize">calling Codes</strong> :{" "}
              {data.callingCodes}
            </p>
            <p>
              <strong className="text-capitalize">capital</strong> :{" "}
              {data.capital}
            </p>
            <p>
              <strong className="text-capitalize">altSpellings</strong> :
              {data.altSpellings.map((value, index) => {
                return (
                  <span className="badge badge-info text-lg m-1" key={index}>
                    &nbsp; {value} &nbsp;
                  </span>
                );
              })}
            </p>
            <p>
              <strong className="text-capitalize">region</strong> :{" "}
              {data.region}
            </p>
            <p>
              <strong className="text-capitalize">subregion</strong> :{" "}
              {data.subregion}
            </p>
            <p>
              <strong className="text-capitalize">population</strong> :{" "}
              {data.population}
            </p>
            <p>
              <strong className="text-capitalize">Geo Location</strong> : Lat:{" "}
              {data.latlng[0]}, Lan: {data.latlng[1]}
              <a
                href={`http://www.openstreetmap.org/?mlat=${data.latlng[1]}&mlon=${data.latlng[0]}&zoom=7#map=7/${data.latlng[0]}/${data.latlng[1]}`}
                target="_blank"
                className="btn btn-info m-1"
              >
                See In map
              </a>
            </p>
            <p>
              <strong className="text-capitalize">nationality</strong> :{" "}
              {data.demonym}
            </p>
            <p>
              <strong className="text-capitalize">area</strong> : {data.area}
            </p>
            <p>
              <strong className="text-capitalize">gini</strong> : {data.gini}
            </p>
            <p>
              <strong className="text-capitalize">timezones</strong> :
              {data.timezones.map((value, index) => {
                return (
                  <span className="badge badge-info text-lg m-1" key={index}>
                    &nbsp; {value} &nbsp;
                  </span>
                );
              })}
            </p>
            <p>
              <strong className="text-capitalize">borders</strong> :
              {data.borders.map((value, index) => {                
                return (
                  <Link href="/[alpha2Code]" as={`/${value}`}>
                    <a className="badge badge-danger text-lg m-1" key={index}>
                      &nbsp; {value} &nbsp;
                    </a>
                  </Link>
                );
              })}
            </p>
            <p>
              <strong className="text-capitalize">currency code</strong> :{" "}
              {data.currencies[0].code}
            </p>
            <p>
              <strong className="text-capitalize">currency name</strong> : ({" "}
              {data.currencies[0].symbol} ) {data.currencies[0].name}
            </p>
            <p>
              <strong className="text-capitalize">languages</strong> :{" "}
              {data.languages[0].nativeName} ({data.languages[0].name})
            </p>
            <p>
              <strong className="text-capitalize">regional Blocs</strong> :
              {data.regionalBlocs.map((value, index) => {
                return (
                  <span className="badge badge-success text-lg m-1" key={index}>
                    {" "}
                    {value.name} ({value.acronym})
                  </span>
                );
              })}
            </p>
          </div>
          <div className="col-sm-6">
            <img className="img-thumbnail" src={data.flag} alt={data.name} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
