import Layout from '../components/Layout'

const index = () => {
    return (
        <Layout>
            <div className="jumbotron">
                <h1 className="display-3">TreeDom</h1>
                <p className="lead">Application to view all countries information</p>               
                <button type="button" className="btn btn-primary">See More</button>
            </div>

        </Layout>

    );
}

export default index;