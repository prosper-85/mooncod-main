// import React, { Fragment } from "react";
// import { Line } from "react-chartjs-2";
// import { useQuery } from "react-query";

// const coinChart = async (id) => {
//   const response = await fetch(
//     `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1`
//   );
//   return response.json();
// };

// const ChartComponent = () => {
//   //   const { data: isSuccess } = useQuery("price", () => coinChart("bitcoin"));

//   return (
//     <div>
//       <Line
//         datasetIdKey='id'
//         data={{
//           labels: ["Jun", "Jul", "Aug"],
//           datasets: [
//             {
//               id: 1,
//               label: "",
//               data: [5, 6, 7],
//             },
//             {
//               id: 2,
//               label: "",
//               data: [3, 2, 1],
//             },
//           ],
//         }}
//       />
//     </div>
//   );
// };

// export default ChartComponent;
