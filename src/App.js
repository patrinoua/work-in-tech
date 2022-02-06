import './App.css'
import styled from 'styled-components'

const headlineColor = 'white'
const regularColor = 'white'

const Container = styled.div`
	width: 100vw;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: monospace;
	/* justify-content: center; */
	/* background: -webkit-linear-gradient(0.62turn, #eee, #133); */
	background: -webkit-linear-gradient(0.62turn, #99a8af, #011010);
`
const Title = styled.h1`
	font-size: 8em;
	margin: 0.4em;
	color: white;
	text-align: center;
`
const Regular = styled.h4`
	font-size: 1.2em;
	max-width: 800px;
	margin: 0.6em;
	margin-right: 1em;
	margin-left: 1em;
	text-align: justify;
	color: ${regularColor};
	font-family: verdana;
	font-weight: 100;
`
const A = styled.a`
	text-decoration-color: ${headlineColor};
`
const H2 = styled.h2`
	font-size: 2.5em;
	margin: 1em 0;
	letter-spacing: 0.2;
	text-align: center;
	color: ${headlineColor};
`
const H3 = styled(H2)`
	font-size: 2em;
`

function App() {
	return (
		<Container>
			<Title>Work in tech</Title>
			<Regular>Working in tech is fun!</Regular>
			<Regular>
				This is a guide with the most useful resources I've found over the
				years, including learning material, best practices and tips if you're
				considering joining tech or currently looking for a new position.
			</Regular>
			<Regular>
				Feel free to reach out to me if you know an interesting link that I
				could add here, or looking for feedback!
			</Regular>
			<Regular>
				This is a personal project to help you get a first idea about working in
				tech, inspire you and give you some links to further investigate. No
				company stands behind this.
			</Regular>
			{/* <A href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
				<H2>Pros & Cons</H2>
			</A> */}
			<A
				href='https://github.com/patrinoua/tipsforjobs/blob/master/README.md#roadmaps-step-by-step-guides-and-paths-to-learn-different-tools-and-technologies'
				target='_blank'
				rel='noopener noreferrer'
			>
				<H2>Roadmaps & bootcamps</H2>
			</A>
			<A href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
				<H2>Learning Material</H2>
			</A>
			<A
				href='https://github.com/patrinoua/tipsforjobs/blob/master/README.md#roadmaps-step-by-step-guides-and-paths-to-learn-different-tools-and-technologies'
				target='_blank'
				rel='noopener noreferrer'
			>
				<H2>Interview Preparation</H2>
			</A>
			<Regular>
				You can contact me for personalised advice or feedback on your CV, code
				reviews, mock interviews etc.*
			</Regular>
			<div
				style={{
					display: 'flex',
					marginRight: '15px',
					fontSize: '.9em',
					marginTop: 50,
				}}
			>
				<Regular style={{ marginRight: '10px' }}>Made by </Regular>
				<a
					href='https://angelapatrinou.com'
					target='_blank'
					rel='noopener noreferrer'
					style={{ textDecorationColor: 'white' }}
				>
					<Regular>Angela Patrinou,</Regular>
				</a>
			</div>
			<div style={{ display: 'flex', marginRight: '15px', fontSize: '.9em' }}>
				<Regular style={{ marginRight: '10px' }}>creator of</Regular>
				<a
					href='https://angelapatrinou.com'
					target='_blank'
					rel='noopener noreferrer'
					style={{ textDecorationColor: 'white' }}
				>
					<Regular>Buddies</Regular>
				</a>
				<Regular>the expat app.</Regular>
			</div>
			<Regular
				style={{
					alignSelf: 'flex-end',
					marginRight: 20,
					fontSize: '1em',
					opacity: '0.7',
					marginBottom: 20,
				}}
			>
				*Paid Service
			</Regular>
		</Container>
	)
}

export default App
