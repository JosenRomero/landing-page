/* eslint-disable react/prop-types */

const Text = (props) => {
  const TextTag = `${props.as ? props.as : 'p'}`

  return (
    <TextTag className={props.className ? props.className : ''} >
      {props.children}
    </TextTag>
  )
}

export default Text
