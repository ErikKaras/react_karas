import { FunctionComponent } from "react";

const Home: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-light-yellow overflow-hidden flex flex-col items-start justify-start pt-[34px] px-[63px] pb-[185px] box-border gap-[50px] tracking-[normal] text-left text-81xl text-dark-blue font-poppins lg:pl-[31px] lg:pr-[31px] lg:box-border mq750:gap-[25px]">
      <header className="w-[990px] h-[214px] flex flex-row items-start justify-start py-0 px-[34px] box-border max-w-full text-left text-5xl text-dark-blue font-poppins">
        <div className="flex-1 flex flex-col items-end justify-start gap-[7px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start">
            <div className="h-[72px] relative font-semibold inline-block whitespace-nowrap">
              <p className="m-0">Erik Karas</p>
            </div>
          </div>
          <div className="w-[50px] h-14 relative">
            <div className="absolute top-[16px] left-[0px] w-6 h-6">
              <div className="absolute top-[0px] left-[9px] rounded-md bg-dark-brown w-1.5 h-6" />
              <div className="absolute top-[15px] left-[0px] rounded-md bg-dark-brown w-1.5 h-6 [transform:_rotate(-90deg)] [transform-origin:0_0] z-[1]" />
            </div>
            <div className="absolute top-[32px] left-[26px] w-6 h-6">
              <div className="absolute top-[0px] left-[9px] rounded-md bg-dark-brown w-1.5 h-6" />
              <div className="absolute top-[15px] left-[0px] rounded-md bg-dark-brown w-1.5 h-6 [transform:_rotate(-90deg)] [transform-origin:0_0] z-[1]" />
            </div>
            <div className="absolute top-[0px] left-[26px] w-6 h-6">
              <div className="absolute top-[0px] left-[9px] rounded-md bg-dark-brown w-1.5 h-6" />
              <div className="absolute top-[15px] left-[0px] rounded-md bg-dark-brown w-1.5 h-6 [transform:_rotate(-90deg)] [transform-origin:0_0] z-[1]" />
            </div>
          </div>
        </div>
      </header>
      <section className="w-[1324px] flex flex-row items-start justify-start py-0 px-[34px] box-border min-h-[641px] max-w-full text-left text-[28px] text-dark-blue font-poppins">
        <div className="flex-1 flex flex-col items-start justify-start gap-[1px] max-w-full">
          <div className="relative font-medium whitespace-pre-wrap mq450:text-3xl">
            Ahoj, jmenuji se Erik
          </div>
          <div className="self-stretch flex flex-row items-center justify-start relative max-w-full text-81xl">
            <img
              className="w-[57.7px] absolute my-0 mx-[!important] top-[69px] right-[0.3px] h-[51.9px] object-contain"
              loading="eager"
              alt=""
              src="/group-13@2x.png"
            />
            <div className="w-[616px] flex flex-col items-start justify-start gap-[35px] max-w-full mq750:gap-[17px]">
              <h1 className="m-0 self-stretch relative text-inherit leading-[116px] font-extrabold font-inherit z-[1] mq450:text-11xl mq450:leading-[46px] mq1050:text-31xl mq1050:leading-[70px]">
                <p className="m-0">3D ARTIST/</p>
                <p className="m-0">MODELER</p>
              </h1>
              <div className="w-[206px] h-[42px] relative" />
              <div className="flex flex-col items-end justify-end pt-4 pb-0 pr-6 pl-[38px] text-[20px] text-dark-brown">
                <div className="h-[52px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border">
                  <div className="flex flex-row items-start justify-start relative">
                    <div className="w-[158px] absolute my-0 mx-[!important] top-[-9px] left-[-32px] rounded-md bg-yellow h-[61px]" />
                    <input
                      className="[outline:none] bg-[transparent] h-[61px] w-[158px] absolute my-0 mx-[!important] top-[-16px] left-[-38px] rounded-md box-border z-[1] border-[1px] border-solid border-dark-brown"
                      type="text"
                    />
                    <div className="h-[60px] relative inline-block z-[2] mq450:text-[16px]">
                      <p className="m-0">Portfolium</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-[968px] flex flex-row items-start justify-start py-0 px-[34px] box-border min-h-[375px] max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[32px] max-w-full mq450:gap-[16px]">
          <h1 className="m-0 relative text-inherit leading-[116px] font-extrabold font-inherit inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] max-w-full mq450:text-11xl mq450:leading-[46px] mq1050:text-31xl mq1050:leading-[70px]">
            O mně.
          </h1>
          <div className="self-stretch h-[132px] relative text-5xl leading-[44px] inline-block mq450:text-lgi mq450:leading-[35px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
            vulputate tristique quam felis. Id phasellus dui orci vulputate
            consequat nulla proin. Id sit scelerisque neque, proin bibendum
            diam.
          </div>
        </div>
      </div>
      <section className="w-[1511px] flex flex-row items-start justify-center min-h-[212px] max-w-full text-left text-5xl text-dark-blue font-poppins">
        <div className="w-[931px] flex flex-col items-start justify-start gap-[10px] max-w-full">
          <div className="flex flex-row items-center justify-start gap-[18px]">
            <div className="h-[13px] w-[13px] relative rounded-[50%] bg-dark-blue" />
            <div className="relative leading-[40px] font-semibold mq450:text-lgi mq450:leading-[32px]">
              2020
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[31px] box-border max-w-full">
            <div className="h-[132px] flex-1 relative leading-[44px] inline-block max-w-full mq450:text-lgi mq450:leading-[35px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              vulputate tristique quam felis. Id phasellus dui orci vulputate
              consequat nulla proin. Id sit scelerisque neque, proin bibendum
              diam.
            </div>
          </div>
        </div>
      </section>
      <div className="w-[694px] flex flex-row items-start justify-center max-w-full text-5xl">
        <div className="relative leading-[40px] font-semibold mq450:text-lgi mq450:leading-[32px]">
          2021
        </div>
      </div>
      <section className="w-[1284px] flex flex-row items-start justify-start relative max-w-full text-left text-5xl text-dark-blue font-poppins">
        <i className="absolute my-0 mx-[!important] top-[940px] left-[44px] text-17xl leading-[44px] inline-block mq450:text-3xl mq450:leading-[26px] mq1050:text-10xl mq1050:leading-[35px]">
          2019
        </i>
        <div className="h-[132px] w-[900px] absolute my-0 mx-[!important] top-[-40px] right-[63px] leading-[44px] inline-block mq450:text-lgi mq450:leading-[35px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
          vulputate tristique quam felis. Id phasellus dui orci vulputate
          consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.
        </div>
        <div className="h-[132px] w-[900px] absolute my-0 mx-[!important] top-[222px] right-[63px] leading-[44px] inline-block mq450:text-lgi mq450:leading-[35px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
          vulputate tristique quam felis. Id phasellus dui orci vulputate
          consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.
        </div>
        <h1 className="my-0 mx-[!important] absolute top-[537px] left-[34px] text-81xl leading-[116px] font-extrabold font-inherit mq450:text-11xl mq450:leading-[46px] mq1050:text-31xl mq1050:leading-[70px]">
          Moje práce.
        </h1>
        <div className="h-[30px] w-[5px] absolute my-0 mx-[!important] top-[475.99px] left-[16.01px] bg-dark-brown [transform:_rotate(24deg)] [transform-origin:0_0] z-[2]" />
        <div className="h-[30px] w-[5px] absolute my-0 mx-[!important] top-[475.99px] left-[37.71px] bg-dark-brown [transform:_rotate(24deg)] [transform-origin:0_0] z-[2]" />
        <div className="h-[30px] w-[5px] absolute my-0 mx-[!important] top-[475.99px] left-[59.51px] bg-dark-brown [transform:_rotate(24deg)] [transform-origin:0_0] z-[2]" />
        <div className="flex-1 flex flex-col items-start justify-start gap-[74px] min-h-[2237px] max-w-full mq750:gap-[37px] mq450:gap-[18px]">
          <div className="w-[1101px] h-[916px] flex flex-col items-center justify-start pt-0 px-5 pb-0 box-border relative gap-[728px] max-w-full mq750:gap-[364px] mq450:gap-[182px]">
            <div className="w-[900px] h-[132px] absolute my-0 mx-[!important] bottom-[99px] left-[34px] leading-[44px] font-port-lligat-slab inline-block mq450:text-lgi mq450:leading-[35px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              vulputate tristique quam felis. Id phasellus dui orci vulputate
              consequat nulla proin. Id sit scelerisque neque, proin bibendum
              diam.
            </div>
            <div className="w-[521px] flex flex-row items-start justify-start max-w-full">
              <div className="flex flex-col items-start justify-start gap-[236px] mq450:gap-[118px]">
                <div className="w-[13px] h-[13px] relative rounded-[50%] bg-dark-blue" />
                <div className="flex flex-row items-center justify-start gap-[18px]">
                  <div className="h-[13px] w-[13px] relative rounded-[50%] bg-dark-blue z-[2]" />
                  <div className="relative leading-[40px] font-semibold mq450:text-lgi mq450:leading-[32px]">
                    2022 - Současnost
                  </div>
                </div>
              </div>
            </div>
            <img
              className="w-[calc(100%_-_45px)] absolute my-0 mx-[!important] h-[calc(100%_+_0.9px)] top-[0px] right-[45.2px] bottom-[-0.9px] left-[-0.2px] max-w-full overflow-hidden max-h-full object-contain z-[1]"
              loading="eager"
              alt=""
              src="/group-14@2x.png"
            />
            <div className="w-[521px] flex flex-row items-start justify-end max-w-full text-17xl">
              <i className="h-[-24px] relative leading-[44px] inline-block mq450:text-3xl mq450:leading-[26px] mq1050:text-10xl mq1050:leading-[35px]">
                2020
              </i>
            </div>
            <div className="w-[5px] h-[30px] absolute my-0 mx-[!important] bottom-[410.01px] left-[81.31px] bg-dark-brown [transform:_rotate(24deg)] [transform-origin:0_0] z-[2]" />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-6 box-border max-w-full font-poly">
            <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[110px] max-w-full mq750:gap-[55px] mq450:gap-[27px]">
              <div className="flex-1 flex flex-col items-start justify-start min-w-[377px] max-w-full mq750:min-w-full">
                <div className="self-stretch h-[329px] flex flex-row items-start justify-start py-0 pr-0 pl-2.5 box-border max-w-full">
                  <div className="flex-1 flex flex-row items-center justify-center bg-[url('/public/image-1@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
                    <img
                      className="self-stretch w-[570px] relative max-h-full object-cover hidden min-h-[321px] max-w-full"
                      alt=""
                      src="/image-1@2x.png"
                    />
                    <img
                      className="h-[321px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
                      loading="eager"
                      alt=""
                      src="/image-1@2x.png"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-2.5">
                  <div className="relative leading-[44px] mq450:text-lgi mq450:leading-[35px]">
                    První interiér
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5 box-border min-h-[192px] max-w-full text-lg font-port-lligat-sans">
                  <div className="h-24 flex-1 relative leading-[32px] inline-block max-w-full z-[1]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    sed aliquam sollicitudin rhoncus morbi. Tincidunt quam sem
                    elit a convallis. Eget ipsum, velit vitae eu nunc,
                    consequat, at.
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-2.5 text-17xl font-poppins">
                  <i className="relative leading-[44px] mq450:text-3xl mq450:leading-[26px] mq1050:text-10xl mq1050:leading-[35px]">
                    2021
                  </i>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[21px] box-border max-w-full">
                  <div className="flex-1 flex flex-row items-center justify-center bg-[url('/public/image-1@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full z-[1]">
                    <img
                      className="self-stretch w-[570px] relative max-h-full object-cover hidden min-h-[321px] max-w-full"
                      alt=""
                      src="/image-1@2x.png"
                    />
                    <img
                      className="h-[321px] flex-1 relative max-w-full overflow-hidden object-cover z-[2]"
                      loading="eager"
                      alt=""
                      src="/image-1@2x.png"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[18px] box-border max-w-full">
                  <div className="relative leading-[44px] mq450:text-lgi mq450:leading-[35px]">
                    <p className="m-0">První interiér dělaný v Blenderu</p>
                  </div>
                </div>
                <div className="w-[560px] relative text-lg leading-[32px] font-port-lligat-sans inline-block max-w-full z-[1]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  sed aliquam sollicitudin rhoncus morbi. Tincidunt quam sem
                  elit a convallis. Eget ipsum, velit vitae eu nunc, consequat,
                  at.
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start min-w-[370px] max-w-full mq750:min-w-full">
                <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full">
                  <img
                    className="h-[321px] flex-1 relative max-w-full overflow-hidden object-cover"
                    loading="eager"
                    alt=""
                    src="/image-2@2x.png"
                  />
                </div>
                <div className="relative leading-[44px] mq450:text-lgi mq450:leading-[35px]">
                  Charitativní interiér
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[87px] box-border max-w-full text-lg font-port-lligat-sans">
                  <div className="h-24 flex-1 relative leading-[32px] inline-block max-w-full z-[1]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    sed aliquam sollicitudin rhoncus morbi. Tincidunt quam sem
                    elit a convallis. Eget ipsum, velit vitae eu nunc,
                    consequat, at.
                  </div>
                </div>
                <div className="h-[53px] flex flex-row items-start justify-start py-0 px-2.5 box-border text-17xl font-poppins">
                  <i className="relative leading-[44px] mq450:text-3xl mq450:leading-[26px] mq1050:text-10xl mq1050:leading-[35px]">
                    2022
                  </i>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[21px] box-border max-w-full">
                  <div className="flex-1 flex flex-row items-center justify-center bg-[url('/public/image-1@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
                    <img
                      className="self-stretch w-[570px] relative max-h-full object-cover hidden min-h-[321px] max-w-full"
                      alt=""
                      src="/image-1@2x.png"
                    />
                    <img
                      className="h-[321px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
                      loading="eager"
                      alt=""
                      src="/image-7@2x.png"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[18px]">
                  <div className="relative leading-[44px] mq450:text-lgi mq450:leading-[35px]">
                    <p className="m-0">První vydaná v2</p>
                  </div>
                </div>
                <div className="self-stretch relative text-lg leading-[32px] font-port-lligat-sans z-[1]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  sed aliquam sollicitudin rhoncus morbi. Tincidunt quam sem
                  elit a convallis. Eget ipsum, velit vitae eu nunc, consequat,
                  at.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[30px] w-[5px] absolute my-0 mx-[!important] top-[446.99px] right-[65.79px] bg-dark-brown [transform:_rotate(24deg)] [transform-origin:0_0]" />
        <div className="h-[30px] w-[5px] absolute my-0 mx-[!important] top-[446.99px] right-[43.99px] bg-dark-brown [transform:_rotate(24deg)] [transform-origin:0_0]" />
        <div className="h-[30px] w-[5px] absolute my-0 mx-[!important] top-[446.99px] right-[22.29px] bg-dark-brown [transform:_rotate(24deg)] [transform-origin:0_0]" />
        <div className="h-[30px] w-[5px] absolute my-0 mx-[!important] top-[446.99px] right-[0.49px] bg-dark-brown [transform:_rotate(24deg)] [transform-origin:0_0]" />
      </section>
      <div className="w-[5px] h-[30px] absolute my-0 mx-[!important] top-[2241.99px] left-[57.21px] bg-dark-brown [transform:_rotate(24deg)] [transform-origin:0_0]" />
      <section className="w-[1191px] flex flex-row items-start justify-start py-0 px-[26px] box-border max-w-full text-left text-81xl text-dark-blue font-poppins">
        <div className="flex-1 flex flex-col items-start justify-start gap-[41px] max-w-full mq750:gap-[20px]">
          <h1 className="m-0 relative text-inherit leading-[116px] font-extrabold font-inherit inline-block max-w-full mq450:text-11xl mq450:leading-[46px] mq1050:text-31xl mq1050:leading-[70px]">
            Kontakty.
          </h1>
          <div className="self-stretch flex flex-row items-center justify-start gap-[59px] max-w-full text-5xl font-port-lligat-slab mq750:gap-[29px] mq1050:flex-wrap">
            <img
              className="w-[440px] relative max-h-full object-cover max-w-full mq1050:flex-1"
              loading="eager"
              alt=""
              src="/unsplash2xht5d22y0i@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[21px] min-w-[416px] max-w-full mq750:min-w-full">
              <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
                <div className="h-44 flex-1 relative leading-[44px] inline-block max-w-full mq450:text-lgi mq450:leading-[35px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                  vulputate tristique quam felis. Id phasellus dui orci
                  vulputate consequat nulla proin. Id sit scelerisque neque,
                  proin bibendum diam.
                </div>
                <img
                  className="w-[57.7px] absolute my-0 mx-[!important] right-[-41.7px] bottom-[-42.9px] h-[51.9px] object-contain z-[1]"
                  loading="eager"
                  alt=""
                  src="/group-15@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start font-poppins">
                <div className="relative leading-[44px] whitespace-nowrap mq450:text-lgi mq450:leading-[35px]">
                  Erik.Karas@mail.com
                </div>
                <div className="relative leading-[44px] mq450:text-lgi mq450:leading-[35px]">
                  twitter.com/ErikKaras
                </div>
                <div className="relative leading-[44px] mq450:text-lgi mq450:leading-[35px]">
                  behance.com/ErikKaras
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-[5px] h-[30px] absolute my-0 mx-[!important] top-[2212.99px] right-[325.69px] bg-dark-brown [transform:_rotate(24deg)] [transform-origin:0_0]" />
    </div>
  );
};

export default Home;
