import '../styles/bootstrap-custom.scss';
import '../styles/global.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Layout from '../components/layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppThemeProvider } from '../context/useTheme';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
    const breakpoints = ['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
    return (
        <QueryClientProvider client={queryClient}>
            <AppThemeProvider>
            <ThemeProvider breakpoints={breakpoints}>
                <Layout>
                <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
            </AppThemeProvider>
        </QueryClientProvider>
    )
}