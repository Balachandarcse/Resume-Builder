
import "../css/sample.css"
import mordern from "../assets/mordernResume.png"
import classic from "../assets/classicalResume.png"
import creative from "../assets/creativeResume.png"
import Header from "./Header";


const sampleResumes = [
    { id: 1, name: "Modern Resume", image: mordern },
    { id: 2, name: "Classic Resume", image: classic },
    { id: 3, name: "Creative Resume", image: creative }
];

const Sample = () => {
  return (
    <div className="sample-container">
      <Header/>
      <div className="sample-resume-container">
        <h2>Sample Resumes</h2>
        <div className="resume-grid">
          {sampleResumes.map((resume) => (
            <div key={resume.id} className="resume-card">
              <img src={resume.image} alt={resume.name} />
              <h3>{resume.name}</h3>
              {/* <button>View</button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sample;
