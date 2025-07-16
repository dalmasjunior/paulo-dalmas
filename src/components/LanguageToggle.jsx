import PropTypes from 'prop-types'

export default function LanguageToggle({ language, onChange }) {
  return (
    <div style={{ textAlign: 'right' }}>
      <button
        onClick={() => onChange(language === 'en' ? 'pt' : 'en')}
        style={{ margin: '1rem' }}
      >
        {language === 'en' ? 'Português' : 'English'}
      </button>
    </div>
  )
}

LanguageToggle.propTypes = {
  language: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
