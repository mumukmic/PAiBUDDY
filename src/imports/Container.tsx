import svgPaths from "./svg-3zcb6cs0ow";
import imgRectangle3644 from "figma:asset/167463928d95f640a202c9d16f57a7381022b0db.png";

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="calendar">
        <div className="absolute inset-[8.33%_12.5%]" data-name="Icon">
          <div className="absolute inset-[-5.63%_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 14.8333">
              <path d={svgPaths.p3adf0740} id="Icon" stroke="var(--stroke-0, #334155)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{ stroke: "color(display-p3 0.2000 0.2549 0.3333)", strokeOpacity: "1" }} />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Prompt:Regular',sans-serif] leading-[19.2px] not-italic relative shrink-0 text-[#3e465b] text-[12.8px] whitespace-nowrap">อาทิตย์ที่ 22 มีนาคม 2026</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[16px] top-[52px] w-[168px]">
      <p className="font-['Prompt:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3e465b] text-[16px] w-full">HKG Trip 2026</p>
      <Frame3 />
    </div>
  );
}

function Container2() {
  return <div className="absolute bg-[#d01c1b] left-[60.54px] opacity-20 rounded-[18606700px] size-[159.998px] top-0" data-name="Container" />;
}

function Container3() {
  return <div className="absolute bg-[#d01c1b] left-0 opacity-10 rounded-[18606700px] size-[95.993px] top-[133.52px]" data-name="Container" />;
}

function Frame2() {
  return (
    <div className="absolute h-[229.512px] left-[226px] top-[-32px] w-[220.536px]">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="-translate-x-1/2 absolute bg-white h-[120px] left-1/2 overflow-clip rounded-bl-[16px] rounded-br-[16px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_-1px_2px_0px_rgba(16,24,40,0.06)] top-0 w-[390px]" data-name="Container">
      <Frame4 />
      <Frame2 />
    </div>
  );
}

function FillShadow() {
  return (
    <div className="absolute inset-0 rounded-[296px] shadow-[0px_8px_40px_0px_rgba(0,0,0,0.12)]" data-name="Fill + Shadow">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[296px]">
        <div className="absolute bg-[rgba(255,255,255,0.65)] inset-0 rounded-[296px]" />
        <div className="absolute bg-[#ddd] inset-0 mix-blend-color-burn rounded-[296px]" />
        <div className="absolute bg-[#f7f7f7] inset-0 mix-blend-darken rounded-[296px]" />
      </div>
    </div>
  );
}

function GlassEffect() {
  return <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[296px]" data-name="Glass Effect" />;
}

