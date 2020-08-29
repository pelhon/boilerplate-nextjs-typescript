import * as Styled from './styles'

const Main = ({
  title = 'Another NextJS boilerplate',
  description = 'Boilerplate to work with NextJS, TypeScript and Styled Component'
}) => (
  <>
    <Styled.Wrapper>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Description>{description}</Styled.Description>
    </Styled.Wrapper>
  </>
)

export default Main
