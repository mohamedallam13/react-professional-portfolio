import Card from '../card/Card'
import './portfolio.css'

export default function Portfolio({ portfolioDesc, devProjects }) {
  return (
    <div className="p" id="p">
      <div className="p-texts">
        <h1 className="p-title">Turn Dreams into Reality</h1>
        <p className="p-desc">
          {portfolioDesc}
        </p>
      </div>
      <div className="p-list">
        {devProjects.map((project) => (
          <Card key={project.id}
            title={project.projectName}
            img={project.projectImage}
            link={project.projectLink} />
        ))}
      </div>
    </div>
  )
}