function TabBarButtons() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Tab Bar Buttons">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center pl-[2px] pr-[10px] relative w-full">
          <div className="absolute inset-[-4px]" data-name="BG">
            <FillShadow />
            <GlassEffect />
          </div>
          <div className="flex-[1_0_0] min-h-px min-w-px mr-[-8px] relative" data-name="Tab 1">
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] gap-[0.5px] items-center justify-center pb-[7px] pt-[6px] px-[8px] relative text-[#1a1a1a] text-center w-full">
                <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100", fontFeatureSettings: "'ss16'" }}>
                  <p className="leading-[28px]">􀟉</p>
                </div>
                <p className="leading-[12px] relative shrink-0 text-[10px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Now
                </p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] min-h-px min-w-px mr-[-8px] relative" data-name="Tab 2">
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col gap-px items-center justify-center pb-[7px] pt-[6px] px-[8px] relative w-full">
                <div className="absolute bg-[#ededed] inset-[0_-2px] rounded-[100px]" data-name="Selection" />
                <div className="flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[0] min-w-full relative shrink-0 text-[#e36414] text-[18px] text-center w-[min-content]" style={{ fontVariationSettings: "'wdth' 100", fontFeatureSettings: "'ss16'" }}>
                  <p className="leading-[28px]">􀀁</p>
                </div>
                <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[12px] min-w-full relative shrink-0 text-[#e36414] text-[10px] text-center tracking-[-0.1px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Activity
                </p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] min-h-px min-w-px mr-[-8px] relative" data-name="Tab 3">
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] gap-[0.5px] items-center justify-center pb-[7px] pt-[6px] px-[8px] relative text-[#1a1a1a] text-center w-full">
                <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100", fontFeatureSettings: "'ss16'" }}>
                  <p className="leading-[28px]">􀛤</p>
                </div>
                <p className="leading-[12px] relative shrink-0 text-[10px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Expense
                </p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] min-h-px min-w-px mr-[-8px] relative" data-name="Tab 4">
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] gap-[0.5px] items-center justify-center pb-[7px] pt-[6px] px-[8px] relative text-[#1a1a1a] text-center w-full">
                <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100", fontFeatureSettings: "'ss16'" }}>
                  <p className="leading-[28px]">􀟇</p>
                </div>
                <p className="leading-[12px] relative shrink-0 text-[10px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Overall
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Slide() {
  return (
    <div className="aspect-[1920/1080] overflow-clip relative rounded-tl-[8px] rounded-tr-[8px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_-1px_2px_0px_rgba(16,24,40,0.06)] shrink-0 w-full" data-name="Slide 16:9 - 1">
      <div className="absolute h-[100px] left-0 top-0 w-[179px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[267.94%] left-0 max-w-none top-[-22.88%] w-full" src={imgRectangle3644} />
        </div>
      </div>
      <div className="absolute content-stretch flex items-center left-[110px] top-[8px]" data-name="Badge">
        <div className="bg-[#eff2f6] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="_Badge base">
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="tag-02">
            <div className="absolute inset-[8.33%_9.34%_9.34%_8.33%]" data-name="Icon">
              <div className="absolute inset-[-7.59%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3788 11.3788">
                  <path d={svgPaths.p2d3da880} id="Icon" stroke="var(--stroke-0, #3E465B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{ stroke: "color(display-p3 0.2431 0.2745 0.3569)", strokeOpacity: "1" }} />
                </svg>
              </div>
            </div>
          </div>
          <p className="font-['Prompt:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3e465b] text-[10px] text-center whitespace-nowrap">Outfit</p>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[1.4] not-italic relative shrink-0 w-full">
      <p className="font-['Prompt:SemiBold',sans-serif] min-w-full relative shrink-0 text-[#3e465b] text-[12px] w-[min-content]">เดินเล่นสไตล์วัยรุ่นฮ่องกง</p>
      <p className="font-['Prompt:Regular',sans-serif] relative shrink-0 text-[#8a8fa8] text-[10px] whitespace-nowrap">เข้ากับบรรยากาศสตรีท</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[16px] relative shrink-0 w-full">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 163 16">
        <g id="Frame 1686560456">
          <line id="Line 6" stroke="var(--stroke-0, #E3E6ED)" strokeDasharray="2 2" style={{ stroke: "color(display-p3 0.8902 0.9020 0.9294)", strokeOpacity: "1" }} x2="163" y1="7.5" y2="7.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white relative rounded-bl-[8px] rounded-br-[8px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_-1px_2px_0px_rgba(16,24,40,0.06)] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[8px] relative w-full">
        <Frame9 />
        <Frame />
        <div className="content-stretch flex items-center relative shrink-0" data-name="Badge">
          <div className="bg-[#ffefca] content-stretch flex gap-[4px] items-center justify-center pl-[6px] pr-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="_Badge base">
            <div className="overflow-clip relative shrink-0 size-[12px]" data-name="calendar">
              <div className="absolute inset-[8.33%_12.5%]" data-name="Icon">
                <div className="absolute inset-[-7.5%_-8.33%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 11.5">
                    <path d={svgPaths.p173bd640} id="Icon" stroke="var(--stroke-0, #BC3803)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{ stroke: "color(display-p3 0.7373 0.2196 0.0118)", strokeOpacity: "1" }} />
                  </svg>
                </div>
              </div>
            </div>
            <p className="font-['Prompt:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#bc3803] text-[10px] text-center whitespace-nowrap">22 มีนาคม 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[8px] top-[179px] w-[179px]">
      <Slide />
      <Frame5 />
    </div>
  );
}

function Slide1() {
  return (
    <div className="aspect-[1920/1080] overflow-clip relative rounded-tl-[8px] rounded-tr-[8px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_-1px_2px_0px_rgba(16,24,40,0.06)] shrink-0 w-full" data-name="Slide 16:9 - 1">
      <div className="absolute h-[100px] left-0 top-0 w-[179px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[267.94%] left-0 max-w-none top-[-22.88%] w-full" src={imgRectangle3644} />
        </div>
      </div>
      <div className="absolute content-stretch flex items-center left-[110px] top-[8px]" data-name="Badge">
        <div className="bg-[#eff2f6] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="_Badge base">
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="tag-02">
            <div className="absolute inset-[8.33%_9.34%_9.34%_8.33%]" data-name="Icon">
              <div className="absolute inset-[-7.59%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3788 11.3788">
                  <path d={svgPaths.p2d3da880} id="Icon" stroke="var(--stroke-0, #3E465B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{ stroke: "color(display-p3 0.2431 0.2745 0.3569)", strokeOpacity: "1" }} />
                </svg>
              </div>
            </div>
          </div>
          <p className="font-['Prompt:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3e465b] text-[10px] text-center whitespace-nowrap">Outfit</p>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[1.4] not-italic relative shrink-0 w-full">
      <p className="font-['Prompt:SemiBold',sans-serif] min-w-full relative shrink-0 text-[#3e465b] text-[12px] w-[min-content]">สดใสสไตล์วัยใส</p>
      <p className="font-['Prompt:Regular',sans-serif] relative shrink-0 text-[#8a8fa8] text-[10px] whitespace-nowrap">เข้าสวนสนุกดิสนีย์แลนด์</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[16px] relative shrink-0 w-full">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 163 16">
        <g id="Frame 1686560456">
          <line id="Line 6" stroke="var(--stroke-0, #E3E6ED)" strokeDasharray="2 2" style={{ stroke: "color(display-p3 0.8902 0.9020 0.9294)", strokeOpacity: "1" }} x2="163" y1="7.5" y2="7.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white relative rounded-bl-[8px] rounded-br-[8px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_-1px_2px_0px_rgba(16,24,40,0.06)] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[8px] relative w-full">
        <Frame10 />
        <Frame1 />
        <div className="content-stretch flex items-center relative shrink-0" data-name="Badge">
          <div className="bg-[#ffefca] content-stretch flex gap-[4px] items-center justify-center pl-[6px] pr-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="_Badge base">
            <div className="overflow-clip relative shrink-0 size-[12px]" data-name="calendar">
              <div className="absolute inset-[8.33%_12.5%]" data-name="Icon">
                <div className="absolute inset-[-7.5%_-8.33%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 11.5">
                    <path d={svgPaths.p173bd640} id="Icon" stroke="var(--stroke-0, #BC3803)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{ stroke: "color(display-p3 0.7373 0.2196 0.0118)", strokeOpacity: "1" }} />
                  </svg>
                </div>
              </div>
            </div>
            <p className="font-['Prompt:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#bc3803] text-[10px] text-center whitespace-nowrap">23 มีนาคม 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[203px] top-[179px] w-[179px]">
      <Slide1 />
      <Frame8 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute left-[318px] rounded-[99px] top-[686px] w-[60px]" data-name="Button" style={{ backgroundImage: "linear-gradient(90deg, rgb(227, 100, 20) 0%, rgb(227, 100, 20) 100%), linear-gradient(90deg, rgb(0, 51, 152) 0%, rgb(0, 51, 152) 100%)" }}>
      <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[22px] py-[18px] relative rounded-[inherit] w-full">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="plus">
          <div className="absolute inset-[20.83%]" data-name="Icon">
            <div className="absolute inset-[-6.55%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8333 15.8333">
                <path d={svgPaths.p12a6cf80} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" style={{ stroke: "white", strokeOpacity: "1" }} />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[99px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_-1px_2px_0px_rgba(16,24,40,0.06)]" />
    </div>
  );
}

function Elements() {
  return (
    <div className="absolute inset-[8.33%_12.5%]" data-name="elements">
      <div className="absolute inset-[-5%_-5.55%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.99921 11">
          <g>
            <path d={svgPaths.p3b2d4a00} id="Vector" stroke="var(--stroke-0, #F5F7FA)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.9608 0.9686 0.9804)", strokeOpacity: "1" }} />
            <path d={svgPaths.p1a289300} id="Vector 5556" stroke="var(--stroke-0, #F5F7FA)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.9608 0.9686 0.9804)", strokeOpacity: "1" }} />
            <path d={svgPaths.p3a1aa100} id="Vector_2" stroke="var(--stroke-0, #F5F7FA)" strokeLinecap="round" style={{ stroke: "color(display-p3 0.9608 0.9686 0.9804)", strokeOpacity: "1" }} />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Elements1() {
  return (
    <div className="absolute inset-[8.33%_12.5%]" data-name="elements">
      <div className="absolute inset-[-5%_-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 11">
          <g>
            <path d={svgPaths.p1b6bd180} id="Rectangle 2176" stroke="var(--stroke-0, #3E465B)" strokeLinecap="round" style={{ stroke: "color(display-p3 0.2431 0.2745 0.3569)", strokeOpacity: "1" }} />
            <path d={svgPaths.p32fe5800} id="Vector" stroke="var(--stroke-0, #3E465B)" strokeLinecap="round" style={{ stroke: "color(display-p3 0.2431 0.2745 0.3569)", strokeOpacity: "1" }} />
            <path d="M7.5 8.5V7.5" id="Vector 4507" stroke="var(--stroke-0, #3E465B)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.2431 0.2745 0.3569)", strokeOpacity: "1" }} />
            <path d={svgPaths.pd937370} id="Rectangle 2175" stroke="var(--stroke-0, #3E465B)" strokeLinecap="round" style={{ stroke: "color(display-p3 0.2431 0.2745 0.3569)", strokeOpacity: "1" }} />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.33%_12.5%_8.34%_12.5%]" data-name="Group">
      <div className="absolute inset-[-5%_-5.56%_-5.01%_-5.55%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.99986 11.0003">
          <g id="Group">
            <path d={svgPaths.p3798e900} id="Vector" stroke="var(--stroke-0, #3E465B)" style={{ stroke: "color(display-p3 0.2431 0.2745 0.3569)", strokeOpacity: "1" }} />
            <path d={svgPaths.p187dedb0} id="Vector_2" stroke="var(--stroke-0, #3E465B)" strokeLinecap="round" style={{ stroke: "color(display-p3 0.2431 0.2745 0.3569)", strokeOpacity: "1" }} />
            <path d="M5.50377 4.99993H5.49927" id="Vector_3" stroke="var(--stroke-0, #3E465B)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.2431 0.2745 0.3569)", strokeOpacity: "1" }} />
            <path d={svgPaths.p36a46e00} id="Vector_4" stroke="var(--stroke-0, #3E465B)" strokeLinecap="round" style={{ stroke: "color(display-p3 0.2431 0.2745 0.3569)", strokeOpacity: "1" }} />
            <path d={svgPaths.p10f1ee80} id="Vector_5" stroke="var(--stroke-0, #3E465B)" strokeLinecap="round" style={{ stroke: "color(display-p3 0.2431 0.2745 0.3569)", strokeOpacity: "1" }} />
            <path d={svgPaths.p10f4ab00} id="Vector_6" stroke="var(--stroke-0, #3E465B)" strokeLinecap="round" style={{ stroke: "color(display-p3 0.2431 0.2745 0.3569)", strokeOpacity: "1" }} />
          </g>
        </svg>
      </div>
    </div>
  );
}

