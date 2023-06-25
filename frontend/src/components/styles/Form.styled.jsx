import styled from 'styled-components'
// IMPLEMENTED
export const Form = styled.form.attrs((props) => ({
  id: props.id,
}))`
  width: 280px;
  height: 500px;
  position: absolute;
  top: 75px;
  left: ${(props) =>
    props.id === 'Form2' || props.id === 'Form3' ? '450px' : '40px'};

  transition: 0.5s;
  box-sizing: border-box;
`
// IMPLEMENTED
export const Title = styled.h3`
  text-align: center;
  margin-bottom: 20px;
  color: #777;
`
// IMPLEMENTED
export const TextInput = styled.input`
  width: 100%;
  padding: 10px 5px;
  margin: 5px 0;
  border: 0;
  border-bottom: 1px solid #999;
  border-radius: 5px;
  outline: none;
  background: transparent;
  box-sizing: border-box;

  &:focus {
    border: 2px solid #ff9770;
  }

  ::placeholder {
    color: #777;
  }

  &[type='checkbox'] {
    margin-right: 5px;
    width: auto !important;
  }

  &[type='file'] {
    height: 36px;
    width: 1px;
    opacity: 0;
    z-index: -100;
    position: absolute;
    overflow: hidden;
  }

  &[type='range'] {
    width: calc(100% - 20px);
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
  }
`
// IMPLEMENTED
export const Textarea = styled.textarea`
  width: 100%;
  padding: 10px 5px;
  margin: 5px 0;
  border-radius: 5px;
  border: 1px solid #999;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border: 2px solid #ff9770;
  }
`
// IMPLEMENTED
export const FileUploadButton = styled.label`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 35px;
  margin: 0 10px;
  background: linear-gradient(to right, #ff6b81, #ff9770);
  border-radius: 30px;
  border: 0;
  outline: none;
  color: #fff;
  cursor: pointer;
`
// IMPLEMENTED
export const FileUploadButtonLabel = styled.div`
  max-width: 100%;
  display: inline-block;
  font-size: 14px;
`
// IMPLEMENTED
export const FileUploadInfo = styled.div`
  display: inline-block;
  font-size: 11px;
`
// IMPLEMENTED
export const Select = styled.select`
  width: 100%;
  padding: 10px 5px;
  color: #777;
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 5px;
  display: block;
  appearance: none;
  outline: none;
  border: 2px solid rgba(255, 151, 112, 0.5);

  &:focus {
    outline: none;
    border: 2px solid #ff9770;
  }
`

// IMPLEMENTED
export const RadioOptions = styled.div`
  display: flex;
  justify-content: space-around;
  border-radius: 5px;
  border-bottom: 1px solid #999;
`

// IMPLEMENTED
export const RadioOptionsBorder = styled.div`
  padding-top: 5px;
  margin: 5px 0;

  &:hover {
    border-radius: 5px;
    border: 2px solid #ff9770;
  }

  &:hover ${RadioOptions} {
    border: none;
  }
`
// IMPLEMENTED
export const RadioOptionsLabel = styled.label`
  display: inline-block;
  width: 100%;
  font-size: 14px;
  color: #777;
  padding: 0 5px 5px;
  font-style: italic;
  box-sizing: border-box;
`

// IMPLEMENTED
export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  margin-right: 10px;
  margin-bottom: 5px;

  input[type='radio'] {
    margin-right: 5px;
  }
`
// IMPLEMENTED
export const RadioSpan = styled.span`
  white-space: nowrap;
  font-size: 14px;
  color: #777;
  font-weight: bold;
`
// IMPLEMENTED
export const CheckboxOptionsBorder = styled.div`
  border-radius: 5px;
  border-bottom: 1px solid #999;
  padding: 5px 0;
  margin: 5px 0;

  &:hover {
    border-radius: 5px;
    border: 2px solid #ff9770;
  }
`
// IMPLEMENTED
export const Interests = styled.p`
  font-size: 14px;
  color: #777;
  margin-bottom: 5px;
  font-style: italic;
  margin-left: 5px;
`
// IMPLEMENTED
export const CheckboxOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  font-size: 14px;
  color: #777;
  border-radius: 5px;
  padding: 0 5px 5px;
`

// IMPLEMENTED
export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-right: 20px;
  width: 100%;
`
// IMPLEMENTED
export const CommitmentDaysValue = styled.div`
  text-align: center;
  font-size: 14px;
  color: #777;
  padding-bottom: 5px;
`
// IMPLEMENTED
export const CommitmentDays = styled.label`
  display: inline-block;
  font-size: 14px;
  color: #777;
  font-style: italic;
  padding: 5px;
`

// IMPLEMENTED
export const CommitmentDaysBorder = styled.div`
  margin-top: 10px;

  &:hover {
    border-radius: 5px;
    border: 2px solid #ff9770;
  }
`
