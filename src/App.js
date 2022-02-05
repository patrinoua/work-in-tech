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
	font-size: 120px;
	font-size: 9em;
	margin: 0.4em;
	background: white; //-webkit-linear-gradient(0.5turn, #eee, #133);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`
const Regular = styled.h4`
	max-width: 800px;
	margin: 0.6em;
	font-size: 1.5em;
	text-align: center;
	color: ${regularColor};
	font-family: verdana;
	font-weight: 100;
`
const A = styled.a`
	text-decoration-color: ${headlineColor};
`
const H2 = styled.h2`
	font-size: 3em;
	margin: 0.5em;

	/* font-family: 'Montserrat', sans-serif; */
	letter-spacing: 0.2;
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
				You can contact me here me for personalised advice or feedback on your
				CV, code reviews, mock interviews etc.*
			</Regular>
			<div style={{ display: 'flex', marginRight: '15px' }}>
				<H3 style={{ marginRight: '10px' }}>Made by </H3>
				<a
					href='https://angelapatrinou.com'
					target='_blank'
					rel='noopener noreferrer'
					style={{ textDecorationColor: 'white', marginBottom: 50 }}
				>
					<H3> Angela Patrinou</H3>
				</a>
			</div>
			<Regular
				style={{
					alignSelf: 'flex-end',
					marginRight: 20,
					fontSize: '1.2em',
					opacity: '0.7',
					position: 'absolute',
					bottom: -110,
				}}
			>
				*Paid Service
			</Regular>
		</Container>
	)
}

export default App