function BadgeBase() {
  return (
    <div className="bg-[#eff2f6] content-stretch flex gap-[4px] h-[24px] items-center justify-center pl-[6px] pr-[10px] py-[5px] relative rounded-[16px] shrink-0" data-name="_Badge base">
      <div className="relative shrink-0 size-[12px]" data-name="hugeicons:pizza-01">
        <Group />
      </div>
      <p className="font-['Prompt:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3e465b] text-[12px] text-center whitespace-nowrap">ร้านอาหาร</p>
    </div>
  );
}

function Badge() {
  return (
    <div className="h-[24px] relative shrink-0" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-start relative">
        <BadgeBase />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[8.33%_20.83%]" data-name="Group">
      <div className="absolute inset-[-5%_-7.14%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 11.0001">
          <g id="Group">
            <path d={svgPaths.p231e1500} id="Vector" stroke="var(--stroke-0, #3E465B)" strokeLinecap="round" style={{ stroke: "color(display-p3 0.2431 0.2745 0.3569)", strokeOpacity: "1" }} />
            <path d={svgPaths.p307bde00} id="Vector_2" stroke="var(--stroke-0, #3E465B)" style={{ stroke: "color(display-p3 0.2431 0.2745 0.3569)", strokeOpacity: "1" }} />
            <path d={svgPaths.p1ec75980} id="Vector_3" stroke="var(--stroke-0, #3E465B)" strokeLinecap="round" style={{ stroke: "color(display-p3 0.2431 0.2745 0.3569)", strokeOpacity: "1" }} />
            <path d={svgPaths.pb634480} id="Vector_4" stroke="var(--stroke-0, #3E465B)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.2431 0.2745 0.3569)", strokeOpacity: "1" }} />
          </g>
        </svg>
      </div>
    </div>
  );
}

