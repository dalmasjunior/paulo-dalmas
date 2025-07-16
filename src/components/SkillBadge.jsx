import PropTypes from 'prop-types'
import './SkillBadge.css'

export default function SkillBadge({ name, icon }) {
  return (
    <span className="skill-badge">
      <img src={icon} alt="" aria-hidden="true" />
      {name}
    </span>
  )
}

SkillBadge.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}
