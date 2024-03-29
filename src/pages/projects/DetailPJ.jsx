import { GoBackButton } from '../../components/form/buttons/GoBack'
import Contributors from '../../components/cards/Contributors'

import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setViewNav } from '../../redux/reducers'
import { useSelector } from 'react-redux'

export default function DetailPJ() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const [project] = useSelector(
    (state) => state.app.information.PROJECTS
  ).filter((project) => project.id === parseInt(id))

  useEffect(() => {
    dispatch(setViewNav(false))
    return () => {
      dispatch(setViewNav(true))
    }
  }, [dispatch])

  return (
    <div className="min-h-screen bg-main text-tx-main px-6">
      <div className="mb-3 gap-10 flex items-center">
        <GoBackButton />
        <h2 className="text-3xl font-bold">{project.name}</h2>
      </div>
      <div className="flex flex-col gap-5 md:flex-row">
        <section>
          <picture>
            <img src={project.URLs[0]} alt="" />
          </picture>
          <p>{project.shortDescription}</p>
          <ul className="list-disc">
            <h3 className="text-xl font-semibold">Goals</h3>
            {project.more.goals.map((goal, i) => (
              <li key={i}>{goal}</li>
            ))}
          </ul>
        </section>
        <section className="min-[200px]:">
          <ul className="list-disc">
            <h3 className="text-xl font-semibold">Tech Stack</h3>
            {project.more.techStack.map((tech, i) => (
              <li className="whitespace-nowrap" key={i}>
                {tech}
              </li>
            ))}
          </ul>
          <Contributors contributors={project.more.contributors} />
        </section>
      </div>
    </div>
  )
}
