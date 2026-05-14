import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobsAction } from "../redux/actions";

import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";

const CompanySearchResults = () => {
  // before, jobs came from "useState([])", inside the component
  // const [jobs, setJobs] = useState([]);
  // now, jobs comes from redux
  const jobs = useSelector((state) => state.jobs.jobs)
  const dispatch = useDispatch()
  const params = useParams();

  // const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    // getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    dispatch(getJobsAction(params.company))
  }, [dispatch, params.company]);

  // this fetch now lives in redux:
  // const getJobs = async () => {
  //   try {
  //     const response = await fetch(baseEndpoint + params.company);
  //     if (response.ok) {
  //       const { data } = await response.json();
  //       setJobs(data);
  //     } else {
  //       alert("Error fetching results");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          {jobs.map(jobData => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
