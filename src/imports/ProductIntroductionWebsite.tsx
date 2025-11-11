import svgPaths from "./svg-sesk5bhltl";
import imgImageWithFallback from "figma:asset/88fd4d91117a5d176f99e0285933de2d2c1522ce.png";
import imgImageWithFallback1 from "figma:asset/40c540007132f973d5e07397d595f4959acf968c.png";
import imgImageWithFallback2 from "figma:asset/1e2e0972e396511881f9b308a6fc7bcda2e0697e.png";
import imgImageWithFallback3 from "figma:asset/bf00014cb88b6cbb4d9b636dcdb430cc4720b912.png";
import imgImageWithFallback4 from "figma:asset/3b94a33b249b60aeb39b3071b6ae59a6abfdaec6.png";
import imgImageWithFallback5 from "figma:asset/68cdb80adc8b2fd5919c9b71e884c79f1f854e03.png";
import imgImageWithFallback6 from "figma:asset/1e6f8673796ad5df2ca1a0a35d00bdb05a05e48a.png";

function Heading2() {
  return (
    <div className="absolute h-[30px] left-0 top-0 w-[1216px]" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[30px] left-[608.81px] not-italic text-[50px] text-center text-neutral-950 text-nowrap top-[-3px] translate-x-[-50%] whitespace-pre">Dịch Vụ Của Chúng Tôi</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[48px] left-[272px] top-[55px] w-[672px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[336.36px] not-italic text-[#4a5565] text-[16px] text-center top-[-2px] translate-x-[-50%] w-[648px]">Cung cấp xe đạp điện chất lượng cao và các dịch vụ chăm sóc khách hàng toàn diện, từ bán hàng đến bảo hành và sửa chữa</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[94px] relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Paragraph />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="h-[216px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[24px] w-[336px]" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[calc(50%-73px)] not-italic text-[#001767] text-[20px] text-nowrap top-[-7px] whitespace-pre">{`Bán Lẻ & Đại Lý`}</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[48px] left-[24px] top-[60px] w-[336px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-2px] w-[331px]">Hệ thống phân phối rộng khắp cả nước với giá cả cạnh tranh và ưu đãi hấp dẫn</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[115.28px] size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #2CA72B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[124px] w-[135.281px]" data-name="Button">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#2CA72B] text-[16px] text-nowrap top-[-2px] whitespace-pre">Tìm Hiểu Thêm</p>
      <Icon />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[172px] relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Paragraph1 />
      <Button />
    </div>
  );
}

function Container2() {
  return (
    <div className="[grid-area:1_/_1] bg-white box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <ImageWithFallback />
      <Container1 />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="h-[216px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[24px] w-[336px]" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[calc(50%-104px)] not-italic text-[#001767] text-[20px] text-nowrap top-[-2px] whitespace-pre">{`Bảo Hành & Sửa Chữa`}</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[48px] left-[24px] top-[60px] w-[336px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-2px] w-[304px]">Dịch vụ bảo hành chính hãng và sửa chữa chuyên nghiệp tại các trung tâm toàn quốc</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[115.28px] size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #2CA72B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[124px] w-[135.281px]" data-name="Button">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#2CA72B] text-[16px] text-nowrap top-[-2px] whitespace-pre">Tìm Hiểu Thêm</p>
      <Icon1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[172px] relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Paragraph2 />
      <Button1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="[grid-area:1_/_2] bg-white box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <ImageWithFallback1 />
      <Container3 />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="h-[216px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[24px] w-[336px]" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[calc(50%-97px)] not-italic text-[#001767] text-[20px] text-nowrap top-[-2px] whitespace-pre">{`Phụ Tùng & Phụ Kiện`}</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[48px] left-[24px] top-[60px] w-[336px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-2px] w-[327px]">Cung cấp phụ tùng chính hãng và phụ kiện đa dạng cho mọi dòng xe</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[115.28px] size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #2CA72B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[124px] w-[135.281px]" data-name="Button">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#2CA72B] text-[16px] text-nowrap top-[-2px] whitespace-pre">Tìm Hiểu Thêm</p>
      <Icon2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[172px] relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Paragraph3 />
      <Button2 />
    </div>
  );
}

function Container6() {
  return (
    <div className="[grid-area:1_/_3] bg-white box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <ImageWithFallback2 />
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="gap-[32px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[388px] relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container4 />
      <Container6 />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[60px] h-[690px] items-start left-0 pb-0 pt-[80px] px-[159px] top-[600px] w-[1534px]" data-name="Section">
      <Container />
      <Container7 />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[40px] left-[140.27px] not-italic text-[36px] text-center text-nowrap text-white top-[-3px] translate-x-[-50%] whitespace-pre">10+</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[139.8px] not-italic text-[#bedbff] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Năm Kinh Nghiệm</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <Container8 />
      <Paragraph4 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[40px] left-[140.27px] not-italic text-[36px] text-center text-nowrap text-white top-[-3px] translate-x-[-50%] whitespace-pre">5000+</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[139.84px] not-italic text-[#bedbff] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Xe đã bán</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <Container10 />
      <Paragraph5 />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[40px] left-[139.56px] not-italic text-[36px] text-center text-nowrap text-white top-[-3px] translate-x-[-50%] whitespace-pre">10+</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[139.92px] not-italic text-[#bedbff] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Đối tác chiến lược</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="[grid-area:1_/_3] content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <Container12 />
      <Paragraph6 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[40px] left-[140.36px] not-italic text-[36px] text-center text-nowrap text-white top-[-3px] translate-x-[-50%] whitespace-pre">95%</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[140.92px] not-italic text-[#bedbff] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Đại lý hài lòng</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="[grid-area:1_/_4] content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <Container14 />
      <Paragraph7 />
    </div>
  );
}

function Container16() {
  return (
    <div className="gap-[32px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[72px] relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container11 />
      <Container13 />
      <Container15 />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute bg-gradient-to-r box-border content-stretch flex flex-col from-[#228B22] h-[200px] items-start left-0 pb-0 pt-[64px] px-[159px] to-[#2CA72B] top-[1290px] w-[1534px]" data-name="Section">
      <Container16 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute h-[24px] left-[32px] top-0 w-[1216px]" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[608.58px] not-italic text-[16px] text-center text-neutral-950 text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Bạn Đang Tìm Nguồn Cung Xe Điện Uy Tín?</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[48px] left-[304px] top-[40px] w-[672px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[336.2px] not-italic text-[#4a5565] text-[16px] text-center top-[-2px] translate-x-[-50%] w-[662px]">Hãy kết nối với chúng tôi để nhận tư vấn sản phẩm, chính sách giá sỉ và hỗ trợ kỹ thuật toàn diện. Đồng hành cùng hơn 20 đại lý toàn quốc – cùng phát triển thị trường xe điện bền vững!</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#2CA72B] h-[50px] left-[438.27px] rounded-[10px] top-0 w-[170.625px]" data-name="Button">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[32px] not-italic text-[16px] text-nowrap text-white top-[11px] whitespace-pre">Liên Hệ Tư Vấn</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-white h-[50px] left-[624.89px] rounded-[10px] top-0 w-[152.844px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#2CA72B] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[33px] not-italic text-[#2CA72B] text-[16px] text-nowrap top-[11px] whitespace-pre">Xem Tin Tức</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[50px] left-[32px] top-[120px] w-[1216px]" data-name="Container">
      <Button3 />
      <Button4 />
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute bg-gray-50 h-[170px] left-[127px] top-[1570px] w-[1280px]" data-name="Section">
      <Heading6 />
      <Paragraph8 />
      <Container17 />
    </div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="absolute h-[600px] left-0 top-0 w-[1534px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback3} />
    </div>
  );
}

function Container18() {
  return <div className="absolute bg-gradient-to-r from-[rgba(34,139,34,0.9)] h-[600px] left-0 to-[rgba(44,167,43,0.7)] top-0 w-[1534px]" data-name="Container" />;
}

function Heading1() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[672px]" data-name="Heading 1">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[48px] left-0 not-italic text-[48px] text-nowrap text-white top-[-5px] whitespace-pre">XE ĐIỆN SAKURA</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-0 top-[64px] w-[672px]" data-name="Paragraph">
      <p className="basis-0 font-['Arial:Regular',_sans-serif] grow leading-[28px] min-h-px min-w-px not-italic relative shrink-0 text-[20px] text-[rgba(255,255,255,0.9)]">Phân phối các dòng xe điện toàn quốc</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-white h-[48px] left-0 rounded-[10px] top-[124px] w-[176.453px]" data-name="Button">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[32px] not-italic text-[#2CA72B] text-[16px] text-nowrap top-[10px] whitespace-pre">Khám Phá Ngay</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[172px] left-[159px] top-[214px] w-[672px]" data-name="Container">
      <Heading1 />
      <Paragraph9 />
      <Button5 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[600px] left-0 top-0 w-[1534px]" data-name="Container">
      <ImageWithFallback3 />
      <Container18 />
      <Container19 />
    </div>
  );
}

function ImageWithFallback4() {
  return (
    <div className="absolute h-[600px] left-0 top-0 w-[1534px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback4} />
    </div>
  );
}

function Container21() {
  return <div className="absolute bg-gradient-to-r from-[rgba(34,139,34,0.9)] h-[600px] left-0 to-[rgba(44,167,43,0.7)] top-0 w-[1534px]" data-name="Container" />;
}

function Heading7() {
  return (
    <div className="absolute h-[96px] left-0 top-0 w-[672px]" data-name="Heading 1">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[48px] left-0 not-italic text-[48px] text-white top-[-5px] w-[593px]">Di Chuyển Xanh - Tương Lai Bền Vững</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-0 top-[112px] w-[672px]" data-name="Paragraph">
      <p className="basis-0 font-['Arial:Regular',_sans-serif] grow leading-[28px] min-h-px min-w-px not-italic relative shrink-0 text-[20px] text-[rgba(255,255,255,0.9)]">Giải pháp di chuyển thân thiện môi trường cho mọi gia đình</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-white h-[48px] left-0 rounded-[10px] top-[172px] w-[171.281px]" data-name="Button">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[32px] not-italic text-[#2CA72B] text-[16px] text-nowrap top-[10px] whitespace-pre">Tìm Hiểu Thêm</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[220px] left-[159px] top-[190px] w-[672px]" data-name="Container">
      <Heading7 />
      <Paragraph10 />
      <Button6 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[600px] left-0 opacity-0 top-0 w-[1534px]" data-name="Container">
      <ImageWithFallback4 />
      <Container21 />
      <Container22 />
    </div>
  );
}

function ImageWithFallback5() {
  return (
    <div className="absolute h-[600px] left-0 top-0 w-[1534px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback5} />
    </div>
  );
}

function Container24() {
  return <div className="absolute bg-gradient-to-r from-[rgba(34,139,34,0.9)] h-[600px] left-0 to-[rgba(44,167,43,0.7)] top-0 w-[1534px]" data-name="Container" />;
}

function Heading8() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[672px]" data-name="Heading 1">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[48px] left-0 not-italic text-[48px] text-nowrap text-white top-[-5px] whitespace-pre">Công Nghệ Động Cơ Tiên Tiến</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-0 top-[64px] w-[672px]" data-name="Paragraph">
      <p className="basis-0 font-['Arial:Regular',_sans-serif] grow leading-[28px] min-h-px min-w-px not-italic relative shrink-0 text-[20px] text-[rgba(255,255,255,0.9)]">Hơn 15 năm kinh nghiệm trong ngành xe đạp điện</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-white h-[48px] left-0 rounded-[10px] top-[124px] w-[157.641px]" data-name="Button">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[32px] not-italic text-[#2CA72B] text-[16px] text-nowrap top-[10px] whitespace-pre">Về Chúng Tôi</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[172px] left-[159px] top-[214px] w-[672px]" data-name="Container">
      <Heading8 />
      <Paragraph11 />
      <Button7 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[600px] left-0 opacity-0 top-0 w-[1534px]" data-name="Container">
      <ImageWithFallback5 />
      <Container24 />
      <Container25 />
    </div>
  );
}

