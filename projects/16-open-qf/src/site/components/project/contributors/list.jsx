import tw from "tailwind-styled-components";

const Row = tw.div`
  flex
  py-[20px]
  w-full
  border-b
  first:border-y
  border-stroke-border-default
`;

export default function ContributionsList() {
  return (
    <div className="flex flex-col w-full">
      <Row>
        <div className="flex grow">15kU...2i86</div>
        <div className="flex justify-center grow">2023-11-20</div>
        <div className="flex justify-end grow">178.78 DOT</div>
      </Row>
      <Row>
        <div className="flex grow">15kU...2i86</div>
        <div className="flex justify-center grow">2023-11-20</div>
        <div className="flex justify-end grow">178.78 DOT</div>
      </Row>
      <Row>
        <div className="flex grow">15kU...2i86</div>
        <div className="flex justify-center grow">2023-11-20</div>
        <div className="flex justify-end grow">178.78 DOT</div>
      </Row>
      <Row>
        <div className="flex grow">15kU...2i86</div>
        <div className="flex justify-center grow">2023-11-20</div>
        <div className="flex justify-end grow">178.78 DOT</div>
      </Row>
      <Row>
        <div className="flex grow">15kU...2i86</div>
        <div className="flex justify-center grow">2023-11-20</div>
        <div className="flex justify-end grow">178.78 DOT</div>
      </Row>
    </div>
  );
}
