import svgPaths from "./svg-vykgsp9hfx";

function Frame9() {
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

function Frame10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[16px] top-[52px] w-[168px]">
      <p className="font-['Prompt:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3e465b] text-[16px] w-full">Expense</p>
      <Frame9 />
    </div>
  );
}

function Container2() {
  return <div className="absolute bg-[#d01c1b] left-[60.54px] opacity-20 rounded-[18606700px] size-[159.998px] top-0" data-name="Container" />;
}

function Container3() {
  return <div className="absolute bg-[#d01c1b] left-0 opacity-10 rounded-[18606700px] size-[95.993px] top-[133.52px]" data-name="Container" />;
}

function Frame5() {
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
      <Frame10 />
      <Frame5 />
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
              <div className="content-stretch flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] gap-[0.5px] items-center justify-center pb-[7px] pt-[6px] px-[8px] relative text-[#1a1a1a] text-center w-full">
                <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100", fontFeatureSettings: "'ss16'" }}>
                  <p className="leading-[28px]">􀀁</p>
                </div>
                <p className="leading-[12px] relative shrink-0 text-[10px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Activity
                </p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] min-h-px min-w-px mr-[-8px] relative" data-name="Tab 3">
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col gap-px items-center justify-center pb-[7px] pt-[6px] px-[8px] relative w-full">
                <div className="absolute bg-[#ededed] inset-[0_-2px] rounded-[100px]" data-name="Selection" />
                <div className="flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[0] min-w-full relative shrink-0 text-[#e36414] text-[18px] text-center w-[min-content]" style={{ fontVariationSettings: "'wdth' 100", fontFeatureSettings: "'ss16'" }}>
                  <p className="leading-[28px]">􀛤</p>
                </div>
                <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[12px] min-w-full relative shrink-0 text-[#e36414] text-[10px] text-center tracking-[-0.1px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
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

function FillShadow1() {
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

function GlassEffect1() {
  return <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[296px]" data-name="Glass Effect" />;
}

function Tab() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px mr-[-8px] relative" data-name="Tab 1">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-px items-center justify-center pb-[7px] pt-[6px] px-[8px] relative size-full">
          <div className="absolute bg-[#ededed] inset-[-0.5px_0] rounded-[100px]" data-name="Selection" />
          <p className="font-['Prompt:SemiBold',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#e36414] text-[14px] text-center w-[min-content]">ภาพรวม</p>
        </div>
      </div>
    </div>
  );
}

function Tab1() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px mr-[-8px] relative" data-name="Tab 4">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-[7px] pt-[6px] px-[8px] relative size-full">
          <p className="font-['Prompt:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1a1a1a] text-[14px] text-center w-full">รายบุคคล</p>
        </div>
      </div>
    </div>
  );
}

function TabBarButtons1() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative" data-name="Tab Bar Buttons">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center pl-[2px] pr-[10px] relative size-full">
          <div className="absolute inset-[-4px]" data-name="BG">
            <FillShadow1 />
            <GlassEffect1 />
          </div>
          <Tab />
          <Tab1 />
        </div>
      </div>
    </div>
  );
}

