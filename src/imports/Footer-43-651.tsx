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

function Container1() {
  return (
    <div className="[grid-area:1_/_1] relative shrink-0" data-name="Container">
      <Container />
      <Heading3 />
      <Paragraph />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[27px] left-0 not-italic text-[18px] text-nowrap text-white top-[-2px] whitespace-pre">Liên Kết</p>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-start left-0 top-px w-[93.641px]" data-name="Link">
      <p className="font-['Arial:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#99a1af] text-[16px] text-nowrap whitespace-pre">Về Chúng Tôi</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link />
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-start left-0 top-px w-[146.5px]" data-name="Link">
      <p className="font-['Arial:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#99a1af] text-[16px] text-nowrap whitespace-pre">{`Sản Phẩm & Dịch Vụ`}</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link1 />
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-start left-0 top-px w-[50.875px]" data-name="Link">
      <p className="font-['Arial:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#99a1af] text-[16px] text-nowrap whitespace-pre">Tin Tức</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link2 />
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-start left-0 top-px w-[52.938px]" data-name="Link">
      <p className="font-['Arial:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#99a1af] text-[16px] text-nowrap whitespace-pre">Liên Hệ</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link3 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[120px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
    </div>
  );
}

function Container2() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <Heading4 />
      <List />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-2px] whitespace-pre">Liên Hệ</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-2px] whitespace-pre">Fanpage: Xe điện Sakura</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-2px] whitespace-pre">{`Hợp tác: (+84) 0903 672 401 `}</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <div className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-2px] whitespace-pre">
        <p className="mb-0">Địa chỉ: Số 18 - Đường 15, KĐT Lovera, Phong Phú 4,</p>
        <p>Bình Hưng, TP Hồ Chí Minh</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[88px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem4 />
      <ListItem5 />
      <ListItem6 />
    </div>
  );
}

function Container3() {
  return (
    <div className="[grid-area:1_/_3] content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <Heading5 />
      <List1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="gap-[32px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[163px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[607.58px] not-italic text-[#99a1af] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">© 2025 Xe điện Sakura. Bảo lưu mọi quyền.</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="box-border content-stretch flex flex-col h-[49px] items-start pb-0 pt-[25px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#1e2939] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Paragraph1 />
    </div>
  );
}

export default function Footer() {
  return (
    <div className="relative size-full" data-name="Footer" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(28, 57, 142) 0%, rgb(28, 57, 142) 100%)" }}>
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start pb-0 pt-[48px] px-[32px] relative size-full">
          <Container4 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}