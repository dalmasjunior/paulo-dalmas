import PropTypes from 'prop-types'
import Section from './Section'
import SkillBadge from './SkillBadge'
import avatar from '../assets/avatar.svg'
import jsIcon from '../assets/javascript.svg'
import reactIcon from '../assets/react.svg'
import nodeIcon from '../assets/nodejs.svg'

export default function Resume({ data }) {
  const { about, experience, skills, education, contact } = data
  return (
    <div>
      <Section title={about.title}>
        <img src={avatar} alt="Avatar" className="avatar" />
        <p>{about.text}</p>
      </Section>
      <Section title={experience.title}>
        <ul>
          {experience.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>
      <Section title={skills.title}>
        <div>
          {skills.items.map((item) => {
            let icon
            if (item.toLowerCase().includes('react')) icon = reactIcon
            else if (item.toLowerCase().includes('node')) icon = nodeIcon
            else if (item.toLowerCase().includes('javascript')) icon = jsIcon
            else icon = reactIcon
            return <SkillBadge key={item} name={item} icon={icon} />
          })}
        </div>
      </Section>
      <Section title={education.title}>
        <ul>
          {education.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>
      <Section title={contact.title}>
        <p>
          <a href={contact.email}>Email</a> |{' '}
          <a href={contact.linkedin}>LinkedIn</a> |{' '}
          <a href={contact.github}>GitHub</a>
        </p>
        <p>
          <a href={contact.pdf} target="_blank" rel="noopener noreferrer">
            PDF Résumé
          </a>
        </p>
      </Section>
    </div>
  )
}

Resume.propTypes = {
  data: PropTypes.shape({
    about: PropTypes.object,
    experience: PropTypes.object,
    skills: PropTypes.object,
    education: PropTypes.object,
    contact: PropTypes.object,
  }).isRequired,
}
