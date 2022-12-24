import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import "../../pages/details.css";

const Chart = ({ id, title }) => {
  const [data, setData] = useState({
    index: [1, 3, 2],
    price: [3, 4, 1],
    volumes: [4, 1, 3],
  });
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    let data = { index: [], price: [], volumes: [] };
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1&interval=1m`
    );
    let result = await res.json();
    for (const item of result.prices) {
      data.index.push(item[0]);
      data.price.push(item[1]);
    }
    for (const item of result.total_volumes) {
      data.volumes.push(item[1]);
    }
    setData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const Loader = () => {
    return (
      <div className="flex justify-center items-center">
        <div
          className="spinner-border border-t-[#3D8DFF] border-r-red-[#3D8DFF] border-l-red-[#3D8DFF]  animate-spin inline-block w-8 h-8 border-4 rounded-full"
          role="status"
        >
          <span className="visually-hidden"></span>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-transparent h-full chart">
      {isLoading ? (
        Loader()
      ) : (
        <Plot
          data={[
            {
              name: "Price ($)",
              x: data.index.map((t) => new Date(t)),
              y: data.price,
              xaxis: "x",
              yaxis: "y1",
              type: "scatter",
              mode: "lines+markers",
              marker: { color: "blue", size: 3 },
            },
            {
              name: "Volumne ($B)",
              x: data.index.map((t) => new Date(t)),
              y: data.volumes,
              xaxis: "x",
              yaxis: "y2",
              type: "bar",
              barmode: "relative",
              marker: {
                color: "rgb(49,130,189)",
                opacity: 0.7,
              },
            },
          ]}
          layout={{
            title: `${title} Price Chart`,
            // title: { font: { color: "", family: "Droid Serif", size: 3 } },
            font: { size: 14, color: "#ffff", family: "Droid Serif" },

            paper_bgcolor: "#181e25",
            plot_bgcolor: "#181e25",
            newselection: {
              line: {
                width: 9,
              },
            },
            autosize: true,
            height: 600,
            width: 1000,
            margin: {
              l: 50,
              r: 30,
              t: 35,
              pad: 3,
            },
            showlegend: false,
            xaxis: {
              domain: [1, 1],
              anchor: "y2",
            },
            yaxis: {
              domain: [0.1, 1],
              anchor: "x",
            },
            yaxis2: {
              showticklabels: false,
              domain: [0, 0.1],
              anchor: "x",
            },
            grid: {
              roworder: "bottom to top",
            },
          }}
          config={{ responsive: true }}
        />
      )}
    </div>
  );
};

export default Chart;
