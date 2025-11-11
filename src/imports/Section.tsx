function Container() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[40px] left-[140.27px] not-italic text-[36px] text-center text-nowrap text-white top-[-3px] translate-x-[-50%] whitespace-pre">10+</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[139.8px] not-italic text-[#bedbff] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Năm Kinh Nghiệm</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <Container />
      <Paragraph />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[40px] left-[140.27px] not-italic text-[36px] text-center text-nowrap text-white top-[-3px] translate-x-[-50%] whitespace-pre">5000+</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[139.84px] not-italic text-[#bedbff] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Xe đã bán</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <Container2 />
      <Paragraph1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[40px] left-[139.56px] not-italic text-[36px] text-center text-nowrap text-white top-[-3px] translate-x-[-50%] whitespace-pre">10+</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[139.92px] not-italic text-[#bedbff] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Đối tác chiến lược</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="[grid-area:1_/_3] content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <Container4 />
      <Paragraph2 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[40px] left-[140.36px] not-italic text-[36px] text-center text-nowrap text-white top-[-3px] translate-x-[-50%] whitespace-pre">95%</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[140.92px] not-italic text-[#bedbff] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Đại lý hài lòng</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="[grid-area:1_/_4] content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <Container6 />
      <Paragraph3 />
    </div>
  );
}

function Container8() {
  return (
    <div className="gap-[32px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[72px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container3 />
      <Container5 />
      <Container7 />
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-gradient-to-r from-[#228B22] relative size-full to-[#2CA72B]" data-name="Section">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[64px] px-[159px] relative size-full">
          <Container8 />
        </div>
      </div>
    </div>
  );
}