function TabBarIPhone() {
  return (
    <div className="absolute content-stretch flex items-start justify-center left-0 px-[12px] py-[16px] top-[120px] w-[390px]" data-name="Tab Bar - iPhone">
      <TabBarButtons1 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative self-stretch shrink-0">
      <div className="content-stretch flex h-full items-start py-[16px] relative">
        <div className="flex items-center justify-center relative shrink-0">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="bg-[#18a0fb] h-[70px] rounded-bl-[28px] rounded-tl-[28px] w-[8px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-start flex flex-wrap gap-y-[4px] items-start justify-between pt-[8px] relative shrink-0 w-full" data-name="Container">
      <p className="font-['Prompt:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#8a94ad] text-[12px] whitespace-nowrap">ค่าใช้จ่ายทั้งหมด</p>
      <div className="content-stretch flex items-start relative shrink-0" data-name="Badge">
        <div className="bg-[#18a0fb] content-stretch flex gap-[4px] items-center justify-center pl-[6px] pr-[8px] py-[2px] relative rounded-[16px] shrink-0" data-name="_Badge base">
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="user">
            <div className="absolute inset-[62.5%_16.67%_12.5%_16.67%]" data-name="Vector">
              <div className="absolute inset-[-25%_-9.38%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 4.5">
                  <path d={svgPaths.p35a14f00} id="Vector" stroke="var(--stroke-0, #F4FBF2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{ stroke: "color(display-p3 0.9569 0.9843 0.9490)", strokeOpacity: "1" }} />
                </svg>
              </div>
            </div>
            <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
              <div className="absolute inset-[-18.75%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.5 5.5">
                  <path d={svgPaths.p9526000} id="Vector" stroke="var(--stroke-0, #F4FBF2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{ stroke: "color(display-p3 0.9569 0.9843 0.9490)", strokeOpacity: "1" }} />
                </svg>
              </div>
            </div>
          </div>
          <p className="font-['Prompt:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#f0faff] text-[12px] text-center whitespace-nowrap">4 คน</p>
        </div>
      </div>
    </div>
  );
}

function Elements() {
  return (
    <div className="absolute inset-[14.58%_8.33%]" data-name="elements">
      <div className="absolute inset-[-4.41%_-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 12.3333">
          <g>
            <path d={svgPaths.p22fe5100} id="Ellipse 1574" stroke="var(--stroke-0, #F5F7FA)" strokeWidth="1.5" style={{ stroke: "color(display-p3 0.9608 0.9686 0.9804)", strokeOpacity: "1" }} />
            <path d={svgPaths.p2311e00} id="Vector" stroke="var(--stroke-0, #F5F7FA)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.9608 0.9686 0.9804)", strokeOpacity: "1" }} />
            <path d={svgPaths.p1a0d31f0} id="Vector_2" stroke="var(--stroke-0, #F5F7FA)" style={{ stroke: "color(display-p3 0.9608 0.9686 0.9804)", strokeOpacity: "1" }} />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#18a0fb] relative rounded-[6px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[9.999px] relative size-full">
        <div className="relative shrink-0 size-[16px]" data-name="money-02">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
            <Elements />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="flex-[253.106_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <p className="font-['Prompt:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#3e465b] text-[20px] whitespace-nowrap">72,000</p>
        <div className="content-stretch flex items-center relative shrink-0" data-name="Badge">
          <div className="bg-[#eff2f6] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="_Badge base">
            <div className="overflow-clip relative shrink-0 size-[12px]" data-name="user">
              <div className="absolute inset-[62.5%_16.67%_12.5%_16.67%]" data-name="Vector">
                <div className="absolute inset-[-16.67%_-6.25%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 4">
                    <path d={svgPaths.p27722a00} id="Vector" stroke="var(--stroke-0, #3E465B)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.2431 0.2745 0.3569)", strokeOpacity: "1" }} />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
                <div className="absolute inset-[-12.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
                    <path d={svgPaths.p312e4100} id="Vector" stroke="var(--stroke-0, #3E465B)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.2431 0.2745 0.3569)", strokeOpacity: "1" }} />
                  </svg>
                </div>
              </div>
            </div>
            <p className="font-['Prompt:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3e465b] text-[10px] text-center whitespace-nowrap">คนละประมาณ 18,000 ฿</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="content-stretch flex gap-[11.992px] items-start pr-[8px] pt-[8px] relative w-full">
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[16px] relative shrink-0 w-full">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 16">
        <g id="Frame 1686560456">
          <line id="Line 6" stroke="var(--stroke-0, #E3E6ED)" strokeDasharray="2 2" style={{ stroke: "color(display-p3 0.8902 0.9020 0.9294)", strokeOpacity: "1" }} x2="350" y1="7.5" y2="7.5" />
        </g>
      </svg>
    </div>
  );
}

