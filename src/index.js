import React from "react";
import ReactDOM from "react-dom";
import { ConfigProvider } from "antd";
import "antd/dist/antd.css";
import ru_RU from "antd/lib/locale/ru_RU";
import "./index.scss"
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: 15000,
      retry: 0,
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={ru_RU}>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