function ImageWithFallback6() {
  return (
    <div className="absolute h-[600px] left-0 top-0 w-[1534px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback6} />
    </div>
  );
}

function Container27() {
  return <div className="absolute bg-gradient-to-r from-[rgba(34,139,34,0.9)] h-[600px] left-0 to-[rgba(44,167,43,0.7)] top-0 w-[1534px]" data-name="Container" />;
}

function Heading9() {
  return (
    <div className="absolute h-[96px] left-0 top-0 w-[672px]" data-name="Heading 1">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[48px] left-0 not-italic text-[48px] text-white top-[-5px] w-[633px]">Bảo Hành Toàn Diện - An Tâm Sử Dụng</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-0 top-[112px] w-[672px]" data-name="Paragraph">
      <p className="basis-0 font-['Arial:Regular',_sans-serif] grow leading-[28px] min-h-px min-w-px not-italic relative shrink-0 text-[20px] text-[rgba(255,255,255,0.9)]">Hệ thống bảo hành và dịch vụ sau bán hàng trên toàn quốc</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-white h-[48px] left-0 rounded-[10px] top-[172px] w-[169.984px]" data-name="Button">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[32px] not-italic text-[#2CA72B] text-[16px] text-nowrap top-[10px] whitespace-pre">Xem Sản Phẩm</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[220px] left-[159px] top-[190px] w-[672px]" data-name="Container">
      <Heading9 />
      <Paragraph12 />
      <Button8 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[600px] left-0 opacity-0 top-0 w-[1534px]" data-name="Container">
      <ImageWithFallback6 />
      <Container27 />
      <Container28 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M15 18L9 12L15 6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center left-[16px] rounded-[3.35544e+07px] size-[48px] top-[276px]" data-name="Button">
      <Icon3 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M9 18L15 12L9 6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center left-[1470px] rounded-[3.35544e+07px] size-[48px] top-[276px]" data-name="Button">
      <Icon4 />
    </div>
  );
}

