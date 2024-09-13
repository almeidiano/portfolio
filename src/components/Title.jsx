export default function Title(props) {
  return (
    <div className="text-center">
        <h2 className='text-4xl font-semibold'>{props.title}</h2>
        <div className='py-2 text-sm'>{props.subtitle}</div>
    </div>
  )
}