import { CSSProperties } from "react";
import { ClipLoader } from "react-spinners";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "white",
};

type LoaderProps = {
  loadingState: boolean;
}

export default function Loader({ loadingState }: LoaderProps) {
  return (
    <>
     <ClipLoader
      color={"#ffffff"}
      loading={loadingState}
      cssOverride={override}
      size={22}
      aria-label="Loading Spinner"
      data-testid="loader"
     />
    </>
  )
}