function BadgeBase1() {
  return (
    <div className="bg-[#eff2f6] content-stretch flex gap-[4px] h-[24px] items-center justify-center pl-[6px] pr-[10px] py-[5px] relative rounded-[16px] shrink-0" data-name="_Badge base">
      <div className="relative shrink-0 size-[12px]" data-name="hugeicons:bubble-tea-01">
        <Group1 />
      </div>
      <p className="font-['Prompt:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3e465b] text-[12px] text-center whitespace-nowrap">คาเฟ่/ขนมหวาน</p>
    </div>
  );
}

function Badge1() {
  return (
    <div className="h-[24px] relative shrink-0" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-start relative">
        <BadgeBase1 />
      </div>
    </div>
  );
}

function BadgeBase2() {
  return (
    <div className="bg-[#eff2f6] content-stretch flex gap-[4px] h-[24px] items-center justify-center pl-[6px] pr-[10px] py-[5px] relative rounded-[16px] shrink-0" data-name="_Badge base">
      <div className="relative shrink-0 size-[12px]" data-name="package">
        <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-5%_-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 11">
              <path d={svgPaths.p37d2e380} id="Vector" stroke="var(--stroke-0, #3E465B)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.2431 0.2745 0.3569)", strokeOpacity: "1" }} />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Prompt:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3e465b] text-[12px] text-center whitespace-nowrap">อื่นๆ</p>
    </div>
  );
}

