import { Link } from "./link";
import { Button } from "./button";
import { Heading } from "./heading";

export default function InlineTextCta() {
  return (
    <div className="w-full bg-black text-white px-6 py-12 md:p-12">
      <div className="flex max-w-screen-standardwrap flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex w-full flex-col items-center justify-center gap-6 border-none text-center md:w-3/5 md:items-start md:justify-start md:text-left">
          <div className="flex flex-col gap-3">
            <Heading as="h5">
              Excepteur sint occaecat cupidatat?
              <br />
              Sed ut perspiciatis unde omnis iste natus error
            </Heading>
          </div>
        </div>
        <div className="flex w-full justify-center md:w-2/5 md:justify-end">
          <Button
            as={Link}
            variant="white"
            href=""
            buttonIconStyle="arrow"
            className="max-w-fit"
          >
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
}
