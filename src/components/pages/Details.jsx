import React, { useEffect, useState } from "react";
import "./details.css";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Chart from "../landing-page/directory/Chart";
import { FaChevronDown, FaChevronUp, FaFacebook } from "react-icons/fa";

const Details = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const dataFetcher = async () => {
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
          ath_date,
          atl,
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
          ath_date,
          atl,
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
    dataFetcher();
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
    ath_date,
    atl,
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
              <ul className="top">
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
              </ul>
            </div>
            <div className="conc">
              <div className="text">
                <div className="coin">
                  <img src={image} alt={name} className="img" />
                  <h5>{name}</h5>
                </div>
                <h4> </h4>
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
                <p className="widg">
                  <span>
                    <FaChevronUp style={{ color: "green" }} />
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
                <p className="widg">
                  <span>
                    <FaChevronUp style={{ color: "green" }} />
                  </span>
                  0.75%
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
                <p className="widg">
                  <span>
                    <FaChevronUp style={{ color: "green" }} />
                  </span>
                  8.75%
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
                <div className="lis">
                  <p className="ui">
                    <span>Overview</span>
                    <span>Market</span>
                    <span>Wallets</span>
                    <span>Ratings</span>
                    <span>Analysis</span>
                    <span>Price estimates</span>
                  </p>
                  <p className="ni">
                    <span>
                      🍑
                      {/* <FaFacebook style={{ fontSize: "15px" }} /> */}
                    </span>
                    <span>
                      🌕
                      {/* <FaFacebook style={{ fontSize: "15px" }} /> */}
                    </span>
                    <span>
                      🌝
                      {/* <FaFacebook style={{ fontSize: "15px" }} /> */}
                    </span>
                  </p>
                </div>
                <hr />
                <div className="lis add">
                  <p className="ui">
                    <span className="day">Price</span>
                    <span>Market cap</span>
                    <span>Trending</span>
                    <span>USD</span>
                    <span>{`${symbol}`.toUpperCase()}</span>
                  </p>
                  <p className="ni">
                    <span className="day">Day</span>
                    <span>Month</span>
                    <span>Year</span>
                  </p>
                </div>
                <span className="schart">
                  <Chart title={name} id={id} />
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
                    <p>{PchangePercent}%</p>
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
                    <span>
                      <FaChevronDown />
                      0.05%
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
