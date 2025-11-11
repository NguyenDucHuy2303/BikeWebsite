function Heading2() {
  return (
    <div className="absolute h-[24px] left-[32px] top-0 w-[1216px]" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[608.58px] not-italic text-[16px] text-center text-neutral-950 text-nowrap top-[-2px] translate-x-[-50%] whitespace-pre">Bạn Đang Tìm Nguồn Cung Xe Điện Uy Tín?</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[48px] left-[304px] top-[40px] w-[672px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[336.2px] not-italic text-[#4a5565] text-[16px] text-center top-[-2px] translate-x-[-50%] w-[662px]">Hãy kết nối với chúng tôi để nhận tư vấn sản phẩm, chính sách giá sỉ và hỗ trợ kỹ thuật toàn diện. Đồng hành cùng hơn 20 đại lý toàn quốc – cùng phát triển thị trường xe điện bền vững!</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#2CA72B] h-[50px] left-[438.27px] rounded-[10px] top-0 w-[170.625px]" data-name="Button">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[32px] not-italic text-[16px] text-nowrap text-white top-[11px] whitespace-pre">Liên Hệ Tư Vấn</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-white h-[50px] left-[624.89px] rounded-[10px] top-0 w-[152.844px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#2CA72B] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[33px] not-italic text-[#2CA72B] text-[16px] text-nowrap top-[11px] whitespace-pre">Xem Tin Tức</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[50px] left-[32px] top-[120px] w-[1216px]" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-gray-50 relative size-full" data-name="Section">
      <Heading2 />
      <Paragraph />
      <Container />
    </div>
  );
}