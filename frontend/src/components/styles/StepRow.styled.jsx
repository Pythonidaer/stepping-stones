import styled from 'styled-components'

export const StepRowContainer = styled.div`
  width: 360px;
  height: 40px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  box-shadow: 0 -1px 5px -1px #000;
  position: relative;
`

export const ProgressIndicator = styled.div`
  position: absolute;
  height: 100%;
  width: 120px;
  background: linear-gradient(to right, #ff6b81, #ff9770);
  transition: 1s;

  &::after {
    content: '';
    height: 0;
    width: 0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    position: absolute;
    right: -20px;
    top: 0;
    border-left: 20px solid #ff9770;
  }
`

export const StepCol = styled.div`
  width: 120px;
  text-align: center;
  color: #333;
  position: relative;
`