function Buttons() {
  return (
    <div className="bg-[#fdf5f4] content-stretch flex gap-[4px] items-center justify-center overflow-clip p-[4px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="user">
        <div className="absolute inset-[62.5%_16.67%_12.5%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-16.67%_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 4">
              <path d={svgPaths.p27722a00} id="Vector" stroke="var(--stroke-0, #E03E1A)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.8784 0.2431 0.1020)", strokeOpacity: "1" }} />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
              <path d={svgPaths.p312e4100} id="Vector" stroke="var(--stroke-0, #E03E1A)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.8784 0.2431 0.1020)", strokeOpacity: "1" }} />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Prompt:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e03e1a] text-[10px] text-center whitespace-nowrap">
        <p className="leading-[1.4]">นายเอ</p>
      </div>
    </div>
  );
}

function Buttons1() {
  return (
    <div className="bg-[#f3faff] content-stretch flex gap-[4px] items-center justify-center overflow-clip p-[4px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="user">
        <div className="absolute inset-[62.5%_16.67%_12.5%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-16.67%_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 4">
              <path d={svgPaths.p27722a00} id="Vector" stroke="var(--stroke-0, #18A0FB)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0941 0.6275 0.9843)", strokeOpacity: "1" }} />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
              <path d={svgPaths.p312e4100} id="Vector" stroke="var(--stroke-0, #18A0FB)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0941 0.6275 0.9843)", strokeOpacity: "1" }} />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Prompt:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#18a0fb] text-[10px] text-center whitespace-nowrap">
        <p className="leading-[1.4]">นายบี</p>
      </div>
    </div>
  );
}

function Buttons2() {
  return (
    <div className="bg-[#f4fbf2] content-stretch flex gap-[4px] items-center justify-center overflow-clip p-[4px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="user">
        <div className="absolute inset-[62.5%_16.67%_12.5%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-16.67%_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 4">
              <path d={svgPaths.p27722a00} id="Vector" stroke="var(--stroke-0, #25B003)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.1451 0.6902 0.0118)", strokeOpacity: "1" }} />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
              <path d={svgPaths.p312e4100} id="Vector" stroke="var(--stroke-0, #25B003)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.1451 0.6902 0.0118)", strokeOpacity: "1" }} />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Prompt:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#25b003] text-[10px] text-center whitespace-nowrap">
        <p className="leading-[1.4]">นายซี</p>
      </div>
    </div>
  );
}

function Buttons3() {
  return (
    <div className="bg-[#e5dcf6] content-stretch flex gap-[4px] items-center justify-center overflow-clip p-[4px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="user">
        <div className="absolute inset-[62.5%_16.67%_12.5%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-16.67%_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 4">
              <path d={svgPaths.p27722a00} id="Vector" stroke="var(--stroke-0, #795DAE)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.4745 0.3647 0.6824)", strokeOpacity: "1" }} />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
              <path d={svgPaths.p312e4100} id="Vector" stroke="var(--stroke-0, #795DAE)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.4745 0.3647 0.6824)", strokeOpacity: "1" }} />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Prompt:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#795dae] text-[10px] text-center whitespace-nowrap">
        <p className="leading-[1.4]">นายดี</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[307px]">
      <Buttons />
      <Buttons1 />
      <Buttons2 />
      <Buttons3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[8px] px-[8px] relative w-full">
          <Container4 />
          <Link />
          <Frame2 />
          <Frame />
        </div>
      </div>
    </div>
  );
}

function OrderCard() {
  return (
    <div className="absolute bg-white content-stretch flex items-start left-[8px] rounded-[8px] top-[210px] w-[374px]" data-name="Order-Card">
      <div aria-hidden="true" className="absolute border border-[#f5f7fa] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)]" />
      <Frame7 />
      <Frame6 />
    </div>
  );
}

function Container9() {
  return <div className="bg-[#e36414] h-[19.998px] rounded-[18606700px] shrink-0 w-[3.994px]" data-name="Container" />;
}

