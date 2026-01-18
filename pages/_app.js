import '../styles/bootstrap-custom.scss';
import '../styles/global.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider';

export default function App({ Component, pageProps }) {
    const breakpoints = ['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
    return (
        <ThemeProvider breakpoints={breakpoints}>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}