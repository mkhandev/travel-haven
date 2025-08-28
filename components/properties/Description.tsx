"use client";

import Title from "@/components/properties/Title";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Description = ({ description }: { string }) => {
  const [isFullDescriptionShown, setIsFullDescriptionShown] = useState(false);

  const words = description.split(" ");
  const isLongDescription = words.length > 50;

  const displayedDescription =
    isLongDescription && !isFullDescriptionShown
      ? words.slice(0, 50).join(" ") + "..."
      : description;

  const toggleDescription = () => {
    setIsFullDescriptionShown(!isFullDescriptionShown);
  };

  return (
    <article className="mt-4">
      <Title text="Description" />
      <p className="font-light leading-loose text-muted-foreground">
        {displayedDescription}
      </p>

      {isLongDescription && (
        <Button variant="link" className="pl-0" onClick={toggleDescription}>
          {isFullDescriptionShown ? "Show less" : "Show more"}
        </Button>
      )}
    </article>
  );
};

export default Description;
