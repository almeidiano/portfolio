export default function Title(props) {
  return (
    <>
        <h2 className='section-title'>{props.title}</h2>
        <span className='section-subtitle'>{props.subtitle}</span>
    </>
  )
}