function Badge2() {
  return (
    <div className="h-[24px] relative shrink-0" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-start relative">
        <BadgeBase2 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[8px] overflow-clip top-[136px] w-[374px]" data-name="Container">
      <div className="relative shrink-0" data-name="Badge">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative">
          <div className="bg-[#e5780b] content-stretch flex gap-[4px] items-center justify-center px-[10px] py-[2px] relative rounded-[16px] shrink-0" data-name="_Badge base">
            <div className="overflow-clip relative shrink-0 size-[12px]" data-name="dress-02">
              <Elements />
            </div>
            <p className="font-['Prompt:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#fff6e0] text-[12px] text-center whitespace-nowrap">Outfit</p>
          </div>
        </div>
      </div>
      <div className="h-[24px] relative shrink-0" data-name="Badge">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-start relative">
          <div className="bg-[#eff2f6] content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[10px] py-[5px] relative rounded-[16px] shrink-0" data-name="_Badge base">
            <div className="overflow-clip relative shrink-0 size-[12px]" data-name="gameboy">
              <Elements1 />
            </div>
            <p className="font-['Prompt:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3e465b] text-[12px] text-center whitespace-nowrap">กิจกรรม</p>
          </div>
        </div>
      </div>
      <Badge />
      <Badge1 />
      <Badge2 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white relative size-full" data-name="Container">
      <Container1 />
      <div className="absolute bottom-0 content-stretch flex items-start justify-center left-0 pb-[28px] pt-[16px] px-[12px] w-[390px]" data-name="Tab Bar - iPhone">
        <TabBarButtons />
      </div>
      <Frame6 />
      <Frame7 />
      <Button />
      <Container4 />
    </div>
  );
}