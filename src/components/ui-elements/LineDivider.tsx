type Props = {
  backgroundColor: string;
  height: number;
};

const LineDivider = ({ backgroundColor, height }: Props) => (
  <hr style={{ backgroundColor: backgroundColor, height: height }} />
);

export default LineDivider;