function Button11() {
  return (
    <div className="basis-0 bg-white grow h-[12px] min-h-px min-w-px relative rounded-[3.35544e+07px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[12px] w-full" />
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] relative rounded-[3.35544e+07px] shrink-0 size-[12px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[12px]" />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[12px] items-start left-[715px] top-[556px] w-[104px]" data-name="Container">
      <Button11 />
      {[...Array(3).keys()].map((_, i) => (
        <Button12 key={i} />
      ))}
    </div>
  );
}

function HeroSlider() {
  return (
    <div className="absolute bg-[#101828] h-[600px] left-0 overflow-clip top-0 w-[1534px]" data-name="HeroSlider">
      <Container20 />
      <Container23 />
      <Container26 />
      <Container29 />
      <Button9 />
      <Button10 />
      <Container30 />
    </div>
  );
}

function HomePage() {
  return (
    <div className="absolute h-[1820px] left-0 top-[80px] w-[1534px]" data-name="HomePage">
      <Section />
      <Section1 />
      <Section2 />
      <HeroSlider />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[18.297px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[18.297px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#228B22] text-[16px] text-nowrap top-[-2px] whitespace-pre">CT</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-center justify-center left-0 pl-0 pr-[0.016px] py-0 rounded-[10px] size-[64px] top-0" data-name="Container">
      <Text />
    </div>
  );
}

function Heading10() {
  return (
    <div className="absolute h-[24px] left-0 top-[80px] w-[384px]" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-2px] whitespace-pre">XE ĐIỆN SAKURA</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[24px] left-0 top-[112px] w-[384px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-2px] whitespace-pre">Công ty TNHH Thương Mại Quốc tế YATE</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="[grid-area:1_/_1] relative shrink-0" data-name="Container">
      <Container31 />
      <Heading10 />
      <Paragraph13 />
    </div>
  );
}

function Heading11() {
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

function Container33() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <Heading11 />
      <List />
    </div>
  );
}

