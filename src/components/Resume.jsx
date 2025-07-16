import PropTypes from 'prop-types'
import Section from './Section'

export default function Resume({ data }) {
  const { about, experience, skills, education, contact } = data
  return (
    <div>
      <Section title={about.title}>
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
        <ul>
          {skills.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
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
