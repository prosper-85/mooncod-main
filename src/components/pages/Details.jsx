import React, { useCallback, useEffect, useState } from "react";
import "./details.css";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Chart from "../landing-page/directory/Chart";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Details = () => {
  const { id } = useParams();
  const [btn, setBtn] = useState("price");
  const [items, setItems] = useState([]);

  const handleClick = useCallback(
    (props) => {
      if (props === "price") {
        setBtn("price");
      } else if (props === "market") {
        setBtn("market");
      }
    },
    [btn]
  );
  const dataFetch = async () => {
    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      );
      const data = await res.json();
      if (data) {
        const {
          symbol,
          name,
          image,
          current_price: Cprice,
          market_cap: Mcap,
          market_cap_rank: McapRank,
          fully_diluted_valuation: diluted,
          total_volume: volume,
          high_24h: high,
          low_24h: low,
          price_change_24h: Pchange,
          price_change_percentage_24h: PchangePercent,
          market_cap_change_24h: McapChange,
          market_cap_change_percentage_24h: McapChangePercent,
          circulating_supply: Csupply,
          total_supply: Tsupply,
          max_supply: Msupply,
          ath,
          ath_change_percentage: athChangePercent,
        } = data[0];
        const newData = {
          symbol,
          name,
          image,
          Cprice,
          Mcap,
          McapRank,
          diluted,
          volume,
          high,
          low,
          Pchange,
          PchangePercent,
          McapChange,
          McapChangePercent,
          Csupply,
          Tsupply,
          Msupply,
          ath,
          athChangePercent,
        };
        setItems(newData);
      } else {
        setItems([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dataFetch();
  }, [id]);

  const {
    symbol,
    name,
    image,
    Cprice,
    Mcap,
    McapRank,
    diluted,
    volume,
    high,
    low,
    Pchange,
    PchangePercent,
    McapChange,
    McapChangePercent,
    Csupply,
    Tsupply,
    Msupply,
    ath,
    athChangePercent,
  } = items;
  return (
    <>
      <Header />
      <div className="bg-cover bg-center bg-[url('/src/assets/heroBackground.webp')] bg-[#080A0C] text-white">
        <div className="contain">
          <div className="wrappe">
            <div className="lt">
              <p>
                Criptocurrency / <b>{name}</b>
              </p>
              {/* <ul className="top">
                <li className="dlist">
                  Buy
                  <span>
                    <FaChevronDown />
                  </span>
                </li>
                <li className="dlist">
                  Exchange
                  <span>
                    <FaChevronDown />
                  </span>
                </li>
                <li className="dlist">
                  Gamin
                  <span>
                    <FaChevronDown />
                  </span>
                </li>
                <li className="dlist">
                  Earn
                  <span>
                    <FaChevronDown />
                  </span>
                </li>
              </ul> */}
            </div>
            <div className="conc">
              <div className="text">
                <div className="coin">
                  <img src={image} alt={name} className="img" />
                  <h5>{name}</h5>
                </div>
                <h4>${Cprice} </h4>
                <p>Tags</p>
                <div className="sbtn">
                  <p>Mireoble</p>
                  <p>Pow</p>
                  <p>Mart contacts</p>
                  <p>{name}</p>
                </div>
              </div>
              <div className="left">
                <div className="rev">
                  <span className="ml">
                    <div className="flexs">
                      <div className="mg">🐱</div>
                      <p className="p">#2678</p>
                    </div>
                    <span className="desc">
                      <p className="namin">sanshu inu</p>
                      <b className="des">sanshu</b>
                    </span>
                  </span>
                  <span className="ml">
                    <div className="flexs">
                      <div className="mg">🥖</div>
                      <p className="p">#2000</p>
                    </div>
                    <span className="desc">
                      <p className="namin">COTI</p>
                      <b className="des">COTI</b>
                    </span>
                  </span>
                  <span className="ml">
                    <div className="flexs">
                      <div className="mg">♾️</div>
                      <p className="p">#16</p>
                    </div>
                    <span className="desc">
                      <p className="namin">Polygon</p>
                      <b className="des">Polygon</b>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="bgcont">
              <div className="bgsub">
                <p className="pm">
                  Market cap <i>i</i>
                </p>
                <h5 className="h5">
                  <span style={{ color: "rgb(212, 208, 208)" }}>$</span>
                  {Mcap}
                </h5>
                <p
                  className={McapChangePercent > 0 ? "widg cols" : "widg cold"}
                >
                  <span>
                    {McapChangePercent > 0 ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </span>
                  {`${McapChangePercent}%`}
                </p>
              </div>
              <div className="bgsub">
                <p className="pm">
                  Fully Diluted <i>i</i>
                </p>
                <h5 className="h5">
                  <span style={{ color: "rgb(212, 208, 208)" }}>$</span>
                  {diluted}
                </h5>
                <p
                // className={McapChangePercent > 0 ? "widg cols" : "widg cold"}
                >
                  {/* <span>
                    {McapChangePercent > 0 ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </span>
                  {`${McapChangePercent}%`} */}
                </p>
              </div>
              <div className="bgsub">
                <p className="pm">
                  Volume <i>i</i>
                </p>

                <h5 className="h5">
                  <span style={{ color: "rgb(212, 208, 208)" }}>$</span>
                  {volume}
                </h5>
                <p
                // className={McapChangePercent > 0 ? "widg cols" : "widg cold"}
                >
                  {/* <span>
                    {McapChangePercent > 0 ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </span>
                  {`${McapChangePercent}%`} */}
                </p>
              </div>
              <div className="bgsub">
                <p className="pm">
                  Circulating supply <i>i</i>
                </p>

                <h5 className="h5">
                  {Csupply}
                  <span style={{ color: "rgb(212, 208, 208)" }}>ETH</span>
                </h5>
                <p className="wid">{Csupply}</p>
              </div>
            </div>
            <div className="chartc">
              <div className="lef">
                {/* <div className="lis">
                  <p className="ui"> */}
                {/* <span>Overview</span>
                    <span className="p-1 rounded-lg px-2 hover:text-blue-400 hover:border-b-2 hover:border-blue-400 cursor-pointer">
                      Market
                    </span>
                    <span className="p-1 rounded-lg px-2 hover:text-blue-400 hover:border-b-2 hover:border-blue-400 cursor-pointer">
                      Wallets
                    </span>
                    <span className="p-1 rounded-lg px-2 hover:text-blue-400 hover:border-b-2 hover:border-blue-600 cursor-pointer">
                      Ratings
                    </span>
                    <span className="p-1 rounded-lg px-2 hover:text-blue-400 hover:border-b-2 hover:border-blue-600 cursor-pointer">
                      Analysis
                    </span>
                    <span className="p-1 rounded-lg px-2 hover:text-blue-400 hover:border-b-2 hover:border-blue-600 cursor-pointer">
                      Estimates
                    </span> */}
                {/* </p> */}
                {/* <p className="ni">
                    <span>🍑</span>
                    <span>🌕</span>
                    <span>🌝</span>
                  </p> */}
                {/* </div> */}
                {/* <hr /> */}
                <div className=" m-5 mx-9 flex items-center justify-between">
                  <p className="flex space-x-2">
                    <span
                      onClick={() => handleClick("price")}
                      className={
                        btn === "price"
                          ? "bg-blue-600 p-1 px-2 rounded-lg hover:text-blue-400 cursor-pointer"
                          : "p-1 rounded-lg px-2 hover:text-blue-400 cursor-pointer"
                      }
                    >
                      Price
                    </span>
                    <span
                      onClick={() => handleClick("market")}
                      className={
                        btn === "market"
                          ? "bg-blue-600 p-1 rounded-lg hover:text-blue-400 cursor-pointer"
                          : "p-1 rounded-lg px-2 hover:text-blue-400 cursor-pointer inline-block"
                      }
                    >
                      Market cap
                    </span>
                    {/* <span
                      onClick={() => handleClick("trend")}
                      className={
                        btn === "trend"
                          ? "bg-blue-600 p-1 px-2 rounded-lg hover:text-blue-400 cursor-pointer"
                          : "p-1 rounded-lg px-2 hover:text-blue-400 cursor-pointer add"
                      }
                    >
                      Trending
                    </span> */}
                  </p>
                  <p className="space-x-5 add">
                    <span className=" bg-blue-600 p-1 rounded-lg">USD</span>
                    <span>{`${symbol}`.toUpperCase()}</span>
                  </p>
                  {/* <p className="add">
                    <span className="bg-blue-600 p-1 px-2 rounded-lg hover:text-blue-400 cursor-pointer">
                      Day
                    </span>
                    <span className=" p-1 px-2 rounded-lg hover:text-blue-400 cursor-pointer">
                      Month
                    </span>
                    <span className=" p-1 px-2 rounded-lg hover:text-blue-400 cursor-pointer">
                      Year
                    </span>
                  </p> */}
                  <p className="ni add">
                    <span>🍑</span>
                    <span>🌕</span>
                    <span>🌝</span>
                  </p>
                </div>
                <hr />
                <span className="schart">
                  {btn === "price" ? (
                    <Chart title={name} id={id} />
                  ) : (
                    <Chart title={name} id={id} cap="market" />
                  )}
                </span>
              </div>
              <div className="rig">
                <div className="subrig">
                  <img src={image} alt={name} className="img" />
                  <span>
                    <p>{`${symbol}`.toUpperCase()}</p>
                    <p>Price statistics</p>
                  </span>
                  <FaChevronDown />
                </div>
                <hr />
                <div className="sbg">
                  <div className="wrap">
                    <p className="sn">Price</p>
                    <p>${Cprice}</p>
                  </div>
                  <hr />
                  <div className="wrap">
                    <p className="sn">Price change</p>
                    <p
                      className={
                        PchangePercent > 0
                          ? "flex items-center cols gap-1"
                          : "flex items-center cold gap-1"
                      }
                    >
                      {PchangePercent > 0 ? <FaChevronUp /> : <FaChevronDown />}
                      {PchangePercent}%
                    </p>
                  </div>
                  <hr />
                  <div className="wrap">
                    <p className="sn">24 High</p>
                    <p>${high}</p>
                  </div>
                  <hr />
                  <div className="wrap">
                    <p className="sn">24 Low</p>
                    <p>${low}</p>
                  </div>
                  <hr />
                  <div className="wrap">
                    <p className="sn">Volume</p>
                    <p>${volume}</p>
                  </div>
                  <hr />
                  <div className="wrap">
                    <p className="sn">ATH</p>
                    <p>{ath}</p>
                  </div>
                  <hr />
                  <div className="wrap">
                    <p className="sn">Rank</p>
                    <p>#{McapRank}</p>
                  </div>
                  <hr />
                  <div className="wrap">
                    <span>
                      <p className="sn">Market cap</p>
                      <p>${Mcap}</p>
                    </span>
                    <span
                      className={
                        McapChangePercent > 0
                          ? "flex items-center cols gap-1"
                          : "flex items-center cold gap-1"
                      }
                    >
                      {McapChangePercent > 0 ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                      {McapChangePercent}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
