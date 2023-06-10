import styled from 'styled-components'

// IMPLEMENTED
export const Form = styled.form`
  width: 280px;
  height: 500px;
  position: absolute;
  top: 75px;
  left: ${({ left }) => left || '40px'};
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
`
// IMPLEMENTED
export const Textarea = styled.textarea`
  width: 100%;
  padding: 10px 5px;
  margin: 5px 0;
  border-radius: 5px;
  border: 1px solid #999;
  box-sizing: border-box;
`

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

export const FileUploadButtonLabel = styled.div`
  max-width: 100%;
  display: inline-block;
  font-size: 14px;
`

export const FileUploadInfo = styled.div`
  display: inline-block;
  font-size: 11px;
`

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
`

export const RadioOptionsBorder = styled.div`
  padding-top: 5px;
  margin: 5px 0;
`

export const RadioOptionsLabel = styled.label`
  display: inline-block;
  width: 100%;
  font-size: 14px;
  color: #777;
  padding: 0 5px 5px;
  font-style: italic;
  box-sizing: border-box;
`

export const RadioOptions = styled.div`
  display: flex;
  justify-content: space-around;
  border-radius: 5px;
  border-bottom: 1px solid #999;
`

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  margin-right: 10px;
  margin-bottom: 5px;

  input[type='radio'] {
    margin-right: 5px;
  }
`

export const RadioSpan = styled.span`
  white-space: nowrap;
  font-size: 14px;
  color: #777;
  font-weight: bold;
`

export const CheckboxOptionsBorder = styled.div`
  border-radius: 5px;
  border-bottom: 1px solid #999;
  padding: 5px 0;
  margin: 5px 0;
`

export const CheckboxOptionsLabel = styled.label`
  display: inline-block;
  width: 100%;
  font-size: 14px;
  color: #777;
  padding: 0 5px 5px;
  font-style: italic;
  box-sizing: border-box;
`

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  input[type='checkbox'] {
    margin-right: 5px;
  }
`

export const CheckboxSpan = styled.span`
  white-space: nowrap;
  font-size: 14px;
  color: #777;
  font-weight: bold;
`
