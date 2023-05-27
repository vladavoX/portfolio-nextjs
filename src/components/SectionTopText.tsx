interface Props {
  text: string
}

const SectionTopText = ({ text }: Props) => {
  return (
    <div className='pl-4'>
      <span className='green-span'>&lt;p&gt;</span>
      <p className='pl-4 uppercase text-gray-200'>{text}</p>
      <span className='green-span'>&lt;/p&gt;</span>
    </div>
  )
}

export default SectionTopText