function Heading() {
  return (
    <div className="h-[24.001px] relative shrink-0 w-[68.44px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Prompt:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#3e465b] text-[16px] whitespace-nowrap">รายการทั้งหมด</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[24.001px] relative shrink-0 w-[80.432px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.997px] items-center relative size-full">
        <Container9 />
        <Heading />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex h-[27px] items-center justify-between left-[8px] top-[373px] w-[374px]" data-name="Container">
      <Container8 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <div className="bg-[#18a0fb] h-[28px] rounded-br-[4px] rounded-tr-[4px] shrink-0 w-[6px]" />
      <p className="font-['Prompt:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#525b75] text-[12px] whitespace-nowrap">บัตรเข้าชม</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-start flex flex-wrap gap-y-[4px] items-start justify-between pr-[8px] pt-[8px] relative w-full">
        <Frame8 />
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="trash-01">
          <div className="absolute inset-[8.33%_12.5%]" data-name="Icon">
            <div className="absolute inset-[-5.63%_-6.25%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 14.8333">
                <path d={svgPaths.p3e20dec0} id="Icon" stroke="var(--stroke-0, #E03E1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{ stroke: "color(display-p3 0.8784 0.2431 0.1020)", strokeOpacity: "1" }} />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[8px] relative shrink-0 w-full">
      <div className="absolute inset-[-12.5%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 374 9">
          <g id="Frame 1686560415">
            <line id="Line 6" stroke="var(--stroke-0, #E3E6ED)" strokeDasharray="2 2" style={{ stroke: "color(display-p3 0.8902 0.9020 0.9294)", strokeOpacity: "1" }} x1="16" x2="366" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Elements1() {
  return (
    <div className="absolute inset-[14.58%_8.33%]" data-name="elements">
      <div className="absolute inset-[-4.41%_-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 12.3333">
          <g>
            <path d={svgPaths.p22fe5100} id="Ellipse 1574" stroke="var(--stroke-0, #F5F7FA)" strokeWidth="1.5" style={{ stroke: "color(display-p3 0.9608 0.9686 0.9804)", strokeOpacity: "1" }} />
            <path d={svgPaths.p2311e00} id="Vector" stroke="var(--stroke-0, #F5F7FA)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.9608 0.9686 0.9804)", strokeOpacity: "1" }} />
            <path d={svgPaths.p1a0d31f0} id="Vector_2" stroke="var(--stroke-0, #F5F7FA)" style={{ stroke: "color(display-p3 0.9608 0.9686 0.9804)", strokeOpacity: "1" }} />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#18a0fb] relative rounded-[6px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[9.999px] relative size-full">
        <div className="relative shrink-0 size-[16px]" data-name="money-02">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
            <Elements1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="font-['Prompt:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3e465b] text-[18px] whitespace-nowrap">12,000 ฿</p>
      <div className="content-stretch flex items-center relative shrink-0" data-name="Badge">
        <div className="bg-[#eff2f6] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="_Badge base">
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="user">
            <div className="absolute inset-[62.5%_16.67%_12.5%_16.67%]" data-name="Vector">
              <div className="absolute inset-[-16.67%_-6.25%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 4">
                  <path d={svgPaths.p27722a00} id="Vector" stroke="var(--stroke-0, #3E465B)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.2431 0.2745 0.3569)", strokeOpacity: "1" }} />
                </svg>
              </div>
            </div>
            <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
              <div className="absolute inset-[-12.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
                  <path d={svgPaths.p312e4100} id="Vector" stroke="var(--stroke-0, #3E465B)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.2431 0.2745 0.3569)", strokeOpacity: "1" }} />
                </svg>
              </div>
            </div>
          </div>
          <p className="font-['Prompt:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3e465b] text-[10px] text-center whitespace-nowrap">คนละ 3,000 ฿</p>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="flex-[253.106_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <p className="font-['Prompt:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#3e465b] text-[16px] whitespace-nowrap">บัตรเข้าดิสนีย์แลนด์</p>
        <p className="font-['Prompt:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#8a8fa8] text-[12px] whitespace-nowrap">นายเอจ่ายแทน</p>
        <Frame11 />
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="content-stretch flex gap-[11.992px] items-start pl-[16px] pr-[8px] pt-[8px] relative w-full">
        <Container11 />
        <Container12 />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[16px] relative shrink-0 w-full">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 374 16">
        <g id="Frame 1686560456">
          <line id="Line 6" stroke="var(--stroke-0, #E3E6ED)" strokeDasharray="2 2" style={{ stroke: "color(display-p3 0.8902 0.9020 0.9294)", strokeOpacity: "1" }} x1="16" x2="366" y1="7.5" y2="7.5" />
        </g>
      </svg>
    </div>
  );
}

