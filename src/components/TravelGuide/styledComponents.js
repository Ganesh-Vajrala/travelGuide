import styled from 'styled-components'

export const TravelGuideContainer = styled.div`
  background-color: #eef4f7;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  max-width: 100vw;
`

export const Heading = styled.h1`
  color: #334155;
  font-size: 45px;
  text-align: center;
  font-family: 'Roboto';
  border-bottom: solid 3px #52bbf0;
  padding-bottom: 10px;
`

export const PackagesContainer = styled.ul`
  padding-left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  list-style-type: none;
`
export const LoaderContainer = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
