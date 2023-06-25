import {
  StepRowContainer,
  ProgressIndicator,
  StepCol,
} from './styles/StepRow.styled'

const StepRow = () => {
  return (
    <StepRowContainer>
      <ProgressIndicator id='progress' />
      <StepCol>
        <small>Step 1</small>
      </StepCol>
      <StepCol>
        <small>Step 2</small>
      </StepCol>
      <StepCol>
        <small>Step 3</small>
      </StepCol>
    </StepRowContainer>
  )
}

export default StepRow
