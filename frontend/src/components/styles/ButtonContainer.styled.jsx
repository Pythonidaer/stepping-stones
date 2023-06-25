import styled from 'styled-components'

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 30px auto;
  text-align: center;
  position: absolute;
  bottom: 0;

  /* Styles for buttons within the container */
  button:not(:last-child) {
    margin-right: 5px;
  }

  button:last-child {
    margin-right: 0;
  }

  button {
    /* Common styles for all buttons */
    flex-grow: 1;
    width: 100%;
    margin: 0 5px;
    width: 110px;
    height: 35px;
    margin: 0 10px;
    background: linear-gradient(to right, #ff6b81, #ff9770);
    border-radius: 30px;
    border: 0;
    outline: none;
    color: #fff;
    cursor: pointer;

    /* Add any other button-specific styles here */
  }
`

export default ButtonContainer
