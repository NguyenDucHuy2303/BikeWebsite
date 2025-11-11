import svgPaths from "./svg-37exuyz631";
import imgImageWithFallback from "figma:asset/cb75e41c15c4f3e565b465612d2b2b2ba7967933.png";
import imgImageWithFallback1 from "figma:asset/a24682afc049f272dfe331e5df65cd6e9b706299.png";
import imgImageWithFallback2 from "figma:asset/ac981eba1519f4608f809e93c05fd2cb4b8e6645.png";

function Heading1() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[1216px]" data-name="Heading 1">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[608.67px] not-italic text-[40px] text-center text-neutral-950 text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Về Chúng Tôi</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[28px] left-[224px] top-[52px] w-[768px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[28px] left-[384.28px] not-italic text-[#4a5565] text-[18px] text-center text-nowrap top-[-1px] translate-x-[-50%] whitespace-pre">{`Xe Điện Sakura - Sản Xuất & Phân Phối Xe Đạp Điện `}</p>
    </div>
  );
}

function Section() {
  return (
    <div className="h-[68px] relative shrink-0 w-full" data-name="Section">
      <Heading1 />
      <Paragraph />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="absolute h-[394.188px] left-0 rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[584px]" data-name="ImageWithFallback">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[14px]">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[14px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[14px] size-full" src={imgImageWithFallback} />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">Giới Thiệu Công Ty</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-2px] w-[584px]">Xe điện Sakura đã khẳng định vị thế là một trong những nhà sản xuất và phân phối xe đạp điện tại Việt Nam với hơn 15 năm kinh nghiệm trong ngành.</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-2px] w-[583px]">Với đội ngũ hơn kỹ sư, công nhân lành nghề, chúng tôi tự hào đã sản xuất và phân phối hơn 5000+ xe đạp điện đến hàng ngàn gia đình Việt Nam, mang lại giải pháp di chuyển xanh, tiết kiệm và thân thiện với môi trường.</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[272px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[320px] items-start left-[632px] top-[37.09px] w-[584px]" data-name="Container">
      <Heading2 />
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[394.188px] relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback />
      <Container1 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">{`Sứ Mệnh & Tầm Nhìn`}</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[27px] left-0 not-italic text-[#2CA72B] text-[18px] text-nowrap top-[-2px] whitespace-pre">Sứ Mệnh</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-2px] w-[579px]">Chúng tôi cam kết mang đến những sản phẩm xe đạp điện chất lượng cao, an toàn và thân thiện với môi trường, góp phần giảm thiểu ô nhiễm không khí và xây dựng một tương lai xanh - sạch - bền vững cho cộng đồng.</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[107px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Paragraph3 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[27px] left-0 not-italic text-[#2CA72B] text-[18px] text-nowrap top-[-2px] whitespace-pre">Tầm Nhìn</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-2px] w-[575px]">Chúng tôi không đặt mục tiêu trở thành lớn nhất, mà muốn trở thành một thương hiệu đáng tin cậy. Bằng sự nỗ lực mỗi ngày, chúng tôi hướng đến việc mang lại trải nghiệm xe điện an toàn, bền bỉ và phù hợp với mọi nhu cầu di chuyển.</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[107px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Paragraph4 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[27px] left-0 not-italic text-[#2CA72B] text-[18px] text-nowrap top-[-2px] whitespace-pre">Giá Trị Cốt Lõi</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-2px] w-[582px]">Chất lượng - Minh bạch - Khách hàng - Đổi mới. Đây là những giá trị mà chúng tôi luôn đề cao và thực hiện trong mọi hoạt động, từ sản xuất, phân phối đến dịch vụ chăm sóc khách hàng.</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[107px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <Paragraph5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[353px] items-start relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[401px] items-start left-0 top-0 w-[584px]" data-name="Container">
      <Heading4 />
      <Container6 />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="absolute h-[389.328px] left-[632px] rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[5.83px] w-[584px]" data-name="ImageWithFallback">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[14px]">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[14px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[14px] size-full" src={imgImageWithFallback1} />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[401px] relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <ImageWithFallback1 />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="absolute h-[876px] left-0 rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[584px]" data-name="ImageWithFallback">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[14px]">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[14px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[14px] size-full" src={imgImageWithFallback2} />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">{`Quy Trình Sản Xuất & Kiểm Định`}</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-2px] w-[584px] whitespace-pre-wrap">{`Mỗi chiếc xe đạp điện Sakura  đều trải qua quy trình sản xuất nghiêm ngặt với 5 công đoạn chính: thiết kế, lắp ráp khung xe, lắp đặt hệ thống điện, kiểm tra chất lượng và thử nghiệm thực tế.`}</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-2px] w-[579px]">Chúng tôi áp dụng hệ thống kiểm soát chất lượng theo tiêu chuẩn ISO 9001:2015, mỗi xe đều được kiểm tra 100% các thông số kỹ thuật, an toàn điện và độ bền trước khi đến tay khách hàng.</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-2px] w-[571px]">Sau bán hàng, Sakura cung cấp chế độ bảo hành toàn diện trên các trung tâm bảo hành trên toàn quốc, đảm bảo khách hàng luôn được hỗ trợ nhanh chóng và chuyên nghiệp.</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[248px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph6 />
      <Paragraph7 />
      <Paragraph8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[296px] items-start left-[632px] top-[290px] w-[584px]" data-name="Container">
      <Heading7 />
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[876px] relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback2 />
      <Container10 />
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] h-[1767.19px] items-start relative shrink-0 w-full" data-name="Section">
      <Container2 />
      <Container8 />
      <Container11 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[608.47px] not-italic text-[16px] text-center text-neutral-950 text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Giá Trị Cốt Lõi</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[40px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.333%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 37">
            <path d={svgPaths.p3aa74900} id="Vector" stroke="var(--stroke-0, #193CB8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.333%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, #193CB8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.667%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p1cefd300} id="Vector" stroke="var(--stroke-0, #193CB8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[40px] items-start pl-0 pr-[198px] py-0 relative w-full">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[27px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">Chất Lượng</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-2.19px] w-[245px]">Cam kết sản phẩm chất lượng cao với tiêu chuẩn quốc tế</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="[grid-area:1_/_1] bg-white relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[24px] px-[24px] relative size-full">
          <Container12 />
          <Heading9 />
          <Paragraph9 />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[40px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 27">
            <path d={svgPaths.p4288080} id="Vector" stroke="var(--stroke-0, #2CA72B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.667%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p1906ee40} id="Vector" stroke="var(--stroke-0, #2CA72B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[40px] items-start pl-0 pr-[198px] py-0 relative w-full">
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[27px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">Minh Bạch</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-2px] w-[197px]">Minh bạch về nguồn gốc và chính sách giá cả</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="[grid-area:1_/_2] bg-white relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[24px] px-[24px] relative size-full">
          <Container14 />
          <Heading10 />
          <Paragraph10 />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[40px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[16.6%_8.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5.88%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 33">
            <path d={svgPaths.p2bc9cc00} id="Vector" stroke="var(--stroke-0, #2CA72B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[40px] items-start pl-0 pr-[198px] py-0 relative w-full">
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[27px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">Khách Hàng</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-2px] w-[221px]">Luôn đặt lợi ích khách hàng lên hàng đầu</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="[grid-area:1_/_3] bg-white relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[24px] px-[24px] relative size-full">
          <Container16 />
          <Heading11 />
          <Paragraph11 />
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[40px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.32%_12.49%]" data-name="Vector">
        <div className="absolute inset-[-5%_-5.55%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 37">
            <path d={svgPaths.p2d092f80} id="Vector" stroke="var(--stroke-0, #2CA72B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[40px] items-start pl-0 pr-[198px] py-0 relative w-full">
          <Icon3 />
        </div>
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[27px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">Đổi Mới</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] top-[-2px] w-[232px]">Không ngừng cải tiến công nghệ và thiết kế</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="[grid-area:1_/_4] bg-white relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[24px] px-[24px] relative size-full">
          <Container18 />
          <Heading12 />
          <Paragraph12 />
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[191px] relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container15 />
      <Container17 />
      <Container19 />
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[247px] items-start relative shrink-0 w-full" data-name="Section">
      <Heading8 />
      <Container20 />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[127.89px] not-italic text-[40px] text-center text-nowrap text-white top-[-2px] translate-x-[-50%] whitespace-pre">10+</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[127.8px] not-italic text-[#bedbff] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Năm Kinh Nghiệm</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <Container21 />
      <Paragraph13 />
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[128.72px] not-italic text-[40px] text-center text-nowrap text-white top-[-2px] translate-x-[-50%] whitespace-pre">5000+</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[127.84px] not-italic text-[#bedbff] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Xe Đã Bán</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <Container23 />
      <Paragraph14 />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[127.58px] not-italic text-[40px] text-center text-nowrap text-white top-[-2px] translate-x-[-50%] whitespace-pre">10+</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[127.92px] not-italic text-[#bedbff] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Đối tác chiến lược</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="[grid-area:1_/_3] content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <Container25 />
      <Paragraph15 />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[128.08px] not-italic text-[40px] text-center text-nowrap text-white top-[-2px] translate-x-[-50%] whitespace-pre">95%</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[128.58px] not-italic text-[#bedbff] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Đại lý hài lòng</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="[grid-area:1_/_4] content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <Container27 />
      <Paragraph16 />
    </div>
  );
}

function Container29() {
  return (
    <div className="gap-[32px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[56px] relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Container24 />
      <Container26 />
      <Container28 />
    </div>
  );
}

function Section3() {
  return (
    <div className="bg-gradient-to-r from-[#1c398e] h-[152px] relative rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 to-[#193cb8] w-full" data-name="Section">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[152px] items-start pb-0 pt-[48px] px-[48px] relative w-full">
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function Heading13() {
  return (
    <div className="absolute h-[24px] left-[48px] top-[48px] w-[1120px]" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[560.52px] not-italic text-[16px] text-center text-neutral-950 text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Hợp Tác Cùng Chúng Tôi</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="absolute h-[48px] left-[272px] top-[88px] w-[672px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[336px] not-italic text-[#4a5565] text-[16px] text-center top-[-2px] translate-x-[-50%] w-[666px]">Liên hệ ngay để được tư vấn chi tiết về sản phẩm, chính sách đại lý hoặc mua xe trả góp 0% lãi suất.</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#2CA72B] h-[48px] left-[528.7px] rounded-[10px] top-[160px] w-[158.594px]" data-name="Button">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[32px] not-italic text-[16px] text-nowrap text-white top-[10px] whitespace-pre">Liên Hệ Ngay</p>
    </div>
  );
}

function Section4() {
  return (
    <div className="bg-white h-[256px] relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Section">
      <Heading13 />
      <Paragraph17 />
      <Button />
    </div>
  );
}

function AboutPage() {
  return (
    <div className="bg-gray-50 h-[3296.19px] relative shrink-0 w-[1280px]" data-name="AboutPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[64px] h-[3296.19px] items-start px-[32px] py-0 relative w-[1280px]">
        <Section />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[18.297px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[18.297px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#1c398e] text-[16px] text-nowrap top-[-2px] whitespace-pre">CT</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-center justify-center left-0 pl-0 pr-[0.016px] py-0 rounded-[10px] size-[64px] top-0" data-name="Container">
      <Text />
    </div>
  );
}

function Heading14() {
  return (
    <div className="absolute h-[24px] left-0 top-[80px] w-[384px]" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-2px] whitespace-pre">CÔNG TY ABC</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="absolute h-[24px] left-0 top-[112px] w-[384px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-2px] whitespace-pre">Giải pháp công nghệ và dịch vụ chuyên nghiệp</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="[grid-area:1_/_1] relative shrink-0" data-name="Container">
      <Container30 />
      <Heading14 />
      <Paragraph18 />
    </div>
  );
}

function Heading15() {
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

function Container32() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <Heading15 />
      <List />
    </div>
  );
}

function Heading16() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-2px] whitespace-pre">Liên Hệ</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-2px] whitespace-pre">Email: info@congtyabc.com</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-2px] whitespace-pre">Điện thoại: (84) 123-456-789</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-2px] whitespace-pre">Địa chỉ: 123 Đường ABC, Hà Nội</p>
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

function Container33() {
  return (
    <div className="[grid-area:1_/_3] content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <Heading16 />
      <List1 />
    </div>
  );
}

function Container34() {
  return (
    <div className="gap-[32px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[163px] relative shrink-0 w-full" data-name="Container">
      <Container31 />
      <Container32 />
      <Container33 />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[607.58px] not-italic text-[#99a1af] text-[16px] text-center text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">© 2025 Công Ty ABC. Bảo lưu mọi quyền.</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="box-border content-stretch flex flex-col h-[49px] items-start pb-0 pt-[25px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#1e2939] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Paragraph19 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#1c398e] h-[340px] relative shrink-0 w-[1280px]" data-name="Footer">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[32px] h-[340px] items-start pb-0 pt-[48px] px-[32px] relative w-[1280px]">
        <Container34 />
        <Container35 />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-gray-50 relative size-full" data-name="App">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[128px] items-start pb-0 pl-[127px] pr-0 pt-[128px] relative size-full">
          <AboutPage />
          <Footer />
        </div>
      </div>
    </div>
  );
}