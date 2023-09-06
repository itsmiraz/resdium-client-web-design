import { DataProvider } from "@/Contexts/DataProvider";
import MainLayout from "@/Layouts/MainLayout";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <DataProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </DataProvider>
    </QueryClientProvider>
  );
}
