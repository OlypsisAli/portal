import React from "react";
import Image from "next/image";

type Props = {};

const login = (props: Props) => {
  return (
    <>
      <div>login</div>
      <div>
        <Image
          src="me.png"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
    </>
  );
};