function Buttons4() {
  return (
    <div className="bg-[#fdf5f4] content-stretch flex gap-[4px] items-center justify-center overflow-clip p-[4px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="user">
        <div className="absolute inset-[62.5%_16.67%_12.5%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-16.67%_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 4">
              <path d={svgPaths.p27722a00} id="Vector" stroke="var(--stroke-0, #E03E1A)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.8784 0.2431 0.1020)", strokeOpacity: "1" }} />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
              <path d={svgPaths.p312e4100} id="Vector" stroke="var(--stroke-0, #E03E1A)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.8784 0.2431 0.1020)", strokeOpacity: "1" }} />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Prompt:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e03e1a] text-[10px] text-center whitespace-nowrap">
        <p className="leading-[1.4]">นายเอ</p>
      </div>
    </div>
  );
}

function Buttons5() {
  return (
    <div className="bg-[#f3faff] content-stretch flex gap-[4px] items-center justify-center overflow-clip p-[4px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="user">
        <div className="absolute inset-[62.5%_16.67%_12.5%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-16.67%_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 4">
              <path d={svgPaths.p27722a00} id="Vector" stroke="var(--stroke-0, #18A0FB)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0941 0.6275 0.9843)", strokeOpacity: "1" }} />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
              <path d={svgPaths.p312e4100} id="Vector" stroke="var(--stroke-0, #18A0FB)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0941 0.6275 0.9843)", strokeOpacity: "1" }} />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Prompt:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#18a0fb] text-[10px] text-center whitespace-nowrap">
        <p className="leading-[1.4]">นายบี</p>
      </div>
    </div>
  );
}

function Buttons6() {
  return (
    <div className="bg-[#f4fbf2] content-stretch flex gap-[4px] items-center justify-center overflow-clip p-[4px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="user">
        <div className="absolute inset-[62.5%_16.67%_12.5%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-16.67%_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 4">
              <path d={svgPaths.p27722a00} id="Vector" stroke="var(--stroke-0, #25B003)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.1451 0.6902 0.0118)", strokeOpacity: "1" }} />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
              <path d={svgPaths.p312e4100} id="Vector" stroke="var(--stroke-0, #25B003)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.1451 0.6902 0.0118)", strokeOpacity: "1" }} />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Prompt:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#25b003] text-[10px] text-center whitespace-nowrap">
        <p className="leading-[1.4]">นายซี</p>
      </div>
    </div>
  );
}

function Buttons7() {
  return (
    <div className="bg-[#e5dcf6] content-stretch flex gap-[4px] items-center justify-center overflow-clip p-[4px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="user">
        <div className="absolute inset-[62.5%_16.67%_12.5%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-16.67%_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 4">
              <path d={svgPaths.p27722a00} id="Vector" stroke="var(--stroke-0, #795DAE)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.4745 0.3647 0.6824)", strokeOpacity: "1" }} />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
              <path d={svgPaths.p312e4100} id="Vector" stroke="var(--stroke-0, #795DAE)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.4745 0.3647 0.6824)", strokeOpacity: "1" }} />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Prompt:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#795dae] text-[10px] text-center whitespace-nowrap">
        <p className="leading-[1.4]">นายดี</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] relative w-full">
          <Buttons4 />
          <Buttons5 />
          <Buttons6 />
          <Buttons7 />
        </div>
      </div>
    </div>
  );
}

function OrderCard1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start justify-center left-[8px] pb-[8px] rounded-[8px] top-[416px] w-[374px]" data-name="Order-Card">
      <div aria-hidden="true" className="absolute border border-[#f5f7fa] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)]" />
      <Container10 />
      <Frame1 />
      <Link1 />
      <Frame3 />
      <Frame4 />
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
      <Button />
      <TabBarIPhone />
      <OrderCard />
      <Container7 />
      <OrderCard1 />
    </div>
  );
}