import { createMuiTheme } from '@material-ui/core/styles';

const apexOrange = '#FF481F';
const apexGreen = '#52FFBF';

export const getTheme = () =>
	createMuiTheme({
		breakpoints: {
			values: {
				xs: 0,
				sm: 650,
				md: 960,
				lg: 1280,
				xl: 1920
			}
		},
		palette: {
			primary: {
				main: apexOrange,
				contrastText: '#fff'
			},
			secondary: {
				main: apexGreen,
				contrastText: '#000'
			},
			success: {
				main: '#129643'
			},
			error: {
				main: 'rgb(171, 51, 81)'
			},
			common: {
				orange1: '#CF3919',
				orange2: '#FF886F',
				orange3: '#E65E41',
				orange4: '#A82409',
				orange5: '#801600',
				yellow1: '#CF7819',
				yellow2: '#FFBA6F',
				yellow3: '#E69741',
				yellow4: '#A85C09',
				yellow5: '#804300',
				blue1: '#146482',
				blue2: '#4A8AA2',
				blue3: '#2D7591',
				blue4: '#0A4F69',
				blue5: '#033B50',
				green1: '#129643',
				green2: '#51BA78',
				green3: '#2FA75C',
				green4: '#067A31',
				green5: '#005D23'
			},
			contrastThreshold: 3,
			tonalOffset: 0.2,
			background: {
				default: '#000',
				paper: '#0A0A0A'
			},
			text: {
				primary: '#fff',
				secondary: '#b0b0b0'
			}
		},
		typography: {
			fontFamily: "'Montserrat', sans-serif",
			h1: {
				fontWeight: 200,
				fontSize: '3.5rem'
			},
			h2: {
				fontWeight: 200,
				fontSize: '2.5rem',
				fontStyle: 'italic'
			},
			h3: {
				fontWeight: 200,
				fontSize: '2rem',
				fontStyle: 'italic'
			},
			h4: {
				fontWeight: 200,
				fontSize: '1.8rem'
			},
			body1: {
				fontWeight: 300
			}
		}
	});
