import '../styles/bootstrap-custom.scss';
import '../styles/global.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
    const breakpoints = ['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider breakpoints={breakpoints}>
                <Component {...pageProps} />
            </ThemeProvider>
        </QueryClientProvider>
    )
}