import React, { Fragment, useState, useRef } from "react";
import {Helmet} from 'react-helmet-async'
import Navigation from "../navigation/navigation.component";
import { SearchOutlined } from "@ant-design/icons";
import { PlusOutlined } from "@ant-design/icons";
import { MinusOutlined } from "@ant-design/icons";
import PreFooter from "./PreFooter";
import Help from "./Help";

const questions = [
  {
    id: 0,
    headline: "Does Mooncod have transaction fees to send or receive?",
    keyword: "Transaction fee",
    description:
      "Yes. A small transaction fee is charged on every transaction.",
  },
  {
    id: 1,
    headline: "Why did my transaction fail?",
    keyword: "transaction Fail",
    description:
      "Transactions can fail due to congestion on the swap chain or owing to insufficient balance.",
  },
  {
    id: 2,
    headline: "I sent my tokens to the wrong address. What can I do?",
    keyword: "wrong",
    description:
      "Unfortunately, transactions on the blockchain are permanent and irreversible. You are advised to double-check all addresses in all transactions",
  },
  {
    id: 3,
    headline: "Can I create multiple wallets on the same device?",
    keyword: "wallet",
    description:
      "You can create multiple wallets on the same device; however, they are secured by a single seed phrase and password.",
  },
  {
    id: 4,
    headline:
      "Can I have my Mooncod wallet logged in on multiple devices at once?",
    keyword: "wallet",
    description:
      "Yes, once you have access to your secret phase and password, you can log in to as many devices. However, you are advised to log out on any device you do not have absolute control over",
  },
  {
    id: 5,
    headline:
      "I clicked a link, and my account was hacked/phished, what can I do?",
    keyword: "hacked",
    description:
      "Unfortunately, transactions on the blockchain are permanent and irreversible. You are advised not to click any link and be sure to trust any dApp you are connecting with your wallet.",
  },
  {
    id: 6,
    headline: "What happens if I loose my private keys/password?",
    keyword: "password",
    description:
      "You are advised to safeguard your seed phrase and password as these are the only gateways to access your wallet. You will lose access to your wallet until you provide your password and seed phrase.",
  },
  {
    id: 7,
    headline: "I received a link to submit my seed phrase. Is it safe?",
    keyword: "seed phrase",
    description:
      "Mooncod will never request your private keys or seed phrase. Any link asking for your secure information is engineered for phishing",
  },
];

// const searchQuestion = function () {
//   questions.find((cur) => console.log(cur));
// };

const Faq = function () {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchQuestion, setQuestion] = useState("");

  let val = useRef();

  const onAccordionOpen = function (id) {
    setActiveIndex(id);
  };
  const onAccordionClose = function (id) {
    setActiveIndex(null);
  };

  const showQustionList = () => {
    const questionList = questions.map((question, index) => {
      const active = activeIndex === question.id ? "h-full" : "h-16";
      const slide = activeIndex === question.id ? "opacity-1" : "opacity-0";
      return (
        <Fragment key={index}>
          <div className={`${active} overflow-y-hidden my-2`}>
            <div
              className='w-4/5 lg:w-1/2 h-14 mx-auto flex justify-between items-center px-6 rounded-lg outline outline-1 outline-offset-1 bg-[#080A0C] outline-[#3D8DFF] open mt-1'
              onClick={() => onAccordionOpen(index)}>
              <h2 className='text-xs md:text-md md:text-lg text-white'>
                {question.headline}
              </h2>
              <PlusOutlined className='text-[#454545] cursor-pointer icon' />
            </div>
            <div
              className={`w-4/5 lg:w-1/2 h-full ${slide} transition transition-all ease-linear duration-300 mx-auto px-6 py-6 rounded-lg mt-3  bg-[#080A0C] outline outline-1 outline-offset-1 outline-[#3D8DFF]`}>
              <div className='h-full mx-auto flex justify-between items-center py-2'>
                <h4 className='text:sm md:text-md md:text-lg text-white'>
                  {question.headline}
                </h4>
                <MinusOutlined
                  className='text-[#454545]'
                  onClick={() => onAccordionClose()}
                />
              </div>
              <p className='mt-10 text-white text-sm leading-6 lg:text-md'>
                {question.description}
              </p>
            </div>
          </div>
        </Fragment>
      );
    });
    return questionList;
  };

  //   const onOpen

  return (
    <>

<Helmet>
        <title>Mooncod Frequently asked question</title>
        <meta
          name='description'
          content='Frequently asked questions'
        />
        <link rel='canonical' href='/faq' />
      </Helmet>
    <main id='faq'>
      <Navigation />

      <section className='container h-full md:px-16 xl:px-20 mx-auto h-full w-full flex flex-col items-center justify-between flex-wrap lg:flex-nowrap sm:mt-8 md:mt-0'>
        <div className='w-full pb-4 md:mb-0 mt-20 mt-40 '>
          <div>
            
            <h2 className='text-3xl lg:text-4xl xl:text-4xl mb-2 font-body font-bold text-white text-center'>
              Frequently asked questions
            </h2>
            <p className='text-sm mt-4 font-body text-center font-normal text-white'>
              Have questions? <br /> We are here to answer.
            </p>
          </div>
        </div>

        <div className='w-full h-full relative py-4 px-4 '>
          <div className='w-full md:w-80 h-10 mx-auto bg[#080A0C] border border-1 border-white flex items-center justify-center rounded-lg px-1'>
            <SearchOutlined
              className='text-[#fff] w-7'
              onClick={() => {
                questions.filter((question) =>
                  !searchQuestion
                    .toLowerCase()
                    .includes(question.keyword.toLowerCase())
                    ? null
                    : setActiveIndex(question.id)
                );
              }}
            />

            <input
              type='search'
              className='py-1 w-full bg-transparent focus:outline-none text-white text-xs'
              id='search-question'
              placeholder='Search'
              onChange={() => {
                setQuestion(val.current.value);
              }}
              ref={val}
            />
          </div>
          <Help />
        </div>
      </section>
      <section>
        <article className='container h-full mx-auto py-4'>
          <div className='h-full mt-14'>{showQustionList()}</div>

          <div className='w-full pb-4 md:mb-0 mt-20'>
            <div>
              <h2 className='text-3xl lg:text-4xl xl:text-4xl mb-2 font-body font-bold text-white text-center'>
                Still have questions?
              </h2>
              <p className='text-sm mt-4 font-body text-center font-normal text-white'>
                If you cannot find answers to your questions in our FAQ,
                <br /> drop us a line on our Contact page.
              </p>
            </div>
          </div>
        </article>
      </section>
      <PreFooter />
    </main>
    </>

  );
};

export default Faq;
