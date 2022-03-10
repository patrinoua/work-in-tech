import './App.css'
import styled from 'styled-components'

const headlineColor = 'white'
const underlineColor = 'salmon'
const regularColor = 'white'
const fontFamilyTitle = 'ui-monospace'
const fontFamilyText = 'monospace'
const fontFamilyParagraphText = 'verdana'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: -webkit-linear-gradient(0.62turn, #ae009e, #031f30);
`
const InnerContainer = styled.div`
  /* background: brown; */
  /* padding: 50px; */
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.h1`
  font-size: 8em;
  margin: 0;
  color: white;
  text-align: center;
  font-family: ${fontFamilyTitle};
`
const Regular = styled.p`
  /* font-size: 1.3em; */
  max-width: 800px;
  /* margin: 0.6em; */
  text-align: justify;
  color: ${regularColor};
  font-family: verdana;
  font-weight: 100;
  font-family: ${fontFamilyParagraphText};
`
const A = styled.a`
  text-decoration-color: ${underlineColor};
`
const H2 = styled.h2`
  font-size: 2.5em;
  margin: 1em 0;
  letter-spacing: 0.2;
  text-align: center;
  color: ${headlineColor};
  font-family: ${fontFamilyText};
`
const H3 = styled(H2)`
  font-size: 2em;
`

function App() {
  return (
    <Container>
      <InnerContainer>
        <Title>Work in Tech</Title>
        <H3>Working in Tech is fun!</H3>
        <Regular>
          This is a guide with resources collected over the years, including
          learning material, best practices and tips if you're considering
          joining tech or currently looking for a new position.
        </Regular>
        <Regular>
          Feel free to reach out to me if you know an interesting link that I
          could add here, or looking for feedback!
        </Regular>
        <Regular>
          This is a personal project to help you get a first idea about working
          in tech, inspire you and give you some links to further investigate.
          No company stands behind this.
        </Regular>
        {/* <A href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
				<H2>Pros & Cons</H2>
			</A> */}
        <A
          href='https://github.com/patrinoua/tipsforjobs/blob/master/README.md#roadmaps-step-by-step-guides-and-paths-to-learn-different-tools-and-technologies'
          target='_blank'
          rel='noopener noreferrer'
        >
          <H2>> Roadmaps & bootcamps</H2>
        </A>
        <A
          href='https://github.com/patrinoua/tipsforjobs/blob/master/README.md#learning-resources'
          target='_blank'
          rel='noopener noreferrer'
        >
          <H2>> Learning Material</H2>
        </A>
        <A
          href='https://github.com/patrinoua/tipsforjobs/blob/master/README.md#roadmaps-step-by-step-guides-and-paths-to-learn-different-tools-and-technologies'
          target='_blank'
          rel='noopener noreferrer'
        >
          <H2>> Interview Preparation</H2>
        </A>
        {/* <Regular>
        You can contact me for personalised advice or feedback on your CV, code
        reviews, mock interviews etc.*
      </Regular> */}
        <div
          style={{
            display: 'flex',
            marginRight: '15px',
            marginTop: 50,
            display: 'flex',
            fontSize: '.9em',
            justifyContent: 'center',
          }}
        >
          <Regular style={{ marginRight: '10px' }}>Made by </Regular>
          <a
            href='https://angelapatrinou.com'
            target='_blank'
            rel='noopener noreferrer'
            style={{ textDecorationColor: 'white' }}
          >
            <Regular>Angela Patrinou</Regular>
          </a>
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: '.9em',
            justifyContent: 'center',
          }}
        >
          <Regular>creator of</Regular>
          <a
            href='https://angelapatrinou.com'
            target='_blank'
            rel='noopener noreferrer'
            style={{ textDecorationColor: 'white' }}
          >
            <Regular style={{ marginLeft: '10px', marginRight: '10px' }}>
              Buddies
            </Regular>
          </a>
          <Regular>the expat app.</Regular>
        </div>
        {/* <Regular
        style={{
          alignSelf: 'flex-end',
          marginRight: 20,
          fontSize: '1em',
          opacity: '0.7',
          marginBottom: 20,
        }}
      >
        *Paid Service
      </Regular> */}
      </InnerContainer>
    </Container>
  )
}

export default App
