import { Table } from 'react-bootstrap';

const SkillsTable = () => {
  return (
    <section className="py-5 px-3">
      <h2 className="text-center mb-5 display-5">What Can I Do For You?</h2>
      <div className="container">
        <div className="row">
          <div className="col">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Skills</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Front-End Development</td>
                  <td>JavaScript, HTML5, CSS3, React, Redux, Bootstrap, FramerMotion, Vite</td>
                </tr>
                <tr>
                  <td>UI/UX Design</td>
                  <td>Websites & Apps Design</td>
                </tr>
                <tr>
                  <td>Full-Stack Development</td>
                  <td>Python, Flask, SocketIO, Auth0</td>
                </tr>
                <tr>
                  <td>RESTful APIs</td>
                  <td>Creating APIs with RESTful design</td>
                </tr>
                <tr>
                  <td>CI/CD</td>
                  <td>GitHub Actions</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsTable;