function Heading12() {
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

function Container34() {
  return (
    <div className="[grid-area:1_/_3] content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <Heading12 />
      <List1 />
    </div>
  );
}

function Container35() {
  return (
    <div className="gap-[32px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[163px] relative shrink-0 w-full" data-name="Container">
      <Container32 />
      <Container33 />
      <Container34 />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[607.58px] not-italic text-[#99a1af] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">© 2025 Xe điện Sakura. Bảo lưu mọi quyền.</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="box-border content-stretch flex flex-col h-[49px] items-start pb-0 pt-[25px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#1e2939] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Paragraph14 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[32px] h-[340px] items-start left-[127px] pb-0 pt-[48px] px-[32px] top-[1980px] w-[1280px]" data-name="Footer" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(28, 57, 142) 0%, rgb(28, 57, 142) 100%)" }}>
      <Container35 />
      <Container36 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-gray-50 h-[2320px] left-0 top-0 w-[1534px]" data-name="App">
      <HomePage />
      <Footer />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[18.297px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[18.297px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-2px] whitespace-pre">CT</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="bg-[#2CA72B] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.016px] py-0 relative size-[48px]">
        <Text1 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">XE ĐIỆN SAKURA</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="h-[48px] relative shrink-0 w-[160.188px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[48px] items-center relative w-[160.188px]">
        <Container37 />
        <Text2 />
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="h-[24px] relative shrink-0 w-[71.578px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[71.578px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#193cb8] text-[16px] text-nowrap top-[-2px] whitespace-pre">Trang Chủ</p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="h-[24px] relative shrink-0 w-[93.641px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[93.641px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-2px] whitespace-pre">Về Chúng Tôi</p>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="h-[24px] relative shrink-0 w-[70.016px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[70.016px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-2px] whitespace-pre">Sản Phẩm</p>
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="h-[24px] relative shrink-0 w-[50.875px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[50.875px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-2px] whitespace-pre">Tin Tức</p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Navigation">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[32px] h-[24px] items-center justify-center pl-0 pr-[0.016px] py-0 relative w-full">
          <Button16 />
          <Button17 />
          <Button18 />
          <Button19 />
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p3c358280} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Link4() {
  return (
    <div className="bg-[#2CA72B] relative rounded-[3.35544e+07px] shrink-0 size-[40px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon5 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p10a71a80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Link5() {
  return (
    <div className="bg-[#2CA72B] relative rounded-[3.35544e+07px] shrink-0 size-[40px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon6 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_43_600)" id="Icon">
          <path d={svgPaths.p3302df00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_43_600">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link6() {
  return (
    <div className="basis-0 bg-[#2CA72B] grow h-[40px] min-h-px min-w-px relative rounded-[3.35544e+07px] shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[40px] items-center justify-center relative w-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[40px] relative shrink-0 w-[144px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[40px] items-center relative w-[144px]">
        <Link4 />
        <Link5 />
        <Link6 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex h-[80px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Button15 />
      <Navigation />
      <Container38 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[80px] items-start left-0 px-[159px] py-0 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-0 w-[1534px]" data-name="Header">
      <Container39 />
    </div>
  );
}

export default function ProductIntroductionWebsite() {
  return (
    <div className="bg-white relative size-full" data-name="Product Introduction Website">
      <App />
      <Header />
    </div>
  );
}