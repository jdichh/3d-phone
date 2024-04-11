const SectionHeading = ({
  heading
}: {
  heading: string;
}) => {
  return (
    <hgroup id="heading">
      <h2 className="section-heading" id="title">
        {heading}
      </h2>
    </hgroup>
  );
};

export default SectionHeading;
