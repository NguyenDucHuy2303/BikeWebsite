function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[18.297px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[18.297px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#228B22] text-[16px] text-nowrap top-[-2px] whitespace-pre">CT</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-center justify-center left-0 pl-0 pr-[0.016px] py-0 rounded-[10px] size-[64px] top-0" data-name="Container">
      <Text />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[24px] left-0 top-[80px] w-[384px]" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-2px] whitespace-pre">XE ĐIỆN SAKURA</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[24px] left-0 top-[112px] w-[384px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-2px] whitespace-pre">Công ty TNHH Thương Mại Quốc tế YATE</p>
    </div>
  );
}

export default function Container1() {
  return (
    <div className="relative size-full" data-name="Container">
      <Container />
      <Heading3 />
      <Paragraph />
    </div>
  );
}